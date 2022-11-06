const getForm = document.getElementById("add-property-form");

const cities = ["Vilnius", "Kaunas", "Klaipeda", "Šiauliai", "Panevėžys"];

cities.forEach((city) => {
  const AddCitySelection = document.getElementById("saleCities");
  const createOptions = document.createElement("option");
  createOptions.setAttribute("value", city);
  createOptions.innerText = city;
  AddCitySelection.append(createOptions);
});

function displayStatus(isOk, text) {
  const statusDiv = document.getElementById("statusMessages");
  const statusText = document.createElement("h1");
  statusDiv.style.color = isOk ? "03d3b2" : "red";
  statusText.innerHTML = text;
  statusDiv.append(statusText);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const addFormData = new FormData(getForm);

  document.getElementById("statusMessages").innerHTML = "";

  fetch("https://radial-reinvented-shoe.glitch.me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(addFormData)),
  })
    .then((res) => {
      if (res.ok) {
        displayStatus(res.ok, "Property successfully added.");
        console.log(res);
      } else {
        throw new Error(res.statusText);
      }
    })
    .catch((error) => {
      displayStatus(false, `Something went wrong. Server returned: ${error}.`);
    });
}

getForm.addEventListener("submit", handleFormSubmit);
