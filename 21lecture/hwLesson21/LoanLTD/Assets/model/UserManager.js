class User {

  constructor(username, password, email, yearIncome) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.yearIncome = null;
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
  
  checkIfSomeoneIsLogged = () => {
    let isThereSomeoneLogged = fromLocalStorage("loggedUser");
    if(isThereSomeoneLogged) {
      this.loggedUser = isThereSomeoneLogged;
      return true;
    }
    return false;
  }

  login = ({username, password}, myDataBase) => {
    let existingUser = fromLocalStorage(myDataBase).find( account =>
      account.username === username && account.password === password)

    if(existingUser) {
      this.loggedUser = existingUser;
      toLocalStorage("loggedUser",this.loggedUser);
      return true;
    }

    return false;
   
  }

  register = ({username, password, email}, myDataBase) => {
    console.log(fromLocalStorage(myDataBase));
    let existingUser = fromLocalStorage(myDataBase).some( account =>
      account.username === username && account.email === email);

    if (!existingUser) {
      
      this.dataBaseUsers.push(new User(username, password, email))
      toLocalStorage(myDataBase,this.dataBaseUsers);
      return true;
    }
    
    return false;
  } 
}

