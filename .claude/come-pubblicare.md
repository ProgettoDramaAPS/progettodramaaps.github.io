# Come pubblicare le tue modifiche

Ogni volta che modifichi o aggiungi un file (es. un evento in `src/content/eventi/`,
o un testo in `src/content/pagine/`), quel cambiamento resta solo sul tuo computer
finché non lo "spedisci" a GitHub. Il sito online si aggiorna SOLO dopo questo invio.

Apri il terminale nella cartella `sito` e lancia questi tre comandi, uno alla volta,
premendo Invio dopo ognuno:

```
git add -A
```
Prepara tutte le modifiche che hai fatto (file nuovi, modificati, o cancellati).

```
git commit -m "descrizione di cosa hai cambiato"
```
Le "mette in scatola" con una breve descrizione (scrivila tu, tra le virgolette,
es. "aggiungo evento torneo di bocce").

```
git push
```
Le spedisce a GitHub. Da qui parte da sola la pubblicazione: dopo circa un minuto
il sito online è aggiornato.

**Come controlli che sia andato tutto bene:** vai su
https://github.com/ProgettoDramaAPS/progettodramaaps.github.io/actions — l'ultima
riga in cima deve avere un segno di spunta verde. Se è rossa, qualcosa non ha
funzionato: fammelo sapere e controllo io cos'è successo.
