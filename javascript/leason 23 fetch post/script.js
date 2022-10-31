////Pasikartojimas atsiskaitymui:
/*
 
HTML: Du input fieldai. I juos ivedam varda ir pavarde.
JS: Sukurti klase Person. Kontruktorius priims varda ir pavarde.
  Klase tures metoda, kuris grazins true: jeigu vardas turi
  daugiau balsiu negu pavarde
 
JS2: po inputais prideti div. Jame parasyti kas turi daugiau 
  balsiu ir isvesti visas balses.
 
Nenaudoti CSS. Pritaikyti minimalius stilius: flex, borders,
  fonts, margins.
 
*/
// const getButtonClick = document
//   .getElementById("theButton")
//   .addEventListener("click", thePerson);

// class Person {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }
//   personMethod() {
//     let lowerCaseName = this.name.toLowerCase().split("");
//     let lowerCaseSurname = this.surname.toLowerCase().split("");
//     let vowelsArray = ["a", "o", "i", "u", "y", "e"];

//     const resultName = lowerCaseName.filter((letter) =>
//       vowelsArray.includes(letter)
//     );
//     const createDivWithArrayOfNameWowels = document.createElement("div");
//     const nameInput = document.getElementById("nameInput");
//     createDivWithArrayOfNameWowels.innerText = resultName.join(", ");
//     nameInput.after(createDivWithArrayOfNameWowels);

//     const resultSurname = lowerCaseSurname.filter((letter) =>
//       vowelsArray.includes(letter)
//     );
//     const createDivWithArrayOfSurnameWowels = document.createElement("div");
//     const surnameInput = document.getElementById("surnameInput");
//     createDivWithArrayOfSurnameWowels.innerText = resultSurname.join(", ");
//     surnameInput.after(createDivWithArrayOfSurnameWowels);

//     if (resultName.length >= resultSurname.length) {
//       if (resultName.length === resultSurname.length) {
//         createDivWithArrayOfNameWowels.innerText =
//           createDivWithArrayOfNameWowels.innerText.concat(" - vienodai");

//         createDivWithArrayOfSurnameWowels.innerText =
//           createDivWithArrayOfSurnameWowels.innerText.concat(" - vienodai");
//       } else {
//         createDivWithArrayOfNameWowels.innerText =
//           createDivWithArrayOfNameWowels.innerText.concat(" - Daugiau");
//       }
//     } else {
//       createDivWithArrayOfSurnameWowels.innerText =
//         createDivWithArrayOfSurnameWowels.innerText.concat(" - daugiau");
//     }
//   }
// }

// function thePerson() {
//   const name = document.getElementById("nameInput").value;
//   const surname = document.getElementById("surnameInput").value;
//   const newPerson = new Person(name, surname);
//   newPerson.personMethod();
// }

// const nameInputForStyles = document.getElementById("nameInput");
// nameInputForStyles.style.border = "2px solid black";
// nameInputForStyles.style.margin = "10px";

// const surnameInputForStyles = document.getElementById("surnameInput");
// surnameInputForStyles.style.border = "2px solid black";
// surnameInputForStyles.style.margin = "10px";

// const nameLabelForStyles = document.getElementById("nameLabel");
// nameLabelForStyles.style.color = "green";

// const surnameLabelForStyles = document.getElementById("surnameLabel");
// surnameLabelForStyles.style.color = "green";
