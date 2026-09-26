# Puente — inglés paso a paso

English from zero for Spanish speakers, built for a church class. 8 units, ~170 short lessons,
one concept per lesson, every explanation in Spanish. Optional job-English lessons (construction,
cleaning, restaurant, landscaping, childcare/home care, warehouse).

## Curriculum

- `curriculum/map.js` — the plan: every lesson in order with its grammar, vocabulary,
  communication and reading/writing targets, prerequisites, reviews and unit exams. The Teacher
  tab ("Mapa del curso") shows this.
- `curriculum/lessons/<id>.js` — one file per lesson (rules in `curriculum/AUTHORING.md`).
- `curriculum/how.js` — the student's "Cómo funciona Puente" page.
- `node scripts/build-content.js --check <id…|all>` checks lessons (answer keys, Spanish
  explanations, words not taught yet); `node scripts/build-content.js` writes `content.js`.
  Never edit `content.js` by hand.

## Exams, reviews and remediation

- Each lesson ends with a 12-question exam drawn from its bank (18–24 questions). 80% opens the
  next lesson. Below 80% the student sees every missed question corrected (their answer, the right
  one, why) and gets a fresh exam that avoids the last draw.
- Review lessons (20 questions) mix recent lessons, older ones, and the student's concepts
  "en seguimiento"; unit exams (25) cover the unit plus tracked concepts from earlier units.
- A concept goes into tracking when missed and leaves after 4 right in a row with 80% mastery.
- Every exam instance is stored (`exams` table) so it can be resumed and the teacher can see answers.

## WhatsApp

Students register with their WhatsApp number. The teacher desk writes a personalized message
(announcement, homework reminder, encouragement, "we miss you") and opens WhatsApp per student
(`wa.me` links, sent from the teacher's phone); it can also copy all numbers for a broadcast list
and post the message as an in-app announcement.

## How it works

The pages are plain HTML/CSS/JS (`index.html`, `styles.css`, `content.js`, `app.js`,
`classroom.js`). One Vercel serverless function (`api/index.js`) stores everything in
Postgres (Neon, attached through the Vercel dashboard).

- **Students** join a class with the class code, their full name, WhatsApp number and a PIN (stored hashed;
  8 wrong tries lock the account for 10 minutes; the teacher can reset it).
- **Grading happens on the server** (`grading.js` is shared with the browser, which only
  gives instant feedback). Every answer is stored with its grammar topic and question type.
- **Strengths and weaknesses** are computed per lesson and per question type from each
  question's latest answer, with recent answers weighted more (`api/_lib/learning.js`).
- **Practice sets**: after every exam or practice, the server builds a 12-question set from
  the student's weakest two or three areas in lessons they have opened, favouring questions
  they recently missed. The teacher sees them all and can add or delete sets.
- **Teacher desk**: classes and codes, roster, per-student strengths/weaknesses, practice,
  homework, paper grades, PIN resets and CSV export.

Live site: https://puente-sooty.vercel.app

## Configuration (Vercel environment variables)

| Variable | Set by | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | Neon integration | Postgres connection |
| `SESSION_SECRET` | project settings | Signs login cookies (random, 32+ chars) |
| `SETUP_CODE` | project settings | One-time code to create the teacher account |

## Development

```
npm install
npm run dev     # http://localhost:8781, local Postgres (PGlite) in .devdb/, setup code "dev-setup"
npm test        # API, grading and mastery tests against a throwaway database
```
