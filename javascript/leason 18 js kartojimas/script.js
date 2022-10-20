// class Payment {
//   #fee = 1.01;
//   constructor(amount) {
//     this.amount = amount;
//   }

//   calculateAmountWithFee() {
//     return this.amount * this.#fee;
//   }
// }

// //1. Sukurti array su 1000 payments objektu su atsitiktinem sumom.
// const arrayOfAmountsObjects = [];

// for (i = 0; i < 1000; i++) {
//   const amountRandom = new Payment(Math.floor(Math.random() * 1001));
//   arrayOfAmountsObjects.push(amountRandom);
// }

// //2. Rasti 15 didziausiu ir 15 maziausiu payment'u.
// //Panaudoti calculateAmountWithFee ieskant didziausiu ir maziausiu
// //payment'u.

// let top15 = [];
// let bottom15 = [];

// arrayOfAmountsObjects.sort(
//   (a, b) => a.calculateAmountWithFee() - b.calculateAmountWithFee()
// );
// // console.log(
// //   arrayOfAmountsObjects.forEach((a) => console.log(a.calculateAmountWithFee()))
// // );

// top15 = arrayOfAmountsObjects.slice(0, 15);
// console.log(top15);
// bottom15 = arrayOfAmountsObjects.slice(arrayOfAmountsObjects.length - 15);
// console.log(bottom15);
// console.log(top15.forEach((a) => console.log(a.calculateAmountWithFee())));

// //3. Rasti vidurki.

// const sum = arrayOfAmountsObjects.reduce((acc, object) => {
//   return acc + object.calculateAmountWithFee();
// }, 0);
// console.log(sum / arrayOfAmountsObjects.length);

// // 4.
// // a) Atvaizduoti sarasa.
// // b) Puslapyje telpa tik 20 payments. Padaryti puslapiavima.
// // */

//coding academy uzduotys
//1 uzduotys
// Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.

// Pvz.:

// const p1 = new Person("Petras", 16)
// p1.compareAge() => "Petras is old enough to drink";
// Nusikopijuokite apačioje esantį kodą ir jį papildykite:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge() {
//     if (this.age <= 20) {
//       console.log(this.name, " is too young to drink");
//     } else {
//       console.log(this.name, " is old enough to drink");
//     }
//   }
// }

// const p1 = new Person("Petras", 28);
// p1.compareAge();

//2 uzduotys 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.
// pvz: fn([1, 5, "a", "g", "z", 6]) => [1, 5, 6]

// const masyvas = [1, 5, "a", "g", "z", 6];

// const grazintiTikSkaicius = (masyvas) =>
//   masyvas.filter((element) => typeof element === "number");
// console.log(grazintiTikSkaicius(masyvas));

// //3 uzduotys
// 3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).
// pvz: fn("Petras 123 Slekys") => "PPeettrraass 123 SSlleekkyyss"

// const padvigubins = (string) => {
//   const splittedIntoLetters = string.split("");
//   const withoutNumbers = splittedIntoLetters.forEach((string) =>
//     string.replace(/[0-9]/g, "")
//   );

//   return splittedIntoLetters;
// };
// console.log(padvigubins("pet545ras"));
// splittedIntoLetters.map((a) => a + a).join("");

// const duplicateAllLetters = (text) =>
//   text
//     .split("")
//     .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
//     .join("");
// console.log(duplicateAllLetters("string"));

// const duplicateAllLetters = (text) =>
//   text
//     .split("")
//     .map((element) => (element.match(/[a-z]/i) ? element.repeat(2) : element))
//     .join("");
// console.log(duplicateAllLetters("string"));

//4 uzduotys postal code
// const isValidPostCode = (postCode) =>
//   /^[0-9]{5}|[0-9]{3}[A-Za-z]{2}$/.test(postCode);
// console.log(isValidPostCode("abc123"));
// console.log(isValidPostCode("12345"));
// console.log(isValidPostCode("123ab"));

// const jazzify = (array) =>
//   array.map((element) =>
//     element.endsWith("7") ? element : element.concat("7")
//   );
// console.log(jazzify(["G", "F", "C"]));
// console.log(jazzify(["Dm", "G", "E", "A"]));
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
// console.log(jazzify([]));
