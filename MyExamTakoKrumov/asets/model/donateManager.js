class DonateManager {
  constructor() {
    this.listOfDonation = [];
    
  }

  donationHistory = (listOfDonation = this.listOfDonation) => {
    listOfDonation.forEach((donation) => {
      let tbody = document.querySelector('tbody');
      let newRow = document.createElement("tr");

      let newDate = document.createElement("td");
      newDate.textContent = donation[0];

      let newDataDonator = document.createElement("td");
      newDataDonator.textContent = donation[1];

      let newDataDonatedMoney = document.createElement("td");
      newDataDonatedMoney.textContent = donation[2];

      newRow.append(newDate, newDataDonator, newDataDonatedMoney);
      tbody.appendChild(newRow);
      this.listOfDonation = [];
    });
  };
}
