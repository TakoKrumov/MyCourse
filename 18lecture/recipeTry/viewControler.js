class ViewController {
  constructor() {
    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", this.handleHashChange);
    this.recipeManager = new RecipeManager();
  }

  handleHashChange = () => {
    console.log("handleHashChange");
    let hash = location.hash.slice(1) || "recipe";

    const pageIds = ["recipe", "favRecipe", "createRecipe", "myProfile"];

    pageIds.forEach((id) => {
      let page = document.getElementById(id);

      if (hash === id) {
        page.style.display = "block";
      } else {
        page.style.display = "none";
      }
    });

    switch (hash) {
      case "recipe":
        this.createMenuPage();

      // case "favRecipe":
      //     this.renderCartPage();
      // case "createRecipe":
      //     this.renderOrderPage();
      // case "myProfile":
    }

  };

  createRecipe = (container, recipeList = this.recipeManager.recipeList) => {
    container.innerHTML = "";

    recipeList.forEach((recipe) => {
      let card = createElement("div");
      card.classList.add("card");

      let title = createElement("span");
      title.innerText = recipe.title;
      title.classList.add("tittle");

      let thumbnail = createElement("img");
      thumbnail.classList.add("thumbnail");
      thumbnail.src = recipe.thumbnail;
      thumbnail.width = 250;
      let link = createElement("a");
      link.classList.add("link");
      link.href = recipe.href;
      link.target = "_blank";

      let ingredients = createElement("p");
      ingredients.innerText = recipe.ingredients;
      ingredients.classList.add("ingredients");

      let btnContainer = createElement("div");
      btnContainer.classList.add("btnContainer");

      let addFavBtn = createElement("button");
      addFavBtn.innerText = "add to favorites";
      addFavBtn.classList.add("favBtn");
      
      addFavBtn.addEventListener("click", (event) => {
        let target = event.target.parentElement;
        target.parentElement.classList.toggle("favRec");
        if (target.parentElement.classList.includes("favRec")) {
          addFavBtn.innerText = 'remove';
        }
      });

      let cookBtn = createElement("button");
      cookBtn.innerText = "Cook";
      cookBtn.classList.add("cookBtn");

      link.appendChild(thumbnail);
      btnContainer.append(addFavBtn, cookBtn);
      card.append(title, link, ingredients);
      card.appendChild(btnContainer);
      container.appendChild(card);
    });
  };

  selectMenu = (ingredientsList,id) => {
    let parent = document.getElementById(id);
    ingredientsList.forEach(ingredient =>{
      let option = createElement('option');
      option.innerText = ingredient;
      parent.append(option);
    })
  }
  
  
  createMenuPage = () => {
    let rcpContainer = document.querySelector("#recipe .container");
    this.createRecipe(rcpContainer);
    this.selectMenu(this.recipeManager.ingredientsList,'ingredientsList');

  };


}

let newController = new ViewController();
