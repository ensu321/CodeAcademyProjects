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
