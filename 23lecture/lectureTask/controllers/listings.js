class ListingsController {
  constructor(partiesManager) {
    this.partiesManager = partiesManager;
  }

  render = () => {
    let parties = getEl("resultsFromSearch");
    parties.innerHTML = "";
    const searchBar = document.getElementById("searchId");
    searchBar.oninput = debounce((event) => {
      const keyword = event.target.value;

      this.partiesManager.searchForParty(keyword).then(data => {
        parties.innerHTML = "";
        resultsFromParty(data, parties)
      })
    }, 500);

    this.partiesManager.getAll().then((data) => {
      resultsFromParty(data, parties)
    });
  };
}
