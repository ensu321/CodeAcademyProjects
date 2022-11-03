// Sukurk variable 'legalAge', kuris būtų lygus 20. Antra variable 'clientAge' su bet kokiu skaičiumi. Pasirašyk if-else, kuris alert išmestų ar klientas jau pasiekęs šį legalAge, ar dar ne.
// const legalAge = 20;
// const clientAge = 1;

// if (legalAge >= 18) {
//   alert("pasiekes");
// } else {
//   alert("dar ne");
// }

// Pasirašyk kintamą su savo vardu. Sukurk if-else, kuris pasakys "Ilgas vardas", jei tavo vardas ilgesnis nei 6 raidės. Kitu atveju, nieko neišmes. String ilgį gali susižinoti prirašant 'length' property (pvz.: "Petras".length arba su kintamu: name.length). Daugiau čia.
// const kitamas = "vardas";

// if (kitamas.length > 6) {
//   alert("ilgas vardas");
// } else {
//   alert("fck u");
// }

// Sukurt kintamąjį su savo amžiumi. Patikrink: jei amžius didesnis nei 100, arba mažesnis nei 0 - tegul išmeta "Invalid age"; jei tarp 1 ir 18 - "Child"; jei tarp 19 ir 99 - "Adult".

// const kintamasis = 101;

// if (kintamasis > 100 || kintamasis < 0) {
//   alert("invalid age");
// } else if (kintamasis <= 18) {
//   alert("child");
// } else {
//   alert("adult");
// }

// Sukurk variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Sukurk if-else, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// BMW group priklauso: BMW, Mini, Rolls-Royce

// const car = "Audi";
// const VWGroup = ["VW", "Audi", "Bentley", "Bugatti", "Lanbirghini"];
// const BMWGroup = ["BMW", "Mini", "Rolls-Royce"];

// // if (VWGroup.includes(car)) {
// //   alert("vw group");
// // } else  {
// //   alert("BMW group");
// // }

// // Ar atsimenat paskutinį IF-ELSE pratimą? Būtent jį efektyviau apsirašyti su Switch, pasibandykime:
// // Sukurkite variable 'car', kuris bus lygus kažkokiam automobilio prekės ženklui. Aprašykite Switch, kuris pasakys ar tas brand'as priklauso VW Group, ar BMW Group, ar nei vienam.
// // VW group priklauso: VW, Audi, Bentley, Bugatti, Lamborghini, Porsche.
// // BMW group priklauso: BMW, Mini, Rolls-Royce.

// switch (car) {
//   case "VW":
//   case "Audi":
//   case "lambo":
//     console.log("VW  group");
//     break;
//   case "BMW":
//   case "Mini":
//   case "Rolls-Royce":
//     console.log("BMW group");
//     break;
//   default:
//     console.log("Nei VW group, nei BMW group");
// }
// Ahh, o jeigu antrame pratime įvesti -1 kaip amžių? Darom double ternary operator - t.y. operatorius operatoriuje. Pirma paklausiame - jei amžius mažesnis nei 0; arba didesnis nei 120 - išmetame "Invalid Age". Jei vis tik ne - tada false statement'e bus dar vienas operatorius su antru pratimo klausimu.

// const clientAge = 20;
// const legalAge = 18;

// clientAge < 0 || clientAge > 120 ? console.log("Invalid age") : clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");

//Padaryk, kad kompiuteris 10 kartų paconsole'intų tavo vardą (atsimink, konsolė tas pačias eilutes grupuoja ir šalia parašo skaičiuką dažniausiai, vietoj to, kad išmestų kiekvienoje eilutėje).

// for (let i = 0; i < 10; i++) {
//   console.log("1");

// }
//Pakoreguok pirmą pratimą, kad tiek vardas, tiek kiek kartų kartos - būtų kintamieji.

// const name = "aleksas";
// let i = 3;
// while (i > 0) {
//   console.log(name);
//   i--;
// }

//Sukurkite kintamąjį (let combo = ""). Kiekvieną kartą paleidus ciklą į combo prisirašo Jūsų vardas (t.y. while ciklo viduje darytų combo += "Petras" ). Sukurkite programą, kur bus kintamasis (let times = 5), kuris nurodys kiek kartų į combo kintamąjį turėtų būti pridėtas Jūsų vardas. Jei times skaičius 0 arba mažiau - vis tiek bent vieną kartą įvyks ciklas ir Jūsų vardą įrašys į combo.
// Pvz:
// times = 0; combo = "Petras"
// times = 1; combo = "Petras"
// times = 2; combo = "PetrasPetras"
// times = 3; combo = "PetrasPetrasPetras"
// let combo = "";
// let times = 5;

