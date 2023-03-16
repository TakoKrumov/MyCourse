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
    this.thirdLoanShark = new LoanShark("Butch", 0.11, 150000);
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

    
  }
}
