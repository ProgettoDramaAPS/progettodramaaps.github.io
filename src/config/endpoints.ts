// Endpoint Apps Script dei moduli del sito.
// Iscrizioni e prenotazioni sono flussi separati: Sheet diversi, endpoint diversi,
// nessuno scambio di dati fra i due. Non toccare questi URL senza aver letto
// sito/.claude/lessons.md (Fasi 3 e 5): un deployment ricreato invece che
// aggiornato smette di ricevere dati senza errore visibile.

export const ISCRIZIONI_ENDPOINT_URL =
  'https://script.google.com/macros/s/AKfycbxeEmlg1ZiD8Y98rugN0vFRqPzkiXn9CLXRjoLmc1v4vHb8lRbeHa_iNBzmumLQdkzRPg/exec';

export const PRENOTAZIONI_ENDPOINT_URL =
  'https://script.google.com/macros/s/AKfycbwB22t9q5RRFc5wxaHwNXKOBUTwr_jp-t1JVgVpwTUm3ElXbGdtYuf_QG0F6yAHRVke/exec';
