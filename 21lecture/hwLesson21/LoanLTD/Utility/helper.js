function toLocalStorage (stringKey, itemToGoAsValue) {
  localStorage.setItem(stringKey, JSON.stringify(itemToGoAsValue))
}

function fromLocalStorage (stringKey) {
  const results = JSON.parse(localStorage.getItem(stringKey)) 
  return results;
}

function removeFromLocalStorage (stringKey) {
  localStorage.removeItem(stringKey)
}