// while (times > 0) {
//   combo = "PETRAS" + combo;
//   console.log(combo);
//   times--;
// }

//Sukurk programą, kur vartotojui atidarius puslapį, alert išmestų ar jis laimėjo bilietą ar ne. Tikimybė laimėti - viena iš penkių. (Hint: čia reikės if-else su math random).

// let Tikimybė = 0.2;
// let randomNumber = Math.floor(Math.random() * 5);
// console.log(randomNumber);

// if (randomNumber === 1) {
//   alert("laimejai");
// } else alert("pralaimejai");

//Susikurkite projektą, be jokių HTML tag'ų body. Su JavaScript sukurkite <h2> elementą su savo vardu ir pridėkite į <body>.

// const h2 = document.createElement("h2");
// h2.innerText = "Aleksas";
// document.body.append(h2);

// //Sukurkite HTML'e <h1> tag'ą su id="name" ir tekstu "unknown". Naudodami JavaScript pakeiskite šio elemento tekstą į savo vardą .

// const nameConst = document.createElement("h1");
// nameConst.setAttribute("id", "name");

// nameConst.innerText = "unknown";

// document.body.append(nameConst);
// nameConst.innerText = "ALEKSAS ";

//Sukurkite unordered list su trim list item'ais: "Pienas", "Varškė", "Jautiena". Su JavaScript pakeiskite paskutinį list item tekstą į "Sūris".

// const ul = document.createElement("ul");

// const li1 = document.createElement("li");
// li1.innerText = "Pienas";
// const li2 = document.createElement("li");
// li2.innerText = "Varškė";
// const li3 = document.createElement("li");
// li3.innerText = "Jautiena";

// ul.append(li1, li2, li3);

// document.body.append(ul);

// const getLastItem = document.querySelector("li:last-child");

// getLastItem.innerText = "Suris";

//Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)
// const vardas = "aleksas";
// function funckija(vardas) {
//   alert(vardas);

//Ir ne visos funkcijos turi parametrus - sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.

// function RandomNumber() {
//   let randomNumber = Math.floor(Math.random() * 5);
//   console.log(randomNumber);
// }
//

//Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių (t.y. "Petras", "Slekys" => 12).

// const vardas = "aLeksas";
// const pavarde = "briliovas";

// function zodziuIlgis(vardas, pavarde) {
//   return vardas.length + pavarde.length;
// }

//Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę (pvz. 0 => A; 1 => B; 2 => C ir t.t.). Hint: Jums reikės pirma sukurti Array su visomis raidėmis (["A", "B", C",..."Z"]), o funkcija paims pagal indeksą atitinkamą raidę. Jei primiršot array - pasižiūrėkite čia.

// let ENGLISH = "aabcdefghijklmnopqrstuvwxyz".split("");
// console.log(ENGLISH);

// function grazintiRaide(skaicius) {
//   console.log(ENGLISH[skaicius]);
// }

//Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...). Hint: Reikės funkcijoje naudoti if-else arba switch.

// function matematika(n1, n2, operator) {
//   if (operator === "sub") {
//     return console.log(n1 - n2);
//   } else if (operator === "div") {
//     return console.log(n1 / n2);
//   } else if (operator === "sum") {
//     return console.log(n1 + n2);
//   } else {
//     return console.log(n1 * n2);
//   }
// }

//Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 5);
// }

// function pakeltiKvadratu(number) {
//   return number * number;
// }
// console.log(pakeltiKvadratu(generateRandomNumber()));

//Padaryk, kad paspaudus ant mygtuko - išoktų alert su tavo vardu! (naudoti inline metoda: onclick="")

// function alertMyName() {
//   alert("aleksas");
// }

//Perrašyti pirmą pratimą su addEventListener (ir nuo šiol naudoti būtent jį ;) ).

// const button = document
//   .getElementById("theButton")
//   .addEventListener("click", () => alert("aleksas"));

//Padaryti, kad paspaudus ant mygtuko, po apačia atsirastų paragrafe tekstas apie jus.

// const button = document
//   .getElementById("theButton")
//   .addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     document.body.append(h1);
//     h1.innerText = "aleksas";
//   });

//Sukurk programą, kurioje bus h1 tekstas su skaičiumi ir mygtukas. Paspaudus ant mygtuko, skaičius padidėja (+1).
// let counter = 0;
// const h1 = document.createElement("h1");
// document.body.append(h1);

