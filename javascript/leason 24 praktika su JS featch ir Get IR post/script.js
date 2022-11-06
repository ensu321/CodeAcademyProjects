const BASE_URL = "https://radial-reinvented-shoe.glitch.me";

fetchProperties();

function fetchProperties() {
  fetch(`${BASE_URL}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      renderCards(data);
      renderPropertyFilterButtons([
        ...new Set(data.map((entry) => entry.city)),
      ]);
    })
    .catch((error) => {
      console.error(error);
    });
}

function renderCards(data) {
  const propertiesContainer = document.getElementById("properties-container");

  data.forEach((property) => {
    const propertyImage = document.createElement("img");
    propertyImage.src = property.image;
    propertyImage.setAttribute("alt", "property Image");

    const PropertyPrice = document.createElement("h1");
    PropertyPrice.innerText = `${property.price}€`;

    const PropertyCity = document.createElement("p");
    PropertyCity.setAttribute("class", "city");
    PropertyCity.innerText = property.city;

    const PropertyDescription = document.createElement("p");
    PropertyDescription.innerText = property.description;

    const propertyCard = document.createElement("div");
    propertyCard.setAttribute("class", "property-card");
    propertyCard.append(
      propertyImage,
      PropertyPrice,
      PropertyCity,
      PropertyDescription
    );

    propertiesContainer.append(propertyCard);
  });
}

function renderPropertyFilterButtons(cities) {
  const FilterContainer = document.getElementById("filters-container");

  cities.forEach((element) => {
    const PropertyCity = document.createElement("button");
    PropertyCity.innerText = element;
    FilterContainer.append(PropertyCity);
  });
}

let getButtons = [];
setTimeout(() => {
  let btns = document.querySelectorAll("button");
  getButtons = Array.from(btns);

  getButtons.forEach((button) => {
    button.addEventListener("click", () => {
      getButtons.forEach((button) => {
        button.classList.remove("selected");
      });
      button.classList.add("selected");
      filterFunction(getButtons);
    });
  });
}, "1000");

function filterFunction(getButtons) {
  let getSelectedButton = document.getElementsByClassName("selected");
  let arrayFromgetSelectedButton = Array.from(getSelectedButton);
  let firstItem = arrayFromgetSelectedButton[0];

  let getElementsKaunas = document.querySelectorAll(".city");
  let ArrayFromgetElementsKaunas = Array.from(getElementsKaunas);

  ArrayFromgetElementsKaunas.forEach((element) => {
    if (firstItem.innerText === element.innerText) {
      element.parentElement.style.display = "block";
    } else {
      element.parentElement.style.display = "none";
    }
  });
}
