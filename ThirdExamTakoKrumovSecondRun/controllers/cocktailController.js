class CocktailsController {
  constructor(cocktailsManager) {
    this.cocktailsManager = cocktailsManager;
  }

  renderCocktails = (event) => {

    this.renderCocktailsOfTheDayAndFav()
    this.renderRandomCocktails()
    this.searchInput()
    
  };

  searchInput = () => {
    const search = getElement('searchCocktailsInput');
    const cocktailsPage = getElement("searchResult")
    search.oninput = debounce((event) => {
      cocktailsPage.innerHTML = '';
      const keyword = event.target.value;
      this.renderCocktailsOfTheDayAndFav()
      this.renderRandomCocktails()
      
      this.cocktailsManager.search(keyword).then((result) => {
        
        result.drinks.forEach(element => {
          let exist = getElement(element.idDrink) 
          if(!exist) {
            this.renderCocktailCard(element,'searchResults')
          }
        })
      });
    }, 500);
  }

  renderCocktailsOfTheDayAndFav = () => {
    Promise.allSettled([
      this.cocktailsManager.getCocktailOfTheDay(),
      this.cocktailsManager.getFavCocktails(),
    ]).then((data) => {
      this.renderCocktailCard(data[0].value.drinks[0]);

      const cocktailOfTheDay = getElement(data[0].value.drinks[0].idDrink);
      cocktailOfTheDay.id = "cocktailOfTheDay";
      // getElement("favBtn").style.visibility =
      //   cocktailOfTheDay.id === "cocktailOfTheDay" ? "hidden" : "visible";

      data[1].value.favorites !== null
        ? data[1].value.favorites.forEach((element) => {
            this.cocktailsManager.getCocktailById(element).then((data) => {
              this.renderCocktailCard(data.drinks[0]);
              const favCocktail = getElement(data.drinks[0].idDrink);

              favCocktail.classList.add("favCocktails");
            });
          })
        : data[1].value.favorites;
    });
  }

  renderRandomCocktails = () => {
    this.cocktailsManager.getRandomCocktailsByLetter().then((data) => {
      let counter = 0;
      data.drinks !== null
        ? data.drinks.forEach((element) => {
            if (Math.random() * 10 > 5 && counter < 3) {
              this.renderCocktailCard(element);
              counter++;
            }
          })
        : data.drinks;
    });
  }

  renderCocktailCard = (cocktail) => {
    const cocktailsPage = getElement("searchResult");

    const cardContainer = createElement("div", "cardContainer");
    cardContainer.id = cocktail.idDrink;

    const imgCocktail = createElement("img", "cocktailImg");
    imgCocktail.src = cocktail.strDrinkThumb;

    const name = createElement("span", "cocktailName");
    name.innerText =
      cocktail.strDrinkAlternate !== null
        ? `Name: ${cocktail.strDrink}/${cocktail.strDrinkAlternate}`
        : `Name: ${cocktail.strDrink}`;

    const ingredients = createElement("div", "cocktailIngredients");
    let keys = Object.entries(cocktail);
    let result = keys.filter((element) => {
      if (element[0].includes("strIngredient") && element[1] !== null) {
        return element;
      }
    });
    let ingredient = "";
    result.forEach((element) => {
      if (result[0] === element) {
        ingredient += "" + element[1];
      } else {
        ingredient += ", " + element[1];
      }
    });

    ingredients.innerText = `Ingredients: ${ingredient}`;

    const alcoholic = createElement("span", "alcoholic");
    alcoholic.innerText = `Type of drink: ${cocktail.strAlcoholic}`;

    const btnContainer = createElement("div", "btnContainer");

    const favBtn = createElement("button", "btn");
    favBtn.classList.add("btn-primary");
    favBtn.classList.add("myBtn");

    this.cocktailsManager.getFavCocktails().then((data) => {
      const result = data.favorites.filter((element) =>
        element.includes(cocktail.idDrink)
      );

      if (result && result.length !== 0) {
        favBtn.id = "rmvBtn";
        favBtn.innerText = "Remove";
        favBtn.onclick = (event) => {
          event.preventDefault();
          this.cocktailsManager.removeFromFav(cocktail.idDrink)
          
        }
      } else {
        favBtn.id = "favBtn";
        favBtn.innerText = "Add to Favorites";
        favBtn.onclick = (event) => {
          event.preventDefault();
          this.cocktailsManager.addToFavorites(cocktail.idDrink)
          
        }
      }

    });

    const detailsBtn = createElement("button", "btn");
    detailsBtn.classList.add("btn-primary");
    detailsBtn.classList.add("myBtn");
    detailsBtn.innerText = "Details";
    detailsBtn.id = "detailsBtn";

    btnContainer.append(favBtn, detailsBtn);
    cardContainer.append(
      imgCocktail,
      name,
      ingredients,
      alcoholic,
      btnContainer
    );
    cocktailsPage.appendChild(cardContainer);
  };
}