// const button = document
//   .getElementById("theButton")
//   .addEventListener("click", () => {
//     h1.innerText = counter++;
//   });

//Sukurk programą, kurioje ilgas paragrafas. Bandant kopijuoti kodą - išmeta, kad negalima kopijuoti.

// const longParagrah = document.createElement("p");

// document.body.append(longParagrah);
// longParagrah.innerText =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, earum cupiditate. Eligendi, similique adipisci perferendis inventore magnam eos suscipit. Temporibus eligendi id alias delectus. Asperiores officia quaerat vel illo qui";
// longParagrah.addEventListener("copy", () => alert("dont copy"));

//Sukurk programą, kur paspaudus ant mygtuko - sugeneruoja random skaičių nuo 1 iki 100 ir jį išmeta kaip h1 tekstą.
// const h1 = document.createElement("h1");
// document.body.append(h1);
// const getButton = document
//   .getElementById("theButton")
//   .addEventListener("click", () => {
//     let randomNumber = Math.floor(Math.random() * 100);

//     h1.innerText = randomNumber;
//   });

//Sukurk programą, kurioje du mygtukai - "Turiu bent 18 metų" ir "Mažiau nei 18 metų". Jei paspaudžia ant pirmo mygtuko - išmeta h1 tekstą "Alus". Jei antrą paspaudžia - išmeta alert su "nepilnametis - nieko neturim".

// const secondButton = document.createElement("button");
// secondButton.setAttribute("id", "secondButton");
// secondButton.innerText = "maziau nei 18 metu";
// document.body.append(secondButton);

// const h1 = document.createElement("h1");
// h1.innerText = "";
// document.body.append(h1);

// const firstButtonEvent = document
//   .getElementById("theButton")
//   .addEventListener("click", () => (h1.innerText = "Alus"));
// const secondButtonEvent = document
//   .getElementById("secondButton")
//   .addEventListener(
//     "click",
//     () => (h1.innerText = "nepilnametis - nieko neturim")
//   );

//Sukurk programą, kuri sugeneruoja random skaičių nuo 1 iki 3, kai tik užsikrauna puslapis. Vartotojas skaičiaus nemato (bet jūs pasiconsole'inkit). Ekrane - trys mygtukai (1, 2, 3). Vartotojas turi spėti koks random skaičius susigeneravo. Jei atspėja - išoka alert("Yay"), jei ne - alert("Nay").
// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.innerText = "1";
// document.body.append(firstButton);

// const secondButton = document.createElement("button");
// secondButton.setAttribute("id", "secondButton");
// secondButton.innerText = "2";
// document.body.append(secondButton);

// const thirdButton = document.createElement("button");
// thirdButton.setAttribute("id", "thirdButton");
// thirdButton.innerText = "3";
// document.body.append(thirdButton);

// let randomNumber = Math.floor(Math.random() * 3) + 1;
// console.log(randomNumber);

// firstButton.addEventListener("click", () =>
//   randomNumber === 1 ? alert("atspejai") : alert("neatspejai")
// );
// secondButton.addEventListener("click", () =>
//   randomNumber === 2 ? alert("atspejai") : alert("neatspejai")
// );
// thirdButton.addEventListener("click", () =>
//   randomNumber === 3 ? alert("atspejai") : alert("neatspejai")
// );

//Parašykite programą, kurioje būtų tekstas "Nespauskite mygtuko". Vartotojui paspaudus bet kokį mygtuką turi pasikeisti tekstas į "Neklausote manęs".
//Sukurkite h1, jam duokite 150vh aukštį ir 150vh line-height. Jame įrašykite "Nejudinkite pelytės". Jeigu vartotojas pajudins pelytę - pakeiskite tekstą į "Kiek galima neklausyti?!".
// const h1 = document.createElement("h1");
// h1.innerText = "nejudinkite pelytes";
// document.body.append(h1);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.innerText = "1";
// document.body.append(firstButton);

// const secondButton = document.createElement("button");
// secondButton.setAttribute("id", "secondButton");
// secondButton.innerText = "2";
// document.body.append(secondButton);

// const thirdButton = document.createElement("button");
// thirdButton.setAttribute("id", "thirdButton");
// thirdButton.innerText = "3";
// document.body.append(thirdButton);

// document.body.addEventListener("mousemove", () => {
//   document.querySelector("h1").innerText = "Kiek galima Neklausyti";
// });

