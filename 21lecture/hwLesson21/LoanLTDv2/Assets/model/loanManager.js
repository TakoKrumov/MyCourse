class LoanRequest {
  constructor (loanRequest, loanReturningPeriod, loanId) {
    this.debtor = fromLocalStorage("loggedUser").accName;
    this.debtorMonthlyIncome = fromLocalStorage("loggedUser").accMonthlyIncome;
    this.loanRequest = loanRequest;
    this.loanReturningPeriod = loanReturningPeriod
    this.loanId = Math.floor(Math.random()*10000);
    this.loanStatus = null;
    this.loanInterestRate = null;
  }

}


class Lander {

  constructor (landerName, landingCapability, landerInterestRate) {
    this.landerName = landerName ; 
    this.landingCapability = landingCapability;
    this.landerInterestRate = landerInterestRate;
  }
  
}

class LanderManager {

  constructor () {
    
  }
  landerList = [
    new Lander ("Archer", 0.07, 50000),
    new Lander ("Butch", 0.09, 100000),
    new Lander ("$crooge", 0.11, 150000)
  ]

  loanDataBase = [];

  askForLoan = (loanRequest, loanReturningPeriod) => 
    new LoanRequest (loanRequest, loanReturningPeriod);
    
  checkLoanStatus = (stringKey) => {
    let checkLoans = fromLocalStorage(stringKey);
    
    let loansWithPendingStatus = checkLoans.map(loan => {
      if(loan.loanStatus !== true && loan.loanStatus !== false) {
        return loan
      }

      return false;
    })

    return loansWithPendingStatus;
  }

  resolveApproval = () => {

  }
  
}