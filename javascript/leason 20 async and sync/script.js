//pirma uzduotis
// let pazadas = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(), 5000);
// });

// pazadas.then(() => alert("veikia"));
// console.log(
//   "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
// );.

//2 uzudotys Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// let pazadas = new Promise((resolve, reject) => {
//   const random = Math.floor(Math.random() * 5) + 1;
//   console.log(random);

//   setTimeout(() => {
//     if (random === 1) {
//       reject();
//     } else {
//       resolve();
//     }
//   }, 5000);
// });

// pazadas.then(() => alert("veikia")).catch(() => alert("oops."));
// console.log(
//   "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
// );

//hen bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.

//3 uzduotys
let pazadas = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;
  console.log(random);

  setTimeout(() => {
    if (random === 1) {
      reject();
    } else {
      resolve();
    }
  }, 5000);
});

pazadas
  .then(() => "this is the message")
  .then((message) => alert(message))
  .catch(() => alert("oops."));
console.log(
  "Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas"
);
