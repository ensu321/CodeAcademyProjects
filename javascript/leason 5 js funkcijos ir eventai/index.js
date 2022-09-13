const forma = document.querySelector('form').addEventListener('submit', myfunction);



function myfunction(event) {

  event.preventDefault();
 const tex1Value =  document.querySelector('#text1').value;
console.log(tex1Value);
const tex2Value = parseInt(document.querySelector('#text2').value);
console.log(tex2Value);
const test2ValueToBeUpdated = document.querySelector('h1');
console.log(test2ValueToBeUpdated);
tex2Value >= 18 ? test2ValueToBeUpdated.innerText = "Vairuoti gali: " + tex1Value : test2ValueToBeUpdated.innerText = "Dar mokysis vairuotis: " + tex1Value;
  return;
}




