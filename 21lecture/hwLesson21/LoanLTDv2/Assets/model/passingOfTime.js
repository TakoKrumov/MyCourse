
function timePassingForLoggedUser (trueOrFalse) {
  if(trueOrFalse) {
    setTimeout (() => {
      let loggedUser = fromLocalStorage("loggedUser");
      loggedUser.accMoneyInBank += loggedUser.accMonthlyIncome;
      toLocalStorage("loggedUser",loggedUser)
      let dataBase = fromLocalStorage("MyDataBase")
      dataBase = dataBase.map(user => user.accName !== loggedUser.accName)
      dataBase = [...dataBase,loggedUser];
      toLocalStorage("MyDataBase", dataBase);
    },30*1000)
    return true;
  }
  
  return false;
}