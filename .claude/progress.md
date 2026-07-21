# Progress — Sito Drama APS

Stato del lavoro, aggiornato ad ogni sessione. Cosa è stato fatto, cosa è in corso.

## 2026-07-21
- Letti SPEC.md e CLAUDE.md (root e sito).
- Creata cartella `.claude` con progress.md, tasks.md, lessons.md.
- Ricevute risposte di Paolo: Sheet libro soci e URL Apps Script salvati fuori dal
  repo (non in chiaro nei file pubblici); si parte da un progetto Astro pulito.
- Piano approvato (7 fasi, vedi tasks.md).
- **Fase 1 completata**: repo GitHub `ProgettoDramaAPS/progettodramaaps.github.io`
  creato (pubblico), progetto Astro scaffoldato in `sito/`, GitHub Actions per il
  deploy automatico configurato e funzionante, GitHub Pages impostato su "Deploy da
  GitHub Actions". Sito online su https://progettodramaaps.github.io.
- Branch principale: `main`. Identity git locale del repo impostata su
  Progetto Drama APS / progettodrama.aps@gmail.com.
- **Fase 2 completata**: vetrina con 4 pagine (Home, Il progetto, Lo spazio, Contatti),
  contenuti in Markdown in `src/content/pagine/*.md` (testi segnaposto, da scrivere
  con i contenuti veri), layout condiviso con menu e piè di pagina in
  `src/layouts/Layout.astro`. Deploy verificato online.
  Menu ed eventuali link a Eventi/Iscrizioni/Documenti aggiunti solo quando quelle
  pagine esisteranno (fasi successive), per non avere link "morti" nel frattempo.
