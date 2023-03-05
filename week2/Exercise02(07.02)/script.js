let nome = "Aldo";
var ruolo = "cliente";
const numero = "3.14";
document.getElementById("concatena").innerHTML =
  nome + ", " + ruolo + ", " + numero;
var pippo = nome + ", " + ruolo + ", " + numero;
concatena2.innerHTML = pippo;

const valoreIniziale = 15;
document.getElementById("iniziale").innerHTML += " " + valoreIniziale;

let somma = valoreIniziale + valoreIniziale;

let incrementa = somma;
incrementa++;

document.getElementById("valore1").innerHTML += " " + somma + ", " + incrementa;
let sottrazione = valoreIniziale - 10;
let decrementa = sottrazione;
decrementa--;
document.getElementById("valore2").innerHTML +=
  " " + sottrazione + ", " + decrementa;
let moltiplicazione = valoreIniziale * 3;
document.getElementById("valore3").innerHTML += " " + moltiplicazione;
let divisione = valoreIniziale / 3;
document.getElementById("valore4").innerHTML += " " + divisione;
let concat = valoreIniziale + " è un numero";
document.getElementById("valore5").innerHTML += " " + concat;
