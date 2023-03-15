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
  
  login = ({username, password}, myDataBase) => {
    let existingUser = fromLocalStorage(myDataBase).find( account => {
      account.username === username && account.password === password
    });

    if(existingUser) {
      this.loggedUser = existingUser;
      toLocalStorage("loggedUser",this.loggedUser);
    }
  }

  logout = () => removeFromLocalStorage("loggedUser");

  register = ({username, password, email}, myDataBase) => {
    let existingUser = fromLocalStorage(myDataBase).find( account => {
        account.username !== username && account.email !== email    
    });

    if (!existingUser) {
      this.dataBaseUsers.push(new User(username, password, email))
      toLocalStorage(myDataBase,this.dataBaseUsers);
      return true;
    }
    
    return false;
  } 
}

