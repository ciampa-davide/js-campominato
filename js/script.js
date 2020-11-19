// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.




// Il computer deve generare 16 numeri casuali tra 1 e 100.

var bombs = [];
var user = [];


for (var i = 0; i < 16 ; i++) {

  var numbers = Math.floor(Math.random() * 100) ;
  bombs.push(numbers);

}

console.log(bombs);



//------------------------------------------------------------



// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.


for (j = 0; j < 2; j++) {

  var userNumbers = parseInt(prompt("inserisci il numero: "))
  user.push(userNumbers);

}
console.log(user);


if (bombs == user) {

  console.log("hai preso una bomba");

}
