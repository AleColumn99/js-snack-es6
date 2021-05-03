/*
Esercizio (array, oggetti, map, interpolazione delle stringhe)
Crea un array di oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un’età.
Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
Es:
[
	{ nome: ‘Mario’, cognome: ‘Rossi’, eta: 60 },
	{ nome: ‘Luigi’, cognome: ‘Verdi’, eta: 12 },
	{ nome: ‘Silvia’, cognome: ‘Neri’, eta: 25 },
]
[
	‘Mario Rossi può guidare’,
	‘Luigi Verdi non può guidare’,
	‘Silvia Neri può guidare’,
]
*/

$(document).ready(function() {
  
  const persone = [
    {nome: 'Francesco', cognome: 'Corti', eta: 15},
    {nome: 'Anna', cognome: 'Verdi', eta: 48},
    {nome: 'Luigi', cognome: 'de Benedetti', eta: 18},
    {nome: 'Mario', cognome: 'Colombo', eta: 64},
    {nome: 'Daniele', cognome: 'Brambilla', eta: 30},
    {nome: 'Elisa', cognome: 'Fumagalli', eta: 17},
    {nome: 'Camilla', cognome: 'de Ughi', eta: 36},
  ];

  const patente = persone.map((persona) => {
    let returnString = '';
    if(persona.eta < 18) {
      returnString = persona.nome + ' ' + persona.cognome + ' non può guidare';
    } else {
      returnString = persona.nome + ' ' + persona.cognome + ' può guidare';
    }
    return returnString;
  });

  console.log(patente);

});