class viewController {

  constructor () {
      window.addEventListener('hashchange',this.handleHashChange);//need it for actual change
      window.addEventListener('load', this.handleHashChange);//need it for loading first time where to go
  }

  handleHashChange = () => {
      console.log("handleHashChange");
      let hash = window.location.hash.slice(1) || 'recipe';//where to go on first load the check
  
      const pageIds = [
          'recipe','favRecipe','createRecipe','myProfile'
          ];
  
      pageIds.forEach(id => {
          let page = document.getElementById(id);
  
          if(hash === id) {
              page.style.display = "block";
          } else {
              page.style.display = "none";
          }
      });
  }

  
}

let newController = new viewController();