// document.body.addEventListener("click", () => {
//   document.querySelector("h1").innerText = "Neklausote manęs";
// });
// document.body.addEventListener("click", () => {
//   const isButton = event.target.nodeName === "BUTTON";
//   if (isButton) {
//     document.getElementById("output").innerText = "Neklausote manęs";
//   }
// });

//Veiksmų eiliškumas

// Susikuriame formą HTML. Neužmirštame mygtukui duoti type="submit".
// Su JavaScript pasirenkame formą ir jai pritaikome addEventListener su submit event'u.
// Pasirašome funkciją, kuri pasileidžia submit eventui įvykus. Funkcija pasiima event kaip parametrą ir sustabdo default veiksmą (šiuo metu - formos duomenų siuntimą ir dėl to puslapio persikrovimą).
// Pasitikrinę su console.log(), kad funkcija pasileidžia po submit event - pasiimame input elementus ir jų reikšmias. Vėl pasitikriname ar tikrai teisingai pasiėmėme duomenis.
// Laikas įgyvendinti logiką su seniau išmoktais metodais viduj funkcijos, kad atliktume pratimus!

// /Sukurk input į kurį įvestum savo vardą. Submit paspaudus - išoktų alert su tavo vardu.
//Sukurk input į kurį įvesi savo amžių. Padaryk, kad submit paspaudus, viršuj esančiame h1 elemente atsirastų "Tavo amžius: [amžius]".
//Sukurk du input - į vieną įrašysi savo vardą, į kitą - amžių. Jei daugiau nei 18 - išmeta h1 elemente "Vairuoti gali: [vardas]"; jei nėra išmeta: "Dar mokysis vairuotis: [vardas]".

// const createForm = document.createElement("form");
// document.body.append(createForm);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "name");
// firstInputLabel.innerText = "Name";
// createForm.append(firstInputLabel);

// const firstInput = document.createElement("input");
// firstInput.setAttribute("id", "name");
// firstInput.setAttribute("type", "text");
// firstInput.placeholder = "name";
// createForm.append(firstInput);

// const ageInputLabel = document.createElement("label");
// ageInputLabel.setAttribute("for", "ageInput");
// ageInputLabel.innerText = "Your age";
// createForm.append(ageInputLabel);

// const ageInput = document.createElement("input");
// ageInput.setAttribute("id", "ageInput");
// ageInput.setAttribute("type", "number");
// ageInput.placeholder = "your age";
// createForm.append(ageInput);

// const createH1ElementForValue = document.createElement("h1");
// document.body.append(createH1ElementForValue);
//Sukurkite kino teatro kainos apskaičiavimo platformą. Joje turi būti vienas input laukelis, kur žmogus įrašo savo amžių, o JS apskaičiuoja kainą ir išmeta ją h1 elemente. Standartinis bilietas – 6eu, iki 16 metų – 50proc nuolaida, 1/3 nuolaida vyresniems nei 60. Variable turi būti aprašyti viršuj, kad būtų lengva keist.
// const standartinisBilietas = 6;

// const iki16Metu = 3;

// const VyresniemsNegu60 = 6 / 1.33;

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getNameInputValue = document.getElementById("name").value;
//     const ageInputValue = document.getElementById("ageInput").value;
//     if (ageInputValue <= 16) {
//       createH1ElementForValue.innerText = `Bilieto kaina: ${iki16Metu}`;
//     } else if (ageInputValue > 60) {
//       createH1ElementForValue.innerText = `Bilieto kaina: ${VyresniemsNegu60}`;
//     } else {
//       createH1ElementForValue.innerText = `Bilieto kaina: ${standartinisBilietas}`;
//     }
//   });

// Kai kuriose šalyse reikia eiti į kariuomenę, jei tu tarp 18 ir 30, tačiau, jei neturi kriminalinio įrašo. Sukurk programą, kuri su input + radio button pasakytų ar tam žmogui gali reikėti eiti į kariuomenę (h1 elemente). Hint: pasirinkite su querySelector tik pažymėtą radio input (aha, yra toks CSS selektorius), ir perskaitykite jo reikšmę.
// const radioInputLabel = document.createElement("label");
// radioInputLabel.setAttribute("for", "radioInput");
// radioInputLabel.innerText = "Have you been convicted?  ";
// createForm.append(radioInputLabel);
// const radioInput = document.createElement("input");
// radioInput.setAttribute("type", "checkbox");
// radioInput.setAttribute("id", "radioInput");
// radioInput.setAttribute("name", "radioInput");
// createForm.append(radioInput);

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getNameInputValue = document.getElementById("name").value;
//     const ageInputValue = document.getElementById("ageInput").value;
//     const valueOFradioInput = document.getElementById("radioInput").checked;
//     console.log(valueOFradioInput);
//     if (ageInputValue >= 18 && ageInputValue <= 30 && !valueOFradioInput) {
//       console.log("galite kariati");
//     } else {
//       console.log("negalite kariauti");
//     }
//   });

