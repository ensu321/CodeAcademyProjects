//1. Duotas staciakampiu masyvas:
//const shapeArray = [{a: 10, b: 16}]
/* a. Pavaizduoti figuras ekrane.
   b. Padaryti mygtukus, kurie leidzia scale'inti visus
    staciakampius vienu metu x2, x3, x5 kartus.
   c*. Masyve gali buti ne tik staciakampiai, bet ir rombai,
    trapecijos, trikampiai.
*/
class Staciakampis {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getArea = () => this.a * this.b;
  getPerimeter = () => this.a * 2 + this.b * 2;
}

const shapeArray = [
  new Staciakampis(10, 5),
  new Staciakampis(4, 5),
  new Staciakampis(7, 20),
  new Staciakampis(4, 9),
  new Staciakampis(2, 2),
];

document.getElementById("x2Button").addEventListener("click", () => {
  scale(2);
});

document.getElementById("x3Button").addEventListener("click", () => {
  scale(3);
});

document.getElementById("x5Button").addEventListener("click", () => {
  scale(5);
});

function scale(number) {
  shapeArray.forEach((value) => {
    value.a = value.a * number;
    value.b = value.b * number;
  });
  displayElements();
}

function displayElements() {
  document.getElementById("container").innerHTML = "";
  shapeArray.forEach((staciapampis) => {
    const divElement = document.createElement("div");
    document.getElementById("container").appendChild(divElement);
    divElement.style.width = `${staciapampis.a}px`;
    divElement.style.height = `${staciapampis.b}px`;
    divElement.style.border = "2px solid black";
    divElement.style.background = "red";
  });
}
