// Postgres access. Production uses the Neon database Vercel attaches (DATABASE_URL);
// scripts/dev.js swaps in an in-process Postgres (PGlite) so everything can run on a laptop.

const SCHEMA = `
create table if not exists teachers (
  id serial primary key,
  name text not null default 'Profesor',
  pw_hash text not null,
  sv int not null default 1,
  failed_logins int not null default 0,
  locked_until timestamptz,
  created_at timestamptz not null default now()
);
create table if not exists classes (
  id serial primary key,
  teacher_id int not null references teachers(id),
  name text not null,
  code text not null unique,
  archived boolean not null default false,
  created_at timestamptz not null default now()
);
create table if not exists students (
  id serial primary key,
  class_id int not null references classes(id) on delete cascade,
  first text not null,
  last text not null,
  name_key text not null,
  pin_hash text not null,
  sv int not null default 1,
  failed_logins int not null default 0,
  locked_until timestamptz,
  last_seen timestamptz,
  created_at timestamptz not null default now(),
  unique (class_id, name_key)
);
create table if not exists progress (
  student_id int primary key references students(id) on delete cascade,
  state jsonb not null default '{}',
  updated_at timestamptz not null default now()
);
create table if not exists assignments (
  id bigserial primary key,
  student_id int not null references students(id) on delete cascade,
  origin text not null,
  title text not null,
  focus jsonb not null default '[]',
  items jsonb not null,
  status text not null default 'open',
  due date,
  best_percent int,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);
create index if not exists assignments_student_idx on assignments (student_id, status);
create table if not exists attempts (
  id bigserial primary key,
  student_id int not null references students(id) on delete cascade,
  source text not null,
  lesson_id text,
  page int,
  assignment_id bigint references assignments(id) on delete set null,
  percent int not null,
  n_right int not null,
  n_total int not null,
  passed boolean not null,
  res text not null,
  created_at timestamptz not null default now()
);
create index if not exists attempts_student_idx on attempts (student_id, created_at desc);
create table if not exists responses (
  id bigserial primary key,
  attempt_id bigint not null references attempts(id) on delete cascade,
  student_id int not null references students(id) on delete cascade,
  item_ref text not null,
  topic text not null,
  skill text not null,
  correct boolean not null,
  answer text,
  created_at timestamptz not null default now()
);
create table if not exists exams (
  id bigserial primary key,
  student_id int not null references students(id) on delete cascade,
  lesson_id text not null,
  kind text not null,
  items jsonb not null,
  created_at timestamptz not null default now(),
  submitted_at timestamptz,
  percent int,
  results jsonb
);
create index if not exists exams_student_idx on exams (student_id, lesson_id, created_at desc);
create table if not exists announcements (
  id bigserial primary key,
  class_id int not null references classes(id) on delete cascade,
  body text not null,
  created_at timestamptz not null default now()
);
alter table students add column if not exists phone text;
create index if not exists responses_student_idx on responses (student_id, created_at desc);
create table if not exists homework (
  class_id int not null references classes(id) on delete cascade,
  lesson_id text not null,
  due date,
  primary key (class_id, lesson_id)
);
create table if not exists paper_grades (
  student_id int not null references students(id) on delete cascade,
  lesson_id text not null,
  grade text not null,
  primary key (student_id, lesson_id)
);
create table if not exists class_exams (
  id serial primary key,
  class_id int not null references classes(id) on delete cascade,
  exam_date text not null,
  name text not null,
  kind text not null,
  key text not null,
  created_at timestamptz not null default now(),
  unique (class_id, key)
);
create table if not exists class_exam_scores (
  exam_id int not null references class_exams(id) on delete cascade,
  student_id int not null references students(id) on delete cascade,
  percent numeric(5,2) not null,
  updated_at timestamptz not null default now(),
  primary key (exam_id, student_id)
);
alter table students add column if not exists graded boolean not null default true;
alter table students add column if not exists removed_at timestamptz;
alter table classes add column if not exists closed boolean not null default false;
alter table students add column if not exists tester boolean not null default false;
alter table class_exams add column if not exists counts_zero boolean not null default false;
alter table class_exams add column if not exists due timestamptz;
create table if not exists weekly_exams (
  id serial primary key,
  class_id int not null references classes(id) on delete cascade,
  monday text not null,
  lessons_from int not null,
  lessons_to int not null,
  opens_at timestamptz not null,
  closes_at timestamptz not null,
  items jsonb not null,
  test boolean not null default false,
  class_exam_id int references class_exams(id) on delete set null,
  closed_done boolean not null default false,
  created_at timestamptz not null default now()
);
create unique index if not exists weekly_exams_real_idx on weekly_exams (class_id, monday) where not test;
create table if not exists weekly_attempts (
  id serial primary key,
  exam_id int not null references weekly_exams(id) on delete cascade,
  student_id int not null references students(id) on delete cascade,
  token text not null,
  started_at timestamptz not null default now(),
  deadline timestamptz not null,
  answers jsonb not null default '{}',
  last_beat timestamptz,
  submitted_at timestamptz,
  reason text,
  score numeric(5,1),
  results jsonb,
  breakdown jsonb,
  unique (exam_id, student_id)
);
create table if not exists weekly_reopens (
  exam_id int not null references weekly_exams(id) on delete cascade,
  student_id int not null references students(id) on delete cascade,
  until timestamptz not null,
  primary key (exam_id, student_id)
);
create table if not exists cron_log (
  job text primary key,
  done_at timestamptz not null default now(),
  info text
);
`;

let ready = null;

function connect() {
  if (global.__PUENTE_DEV_DB) return global.__PUENTE_DEV_DB(SCHEMA);
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  const { Pool, types } = require("pg");
  // bigint ids come back as strings by default; every id here fits comfortably in a JS number.
  types.setTypeParser(20, (v) => Number(v));
  const pool = new Pool({ connectionString: url, max: 3, idleTimeoutMillis: 10000 });
  const q = (text, params) => pool.query(text, params);
  const tx = async (fn) => {
    const c = await pool.connect();
    try {
      await c.query("begin");
      const out = await fn((text, params) => c.query(text, params));
      await c.query("commit");
      return out;
    } catch (e) {
      await c.query("rollback").catch(() => {});
      throw e;
    } finally {
      c.release();
    }
  };
  return q(SCHEMA).then(() => ({ q, tx }));
}

function db() {
  if (!ready) {
    ready = Promise.resolve().then(connect);
    ready.catch(() => { ready = null; });
  }
  return ready;
}

module.exports = { db, SCHEMA };
