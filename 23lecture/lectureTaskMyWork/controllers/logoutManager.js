class LogoutController {
  
  constructor(userManager) {
    this.userManager = userManager;
  }

  render = () => {
    let logOutBtn = getElement("logoutLink");

    console.log;
    logOutBtn.onclick = (event) => {
      event.preventDefault();
      this.userManager.loggedUser = null;
      const id = fromLocalStorage("loggedUser").sessionId;
      this.userManager
        .logout(id)
        .then((data) => {
          removeFromLocalStorage("loggedUser");
          viewController.handleHashChange();
          location.hash = "login";
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };
}
