function getElement(id) {
  return document.getElementById(id);
}

function fromLocalStorage(keyString) {
  const result = JSON.parse(localStorage.getItem(keyString));
  return result;
}

function toLocaleStorage(keyValueString, resource) {
  localStorage.setItem(keyValueString, JSON.stringify(resource));
}

function removeFromLocalStorage(stringKey) {
  localStorage.removeItem(stringKey);
}

function assistHandleHashChange(pagesID, navLinks) {
  let hash = location.hash.slice(1) || pagesID[0];
  if (!pagesID.includes(hash)) {
    location.hash = "404";
    return;
  }
  pagesID.forEach((pageId) => {
    let element = getElement(pageId);

    hash === pageId
      ? (element.style.display = "flex")
      : (element.style.display = "none");
  });

  navLinks.forEach((link) => {
    let linkShow = document.getElementById(link);
    linkShow.style.display = "block";
  });

  return hash;
}

function doNotShow(notToShowIDs) {
  notToShowIDs.forEach((notToShow) => {
    let page = document.getElementById(notToShow);
    page.style.display = "none";
  });
}

function makeAPICall(url, options) {
  return fetch(url, options).then((response) => {
    if (response.ok) {
      console.log(`response from MakeAPICall:`, response);
      return new Promise((resolve, reject) => {
        response
          .json()
          .then((result) => resolve(result))
          .catch((error) => resolve(error));
      });
    }

    return new Promise((resolve, reject) => {
      response.json().then((body) => {
        console.log(`reject from MakeAPICall:`, body);
        reject(new Error(body.message));
      });
    });
  });
}

function debounce(action, seconds) {
  let timerId = null;

  return function (...event) {
    clearTimeout(timerId);
    timerId = setTimeout(action, seconds, ...event);
  };
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

function createElement (element, newClass) {
  const newElement = document.createElement(element);
  newElement.classList.add(newClass);

  return newElement;
}
