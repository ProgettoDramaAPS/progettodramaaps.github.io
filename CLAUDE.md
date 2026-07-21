# CLAUDE.md — Sito Drama APS

Le regole generali dell'associazione (tono, credenziali, come lavorare con Paolo) stanno
nel CLAUDE.md della cartella superiore. Qui solo ciò che riguarda il sito.

## Cos'è
Il sito di Progetto Drama APS su GitHub Pages: vetrina, iscrizione soci (già esistente,
da migrare) ed eventi con prenotazione.

## Stack
Astro (contenuti in Markdown) · GitHub Pages · GitHub Actions per il deploy ·
Google Apps Script + Google Sheets come backend dati · clasp per gestire Apps Script ·
GoatCounter per le statistiche.

Repo: `progettodramaaps.github.io` — sito pubblicato su `https://progettodramaaps.github.io`

## Come si lancia e si testa
- Sviluppo locale: `npm run dev` → si apre su `http://localhost:4321`
- Build di verifica: `npm run build`
- Pubblicazione: `git push` sul branch principale → GitHub Actions fa il resto

## Vincoli assoluti (non aggirare mai)
- **Apps Script: aggiornare sempre il deployment esistente, MAI crearne uno nuovo.**
  Un nuovo deployment cambia l'URL e le iscrizioni smettono di arrivare senza errore visibile.
- L'URL `/iscrizioni` non cambia mai: è già in circolazione su WhatsApp e Instagram.
- Il Google Sheet del libro soci non si tocca: struttura, colonne e contenuto restano identici.
- Iscrizione soci e prenotazione evento sono flussi **separati**: Sheet separati,
  endpoint separati, nessuno scambio di dati.
- I componenti di interfaccia sono invece **condivisi**: stesso mattoncino visivo per
  tipologia di informazione (un campo email è sempre lo stesso componente, ovunque compaia).
- Prima di toccare qualsiasi cosa legata alle iscrizioni esistenti, avvisa.

## Decisioni già prese (non ridiscutere)
- Astro, non Jekyll né HTML a mano
- Google Sheets come archivio dati, nessun database
- Nessuna area riservata, nessun pagamento sul sito, nessuna newsletter in questa versione
- Nessun dominio proprio per ora: si resta su `progettodramaaps.github.io`
- GoatCounter, quindi niente cookie banner

## A cosa sto lavorando ora
- Prima sessione: setup del repo e migrazione del modulo iscrizioni.

## Note tecniche Astro
- Per avviare il server di sviluppo in background: `astro dev --background`.
  Si gestisce con `astro dev stop`, `astro dev status`, `astro dev logs`.
- Documentazione: https://docs.astro.build
