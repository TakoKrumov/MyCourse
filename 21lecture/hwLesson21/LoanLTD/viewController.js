class ViewController {
  constructor() {
    this.usersManager = new UsersManager();
    this.loanManager = new LoanManager();

    window.addEventListener("load", this.usersManager.checkIfSomeoneIsLogged);
    window.addEventListener("load", this.handleHashChange);
    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", (event) => {
      event.preventDefault();

      if (!fromLocalStorage("MyDataBase")) {
        toLocalStorage("MyDataBase", this.usersManager.dataBaseUsers);
      }
    });
  }

  handleHashChange = () => {
    this.renderLogout();
    let pageIds = ["home"];
    let hash = location.hash.slice(1) || pageIds[0];

    if (this.usersManager.checkIfSomeoneIsLogged()) {
      pageIds = ["home", "loan"];
      let notToShowIDs = ["login", "register", "loginLink", "registerLink"];
      let navLinks = ["homeLink", "loanLink", "logoutLink"];
      doNotShow(notToShowIDs);
      assistHandleHashChange(pageIds, navLinks, hash);
      switch (hash) {
        case "home":
          this.renderHome();
          break;
        case "loan":
          this.renderLoan();
          break;
      }
    }

    if (!this.usersManager.checkIfSomeoneIsLogged()) {
      pageIds = ["home", "login", "register"];
      let notToShowIDs = ["loanLink", "logoutLink", "loan"];
      let navLinks = ["homeLink", "loginLink", "registerLink"];
      doNotShow(notToShowIDs);
      assistHandleHashChange(pageIds, navLinks, hash);
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
      }
    }
  };

  renderLoan = () => {
    let debtor = document.getElementById("inputFromLogin");
    debtor.value = fromLocalStorage("loggedUser").username;
  };

  renderLogout = () => {
    const logoutBtn = document.getElementById("logoutLink");
    logoutBtn.addEventListener("click", (event) => {
      event.preventDefault();
      removeFromLocalStorage("loggedUser");
      location.hash = "home";
      this.handleHashChange();
    });
  };

  renderLogin = () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsgLogin = document.querySelectorAll(".errorMsgLogin");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let username = event.target.elements.loginID.value;
      let password = event.target.elements.loginPassword.value;

      if (this.usersManager.login({ username, password }, "MyDataBase")) {
        location.hash = "home";
        loginForm.reset();
      } else {
        errorMsgLogin.forEach((element) => {
          element.classList.add("true");
        });
      }
    });
  };

  registerCheck = (event) => {
    let username = event.target.elements.registerID.value;
    let email = event.target.elements.registerEmail.value;
    let password = event.target.elements.registerPassword.value;
    let passwordConfirm = event.target.elements.registerConfirmPassword.value;
    if (!checkLength(username, 5, 12)) {
      errorMsg(
        "errorMsgUsername",
        "Username must be min 5 or max 12 characters"
      );
    }
    checkEmail(email);
    checkLength(password, 5, 12);
    checkPasswordsMatch(password, passwordConfirm);
    if (
      !!checkLength(username, 5, 12) ||
      !!checkEmail ||
      !!checkPasswordsMatch ||
      !!checkLength
    ) {
      return true;
    } else {
      return false;
    }
  };

  renderRegister = () => {
    const registerForm = document.getElementById("registerForm");
    const errorMsgLogin = document.querySelectorAll(".errorMsgReg");

    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let username = event.target.elements.registerID.value;
      let email = event.target.elements.registerEmail.value;
      let password = event.target.elements.registerPassword.value;

      if (this.registerCheck(event)) {
        if (
          this.usersManager.register(
            { username, password, email },
            "MyDataBase"
          )
        ) {
          location.hash = "login";
          registerForm.reset();
          return;
        } else {
          errorMsgLogin.forEach((element) => {
            element.classList.add("true");
          });
        }
      } else {
        errorMsgLogin.forEach((element) => {
          element.classList.add("true");
        });
      }
    });
  };

  renderHome = () => {
    let home = document.getElementById("homeMain");

    if (this.usersManager.checkIfSomeoneIsLogged()) {
      homeMain.innerHTML = "";
    } else {
      homeMain.innerHTML = `<div>Welcome to our Loan Shark Side If you wanna get some easy money Login if you dont have account?What are you waiting for got ot <a href="#register">Register</a>!</div>`;
    }
  };
}

const myController = new ViewController();
