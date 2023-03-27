class ViewController {

  constructor() {
      window.addEventListener('load', this.handleHashChange);
      window.addEventListener('hashchange', this.handleHashChange);

      this.userManager = new UserManager();
      this.partiesManager = new PartiesManager();
      this.detailsManager = new DetailsManager();
      this.resultsManager = new ResultManager(this.detailsManager);
      this.resultsController = new ResultsController(this.resultsManager); 
      this.loginController = new LoginController (this.userManager);
      this.registerController = new RegisterController (this.userManager);
      this.logoutController = new LogoutController(this.userManager);
      this.detailsController = new DetailsController(this.userManager,  this.resultsManager, this.resultsController)
      this.listingController = new ListingController(this.partiesManager, this.detailsManager, this.detailsController, this.userManager)
         
  }

  handleHashChange = () => {
      let hash = null;
      const errorPageGuest = getElement('errorPageGuest')
      const errorPageUser = getElement('errorPageUser')
      if(!fromLocalStorage('loggedUser')) {
        hash = assistHandleHashChange(PAGE_IDS_GUEST, LINK_GUEST)
        doNotShow(GUEST_DO_NOT_SEE)
        errorPageGuest.style.display = 'flex'
        errorPageUser.style.display = 'none'
      } else {
        hash = assistHandleHashChange(PAGE_IDS_LOGGED, LINK_LOGGED)
        doNotShow(LOGGED_DO_NOT_SEE)
        errorPageGuest.style.display = 'none'
        errorPageUser.style.display = 'flex'
        errorPageUser.innerHTML = `<div id="errorPageUser" class="errorPageMsg">Something went wrong with your request <span class="usernameHolder">${fromLocalStorage('loggedUser').username}</span>!<br>Go to <a href="#home">Home Page</div>`
      }
   
      switch (hash) {
        case "register":
          this.registerController.render();
          break;
        case "login":
          this.loginController.render();
          break;
        case "home":
          this.listingController.render();
          break;
        case "something":
          break;
      }
  }

}

let viewController = new ViewController ();
viewController.logoutController.render();