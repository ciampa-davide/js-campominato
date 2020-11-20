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
var level ;
var maxNumber;

level= parseInt(prompt("scegli i livello di difficolta: "));
//BONUS
switch (level) {
  case "2" :

    maxNumber = 50;
    break;

  case "1":
    maxNumber = 80;
    break;
  default:
  maxNumber= 100;
}

while (bombs.length < 16) {
  // Genero bomba casuale
  var bomb = Math.floor(Math.random() * maxNumber) + 1;
  var elementoPresente = checkDuplicato (bomb, bombs);
  if (elementoPresente == false) {
    bombs.push(bomb);
  }
}

console.log("bombe:", bombs);
console.log("numeri inseriti: ", user);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var haveULost = false;
while (user.length < (maxNumber - 16) && haveULost == false){

  var point = parseInt(prompt("inserisci il numero: "));

  var pointInside = checkDuplicato(point, user);

  var checkGame = checkDuplicato(point , bombs);

  console.log(checkGame);

  if (checkGame == true){

    alert("hai perso");

    haveULost = true;

  }else if (pointInside == false) {

    alert("inserisci un altro numero");
    user.push(point);

  }
}

//_----------------------------------------------------------------------------------------------------------------------



function checkDuplicato(point, user) {
  var risultato = false;
  for(var i = 0; i < user.length; i++) {
    if (point == user[i]) {
      risultato = true;
    }
  }
  return risultato;
}


// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua
