//KM da PERCORRERE//
const userKm = parseInt( prompt ('Inserisci il numero di chilometri che devi percorrere'));
console.log (userKm);

//ETÁ DEL PASSEGGERO//
const userEtà = parseInt( prompt ('Inserisci l\'età del passeggero'));
console.log (userEtà)


//PREZZO DEL BIGLIETTO//
const prezzoIniziale = userKm * 0.21;
let prezzoTotale;

//SCONTI IN BASE ALL'ETÁ//
if (userEtà < 18){
    prezzoTotale = prezzoIniziale - prezzoIniziale * 0.2;
}

if (userEtà > 65) {
    prezzoTotale = prezzoIniziale - prezzoIniziale  * 0.4;
}
else{
    prezzoTotale = prezzoIniziale;
}

const prezzoFinale = prezzoTotale.toFixed(2);
console.log (prezzoFinale);


document.getElementById("prezzo_finale").innerHTML = "Il prezzo del tuo biglietto è: " + prezzoTotale + '€';