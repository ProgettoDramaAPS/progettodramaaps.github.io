// Backend delle prenotazioni evento — Progetto Drama APS.
// Sheet e endpoint separati dal libro soci: nessuno scambio di dati fra i due.

var NOME_FOGLIO = 'Prenotazioni';

function ottieniFoglio() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var foglio = ss.getSheetByName(NOME_FOGLIO);
  if (!foglio) {
    foglio = ss.insertSheet(NOME_FOGLIO);
    foglio.appendRow([
      'Data e ora',
      'Evento (slug)',
      'Titolo evento',
      'Nome e cognome',
      'Email',
      'Persone',
      'Consenso privacy',
      'Versione informativa',
    ]);
  }
  return foglio;
}

function doPost(e) {
  var p = e.parameter;
  var foglio = ottieniFoglio();
  foglio.appendRow([
    new Date(),
    p.evento || '',
    p.eventoTitolo || '',
    p.nome || '',
    p.email || '',
    p.persone || '',
    p.consenso || '',
    p.informativaVersione || '',
  ]);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(
    ContentService.MimeType.JSON
  );
}

// Conta quante persone sono già prenotate per un evento, per il controllo posti.
function doGet(e) {
  var azione = e.parameter.azione;

  if (azione === 'conteggio') {
    var evento = e.parameter.evento;
    var foglio = ottieniFoglio();
    var dati = foglio.getDataRange().getValues();
    var totalePersone = 0;

    for (var i = 1; i < dati.length; i++) {
      if (dati[i][1] === evento) {
        totalePersone += Number(dati[i][5]) || 0;
      }
    }

    return ContentService.createTextOutput(
      JSON.stringify({ evento: evento, prenotati: totalePersone })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({ errore: 'azione sconosciuta' })).setMimeType(
    ContentService.MimeType.JSON
  );
}
