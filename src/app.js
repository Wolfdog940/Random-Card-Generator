/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function carta() {
    let arrayNumeros = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Q", "J", "K"];

    let arrayCartas = ["♦", "♥", "♠", "♣"];

    let carta = arrayNumeros[random(arrayNumeros.length)];

    let palo = arrayCartas[random(arrayCartas.length)];

    if (palo == "♦" || palo == "♥")
      document.querySelector(".top").style.color = "red";
    else document.querySelector(".top").style.color = "black";

    if (palo == "♦" || palo == "♥")
      document.querySelector(".button").style.color = "red";
    else document.querySelector(".button").style.color = "black";

    if (palo == "♦" || palo == "♥")
      document.querySelector(".number").style.color = "red";
    else document.querySelector(".number").style.color = "black";

    if (carta == "A") carta = palo;

    document.querySelector(".top").innerHTML = palo;
    document.querySelector(".number").innerHTML = carta;
    document.querySelector(".button").innerHTML = palo;

    return;
  }

  carta();

  function random(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
  }

  let botonNext = document.querySelector("#next-card");
  botonNext.addEventListener("click", function() {
    carta();
  });

  let save = document.getElementById("save");

  save.addEventListener("click", function() {
    let carta = document.getElementById("carta");
    let largo = document.getElementById("height").value;
    let ancho = document.querySelector("#width").value;
    carta.style.width = ancho + "px";
    carta.style.height = largo + "px";
  });
};
