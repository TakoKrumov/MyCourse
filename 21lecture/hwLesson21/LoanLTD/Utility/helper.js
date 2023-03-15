function toLocalStorage (stringKey, itemToGoAsValue) {
  localStorage.setItem(stringKey, JSON.stringify(itemToGoAsValue))
}