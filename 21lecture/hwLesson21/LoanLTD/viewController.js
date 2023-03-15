class ViewController {

  constructor () {
    this.usersManager = new UsersManager ();
    this.loanManager = new LoanShark();
    window.addEventListener('load', this.handleHashChange);
    window.addEventListener('hashchange', this.handleHashChange);
    window.addEventListener('load', this.usersManager.checkIfSomeoneIsLogged)

  }

  handleHashChange = () => {
    const pageIds = ['home','loan'];
    let otherPages = ['login', 'register']

    let hash = location.hash.slice(1) || pageIds[0];

    if(hash === 'loan') {
        if(!this.usersManager.checkIfSomeoneIsLogged()) {
            location.hash = 'login';
            return; 
        } else {
          otherPages = [];
          return; 
        }
    }



    [...pageIds,...otherPages].forEach(pageId => {
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