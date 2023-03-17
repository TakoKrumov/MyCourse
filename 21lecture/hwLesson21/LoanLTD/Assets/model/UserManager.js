class User {
  constructor(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.moneyInBank = this.startingMoney();
    this.monthlyIncome = null;
    this.userRequestForLoan = [];
    this.userLoans = [];
    
  }

  startingMoney = () => Math.floor(Math.random()*10000).toFixed(2);
}

class UsersManager {
  constructor() {
    this.loggedUser = null;
    this.loanHistory = [];
    this.dataBaseLoanSharks = [];
  }

  dataBaseUsers = [
    new User("Admin", "Admin", "LoanSharkAdmin@loanShark.bite", null),
  ];

  checkIfSomeoneIsLogged = () => {
    let isThereSomeoneLogged = fromLocalStorage("loggedUser");
    if (isThereSomeoneLogged) {
      this.loggedUser = isThereSomeoneLogged;
      return true;
    }
    return false;
  };

  login = ({ username, password }, myDataBase) => {
    let existingUser = fromLocalStorage(myDataBase).find(
      (account) =>
        account.username === username && account.password === password
    );

    if (existingUser) {
      this.loggedUser = existingUser;
      toLocalStorage("loggedUser", this.loggedUser);
      return true;
    }

    return false;
  };

  register = ({ username, password, email }, myDataBase) => {
    console.log(fromLocalStorage(myDataBase));
    let existingUser = fromLocalStorage(myDataBase).some(
      (account) => account.username === username && account.email === email
    );

    if (!existingUser) {
      this.dataBaseUsers.push(new User(username, password, email));
      toLocalStorage(myDataBase, this.dataBaseUsers);
      return true;
    }

    return false;
  };
}

class LoanRequested {

  constructor(debtor, loanAmount, needToReturnInMonths, monthlyTax, loanInterest) {
    this.debtor = debtor;
    this.loanAmount = loanAmount;
    this.loanAmountWithInterest = (loanAmount*loanInterest).toFixed(2);
    this.needToReturnInMonths = needToReturnInMonths;
    this.monthlyTax = (this.loanAmountWithInterest/this.needToReturnInMonths).toFixed(2);
    this.isRequestApproved = false;
  }

  LoanRequest = () => {

  }

  
}
