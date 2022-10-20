let form1TeslInput = document
  .getElementById("form1")
  .addEventListener("submit", function1);

let tekst1Value;

function function1(event) {
  event.preventDefault();
  tekst1Value = document.getElementById("text1").value;
  console.log(tekst1Value);
}
