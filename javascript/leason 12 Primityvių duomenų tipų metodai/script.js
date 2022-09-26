document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const vardas = document.getElementById("vardas").value.trim();

  const newElement = document.createElement("h1");
  newElement.textContent = vardas.split(" ")[0];
  document.body.append(newElement);

  //   if (Number.isInteger(skaicius)) {
  //     console.log("true");
  //     const newElement = document.createElement("h1");
  //     newElement.textContent = "aleksas ".repeat(skaicius);
  //     document.body.append(newElement);
  //   } else {
  //     console.log("false");
  //   }
});
