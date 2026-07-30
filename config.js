const config = {
  // Numero totale di livelli presenti nella cartella /images (layer01.png, layer02.png, ...)
  layers: 6,

  // Distanza massima (in metri) a cui arriverà l'ultimo livello quando la pagina è aperta
  maxDepth: 0.25,

  // Durata dell'animazione in millisecondi
  openDuration: 5000,   // 5 secondi per aprirsi
  pauseDuration: 2500,  // (Riservato per i prossimi step)
  closeDuration: 5000,  // 5 secondi per richiudersi

  // Tipo di accelerazione/frenata dell'animazione
  easing: "easeInOutQuad"
};