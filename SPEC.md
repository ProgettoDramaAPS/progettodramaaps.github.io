# SPEC — Sito Progetto Drama APS

## Obiettivo

Un sito unico per Progetto Drama APS su GitHub Pages, che sostituisce e assorbe
l'attuale modulo iscrizioni, aggiunge una vetrina istituzionale e una sezione eventi
con prenotazione. Serve a due pubblici: il quartiere (iscriversi, sapere cosa succede
in Bocciofila) e il Municipio XI (verificare che l'associazione esiste, ha uno statuto
e fa cose).

Amministratore unico: Paolo Caprarelli. Non è uno sviluppatore.

## Cosa fa la prima versione (e basta)

1. **Vetrina** — Home, Il progetto, Lo spazio, Contatti. Contenuti in Markdown.
2. **Iscrizione soci** — il modulo attuale, migrato dentro il repo, funzionante
   esattamente come oggi: stesso Google Sheet, stesso endpoint Apps Script, URL `/iscrizioni`.
3. **Eventi** — un file Markdown per evento. Pagina elenco (prossimi + archivio)
   e pagina singolo evento.
4. **Prenotazione evento** — modulo separato dalle iscrizioni: Sheet proprio,
   endpoint proprio, nessun incrocio di dati con il libro soci.
5. **Documenti** — pagina con Statuto, Atto costitutivo e Informativa privacy in PDF.

Deploy automatico: modifica su GitHub → sito online in pochi minuti, senza caricare nulla a mano.

## Cosa NON fa (per ora)

- Area riservata soci con login
- Pagamenti sul sito (resta PayPal link + contanti)
- Newsletter
- Blog / magazine
- Dominio proprio (si resta su `progettodramaaps.github.io`, il dominio arriva dopo)
- Pubblicazione bilanci

## Input / Output

**Input**
- Contenuti statici: file Markdown scritti da Paolo in `src/content/`
- Iscrizioni soci: dati inseriti dal pubblico nel modulo `/iscrizioni`
- Prenotazioni evento: dati inseriti dal pubblico nel modulo di ogni evento

**Output**
- Sito statico pubblicato su `https://progettodramaaps.github.io`
- Riga nel Google Sheet libro soci (quello esistente, invariato)
- Riga nel Google Sheet prenotazioni eventi (nuovo)

## Stack

| Pezzo | Scelta | Perché |
|---|---|---|
| Sito | **Astro** | I contenuti stanno in Markdown separati dalla grafica: la UI si potrà rifare da zero senza toccare i testi |
| Hosting | **GitHub Pages** | Gratuito, già in uso, repo di proprietà dell'associazione |
| Deploy | **GitHub Actions** | Push → build → online, nessun passaggio manuale |
| Backend dati | **Google Apps Script + Google Sheets** | Già in uso, già dichiarato nell'informativa privacy, gratuito, il direttivo sa leggere un foglio |
| Gestione Apps Script | **clasp** (`@google/clasp`, ufficiale Google) | Permette a Claude Code di scrivere e ridistribuire il backend senza passare dall'editor online |
| Statistiche | **GoatCounter** | Nessun cookie → nessun banner → nessuna modifica sostanziale all'informativa |

Nessun altro servizio esterno. Niente database, niente Supabase, niente Airtable.

## Architettura dei moduli

**Separati (dati e logica):**
- Iscrizione soci → Sheet A → endpoint Apps Script A
- Prenotazione evento → Sheet B → endpoint Apps Script B

Nessuna comunicazione tra i due. Un socio che prenota un evento compila due moduli
distinti e finisce in due tabelle distinte.

**Condivisi (solo aspetto):**
Una libreria unica di componenti di interfaccia — campo testo, campo email, campo data,
checkbox privacy, pulsante invio, messaggio di errore, messaggio di successo.
Regola: **stesso mattoncino visivo per tipologia di informazione.** Un campo email si
comporta e si vede allo stesso modo ovunque compaia nel sito.

## Dati e privacy

Ci sono dati personali, inclusi codici fiscali (libro soci). Restano dentro l'account
Google dell'associazione (`progettodrama.aps@gmail.com`). Non escono verso altri fornitori.

**Da segnalare:** l'informativa attualmente pubblicata copre solo l'iscrizione soci.
L'aggiunta delle prenotazioni evento è un trattamento nuovo e va aggiunta al testo.
Non è un lavoro da Claude Code — è una decisione di Paolo/direttivo, ma va fatta
prima di pubblicare il primo modulo evento.

## Vincoli non negoziabili

1. **Il deployment Apps Script esistente si aggiorna, non si ricrea.** Creare un nuovo
   deployment cambia l'URL e il modulo iscrizioni smette di scrivere sul Sheet senza
   errore visibile. Perdita silenziosa di iscrizioni.
2. **L'URL `/iscrizioni` non cambia.** È già in giro su WhatsApp e Instagram.
3. **Il Google Sheet del libro soci non si tocca**: né struttura, né nomi colonna,
   né contenuto.
4. **Tono dei testi:** Drama comunica come progetto culturale, mai come ente pubblico
   o servizio sociale. Vietati: "inclusione sociale", "aggregazione giovanile",
   "contrasto alla solitudine", "valorizzazione degli anziani", "empowerment",
   "community building", "spazio multifunzionale", "attività laboratoriali",
   "progettualità", "stakeholder".

## Come capisco che funziona

1. Apro `progettodramaaps.github.io/iscrizioni`, compilo il modulo con dati finti,
   e la riga compare nel Sheet libro soci esistente — nella stessa forma di sempre.
2. Aggiungo un file `.md` in `src/content/eventi/`, faccio push, e dopo qualche minuto
   l'evento è online nella pagina elenco e ha la sua pagina dedicata, senza che io
   abbia scritto una riga di HTML.
3. Compilo il modulo di prenotazione di quell'evento e la riga compare nel Sheet
   prenotazioni — che è un foglio diverso da quello dei soci.
4. Il sito si vede bene da telefono.

## Casi limite noti

- **Google Sheet irraggiungibile o Apps Script in errore:** il modulo deve mostrare
  un messaggio chiaro all'utente, non fallire in silenzio. Chi compila deve capire
  se il dato è arrivato o no.
- **Doppia iscrizione:** la stessa persona si iscrive due volte. Per ora si accetta
  e si gestisce a mano sul foglio — non serve deduplica automatica.
- **Evento senza data o senza immagine:** il sito deve costruirsi lo stesso, non
  rompersi. Campi mancanti = sezione che semplicemente non compare.
- **Evento passato:** deve uscire da "prossimi" e finire in archivio da solo,
  in base alla data. Nessun intervento manuale.
- **Modulo prenotazione di un evento già passato:** va chiuso automaticamente.
