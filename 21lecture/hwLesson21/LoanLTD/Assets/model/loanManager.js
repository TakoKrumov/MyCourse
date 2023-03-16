class LoanShark {
  constructor(name, interestRate, maxLoanGiven) {
    this.name = name;
    this.interestRate = interestRate;
    this.maxLoanGiven = maxLoanGiven;
    this.listOfGivenOffers = [];
    this.listOfLoanedUsers = [];
  }
}

class LoanManager {
  constructor() {
    this.firstLoanShark = new LoanShark("Archer", 0.07, 50000);
    this.secondLoanShark = new LoanShark("Butch", 0.09, 100000);
    this.thirdLoanShark = new LoanShark("Butch", 0.11, 150000);
  }
}
