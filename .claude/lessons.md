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

## Fase 4 — eventi
- Un evento senza data resta sempre tra i "prossimi" (non lo sappiamo classificare
  come passato). Non è un bug: appena si aggiunge la data, si sposta da solo.
- Il sito è statico: un evento passa da "prossimi" ad "archivio" solo al prossimo
  build/pubblicazione (push), non da solo a mezzanotte. Per ora va bene così: Paolo
  pubblica comunque spesso. Se in futuro servisse l'aggiornamento automatico anche
  senza push, servirebbe un'azione GitHub schedulata — non richiesta ora, da
  proporre solo se serve davvero.

## Fase 5 — prenotazione evento
- **Bug scoperto con clasp**: un deployment Apps Script creato via `clasp create-deployment`
  (API), pur con `"webapp": {"access": "ANYONE_ANONYMOUS", ...}` corretto nel manifest
  `appsscript.json`, risultava comunque "Accesso negato" per chi non è loggato — anche
  dopo redeploy, anche col manifest confermato giusto nell'interfaccia. Soluzione che ha
  funzionato: creare il deployment manualmente dall'editor Apps Script (Deploy > Nuova
  implementazione > Web app > Chiunque). Il deployment "buono" da usare è quello con
  quell'origine; quello creato da clasp è stato cancellato. **Non fidarsi delle
  implementazioni create da clasp per l'accesso pubblico: verificare sempre con una
  richiesta anonima (incognito o curl) prima di considerarle pronte.**
- Il conteggio posti funziona con una richiesta GET normale (fetch, mode cors) dal
  browser verso l'endpoint Apps Script: il redirect automatico verso
  script.googleusercontent.com include `Access-Control-Allow-Origin: *`, quindi la
  risposta è leggibile. L'invio (POST) resta invece in `mode: 'no-cors'`, senza
  poter leggere la risposta — stessa scelta già fatta per le iscrizioni.
- Codice del backend versionato in `sito/apps-script/prenotazioni/` (clasp), a
  differenza del backend iscrizioni che non ha mai avuto un sorgente tracciato
  da nessuna parte (probabilmente scritto a mano nell'editor online).
- Il testo di consenso privacy nel modulo prenotazione è VOLUTAMENTE segnato come
  "provvisorio, non pubblicare": non è un contenuto che decido io, va scritto dal
  direttivo e aggiunto all'informativa generale prima che un evento reale abbia
  `prenotabile: true`.
