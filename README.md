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

Puente is a fully static site: `index.html`, `styles.css`, `content.js`,
`classroom.js`, `app.js`. No build step, no server, no database.

Student accounts, scores, time-on-lesson, and the teacher roster are stored
in the browser's `localStorage`. That data stays on the device and browser
where it was entered; it does not sync between computers.

Live site: https://puente-sooty.vercel.app

To run locally, open `index.html`.