//Įmonė visiems savo darbuotojams duoda Kalėdų bonusą - 50 eurų. Tiems darbuotojams, kurie dirba ilgiau nei 10 metų - prideda papildomus 50 eurų (bendrai - 100 eurų). O jei dirba 20 metų ar daugiau - papildomus 100 eurų (iš viso - 200 eurų). Parašyk programą, kuri leistų darbuotojui įsivesti skaičių kiek dirbo metų įmonėje, input elementu - atsirastų tekstas su pervedamu bonusu.
// Pvz: [16] => "Jūsų bonusas: 100 eurų".

// const createForm = document.createElement("form");
// document.body.append(createForm);

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "name");
// firstInputLabel.innerText = "Name";
// createForm.append(firstInputLabel);

// const firstInput = document.createElement("input");
// firstInput.setAttribute("id", "name");
// firstInput.setAttribute("type", "text");
// firstInput.placeholder = "name";
// createForm.append(firstInput);

// const lblWorkExperience = document.createElement("label");
// lblWorkExperience.setAttribute("for", "numWorkExperience");
// lblWorkExperience.innerText = "Kiek metu dirbate";
// createForm.append(lblWorkExperience);

// const numWorkExperience = document.createElement("input");
// numWorkExperience.setAttribute("id", "numWorkExperience");
// numWorkExperience.setAttribute("type", "number");
// numWorkExperience.placeholder = "Kiek metu dirbate";
// createForm.append(numWorkExperience);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const createH1ElementForValue = document.createElement("h1");
// document.body.append(createH1ElementForValue);

// const kaleduBonusas = 50;

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getWorkExperience =
//       document.getElementById("numWorkExperience").value;
//     if (getWorkExperience > 10 && getWorkExperience < 20) {
//       console.log(kaleduBonusas + 50);
//     } else if (getWorkExperience > 20) {
//       console.log(kaleduBonusas + 150);
//     } else {
//       console.log("nepriklauso bonuas");
//     }
//   });

//Kiek dienų šiais metais? Parašykite programą, kur įvedus metus - pasakys ar jie keliemieji, ar ne (po forma). Kaip apskaičiuoti ar keliemiji metai? Jie turi dalintis iš keturių, bet jei dalinasi iš 100, tai turi dalintis ir iš 400, kad būtų keliamieji (angl. a year is a leap year if it is divisible by four, except that any year divisible by 100 is a leap year only if it is also divisible by 400). Tai - populiari užduotis, tad internete rasite ne vieną versiją, ir daug teorijos kaip skirtingi žmonės skaičiuoja. Tad rekomenduojame padarius - pasitikrinti ir kitų žmonių idėjas.

// const createForm = document.createElement("form");
// document.body.append(createForm);

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "name");
// firstInputLabel.innerText = "Name";
// createForm.append(firstInputLabel);

// const firstInput = document.createElement("input");
// firstInput.setAttribute("id", "name");
// firstInput.setAttribute("type", "text");
// firstInput.placeholder = "name";
// createForm.append(firstInput);

// const lblLeapYear = document.createElement("label");
// lblLeapYear.setAttribute("for", "numLeapYear");
// lblLeapYear.innerText = "Kurie metai";
// createForm.append(lblLeapYear);

// const numLeapYear = document.createElement("input");
// numLeapYear.setAttribute("id", "numLeapYear");
// numLeapYear.setAttribute("type", "number");
// numLeapYear.placeholder = "kurie metai?";
// createForm.append(numLeapYear);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const createH1ElementForValue = document.createElement("h1");
// document.body.append(createH1ElementForValue);

// const kaleduBonusas = 50;

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();

//     const getYear = document.getElementById("numLeapYear").value;
//     if ((0 == getYear % 4 && 0 != getYear % 100) || 0 == getYear % 400) {
//       console.log(getYear + " is a leap year");
//     } else {
//       console.log(getYear + " is not a leap year");
//     }
//   });

//Parašyk programą, kurioje vartotojas įrašo temperatūra Celsijumi, o programa paskaičiuoja ir atvaizduoja tą pačią temperatūrą Farenheitu.

