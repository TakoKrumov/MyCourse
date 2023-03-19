class User {
  constructor(accName, accEmail, accPassword, accMonthlyIncome) {
    this.accName = accName;
    this.accEmail = accEmail;
    this.accPassword = accPassword;
    this.accMoneyInBank = Math.floor(Math.random() * 10000).toFixed(2);
    this.accMonthlyIncome = accMonthlyIncome;
    this.accYearMaking = accMonthlyIncome*12;
    this.isLogged = false;
    this.accLoanHistory = [];
    this.timeSpendOnOurPlatform = 0; // increase by 1 means 1 month have passed
  }
}

class UsersManager {
  constructor() {
    this.loggedUser = !fromLocalStorage("loggedUser")
      ? null
      : fromLocalStorage("loggedUser");
    this.loanHistory = [];
  }

  myDataBase = [new User("Admin", "adminskiMail@admin.com", "Admin")];

  checkIfSomeoneIsLogged = () => {
    let isThereSomeoneLogged = fromLocalStorage("loggedUser");
    if (isThereSomeoneLogged) {
      this.loggedUser = isThereSomeoneLogged;
      return true;
    }
    return false;
  };

  login = ({accName,accPassword} , myDataBase) => {
    
    let existingUser = fromLocalStorage(myDataBase).find(
      (account) => account.accName.toLowerCase().trim() === accName.toLowerCase().trim() && account.accPassword.toLowerCase().trim() === accPassword.toLowerCase().trim());
    if (existingUser) {
      this.loggedUser = existingUser;
      
      toLocalStorage("loggedUser", this.loggedUser);
      return true;
    }

    return false;
  };

  register = (accName, accEmail) => {
    let myDataBase = fromLocalStorage("MyDataBase");
    let results = myDataBase.find((account) => account.accName === accName && account.accEmail === accEmail);
    if(!results) {
      return true;
    }

    return false;
  };
}
