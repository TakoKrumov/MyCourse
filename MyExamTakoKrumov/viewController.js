class ViewController {
  constructor() {
    this.animalManager = new AnimalManager();
    this.donateManager = new DonateManager();
    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", this.handleHashChange);
    document
      .querySelector("#donaterName")
      .addEventListener("input", this.donaterNameAndSum);
    document
      .querySelector("#donaterSum")
      .addEventListener("input", this.donaterNameAndSum);
    document
      .querySelector("#donaterSubmit")
      .addEventListener("click", this.doDonationToAnimal);
  }

  handleHashChange = () => {
    let allPagesId = ["home", "adopted", "donate"];

    let currentPage = location.hash.slice(1) || "home";

    allPagesId.forEach((pageId) => {
      let page = document.querySelector(`#${pageId}`);

      if (currentPage === pageId) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });

    switch (currentPage) {
      case "home":
        this.renderHomePage();
        break;
      case "adopted":
        this.renderAdoptAnimalPage();
        break;
      case "donate":
        break;
    }
  }; // end of handle hash change

  adoptOrLeaveAnimal = (animal, event) => {
    event.preventDefault();
    let element = event.currentTarget;

    if (element.textContent === "Adopt") {
      element.textContent = "Leave";
      animal.timeOfAdoption = `${new Date().toLocaleDateString()}\n${new Date().toLocaleTimeString()}`;
      this.animalManager.adoptedAnimals(animal);
      this.renderAdoptAnimalPage();
      this.renderHomePage();
    } else {
      element.textContent = "Adopt";
      this.animalManager.leaveAnimals(animal);
      this.renderAdoptAnimalPage();
      this.renderHomePage();
    }
  };

  goToDonatePage = (event) => {
    event.preventDefault();

    location.hash = "#donate";
    let donationForm = document.querySelector("#donationForm");
    donationForm.reset();
    let lookingForName = event.currentTarget.parentNode;
    let animalName = lookingForName
      .querySelector(".animalName")
      .textContent.slice(5)
      .trim();
    let newHeader = document.querySelector("h1");

    newHeader.textContent = `How much do you want to donate to ${animalName}`;
  };

  donaterNameAndSum = (event) => {
    event.preventDefault();
    let donateSubmitBtn = document.querySelector("#donaterSubmit");
    let donatingUser = document.querySelector("#donaterName").value.trim();
    let donatingSum = parseInt(
      document.querySelector("#donaterSum").value.trim()
    );
    let animalName = document
      .querySelector("#donationForm h1")
      .textContent.slice(34)
      .trim();

    if (donatingUser && donatingSum && animalName !== "a animal!") {
      donateSubmitBtn.disabled = false;
    } else {
      donateSubmitBtn.disabled = true;
    }
  };

  doDonationToAnimal = (event) => {
    event.preventDefault();
    let donateSubmitBtn = document.querySelector("#donaterSubmit");
    let donatingUser = document.querySelector("#donaterName").value;
    let donatingSum = document.querySelector("#donaterSum").value;
    let animalName = document
      .querySelector("#donationForm h1")
      .textContent.slice(34)
      .trim();

    let date = `${new Date().toLocaleDateString()}\n${new Date().toLocaleTimeString()}`;

    let animalToGetDonation = this.animalManager.animalsList.find((animal) =>
      animal.name.includes(`${animalName}`)
    );

    if (
      animalToGetDonation.neededAmount -
        animalToGetDonation.currentlyRisedAmount >=
      parseInt(donatingSum)
    ) {
      animalToGetDonation.currentlyRisedAmount += parseInt(donatingSum);
    } else {
      let newDonatingSum =
        animalToGetDonation.neededAmount -
        animalToGetDonation.currentlyRisedAmount;
      alert(
        `The current sum you want to donate ${parseInt(
          donatingSum
        )}lv. is too much for this animal he need only ${parseInt(
          newDonatingSum
        )}lv. so you shall not be charged with the difference!`
      );
      donatingSum = newDonatingSum;
      animalToGetDonation.currentlyRisedAmount += parseInt(newDonatingSum);
    }

    this.donateManager.listOfDonation.push([
      date,
      donatingUser,
      parseInt(donatingSum),
    ]);

    donateSubmitBtn.disabled = true;
    let newHeader = document.querySelector("h1");
    newHeader.textContent = `How much do you want to donate to a animal!`;
    let donationForm = document.querySelector("#donationForm");
    donationForm.reset();
    this.renderDonationPage();
  };

  renderDonationPage = () => {
    this.donateManager.donationHistory();
  };

  searchByInputName = (event) => {
    event.preventDefault();

    let inputValue = event.currentTarget.value.trim();
    let type = event.currentTarget.nextElementSibling.value.trim();
    let typeFilter = this.animalManager.searchViaTitleAndType(inputValue, type);
    this.renderAnimal(typeFilter);
  };

  searchBySelectedType = (event) => {
    event.preventDefault();

    let inputValue = event.currentTarget.previousElementSibling.value.trim();
    let type = event.currentTarget.value.trim();
    let typeFilter = this.animalManager.searchViaTitleAndType(inputValue, type);
    this.renderAnimal(typeFilter);
  };

  renderHomePage = (animalList = this.animalManager.animalsList) => {
    let page = document.querySelector("#home");

    let inputName = page.querySelector("#searchByName");
    inputName.removeEventListener("input", this.searchByInputName);
    inputName.addEventListener("input", this.searchByInputName);

    let selectMenu = page.querySelector("#selectByType");
    selectMenu.innerHTML = ""; //new to fix select menu
    let startForSelectMenu = document.createElement("option");
    startForSelectMenu.textContent = "Choose type...";
    startForSelectMenu.selected = "true";
    startForSelectMenu.value = "";
    selectMenu.appendChild(startForSelectMenu);

    this.animalManager.typeOfAnimal.sort().forEach((element) => {
      startForSelectMenu = "";
      let newOption = document.createElement("option");
      selectMenu.appendChild(newOption);
      newOption.textContent = element;
    });

    selectMenu.removeEventListener("change", this.searchBySelectedType);
    selectMenu.addEventListener("change", this.searchBySelectedType);
    this.renderAnimal(animalList);
  };

  renderAnimal = (animalList) => {
    let homeContainer = document.querySelector("#home .container");
    homeContainer.innerHTML = "";

    animalList.forEach((animal) => {
      let cardContainer = document.createElement("div");
      cardContainer.classList.add("cardContainer");

      let animalImage = document.createElement("img");
      animalImage.classList.add("animalImage");
      animalImage.src = animal.image;

      let animalName = document.createElement("div");
      animalName.classList.add("animalName");
      animalName.textContent = `Name: ${animal.name}`;

      let animalFamily = document.createElement("div");
      animalFamily.classList.add("animalFamily");
      animalFamily.textContent = `Type: ${animal.type}`;

      let animalBread = document.createElement("div");
      animalBread.classList.add("animalBread");
      animalBread.textContent = `Bread: ${animal.bread}`;

      let animalAge = document.createElement("div");
      animalAge.classList.add("animalAge");
      animalAge.textContent = `age: ${animal.age}`;

      let neededSum = document.createElement("div");
      neededSum.classList.add("neededSum");
      neededSum.textContent =
        animal.currentlyRisedAmount < animal.neededAmount
          ? `Needed Sum: ${animal.currentlyRisedAmount}lv./${animal.neededAmount}lv.`
          : `Needed Sum Reached: ${animal.currentlyRisedAmount}lv./${animal.neededAmount}!`;

      let adoptBtn = document.createElement("button");
      adoptBtn.addEventListener(
        "click",
        this.adoptOrLeaveAnimal.bind(this, animal)
      );
      adoptBtn.classList.add("adoptBtn");
      adoptBtn.textContent = animal.isAdopted === false ? "Adopt" : "Leave";
      cardContainer.style.display =
        animal.isAdopted === false ? "grid" : "none"; //not to change places from original position when adopted

      let donateBtn = document.createElement("button");
      donateBtn.style.visibility =
        animal.currentlyRisedAmount < animal.neededAmount
          ? "visible"
          : "hidden";
      donateBtn.classList.add("donateBtn");

      donateBtn.textContent = "Donate";
      donateBtn.addEventListener("click", this.goToDonatePage);

      cardContainer.append(
        animalImage,
        animalName,
        animalFamily,
        animalBread,
        neededSum,
        adoptBtn,
        donateBtn
      );

      homeContainer.appendChild(cardContainer);
    });
  };

  renderAdoptAnimalPage = (animalList = this.animalManager.allAdopted) => {
    let homeContainer = document.querySelector("#adopted .container");
    homeContainer.innerHTML = "";

    animalList.forEach((animal) => {
      let cardContainer = document.createElement("div");
      cardContainer.classList.add("cardContainer");

      let animalImage = document.createElement("img");
      animalImage.classList.add("animalImage");
      animalImage.src = animal.image;

      let animalName = document.createElement("div");
      animalName.classList.add("animalName");
      animalName.textContent = `Name: ${animal.name}`;

      let animalFamily = document.createElement("div");
      animalFamily.classList.add("animalFamily");
      animalFamily.textContent = `Type: ${animal.type}`;

      let animalBread = document.createElement("div");
      animalBread.classList.add("animalBread");
      animalBread.textContent = `Bread: ${animal.bread}`;

      let animalAge = document.createElement("div");
      animalAge.classList.add("animalAge");
      animalAge.textContent = `Age: ${animal.age}`;

      let neededSum = document.createElement("div");
      neededSum.classList.add("neededSum");
      // let timeStamp = `${new Date().toLocaleDateString()}\n${new Date().toLocaleTimeString()}`;
      neededSum.textContent = `Adopted at:${animal.timeOfAdoption}`;

      let adoptBtn = document.createElement("button");
      adoptBtn.addEventListener(
        "click",
        this.adoptOrLeaveAnimal.bind(this, animal)
      );
      adoptBtn.classList.add("adoptBtn");
      adoptBtn.textContent = animal.isAdopted === false ? "Adopt" : "Leave";

      let donateBtn = document.createElement("button");
      donateBtn.classList.add("donateBtn");
      donateBtn.textContent = "Donate";
      donateBtn.style.visibility = "hidden";

      cardContainer.append(
        animalImage,
        animalName,
        animalFamily,
        animalBread,
        neededSum,
        adoptBtn,
        donateBtn
      );

      homeContainer.appendChild(cardContainer);
    });
  };
}

let myController = new ViewController();
