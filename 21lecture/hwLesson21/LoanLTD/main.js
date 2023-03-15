class ViewController {

  constructor () {
    window.addEventListener('load', this.handleHashChange);
    window.addEventListener('hashchange', this.handleHashChange);
    this.usersManager = new UsersManager ();
    this.loanManager = new LoanShark();
  }

  handleHashChange = () => {
    const pageIds = ['home', 'login', 'register','loan'];

    let hash = location.hash.slice(1) || pageIds[0];

    // if(hash === 'home') {
    //     if(!userManager.loggedUser || !userManager.loggedUser.pass) {
    //         location.hash = 'login';
    //         return; 
    //     }
    // }

    pageIds.forEach(pageId => {
        let page = document.getElementById(pageId);

        if(pageId === hash) {
          page.style.display = 'flex';
        } else {
          page.style.display = 'none';
        }

    });

    switch(hash) {

      case 'home':
        break;
      case 'login':
        break;
      case 'register':
        break;
      case 'loan':
        break;
    }
  }


}

const myController = new ViewController();

toLocalStorage("MyDataBase",myController.usersManager.dataBaseUsers);