// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.


// JSnack 3
// Stampa le potenze di 2 fino a 1000.


// Ripeto alcuni consigli del giorno:
//  1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. JavaScript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
//  3. si ma noi cosa vogliamo fare?
//  4. torniamo a scrivere in italiano
//  5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"


// JSnack 1
// soluzione con for
// let somma = 0;
// for (i = 1; i <= 5; i++) {
//     let userNumber = parseInt(prompt("Inserisci un numero"));
//     console.log("Numero inserito: " + userNumber)
//     somma = somma + userNumber;
//     console.log("Somma dei numeri inseriti: "  + somma);
// }

// soluzione con while
// let somma = 0;
// let i = 1;
// while (i <= 5) {
//     let userNumber = parseInt(prompt("Inserisci un numero"));
//     console.log("Numero inserito: " + userNumber)
//     somma = somma + userNumber;
//     console.log("Somma dei numeri inseriti: "  + somma);
//     i++;
// }


// JSnack 2
// let parolaUno = prompt("Inserisci una parola");
// let parolaDue = prompt("Inserisci una parola");

// console.log("La lunghezza della prima parola è: " + parolaUno.length + " caratteri");
// console.log("La lunghezza della seconda parola è: " + parolaDue.length + " caratteri");

// if (parolaUno.length > parolaDue.length) {
//     console.log("La parola più lunga è: " + parolaUno);
// } else if (parolaUno.length < parolaDue.length) {   console.log("La parola più lunga è: " +    parolaDue);
// } else {
//     console.log("Le parole hanno la stessa lunghezza: " + parolaUno + " " + parolaDue);
// }


// JSnack 3
let risultato = 2;
let i = 1;


while (risultato < 1000) {
    console.log("La potenza di 2 alla " + i + "° è: " + risultato);
    risultato = risultato * 2;
    i++;
}