// const createForm = document.createElement("form");
// document.body.append(createForm);

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "name");
// firstInputLabel.innerText = "Name";
// createForm.append(firstInputLabel);

// const firstInput = document.createElement("input");
// firstInput.setAttribute("id", "name");
// firstInput.setAttribute("type", "text");
// firstInput.placeholder = "name";
// createForm.append(firstInput);

// const lblTempinForeinheit = document.createElement("label");
// lblTempinForeinheit.setAttribute("for", "numTempInForeinheit");
// lblTempinForeinheit.innerText = "Foreinheit";
// createForm.append(lblTempinForeinheit);

// const numTempInForeinheit = document.createElement("input");
// numTempInForeinheit.setAttribute("id", "numTempInForeinheit");
// numTempInForeinheit.setAttribute("type", "number");
// numTempInForeinheit.placeholder = "Foreinheit";
// createForm.append(numTempInForeinheit);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const createH1ElementForValue = document.createElement("h1");
// document.body.append(createH1ElementForValue);

// const kaleduBonusas = 50;

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getForeinheit = document.getElementById("numTempInForeinheit").value;
//     console.log((5 / 9) * (getForeinheit - 32));
//   });

//Sukurk programą, kurioje reikia įvesti elektroninį paštą ir paspausti mygtuką "sutinku gauti laiškus". Suvedus duomenis, jei mygtukas "sutinku" nepasirinktas - išmeta - "Registracija nesėkminga. Jei pasirinktas - išmeta "El. paštas [paštas] sėkmingai užregistruotas".

// const createForm = document.createElement("form");
// document.body.append(createForm);

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "emailValue");
// firstInputLabel.innerText = "Email";
// createForm.append(firstInputLabel);

// const emailValue = document.createElement("input");
// emailValue.setAttribute("id", "emailValue");
// emailValue.setAttribute("type", "email");
// emailValue.placeholder = "email";
// createForm.append(emailValue);

// const lblcheckBox = document.createElement("label");
// lblcheckBox.setAttribute("for", "checkBox");
// lblcheckBox.innerText = "Sutinku gauti laiskus  ";
// createForm.append(lblcheckBox);
// const checkBox = document.createElement("input");
// checkBox.setAttribute("type", "checkbox");
// checkBox.setAttribute("id", "checkBox");
// checkBox.setAttribute("name", "checkBox");
// createForm.append(checkBox);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const createH1ElementForValue = document.createElement("h1");
// document.body.append(createH1ElementForValue);

// const kaleduBonusas = 50;

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getEmail = document.getElementById("emailValue").value;
//     console.log(getEmail);
//     const getCheckBox = document.getElementById("checkBox").checked;
//     console.log(getCheckBox);
//     if (getCheckBox) {
//       if (getEmail) {
//         console.log(`El. paštas ${getEmail} sėkmingai užregistruotas`);
//       } else console.log("Registracija nesėkminga");
//     } else {
//       console.log("Registracija nesėkminga");
//     }
//   });

//Sukurk programą, kurioje bus du inputai - vardas (text) ir skaičius (number) ir tuščias <ul>. Įrašius formoje duomenis, po apačia turi susikurti list itemų tiek, kiek tu parašei skaičių. List itemuose turi būti tavo vardas :)
// const createForm = document.createElement("form");
// document.body.append(createForm);

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "textValue");
// firstInputLabel.innerText = "Vardas";
// createForm.append(firstInputLabel);

// const textValue = document.createElement("input");
// textValue.setAttribute("id", "textValue");
// textValue.setAttribute("type", "text");
// textValue.placeholder = "Vardas";
// createForm.append(textValue);

// const lblsecondInput = document.createElement("label");
// lblsecondInput.setAttribute("for", "numberValue");
// lblsecondInput.innerText = "Skaicius";
// createForm.append(lblsecondInput);

// const numberValue = document.createElement("input");
// numberValue.setAttribute("id", "numberValue");
// numberValue.setAttribute("type", "number");
// numberValue.placeholder = "Skaicius";
// createForm.append(numberValue);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const createUL = document.createElement("ul");
// document.body.append(createUL);

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getName = document.getElementById("textValue").value;
//     const getNumber = document.getElementById("numberValue").value;
//     for (let i = 0; i < getNumber; i++) {
//       let createListItem = document.createElement("li");
//       createListItem.innerText = getName;
//       createUL.append(createListItem);
//     }
//   });

