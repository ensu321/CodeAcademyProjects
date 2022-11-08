const Base_URL = "https://zany-skitter-caper.glitch.me/experiences";

const getExperience = fetch("https://zany-skitter-caper.glitch.me/experiences")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Erorr(res.statusText);
    }
  })
  .then((data) => {
    renderExperienceData(data);
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

const getSkills = fetch("https://zany-skitter-caper.glitch.me/skills")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Erorr(res.statusText);
    }
  })
  .then((data) => {
    renderSkillsData(data);
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

function renderExperienceData(data) {
  const getexperienceCardsContainer =
    document.getElementById("experienceCards");

  data.forEach((experience) => {
    const wrapGeneratedExperienceCard = document.createElement("div");
    wrapGeneratedExperienceCard.setAttribute(
      "class",
      "wrapGeneratedExperienceCard"
    );
    getexperienceCardsContainer.append(wrapGeneratedExperienceCard);

    const wrapExperienceYersAndCompany = document.createElement("div");
    wrapExperienceYersAndCompany.setAttribute(
      "class",
      "wrapExperienceYersAndCompany"
    );
    wrapGeneratedExperienceCard.append(wrapExperienceYersAndCompany);

    const wrapExperiencePositionAndCompany = document.createElement("div");
    wrapExperiencePositionAndCompany.setAttribute(
      "class",
      "wrapExperiencePositionAndCompany"
    );
    wrapGeneratedExperienceCard.append(wrapExperiencePositionAndCompany);

    const yearsP = document.createElement("p");
    yearsP.setAttribute("class", "years");
    yearsP.innerText = `${experience.startYear} - ${experience.finishYear}`;
    wrapExperienceYersAndCompany.append(yearsP);

    const companyP = document.createElement("p");
    companyP.setAttribute("class", "company");
    companyP.innerText = `${experience.companyName}`;
    wrapExperienceYersAndCompany.append(companyP);

    const positionH3 = document.createElement("h3");
    positionH3.setAttribute("class", "position");
    positionH3.innerText = `${experience.position}`;
    wrapExperiencePositionAndCompany.append(positionH3);

    const descriptionP = document.createElement("p");
    descriptionP.setAttribute("class", "description");
    descriptionP.innerText = `${experience.description}`;
    wrapExperiencePositionAndCompany.append(descriptionP);
  });
}

function renderSkillsData(data) {
  const getSkillsContainer = document.getElementById("skills");

  data.forEach((skill) => {
    const createSkillDiv = document.createElement("div");
    createSkillDiv.setAttribute("class", "skillWrap");
    getSkillsContainer.append(createSkillDiv);

    const createTitleP = document.createElement("P");
    createTitleP.setAttribute("class", "title");
    createTitleP.innerText = `${skill.title}`;
    createSkillDiv.append(createTitleP);

    const createProgressWrap = document.createElement("div");
    createProgressWrap.setAttribute("class", "progressWrap");
    createSkillDiv.append(createProgressWrap);

    const createProgressBar = document.createElement("div");
    createProgressBar.setAttribute("class", "progressBar");
    createProgressBar.style.width = `${skill.level}%`;
    createProgressWrap.append(createProgressBar);
  });
}
