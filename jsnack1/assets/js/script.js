/*
Esercizio (map) -> si potrebbe ottimizzare con una funzione separata per il capitalize
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

$(document).ready(function() {
  
  const names = ['ALEssandro', 'francesco', 'ANNA', 'gioVANni', 'lUCA', 'mariO'];
  console.log(names);
  
  const capitalizedNames = names.map(name => capitalize(name));

  console.log(capitalizedNames);

});

function capitalize(word) {
  let uppercase = word.charAt(0).toUpperCase();
  let lowercase = word.slice(1).toLowerCase();
  let newWord = uppercase + lowercase;
  return newWord;
}

