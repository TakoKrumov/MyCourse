class LogoutController {
  
  constructor(userManager) {
    this.userManager = userManager;
  }

  render = () => {
    let logOutBtn = getElement("logoutLink");
    
    logOutBtn.onclick = (event) => {
      event.preventDefault();
      const sessionId = fromLocalStorage('loggedUser').sessionId
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
