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
      document.querySelector("#numer").style.color = "red";
    else document.querySelector("#numer").style.color = "black";

    if (carta == "A") carta = palo;

    document.querySelector(".top").innerHTML = palo;
    document.querySelector("#numer").innerHTML = carta;
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
    let card = document.getElementById("carta");
    let largo = document.getElementById("height").value;
    let ancho = document.querySelector("#width").value;
    card.style.width = ancho + "px";
    card.style.height = largo + "px";

    if (ancho + "px" > "250px" && largo + "px" > "250px") {
      card.querySelector(".top").style.fontSize = "1cm";
      card.querySelector(".midle").style.fontSize = "5cm";
      card.querySelector(".button").style.fontSize = "1cm";
    } else if (ancho + "px" < "250px" || largo + "px" < "250px") {
      card.querySelector(".top").style.fontSize = "10px";
      card.querySelector(".midle").style.fontSize = "10px";
      card.querySelector(".button").style.fontSize = "10px";
    } else if (ancho + "px" < "50px" || largo + "px" < "50px") {
      card.querySelector(".top").style.fontSize = "5px";
      card.querySelector(".midle").style.fontSize = "5px";
      card.querySelector(".button").style.fontSize = "5px";
    } else if (ancho + "px" < "25px" || largo + "px" < "25px") {
      card.querySelector(".top").style.fontSize = "4px";
      card.querySelector(".midle").style.fontSize = "4px";
      card.querySelector(".button").style.fontSize = "4px";
    }
  });
};
