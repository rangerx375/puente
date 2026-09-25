# Puente — libro de trabajo

Sequential English textbook for Spanish speakers.

Each lesson: grammar + heavy written practice + a 12-question exam.
The next lesson stays locked until the exam is 80% or better. Retakes allowed.

1. El sustantivo
2. El plural y the
3. Pronombres de sujeto
4. El verbo BE
5. El adjetivo
6. This / that / these / those
7. Presente: I you we they
8. La -s de he/she/it
9. Don’t / doesn’t / do / does
10. Can

## How it works

The pages are plain HTML/CSS/JS (`index.html`, `styles.css`, `content.js`, `app.js`,
`classroom.js`). One Vercel serverless function (`api/index.js`) stores everything in
Postgres (Neon, attached through the Vercel dashboard).

- **Students** join a class with the class code, their name and a PIN (stored hashed;
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
