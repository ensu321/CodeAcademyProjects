// const carts = fetch("https://dummyjson.com/carts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((result) => {
//     result.carts.forEach((element) => {
//       const listItem = document.createElement("li");
//       document.body.appendChild(listItem);
//       listItem.innerText = `total: ${element.total} id: ${element.id}`;
//       const id = element.id;
//       listItem.addEventListener("click", () => openDetails(id));
//     });
//   })
//   .catch((error) => console.log("text", error));

// const container = document.getElementById("container");

// function openDetails(id) {
//   container.innerHTML = "";
//   fetch(`https://dummyjson.com/carts/${id}`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.products.forEach((element) => {
//         const getTitle = element.title;

//         const newDIV = document.createElement("div");
//         newDIV.setAttribute("x", 1);

//         container.append(newDIV);

//         newDIV.innerText = getTitle;
//       });
//     });
// }
const container = document.getElementById("container");

const Person = fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data.results);
    data.results.forEach((element) => {
      const UserPictureUrl = element.picture.large;
      const userName = element.name.first;
      const age = element.dob.age;
      const email = element.email;
      document
        .querySelector("#generate")
        .addEventListener("click", () =>
          renderProfile(UserPictureUrl, userName, age, email)
        );
    });
  })
  .catch((error) => console.log("text", error));

function renderProfile(UserPictureUrl, userName, age, email) {
  const wrapContainer = document.createElement("div");
  wrapContainer.setAttribute("id", "wrapContainer");
  container.appendChild(wrapContainer);

  const pictureElement = document.createElement("img");
  pictureElement.src = UserPictureUrl;

  wrapContainer.appendChild(pictureElement);

  const wrapH2sAndEmail = document.createElement("div");
  wrapH2sAndEmail.setAttribute("id", "wrapH2sAndEmail");
  wrapContainer.appendChild(wrapH2sAndEmail);

  const wrapH2s = document.createElement("div");
  wrapH2s.setAttribute("id", "wrapH2s");
  wrapH2sAndEmail.appendChild(wrapH2s);

  const nameElement = document.createElement("h2");
  nameElement.innerText = userName;
  nameElement.setAttribute("id", "nameElement");
  wrapH2s.appendChild(nameElement);

  const ageElement = document.createElement("h2");
  ageElement.innerText = `${age} years old`;
  ageElement.setAttribute("id", "ageElement");
  wrapH2s.appendChild(ageElement);

  const emaillement = document.createElement("h3");
  emaillement.innerText = email;
  emaillement.setAttribute("id", "emaillement");
  wrapH2sAndEmail.appendChild(emaillement);
}
