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
