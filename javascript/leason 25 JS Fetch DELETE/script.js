const Base_URL = "https://golden-whispering-show.glitch.me";

const createContainer = document.createElement("div");
createContainer.setAttribute("id", "container");
document.body.append(createContainer);

const getProducts = fetch("https://golden-whispering-show.glitch.me")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Erorr(res.statusText);
    }
  })
  .then((data) => {
    renderGETData(data);
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

function renderGETData(data) {
  data.forEach((product) => {
    const createContainerForEachProduct = document.createElement("div");
    createContainerForEachProduct.setAttribute("class", "wrap");
    createContainer.append(createContainerForEachProduct);

    const CreateImageElement = document.createElement("img");
    CreateImageElement.src = product.image;
    createContainerForEachProduct.append(CreateImageElement);

    const CreateProductElement = document.createElement("h2");
    CreateProductElement.innerText = product.title;
    createContainerForEachProduct.append(CreateProductElement);

    const CreatePriceElement = document.createElement("h3");
    CreatePriceElement.innerText = `${product.price} Eur`;
    createContainerForEachProduct.append(CreatePriceElement);

    const id = product.id;
    console.log(id);

    const CreateDeleteButton = document.createElement("button");
    CreateDeleteButton.setAttribute("class", "istrinti");
    CreateDeleteButton.innerText = "Ištrinti";
    createContainerForEachProduct.append(CreateDeleteButton);
    console.log(CreateDeleteButton);
    CreateDeleteButton.addEventListener("click", () => {
      handleDelete(id);
    });
  });
}

function handleDelete(id) {
  fetch(`https://golden-whispering-show.glitch.me/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Erorr(res.statusText);
      }
    })
    .then((data) => {
      location.reload();
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });

  //
  //   try {
  //     const response = await fetch(
  //       `https://golden-whispering-show.glitch.me/${id}`,
  //       {
  //         method: "delete",
  //       }
  //     );

  //     if (!response.ok) {
  //       const message = "Error with Status Code: " + response.status;
  //       throw new Error(message);
  //     }

  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log("Error: " + err);
  //   }
}
