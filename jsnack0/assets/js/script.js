/*
Crea un array composto da 10 oggetti che rappresentano un’automobile.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: inserisci nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

$(document).ready(function() {
  
  const cars = [
    {
      marca: 'Fiat',
      modello: 'Panda',
      alimentazione: 'Benzina'
    },
    {
      marca: 'BMW',
      modello: 'M5',
      alimentazione: 'Benzina'
    },
    {
      marca: 'Audi',
      modello: 'E-Tron',
      alimentazione: 'Elettrica'
    },
    {
      marca: 'Mercedes',
      modello: 'Classe E',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Dacia',
      modello: 'Duster',
      alimentazione: 'GPL'
    },
    {
      marca: 'Ford',
      modello: 'Focus',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Alfa Romeo',
      modello: 'Stelvio',
      alimentazione: 'Diesel'
    },
    {
      marca: 'Fiat',
      modello: 'Doblò',
      alimentazione: 'Metano'
    },
    {
      marca: 'Tesla',
      modello: 'Model S',
      alimentazione: 'Elettrica'
    },
    {
      marca: 'Ferrari',
      modello: '488 Pista',
      alimentazione: 'Benzina'
    }
  ];

  const arrBenzina = cars.filter((car) => {
    if(car.alimentazione === 'benzina') {
      return true;
    }
  });

  const arrDiesel = cars.filter((car) => {
    if(car.alimentazione === 'diesel') {
      return true;
    }
  });
  
  const arrAltri = cars.filter((car) => {
    if(car.alimentazione != 'benzina' && car.alimentazione != 'diesel') {
      return true;
    }
  });

  console.log(arrBenzina);
  console.log(arrDiesel);
  console.log(arrAltri);

});