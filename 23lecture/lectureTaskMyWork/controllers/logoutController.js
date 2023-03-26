class LogoutController {
  
  constructor(userManager) {
    this.userManager = userManager;
  }

  render = () => {
    let logOutBtn = getElement("logoutLink");
    const sessionId = fromLocalStorage('loggedUser').sessionId
    console.log;
    logOutBtn.onclick = (event) => {
      event.preventDefault();
      this.userManager.loggedUser = null;

      this.userManager
        .logout(sessionId)
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
