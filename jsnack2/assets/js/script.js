/*
Esercizio (array, oggetti, filter)
Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe. Es: 
[
	{ nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
	{ nome: ‘cane’, ’famiglia: ‘canidi’, classe: ‘mammiferi’ },
	{ nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
Crea un nuovo array con la lista dei mammiferi.
*/

//NOMI DELLE FAMIGLIE A CASO NON HO VOGLIA DI CERCARE QUELLI VERI

$(document).ready(function() {

  const animali = [
    {nome: 'gatto', famiglia: 'felini', classe: 'mammiferi'},
    {nome: 'oca', famiglia: 'paperidi', classe: 'uccelli'},
    {nome: 'cane', famiglia: 'canidi', classe: 'mammiferi'},
    {nome: 'coccodrillo', famiglia: 'coccodrillidi', classe: 'rettili'},
    {nome: 'ragno', famiglia: 'aracnidi', classe: 'insetti'},
    {nome: 'pinguino', famiglia: 'pinguinidi', classe: 'uccelli'},
    {nome: 'criceto', famiglia: 'cricetidi', classe: 'mammiferi'}
  ];
  
  const mammiferi = animali.filter((animale) => {
    if(animale.classe === 'mammiferi') {
      return true;
    }
  });

  console.log(mammiferi);

});