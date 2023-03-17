class LoanShark {
  constructor(name, interestRate, maxLoanGiven) {
    this.name = name;
    this.interestRate = interestRate;
    this.maxLoanGiven = maxLoanGiven;
    this.listOfDebtors = [];
  }
}


class LoanManager {
  constructor() {
    this.firstLoanShark = new LoanShark("Archer", 0.07, 50000);
    this.secondLoanShark = new LoanShark("Butch", 0.09, 100000);
    this.thirdLoanShark = new LoanShark("$crooge", 0.11, 150000);
  }
  listOfGivenOffers = [];

  checkIfUserIsReliableDebtor = (debtor) => {
    if (debtor.monthlyIncome < 20000) {
      this.interestRate = 0.1;
       
    } else if (debtor.monthlyIncome > 20000 && debtor.monthlyIncome < 50000) {
      this.interestRate = 0.08;
    } else if (debtor.monthlyIncome > 50000) {
      this.interestRate = 0.06;
    
    }

    if (debtor.requestedLoan <= debtor.monthlyIncome*6 ) {
      return true;
    } else if 
      (debtor.requestedLoan > debtor.monthlyIncome*6 && 
       debtor.requestedLoan < debtor.monthlyIncome*12) {
      
      return (true,"for 24months") ;  
    }

    return false;
  }

}

class LoanRequested {

  constructor(debtor, loanAmount, loanInterest, needToReturnInMonths) {
    this.loanID = Math.floor(Math.random()*100000);
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



