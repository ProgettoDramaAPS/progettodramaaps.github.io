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
- **Scoperta importante**: il modulo iscrizioni attuale NON vive nel repo
  `progettodramaaps.github.io` (che non esisteva prima di oggi), ma in un repo
  separato `ProgettoDramaAPS/iscrizioni`, pubblicato come "project page" su
  GitHub Pages — per questo risulta raggiungibile su
  https://progettodramaaps.github.io/iscrizioni/. Le project page "oscurano" il
  path corrispondente del sito principale: finché quel repo resta pubblicato,
  la nostra pagina /iscrizioni non sarà raggiungibile in produzione, anche se
  esiste già nel nostro codice.
- **Fase 3 (in corso)**: ricostruita la pagina `/iscrizioni` dentro il nuovo sito,
  campo per campo identica a quella attuale (stessi name, stesso endpoint Apps
  Script, stesso testo di dichiarazione e stessa informativa privacy verbatim),
  usando componenti condivisi in `src/components/form/`. Non abbiamo toccato
  l'Apps Script: endpoint invariato. La pagina è nel repo ma NON ancora
  raggiungibile in produzione (oscurata dal vecchio repo `iscrizioni`, vedi sopra).
  Test in locale confermato funzionante da Paolo.
- **Cutover completato**: disattivata la pubblicazione (GitHub Pages) del repo
  `ProgettoDramaAPS/iscrizioni` (repo non cancellato, solo Pages spenta — reversibile).
  Verificato che https://progettodramaaps.github.io/iscrizioni/ ora serve la pagina
  nuova (status 200, stessi campi, stesso endpoint). **Fase 3 completata.**
  Paolo ha confermato la verifica reale (dati finti, riga comparsa nel Sheet).
- **Fase 4 completata**: collection `eventi` (un file Markdown per evento, con
  titolo, data/luogo/immagine opzionali), pagina elenco `/eventi` (prossimi +
  archivio, ordinati e separati automaticamente in base alla data — un evento
  senza data resta tra i prossimi finché non gliene si dà una) e pagina singola
  `/eventi/<slug>`. Aggiunti 3 eventi di esempio (uno futuro, uno passato, uno
  senza data) per mostrare i tre casi. "Eventi" aggiunto al menu, link dalla Home.
  Paolo ha modificato lui stesso un evento e ne ha aggiunto uno nuovo, con successo
  (dopo aver imparato i comandi git add/commit/push — vedi .claude/come-pubblicare.md).
- **Fase 5 completata**: prenotazione evento, backend nuovo e separato da quello
  iscrizioni (Sheet ID `1IX6Es-TGWN31x1gVIdw9m482YZSniflsWLBRlekHmuc`, Apps Script
  proprio in `sito/apps-script/prenotazioni/`, deployment funzionante creato
  dall'editor Apps Script — vedi memoria esterna e lessons.md per i dettagli e per
  il problema clasp incontrato). Un evento diventa prenotabile con
  `prenotabile: true` nel frontmatter; `postiMax` opzionale attiva il controllo
  posti (via richiesta GET all'endpoint, lato client, prima di mostrare il modulo).
  Prenotazioni chiuse da sole per eventi passati. Testato end-to-end con dati
  finti (scrittura e lettura confermate).
  **Testo di consenso privacy nel modulo segnato come provvisorio**: da NON
  rendere pubblico su un evento reale finché il direttivo non aggiorna
  l'informativa privacy generale (vedi SPEC.md, sezione "Da segnalare").