//Sukurkite formą, kurioje vienas input - skaičius, įvesti stačiakampio dydį. Po forma - tegul būna tusčias div elementas. Jame reikia atvaizduoi trikampį pagal įvestą input. Šis pratimas - klasika programavimo ciklų srityje, tiek atsakymų, tiek teorijų, tiek sąmokslo teorijų internete - daugiau nei reikia; pasibaigus ar pastrigus - būtinai pasinagrinėkite (gal vienas iš paaiškinimų jums atvers duris į ciklų pasaulio aiškumą).
// Pvz:
// Įvesta: 2
// Rezultatas:
// *
// **

// Įvesta: 5
// Rezultatas:
// *
// **
// ***
// ****
// *****

// const firstInputLabel = document.createElement("label");
// firstInputLabel.setAttribute("for", "textValue");
// firstInputLabel.innerText = "Vardas";
// createForm.append(firstInputLabel);

// const textValue = document.createElement("input");
// textValue.setAttribute("id", "textValue");
// textValue.setAttribute("type", "text");
// textValue.placeholder = "Vardas";
// createForm.append(textValue);

// const lblsecondInput = document.createElement("label");
// lblsecondInput.setAttribute("for", "numberValue");
// lblsecondInput.innerText = "Ivesti staciakampio dydi";
// createForm.append(lblsecondInput);

// const numberValue = document.createElement("input");
// numberValue.setAttribute("id", "numberValue");
// numberValue.setAttribute("type", "number");
// numberValue.placeholder = "Ivesti staciakampio dydi";
// createForm.append(numberValue);

// const firstButton = document.createElement("button");
// firstButton.setAttribute("id", "firstButton");
// firstButton.setAttribute("type", "submit");
// firstButton.innerText = "submit";
// createForm.append(firstButton);

// const createDIV = document.createElement("div");
// createDIV.setAttribute("id", "container");

// document.body.append(createDIV);

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getTriangleSize = document.getElementById("numberValue").value;
//     let triangle = "";
//     for (i = 0; i < getTriangleSize; i++) {
//       for (j = 0; j <= i; j++) {
//         triangle += "*";
//       }
//       triangle += "<br>";
//       createDIV.innerHTML = triangle;
//     }
//   });

//Sukurkite funkciją, į kurią būtų paduotas vietas parametras - n. Jis pasakys kokio dydžio L raidė turi būti (ji sudaryta iš daug mažų L raidžių).
// t.y. jei kviesite funkciją fn(4), tai turėtų atspausdinti tokį rezultatą:
// L
// L
// L
// L L L L

function createFormWithDiv(
  firstLabelInnerText,
  ID1,
  inputType,
  secondLabelInnerText,
  ID2,
  inputType2
) {
  const createForm = document.createElement("form");
  document.body.append(createForm);

  let label1 = document.createElement("label");
  label1.setAttribute("for", `${ID1}`);
  label1.innerText = `${firstLabelInnerText}  `;
  createForm.append(label1);
  const input1 = document.createElement("input");
  input1.setAttribute("id", `${ID1}`);
  input1.setAttribute("type", `${inputType}`);
  input1.placeholder = `${firstLabelInnerText}`;
  createForm.append(input1);

  if (secondLabelInnerText && ID2 && inputType2) {
    let label2 = document.createElement("label");
    label2.setAttribute("for", `${ID2}`);
    label2.innerText = `${secondLabelInnerText}  `;
    createForm.append(label2);
    const input2 = document.createElement("input");
    input2.setAttribute("id", `${ID2}`);
    input2.setAttribute("type", `${inputType2}`);
    input2.placeholder = `${secondLabelInnerText}`;
    createForm.append(input2);
  } else {
    console.log("No second input");
  }

  const firstButton = document.createElement("button");
  firstButton.setAttribute("id", "firstButton");
  firstButton.setAttribute("type", "submit");
  firstButton.innerText = "submit";
  createForm.append(firstButton);

  const createDIV = document.createElement("div");
  createDIV.setAttribute("id", "container");

  document.body.append(createDIV);
}

// createFormWithDiv("Number of L's", "numberOFL", "number");

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getLNumber = document.getElementById("numberOFL").value;
//     //write for loop?
//     for (let i = 0; i <= getLNumber; i++) {
//       const createP = document.createElement("p");
//       createP.innerHTML = `C <br>`;
//       container.append(createP);
//     }
//     const getLastP = document.querySelector("p:last-child");
//     getLastP.innerText = "C".repeat(getLNumber);

