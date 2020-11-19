// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


/*
for (var i = 0; i < 16; i++) {
  // Genero bomba casuale
  var bomb = Math.floor(Math.random() * 100) + 1;

  var elementoPresente = checkDuplicati(bomb, bombs);
  if (elementoPresente == false) {
    bombs.push(bomb);
  } else {
    i--;
  }
}*/
// Il computer deve generare 16 numeri casuali tra 1 e 100.

var bombs = [];
var user = [];

while (bombs.length < 16) {
  // Genero bomba casuale
  var bomb = Math.floor(Math.random() * 100) + 1;
  var elementoPresente = checkDuplicati(bomb, bombs);
  if (elementoPresente == false) {
    bombs.push(bomb);
  }
}

console.log(bombs);
console.log(user);

function checkDuplicati(bomb, bombs) {
  var risultato = false;
  for(var i = 0; i < bombs.length; i++) {
    if (bomb == bombs[i]) {
      risultato = true;
    }
  }
  return risultato;
}
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

while (user.length < 5){
  var point = parseInt(prompt("inserisci il numero: "));
  var pointInside = checkDuplicato(point, user);
  var checkUsernNumber = checkBomb(user, bombs);
  if (checkUsernNumber == false) {
    alert("hai perso!");
  }

  if (pointInside == false) {
    user.push(point);
  }
}


function checkDuplicato(point, user) {
  var risultato = false;
  for(var i = 0; i < user.length; i++) {
    if (point == user[i]) {
      risultato = true;
    }
  }
  return risultato;
}

function checkBomb(user, bombs){
  var risultato = false;
  for (var i = 0; i = user.length; i++){
    if (point == bombs){
      risultato = true;
    }
  }
  return risultato;
}

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua
