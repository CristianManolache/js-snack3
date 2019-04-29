// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while -

// VERSIONE IF
var somma;
for (var i = 0; i < 5; i++) {
  var utente = parseInt(prompt('Inserisci un numero'));
  somma += utente;
}
console.log(somma);

// Versione while

var somma, i;

somma = 0;
i = 0;
while(i < 5) {
  var numero = parseInt(prompt('Inserisci un numero'));
  somma += numero;
  i++;
}

console.log('La somma totale e' + somma);
