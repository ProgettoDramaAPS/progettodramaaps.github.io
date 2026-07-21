# Lessons — Sito Drama APS

Decisioni piccole e reversibili prese in autonomia durante il lavoro, annotate qui
invece di interrompere Paolo per ognuna. Se una scelta va rivista, si cambia qui.

## Fase 1 — scheletro del sito
- Branch principale del repo: `main` (non `master`).
- Deploy GitHub Actions con `withastro/action@v3`, forzando `node-version: 22`
  (di default userebbe Node 20, non più supportato da Astro 7).
- GitHub Pages impostato su "Deploy da GitHub Actions", non da branch.
- Identity git locale del repo: nome "Progetto Drama APS", email
  progettodrama.aps@gmail.com (account associazione, non personale).
- Nome del pacchetto in `package.json`: `progettodramaaps.github.io` (allineato al repo).

## Fase 3 — migrazione iscrizioni
- Il modulo attuale vive nel repo `ProgettoDramaAPS/iscrizioni` (GitHub Pages come
  "project page"), non nel repo del sito nuovo. Le project page oscurano il path
  corrispondente sul sito principale — per questo la nostra `/iscrizioni` non sarà
  visibile finché non disattiviamo quel repo. Decisione da prendere con Paolo,
  non in autonomia, perché è il passaggio più rischioso (URL già in giro).
- Ho copiato testo legale (dichiarazione + informativa privacy) e nomi dei campi
  parola per parola dal modulo attuale, senza parafrasare: sono testi legalmente
  rilevanti, non contenuti discrezionali.
- Cutover eseguito disattivando SOLO le GitHub Pages del repo `iscrizioni`
  (`DELETE repos/.../pages` via gh api), senza cancellare il repo: resta lì come
  backup silenzioso, riattivabile in un minuto in caso di problemi.
