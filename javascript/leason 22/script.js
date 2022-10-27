// Get github lodash issues (60 calls per 1hrs)
// Filter by state.
// Sort by: created updated, comments
// Poslapiavimas

// https://docs.github.com/en/rest/issues/issues
// https://github.com/lodash/lodash

// const getGitHubApiData = fetch(
//   "https://api.github.com/repos/lodash/lodash/issues"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log("text", error));

// const BASE_URL = "https://api.github.com/repos/lodash/lodash/issues";
// let STATE_TYPE = {
//   closed: "closed",
//   open: "open",
//   all: "all",
// };

// let closedButton = document.getElementById("closed");
// closedButton.setAttribute("closed", "closed");
// closedButton.addEventListener("click", () => filterIssues(STATE_TYPE.closed));

// let openButton = document.getElementById("open");
// openButton.setAttribute("open", "open");
// openButton.addEventListener("click", () => filterIssues(STATE_TYPE.open));

// let allButton = document.getElementById("all");
// allButton.setAttribute("all", "all");
// allButton.addEventListener("click", () => filterIssues(STATE_TYPE.all));

// function filterIssues(state) {
//   console.log(state);
//   fetch(`${BASE_URL}?state=${state}`)
//     .then((response) => response.json())
//     .then((data) => {
//       renderData(data);
//     })
//     .catch((error) => console.log("text", error));
// }

// function renderData(data) {
//   data.sort((a, b) => {
//     return a.created_at - b.created_at;
//   });
//   console.log(data);
// }

const container = document.createElement("div");
container.setAttribute("id", "container");
document.body.append(container);

const createTableSkeleton = () => {
  const thID = document.createElement("th");
  thID.innerText = "ID";
  const thImage = document.createElement("th");
  thImage.innerText = "Image";
  const thFirst_NAME = document.createElement("th");
  thFirst_NAME.innerText = "First mame";
  const thLast_NAME = document.createElement("th");
  thLast_NAME.innerText = "Last mame";
  const thCity = document.createElement("th");
  thCity.innerText = "City";
  const thFav_color = document.createElement("th");
  thFav_color.innerText = "Fav_color";

  const tr = document.createElement("tr");
  tr.append(thID, thImage, thFirst_NAME, thLast_NAME, thCity, thFav_color);

  const tHead = document.createElement("thead");
  tHead.append(tr);

  const table = document.createElement("table");
  table.append(tHead, document.createElement("tbody"));

  container.append(table);
};

createTableSkeleton();

let closedButton = document.getElementById("closed");
closedButton.setAttribute("closed", "closed");
closedButton.addEventListener("click", fetchData);

async function fetchData() {
  let response = await fetch("https://magnetic-melon-yam.glitch.me")
    .then((response) => response.json())
    .then((data) => {
      renderData(data);
    })
    .catch((error) => console.log(error));
}

function renderData(data) {
  data.forEach((element) => {
    const getID = element.id;
    const image = element.image;
    const name = element.name;
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ").slice(-1).join();
    const city = element.city;
    const fav_color = element.fav_color;
  });
}
