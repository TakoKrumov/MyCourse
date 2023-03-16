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

function promiceMaker () {
  let promise = new Promise ((resolve, reject) => {
    
  })
}