//     const getFirstP = document.querySelector("p:first-child");
//     getFirstP.innerText = "C".repeat(getLNumber);
//   });

//Sukurkite input (be mygtuko), į kurį įrašius vardą ir nulipus nuo input (t.y. blur event), vardas atsiras po apačia, tvarkingame sąraše (su kableliais):
// Pvz.: Petras, Jonas, Mantas, Antanas.

// createFormWithDiv("Name", "nameInput", "text");

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const getInput = document.getElementById("nameInput").value;
//     console.log(getInput);
//     getInput.addEventListener("blur", () => {
//       console.log("a");
//       // const createElementLi = document.createElement("li");
//       // createElementLi.innerText = getInput;
//       // container.append(createElementLi);
//     });
//   });

//Sukurkite formą su dviem inputais, kurie paims skaičius. Suvedus duomenis - turi alert'int skaičių, kuris arčiausiai 100.
// Pvz.: fn(101, 81) grąžins 101.
// createFormWithDiv(
//   "number1",
//   "number1Input",
//   "number",
//   "number2",
//   "number2Input",
//   "number"
// );

// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const get1value = document.getElementById("number1Input").value;
//     const get2value = document.getElementById("number2Input").value;
//     alertNearestNumber(get1value, get2value);
//   });

// function alertNearestNumber(get1value, get2value) {
//   if (Math.abs(100 - get1value) > Math.abs(100 - get2value)) {
//     alert(get2value);
//   } else {
//     alert(get1value);
//   }
// }

//Sukurkite programą, kurioje pakrovus puslapį susigeneruoja skaičius tarp 1 ir 5. Vartotojas turi formą su vienu input - gali spėti skaičių. Atspėjus - išmeta alert(atspejai), kitaip alert(neatspejai).
// createFormWithDiv("number1", "number1Input", "number");
// const modifyget1value = document
//   .getElementById("number1Input")
//   .setAttribute("max", 5);
// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     const get1value = document.getElementById("number1Input").value;

//     doEverything(get1value);
//   });

// function doEverything(get1value) {
//   let randomNumber = Math.floor(Math.random() * 5) + 1;
//   console.log(randomNumber);
//   console.log(get1value);
//   if (randomNumber === get1value) {
//     alert("atspejai");
//   } else {
//     alert("neatspejai");
//   }
// }

//Pakoreguokite penktą pratimą, kad skaičiuotų iš kelinto karto atspėjai ir tai parašytų alert'e.
// createFormWithDiv("number1", "number1Input", "number");
// let counter = 0;
// const modifyget1value = document
//   .getElementById("number1Input")
//   .setAttribute("max", 5);
// const getForm = document
//   .querySelector("form")
//   .addEventListener("submit", (event) => {
//     event.preventDefault();
//     counter++;
//     const get1value = document.getElementById("number1Input").value;
//     doEverything(get1value, counter);
//   });

// function doEverything(get1value, counter) {
//   let randomNumber = Math.floor(Math.random() * 5) + 1;
//   console.log(randomNumber);
//   console.log("inputvalue", get1value);
//   console.log("counter", counter);
//   if (randomNumber == get1value) {
//     alert(`atspejai is ${counter} karto.`);
//   } else {
//     alert("neatspejai");
//   }
// }

//H1 elemente parašykite savo vardą. Paspaudus ant vardo - tegul jūsų vardas atsiranda per vidurį ekrano, dvigubai didesniu font'o dydžiu ir raudona spalva.
// let vardas = document.getElementById("vardas");

// vardas.style.display = "flex";
// vardas.style.justifyContent = "center";
// vardas.style.fontSize = "4rem";
// vardas.style.color = "red";

//Išbandome ekraną. Sukurkite mygtuką su HTML. JS pasirašykite, kad mygtukas position: absolute ir jo lokacija - viršus, kairė. Paspaudus ant mygtuko, jis turi peršokti į apačią dešinę pusę. Paspaudus vėl - į viršų, kairę pusę. Ir taip šokinėti įstrižai per ekraną kiekvieno paspaudimo metu.

let mygtukas = document.getElementById("mygtukas");
mygtukas.addEventListener("click", changePosition);
mygtukas.style.position = "absolute";
mygtukas.style.top = 0;
mygtukas.style.left = 0;

function changePosition() {
  mygtukas.style.top = "1000px";
  mygtukas.style.left = "1000px";
  mygtukas.style.bottom = 0;
  mygtukas.style.right = 0;
}
