const Base_URL = "https://golden-whispering-show.glitch.me";
const getForm = document.getElementById("add-product");

const createContainer = document.createElement("div");
createContainer.setAttribute("id", "container");
document.body.append(createContainer);

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
  console.log(Object.fromEntries(addFormData));
  document.getElementById("statusMessages").innerHTML = "";
  fetch("https://golden-whispering-show.glitch.me", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Object.fromEntries(addFormData)),
  })
    .then((res) => {
      if (res.ok) {
        displayStatus(res.ok, "Product successfully added.");
        window.location = "index.html";
      } else {
        console.log(res);
        throw new Error(res.statusText);
      }
    })
    .catch((error) => {
      displayStatus(false, `Something went wrong. Server returned: ${error}.`);
    });
}

getForm.addEventListener("submit", handleFormSubmit);

// function renderGETData(data) {
//   data.forEach((product) => {
//     const createContainerForEachProduct = document.createElement("div");
//     createContainerForEachProduct.setAttribute("class", "wrap");
//     createContainer.append(createContainerForEachProduct);

//     const CreateImageElement = document.createElement("img");
//     CreateImageElement.src = product.image;
//     createContainerForEachProduct.append(CreateImageElement);

//     const CreateProductElement = document.createElement("h2");
//     CreateProductElement.innerText = product.title;
//     createContainerForEachProduct.append(CreateProductElement);

//     const CreatePriceElement = document.createElement("h3");
//     CreatePriceElement.innerText = `${product.price} Eur`;
//     createContainerForEachProduct.append(CreatePriceElement);

//     const CreateDeleteButton = document.createElement("button");
//     CreateDeleteButton.innerText = "Ištrinti";
//     createContainerForEachProduct.append(CreateDeleteButton);
//   });
// }
