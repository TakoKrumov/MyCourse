class ViewController {
  constructor() {
    this.usersManager = new UsersManager();
    this.loanManager = new LanderManager();
    window.addEventListener("load", this.usersManager.checkIfSomeoneIsLogged);
    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", this.handleHashChange);

    window.addEventListener("load", (event) => {
      event.preventDefault();
      keepLocalStorageUpdate(
        "loanRequestDataBase",
        myController.loanManager.loanDataBase
      );
      keepLocalStorageUpdate(
        "MyDataBase",
        myController.usersManager.myDataBase
      );
    });
  }

  handleHashChange = () => {
    let pagesId = ["home"];
    let linksId = ["homeLink"];
    let hash = window.location.hash.slice(1) || pagesId[0];

    if (!fromLocalStorage("loggedUser")) {
      pagesId = ["home", "login", "register"];
      linksId = ["homeLink", "loginLink", "registerLink"];
      let notToShowIDs = ["loanLink", "profileLink", "loan", "profile"];
      doNotShow(notToShowIDs);
      assistHandleHashChange(pagesId, linksId, hash);
    } else {
      pagesId = ["home", "loan", "profile"];
      linksId = ["homeLink", "loanLink", "profileLink"];
      let notToShowIDs = ["login", "register", "loginLink", "registerLink"];
      doNotShow(notToShowIDs);
      assistHandleHashChange(pagesId, linksId, hash);
    }

    switch (hash) {
      case "home":
        this.renderHome();
        break;
      case "login":
        this.renderLogin();
        break;
      case "register":
        this.renderRegister();
        break;
      case "loan":
        this.renderLoan();
        break;
      case "profile":
        this.renderProfile();
        break;
    }
  };

  renderHome = () => {
    const noLoggedUser = document.getElementById("welcomeMsg");
    const whenUserLogged = document.getElementById("homeForLoggedUsers");
    const whenAdminIsLogged = document.getElementById("ifAdminLogged");

    if (!fromLocalStorage("loggedUser")) {
      noLoggedUser.style.display = "inline-block";
      whenUserLogged.style.display = "none";
      whenAdminIsLogged.style.display = "none";
    } else if (fromLocalStorage("loggedUser").accName === "Admin") {
      noLoggedUser.style.display = "none";
      whenUserLogged.style.display = "none";
      whenAdminIsLogged.style.display = "inline-block";
      tableUpdate("loggedUser", "loanRequestDataBase");
    } else {
      noLoggedUser.style.display = "none";
      whenUserLogged.style.display = "inline-block";
      whenAdminIsLogged.style.display = "none";
      tableUpdate("loggedUser", "loanRequestDataBase");
      let promise = this.loanManager.loanApproval();
      if (!fromLocalStorage("offers")) {
        promise
          .then((results) => {
            tableUpdate("loggedUser", "loanRequestDataBase", results);
            return results;
          })
          .then((data) => {
            let tbApprovedHead = document.getElementById("offerTable");
            tbApprovedHead.style.display = "block";
            let approvedLoans = fromLocalStorage("approvedLoans");
            approvedLoans.forEach((loan) => {
              let banks = this.loanManager.landerList;
              let offers = [];
              banks.forEach((bank) => {
                if (bank.landingCapability >= loan.loanInterestRate) {
                  let newRow = createElement("tr", "tableBodyApproved");
                  console.log(loan.loanId);
                  newRow.id = `${loan.loanId}+${bank.landerName}`;
                  let loanGiver = createElement("td", newRow.id);
                  loanGiver.textContent = bank.landerName;
                  let loanAmount = createElement("td", newRow.id);
                  loanAmount.textContent = loan.loanRequest;
                  let loanMonthlyPayment = createElement("td", newRow.id);
                  loanMonthlyPayment.textContent =
                    loan.loanRequestMonthlyPayment;
                  let months = createElement("td", newRow.id);
                  months.textContent = loan.loanReturningPeriod;
                  let total = createElement("td", newRow.id);
                  total.textContent = loan.loanTotalReturn;
                  let btnTakeOffer = createElement("span", newRow.id);
                  btnTakeOffer.innerHTML = `<button class="takeOffer" id="${loan.loanId}+${bank.landerName}btn" 
              >Take Offer<span class="tooltipText">
              Press to take offer</span></button>`;
                  btnTakeOffer = document.getElementById(
                    `${loan.loanId}+${bank.landerName}btn`
                  );

                  offers.push(`${loan.loanId}+${bank.landerName}`);
                  toLocalStorage("offers", offers);
                  btnTakeOffer.addEventListener("click", (event) => {
                    let rowID = event.target.id.slice(0, -3);
                    let tbBody = document.querySelector("#tableBodyApproved");
                    for (let i = 0; i < tbBody.children.length; i++) {
                      if (tbBody.children[i].id !== rowID) {
                        let lastOffer = fromLocalStorage("offers").reduce(
                          (element, accumulator) => {
                            return element === accumulator
                              ? `${rowID}`
                              : `${rowID}`;
                          },
                          `${rowID}`
                        );
                        console.log(lastOffer);
                        tbBody.removeChild(tbBody.children[i]);
                        toLocalStorage("offers", lastOffer);
                      } else {
                        continue;
                      }
                    }
                  });
                }
              });
            });
          })
          .catch((rejected) =>
            tableUpdate("loggedUser", "loanRequestDataBase", rejected)
          );
      } else {


      }
    }
  };

  renderLoan = () => {
    const debtor = document.getElementById("inputFromLogin");
    debtor.value = fromLocalStorage("loggedUser").accName;
    debtor.setAttribute("value", debtor.value);
    const monthlyIncome = document.getElementById("inputFromMonthlyIncome");
    monthlyIncome.value = fromLocalStorage("loggedUser").accMonthlyIncome;
    monthlyIncome.setAttribute("value", monthlyIncome.value);

    const loanForm = document.getElementById("loanForm");
    loanForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let requestForLoan = Number(
        event.target.elements.loanRequested.value
      ).toFixed(2);
      let requestedPeriodForReturn =
        event.target.elements.returningPeriod.value;
      if (requestForLoan > 1000) {
        let newLoanRequest = this.loanManager.askForLoan(
          requestForLoan,
          requestedPeriodForReturn
        );
        this.loanManager.loanDataBase = fromLocalStorage("loanRequestDataBase");
        this.loanManager.loanDataBase.push(newLoanRequest);
        toLocalStorage("loanRequestDataBase", this.loanManager.loanDataBase);
        loanForm.reset();
        location.hash = "home";
      }
    });
  };

  renderRegister = () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let accName = event.target.elements.registerID.value;
      let accEmail = event.target.elements.registerEmail.value;
      let registerIncome = event.target.elements.registerIncome.value;
      let accPassword = event.target.elements.registerPassword.value;
      let accPassConf = event.target.elements.registerConfirmPassword.value;

      let firstCheck = registerCheckForm(accEmail, accPassword, accPassConf);

      let secondCheck = this.usersManager.register(accName, accEmail);

      if (firstCheck && secondCheck) {
        this.usersManager.myDataBase.push(
          new User(
            `${accName}`,
            `${accEmail}`,
            `${accPassword}`,
            Number(registerIncome).toFixed(2)
          )
        );
        toLocalStorage("MyDataBase", this.usersManager.myDataBase);
        this.handleHashChange();
        registerForm.reset();
        location.hash = "login";
      }
    });
  };

  renderProfile = () => {
    const logout = document.getElementById("logout");
    logout.addEventListener("click", (event) => {
      event.preventDefault();
      removeFromLocalStorage("loggedUser");
      this.handleHashChange();
      location.hash = "home";
    });
  };

  renderLogin = () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let accName = event.target.elements.loginID.value;

      let accPassword = event.target.elements.loginPassword.value;

      if (this.usersManager.login({ accName, accPassword }, "MyDataBase")) {
        loginForm.reset();
        this.handleHashChange();
        location.hash = "home";

        return;
      }
    });
  };
}

const myController = new ViewController();
