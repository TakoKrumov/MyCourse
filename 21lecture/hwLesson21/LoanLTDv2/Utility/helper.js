function toLocalStorage(stringKey, itemToGoAsValue) {
  localStorage.setItem(stringKey, JSON.stringify(itemToGoAsValue));
}

function fromLocalStorage(stringKey) {
  const results = JSON.parse(localStorage.getItem(stringKey));

  return results;
}

function removeFromLocalStorage(stringKey) {
  localStorage.removeItem(stringKey);
}

function keepLocalStorageUpdate(stringKey, itemToGoAsValue) {
  if (!fromLocalStorage(stringKey)) {
    toLocalStorage(stringKey, itemToGoAsValue);
  } else {
    itemToGoAsValue = deepCopy(fromLocalStorage(stringKey));
    toLocalStorage(stringKey, itemToGoAsValue);
    return itemToGoAsValue;
  }
}

function deepCopy(obj) {
  if (obj === null) {
    return null;
  }

  let copy = Object.assign({}, obj);

  Object.keys(copy).forEach(
    (key) =>
      (copy[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key])
  );

  if (Array.isArray(obj)) {
    copy.length = obj.length;
    return Array.from(copy);
  }

  return copy;
}

function assistHandleHashChange(pageIds, navLinks, hash) {
  pageIds.forEach((pageId) => {
    let page = document.getElementById(pageId);

    if (pageId === hash) {
      page.style.display = "flex";
    } else {
      page.style.display = "none";
    }
  });
  navLinks.forEach((link) => {
    let linkShow = document.getElementById(link);
    linkShow.style.display = "flex";
  });
}

function doNotShow(notToShowIDs) {
  notToShowIDs.forEach((notToShow) => {
    let page = document.getElementById(notToShow);
    page.style.display = "none";
  });
}

function createElement(whatElement, existingElementId) {
  let newElement = document.createElement(whatElement);
  let existingElement = document.getElementById(existingElementId);

  existingElement.append(newElement);
  return newElement;
}

function tableRowCreation(
  id,
  requestedAmount,
  requestedPeriod,
  requestedStatus
) {
  let newRow = createElement("tr", "tableBody");
  newRow.id = `${id}`;

  let newId = createElement("td", newRow.id);
  newId.textContent = id;
  let newRequestedAmount = createElement("td", newRow.id);
  newRequestedAmount.textContent = `${requestedAmount} lv.`;
  let newRequestedPeriod = createElement("td", newRow.id);
  newRequestedPeriod.textContent = requestedPeriod;
  let newRequestedStatus = createElement("td", newRow.id);
  newRequestedStatus.textContent = requestedStatus;
  
  
  if (requestedStatus === `pending`) {
    let cancelButton = createElement("span", newRow.id);
    cancelButton.innerHTML = `<button class="cancelBtn" id="${id}btn" onclick="myController.loanManager
    .removeLoanRequest(${id})">X<span class="tooltipText">
    Press if you wish to cancel your loan request</span></button>`;
  } 
}

function tableOfferUpdate () {
  
}

function loanRequestByLoggedUser() {
  let whoIsOnline = fromLocalStorage("loggedUser").accName;
  let hisRequests = fromLocalStorage("loanRequestDataBase").filter(
    (requests) => requests.debtor === whoIsOnline
  );
  return hisRequests;
}

function offerMapInterest(requests, interest) {
  let results = requests.map((request) => {
    request.loanInterestRate = interest;
    return request;
  });
  return results;
}

function tableUpdate(getAccNameString, dataBaseString, promise) {

  let getAccName = fromLocalStorage(getAccNameString).accName;
  let getDebtor = fromLocalStorage(dataBaseString);
  let tableHeading = document.getElementById("tableHeading");
  tableHeading.innerHTML = `<h3 id="tableHeading">Table with loans request to user &nbsp; <strong>${getAccName}</strong> </h3>`;
  let tableClear = document.getElementById("tableBody");
  tableClear.innerHTML = "";
  let tableContent = loanRequestByLoggedUser();
  if (!promise) {
    tableContent.forEach((debt) => {
      tableRowCreation(
        debt.loanId,
        debt.loanRequest,
        `${debt.loanReturningPeriod} months`,
        debt.loanStatus === null ? `pending` : debt.loanStatus
      );
    });
  } else {
  
    tableContent.forEach((debt) => {
      tableRowCreation(
        debt.loanId,
        debt.loanRequest,
        `${debt.loanReturningPeriod} months`,
        debt.loanStatus === true ? `Approved` : `Rejected`
      );
    });
  }
}


function promiseMaker(trueOrFalse, resolveParam, rejectParam, timeOutTime) {
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (trueOrFalse) {
        resolve(resolveParam);
      }

      reject(rejectParam);
    }, timeOutTime);
  });

  return myPromise;
}

function showOffers() {
  let getLoan = fromLocalStorage("approvedLoans");
}

// function showError (input, message) {
//   const formControl = input.parentElement;
//   formControl.classList.add('error');
//   const small = formControl.querySelector('small');
//   small.innerText = message;
// }

// function showSuccess (input) {
//   const formControl = input.parentElement;
//   formControl.classList.add('success');
// }

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.trim())) {
    return true;
  }

  return false;
}

function checkPasswordsMatch(inputOne, inputTwo) {
  if (inputOne !== inputTwo) {
    return false;
  }

  return true;
}

function checkLength(input, min, max) {
  if (input.length < min) {
    console.log(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    return false;
  } else if (input.length > max) {
    console.log(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    return false;
  }
  console.log(input);
  return true;
}
