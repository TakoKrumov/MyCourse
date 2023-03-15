class User {

  constructor(name, password, email, yearIncome) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.yearIncome = yearIncome;
    this.isUserLogged = false;    
    this.userLoans = [];
  }

}

class UsersManager {

  constructor () {
    this.loggedUser = null;
    this.loanHistory = [];
    this.dataBaseLoanSharks = [];

  }

  dataBaseUsers = [new User("Admin","Admin","LoanSharkAdmin@loanShark.bite",null)];

  login = () => {

  }

  register = ({username, password, email}) => {
    
    
  } 
}

