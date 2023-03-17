function increaseAmount () {
  let myDataBase = fromLocalStorage("MyDataBase");
  let increasePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if(loanRequestOver) {//here i must finish all loan request when to finish so our time can continue to flow
          resolve(myDataBase)
      }

      reject("Bahur");
  }, 30000);

  increasePromise
  .then(result => {
    result.forEach(user=> {
      user.moneyInBank += user.monthlyIncome;
    })
  })
  .catch(error => error)
});
}

