class LoanRequest {
  constructor (loanRequest, loanReturningPeriod, loanId) {
    this.debtor = fromLocalStorage("loggedUser").accName;
    this.debtorMonthlyIncome = fromLocalStorage("loggedUser").accMonthlyIncome;
    this.loanRequest = loanRequest < 1000 ? false : loanRequest;
    this.loanReturningPeriod = loanReturningPeriod < 6 ? false : loanReturningPeriod;
    this.loanId = Math.floor(Math.random()*10000);
    this.loanStatus = null;
    this.loanInterestRate = null;
    this.loanRequestMonthlyPayment = null;
    this.loanTotalReturn = null;
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

  landerList = [
    new Lander ("Archer", 0.07, 50000),
    new Lander ("Butch", 0.09, 100000),
    new Lander ("$crooge", 0.11, 150000)
  ]
  offersDataBase = [];
  loanDataBase = !fromLocalStorage("loanRequestDataBase") 
  ? [] : keepLocalStorageUpdate("loanRequestDataBase", this.loanDataBase);
  
  askForLoan = (loanRequest, loanReturningPeriod) => {
    if(loanRequest) {
      console.log(`first`,loanRequest)
      return new LoanRequest (loanRequest, loanReturningPeriod)
    }
  };


  offerMaker = () => {
    let requests = loanRequestByLoggedUser();
    let requester = fromLocalStorage("loggedUser");
    if (requester.accMonthlyIncome < 20000 && requester.accMonthlyIncome > 0 && requester.accMonthlyIncome > 1000) {
      requests = offerMapInterest(requests, 0.1);
    
    } else if (requester.accMonthlyIncome > 20000 && 50000 < requester.accMonthlyIncome) {
      requests = offerMapInterest(requests, 0.08)
      
      this.landerList[1];
      this.landerList[2];
    } else {
      requests = offerMapInterest(requests, 0.06)
      this.landerList[0];
      this.landerList[1];
      this.landerList[2];
    }
    requests = requests.map(request => {
      let debtorMonthlyPayment = 
      (request.loanRequest+request.loanRequest*(request.loanInterestRate*100))/request.loanReturningPeriod;

      if (debtorMonthlyPayment < request.debtorMonthlyIncome/2) {
        request.loanRequestMonthlyPayment
        = debtorMonthlyPayment.toFixed(2);
        request.loanStatus = true;
      } else if (debtorMonthlyPayment > request.debtorMonthlyIncome/2 
                  && debtorMonthlyPayment <= request.debtorMonthlyIncome) {
        
        request.loanRequestMonthlyPayment
        = debtorMonthlyPayment.toFixed(2);       
        request.loanReturningPeriod = `${24} your return period have changed to 24 months`
        request.loanStatus = true;          
      } else {
        request.loanStatus = false;
      }
      return request;
    })

    

    let loanStorageUpdate = fromLocalStorage("loanRequestDataBase").filter( request => {
      if(request.debtor !== requester.accName) {
        return request
      }
    });
    toLocalStorage("approvedLoans",requests)
    loanStorageUpdate = [...loanStorageUpdate,...requests]
    keepLocalStorageUpdate("loanRequestDataBase",loanStorageUpdate)
    toLocalStorage("loanRequestDataBase",loanStorageUpdate)
    return requests
  }

  loanApproval = () => {

    return new Promise ((resolve, reject) => {
      
      setTimeout(() => {
        let isThereApprovedRequests = this.offerMaker();
        let approved = isThereApprovedRequests.map(request => {
          request.loanStatus === true;
          return request;
        })
        let rejected = isThereApprovedRequests.map(request => {
          request.loanStatus === false;
          return request;
        })
        if (approved) {
          resolve(approved)
          console.log(true)
        } else {
          reject(rejected)
          console.log(false)
        } 
      },6*1000)
    })
  }
  
  removeLoanRequest = (id) => {
    let loanDataBase = fromLocalStorage("loanRequestDataBase");
    loanDataBase = loanDataBase.filter( loan => loan.loanId !== id);
    toLocalStorage("loanRequestDataBase",loanDataBase);
    this.loanDataBase = !fromLocalStorage("loanRequestDataBase") 
    ? [] : keepLocalStorageUpdate("loanRequestDataBase", this.loanDataBase);
    myController.renderHome();
  }
}