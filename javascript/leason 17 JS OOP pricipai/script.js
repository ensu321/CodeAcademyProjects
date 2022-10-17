//1. Duotas staciakampiu masyvas:
//const shapeArray = [{a: 10, b: 16}]
/* a. Pavaizduoti figuras ekrane.
   b. Padaryti mygtukus, kurie leidzia scale'inti visus
    staciakampius vienu metu x2, x3, x5 kartus.
   c*. Masyve gali buti ne tik staciakampiai, bet ir rombai,
    trapecijos, trikampiai.
*/
// class Staciakampis {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   getArea = () => this.a * this.b;
//   getPerimeter = () => this.a * 2 + this.b * 2;
// }

// const shapeArray = [
//   new Staciakampis(10, 5),
//   new Staciakampis(4, 5),
//   new Staciakampis(7, 20),
//   new Staciakampis(4, 9),
//   new Staciakampis(2, 2),
// ];

// document.getElementById("x2Button").addEventListener("click", () => {
//   scale(2);
// });

// document.getElementById("x3Button").addEventListener("click", () => {
//   scale(3);
// });

// document.getElementById("x5Button").addEventListener("click", () => {
//   scale(5);
// });

// function scale(number) {
//   shapeArray.forEach((value) => {
//     value.a = value.a * number;
//     value.b = value.b * number;
//   });
//   displayElements();
// }

// function displayElements() {
//   document.getElementById("container").innerHTML = "";
//   shapeArray.forEach((staciapampis) => {
//     const divElement = document.createElement("div");
//     document.getElementById("container").appendChild(divElement);
//     divElement.style.width = `${staciapampis.a}px`;
//     divElement.style.height = `${staciapampis.b}px`;
//     divElement.style.border = "2px solid black";
//     divElement.style.background = "red";
//   });
// }
//Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

// function Person(name, surname) {
//   this.name = name;
//   this.surname = surname;
//   this.addToTable = function () {
//     const nameColumn = document.createElement("td");
//     nameColumn.textContent = this.name;
//     const surnameColumn = document.createElement("td");
//     surnameColumn.textContent = this.surname;
//     const tr = document.createElement("tr");
//     tr.append(nameColumn, surnameColumn);
//     document.querySelector("table > tbody").append(tr);
//   };
// }

// const capitalize = (text) =>
//   text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();
//   const fullname = document.getElementById("fullName").value;
//   const [name, surname] = fullname
//     .split(" ")
//     .map((namePart) => capitalize(namePart.trim()));

//   const person = new Person(name, surname);
//   person.addToTable();
// });
//Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą.

class Car {
  constructor(brand, model, mileage, price, image) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.image = image;
  }
  addToList() {
    const card = document.createElement("div");
    card.className = "card";
    card.addEventListener("click", () => alert(`Price: ${this.price}`));

    const img = document.createElement("img");
    img.src = this.image;

    const text = document.createElement("h6");
    text.innerText = `${this.brand} ${this.model}`;

    card.append(img, text);
    document.querySelector("div.wrapper").append(card);
  }
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const mileage = document.getElementById("mileage").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  const car = new Car(brand, model, mileage, price, image);
  car.addToList();
});
