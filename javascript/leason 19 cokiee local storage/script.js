// Į localStorage, įrašykite savo vardą, pavardę, aprašymą, ir nuorodą į profilio nuotrauką. Informaciją įrašykite pirmą kartą užkrovus puslapį, o vėliau ją atvaizduokite.
//2 uzduottys
// const profileInfo = {
//   firstName: "aleksas",
//   lastName: "Snow",
//   picture: "https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg",
//   description:
//     "Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character.",
// };
// localStorage.setItem("profile", JSON.stringify(profileInfo));

// const renderProfileCard = (profile) => {
//   const img = document.createElement("img");
//   (img.width = "200"), (img.src = profile.picture);
//   img.alt = `${profile.firstName} ${profileInfo.lastName} profile picture`;
//   const name = document.createElement("h4");
//   name.innerText = `${profile.firstName} ${profile.firstName}`;
//   const description = document.createElement("h5");
//   description.innerText = profile.description;
//   const card = document.createElement("div");
//   card.append(img, name, description);
//   document.body.append(card);
// };

// const profileInfoFromLocalStorage = JSON.parse(localStorage.getItem("profile"));
// renderProfileCard(profileInfoFromLocalStorage);

//3 uzduotys Sukurkite puslapį, kuriame būtų forma su vienu input - fullName. Įvedus vardą ir pavardę, juos padalina į dvi dalis (name ir surname). Vardą ir pavardę įdeda į objektą, o objektą - į array. Šį array išsaugo localStorage. Po forma sukurkite lentelę joje atvaizduokite informaciją iš localStorage.

const LOCAL_STORAGE_ITEM_KEY = "users";

const renderUserTable = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEM_KEY));
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  users &&
    users.forEach((user) => {
      const name = document.createElement("td");
      name.innerText = user.name;

      const surname = document.createElement("td");
      surname.innerText = user.surname;

      const tr = document.createElement("tr");
      tr.append(name, surname);
      tbody.append(tr);
    });
};

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = event.target.querySelector('input[name="name"]').value;
  const [name, surname] = fullName.split(" ");

  const usersInlocalStorage = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_ITEM_KEY)
  );
  if (usersInlocalStorage.length) {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([...usersInlocalStorage, { name, surname }])
    );
  } else {
    localStorage.setItem(
      LOCAL_STORAGE_ITEM_KEY,
      JSON.stringify([{ name, surname }])
    );
  }
  renderUserTable();
});

renderUserTable();
