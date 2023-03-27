class ViewController {

  constructor() {
      window.addEventListener('load', this.handleHashChange);
      window.addEventListener('hashchange', this.handleHashChange);

      this.userManager = new UserManager();
      
      this.loginController = new LoginController (this.userManager);
      this.registerController = new RegisterController (this.userManager);
      this.logoutController = new LogoutController(this.userManager);
  }

  handleHashChange = () => {
      let hash = null;

      if(!fromLocalStorage('loggedUser')) {
        hash = assistHandleHashChange(PAGE_IDS_GUEST, LINK_GUEST)
        doNotShow(GUEST_DO_NOT_SEE)

      } else {
        hash = assistHandleHashChange(PAGE_IDS_LOGGED, LINK_LOGGED)
        doNotShow(LOGGED_DO_NOT_SEE)
      }
      let form = getElement(hash + 'Form')
      switch (hash) {
        case "register":
          this.registerController.render();
          
          break;
        case "login":
          this.loginController.render();
          
          break;
        case "home":
          break;
        case "something":
          break;
      }
  }

}

let viewController = new ViewController ();
viewController.logoutController.render();