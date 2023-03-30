class CocktailsController {
  constructor(cocktailsManager) {
    this.cocktailsManager = cocktailsManager;
  }

  renderCocktails = () => {
    const cocktailsPage = getElement("showCocktails");
    this.renderCocktailOfTheDay()
    this.searchInput();

    if (this.cocktailsManager.getFavCocktails()) {
      this.cocktailsManager.getFavCocktails()
      .then(data => data.favorites)
      .then(fav => fav.forEach(element => {
        element
        this.cocktailsManager.getCocktailById(element)
      .then(data => {
        
        this.renderCocktailsCard(data.drinks[0],"showCocktails")
      })
    }))
      
      
      
    }
  }
//searchResults showCocktails
  renderCocktailOfTheDay = () => {
    const cocktailsPage = getElement("showCocktails");
    cocktailsPage.innerHTML = '';
    this.cocktailsManager
      .getCocktailOfTheDay()
      .then((results) => {
        
        return results.drinks
      }).then(drinks => drinks.forEach(element => {
        console.log(element)
        this.renderCocktailsCard(element, 'showCocktails')
        const cocktailOfTheDay = getElement(element.idDrink)
        cocktailOfTheDay.classList.add('cocktailOfTheDay');
        let favBtn = null;
        if(favBtn = getElement('favBtn')) {
          favBtn.style.visibility = 'hidden' 
        } else if (favBtn = getElement('removeBtn')) {
          favBtn.style.visibility = 'hidden'
        }
         
      }));

    let input = 't'
    makeAPICall(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${input}`)
    .then(result => {
      for (let i=0; i<3; i++) {
        let random = Math.floor(Math.random()*25);
        this.renderCocktailsCard(result.drinks[random],"showCocktails")
     
      }
    }) 
  };

  searchInput = () => {
    const search = getElement('searchCocktailsInput');
    const cocktailsPage = getElement("searchResults")
    search.oninput = debounce((event) => {
      const keyword = event.target.value;
      
      cocktailsPage.innerHTML = '';
      this.cocktailsManager.search(keyword).then((result) => {
        
        result.drinks.forEach(element => this.renderCocktailsCard(element,'searchResults'))
      });
    }, 500);
  }

  renderCocktailsCard = (cocktail, whereToGo) => {
   
    const cocktailsPage = getElement(whereToGo); 
    const cardContainer = createElement("div", "cardContainer");
    cardContainer.id = cocktail.idDrink;

    const imgCocktail = createElement("img", "cocktailImg");
    imgCocktail.src = cocktail.strDrinkThumb;
    imgCocktail.background = `Cocktail Of The Day`

    const name = createElement("span", "cocktailName");
    name.innerText = `Name: ${cocktail.strDrink}/${cocktail.strDrinkAlternate === null ? `None Other name` : cocktail.strDrinkAlternate}`;

    const ingredients = createElement("div", "cocktailIngredient");
    let keys = Object.entries(cocktail);
    let result = keys.filter(element => {
      if(element[0].includes('strIngredient') && element[1] !== null) {
        return element
      }
    })
    let ingredient = '';
    result.forEach(element => {
      if(result[0] === element) {
        ingredient+= ''+ element[1]
      } else {
        ingredient+= ', '+ element[1]
      }
    })
    
    ingredients.innerText = `Ingredients: ${ingredient}`;
    // ${cocktail.strIngredient1}, ${cocktail.strIngredient2}, ${cocktail.strIngredient3}, ${cocktail.strIngredient4}
    const alcoholic = createElement("span", "alcoholic");
    alcoholic.innerText = cocktail.strAlcoholic;

    const btnContainer = createElement("div", "btnContainer");

    const favBtn = createElement("button", "btn");
    favBtn.classList.add("btn-primary");
    this.cocktailsManager.getFavCocktails(cocktail.idDrink)
    .then(fav => {
      
      fav.favorites.filter( element => {
        
        if(element === cocktail.idDrink) {
          favBtn.innerText = "Remove";
          favBtn.id = "removeBtn";
          favBtn.onclick = (event) => {
            event.preventDefault();
      
              this.cocktailsManager.removeFromFav(cocktail.idDrink)
            
          }
        } else {
          favBtn.innerText = "Favorites";
          favBtn.id = "favBtn";
          favBtn.onclick = (event) => {
            event.preventDefault();
      
              this.cocktailsManager.addToFavorites(cocktail.idDrink)
            
          }
        }
      })
    })


    const detailsBtn = createElement("button", "btn");
    detailsBtn.innerText = "Details";
    detailsBtn.classList.add("btn-primary");
    detailsBtn.id = "detailBtn";

    detailsBtn.onclick = () => {
      location.hash = 'details';
      let result = this.cocktailsManager.getCocktailById(cocktail.idDrink)
      .then(res => {
        this.renderDetails(res.drinks[0])
      })
      
    }
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

  renderDetails = (cocktail) => {
    
    const details = getElement('details')
    details.innerHTML = '';

    let cocktailName = createElement('h1','cocktailNameDet')
    cocktailName.innerText = cocktail.strDrink; 

    let cardLeft = createElement('div','containerDetails');
    cardLeft.id = 'leftDetailsContainer';

    let img = createElement('img','cocktailImgDet');
    img.src = cocktail.strDrinkThumb;
    

    let alcoholic = createElement('span','cocktailAlcoholicDet')
    alcoholic.innerText = cocktail.strAlcoholic;

    let cardRight = createElement('div','containerDetails');
    cardRight.id = 'rightDetailsContainer';

    let leaderName = createElement('h3','cocktailLeader')
    leaderName.innerText = `${cocktail.strDrink}/${cocktail.strDrinkAlternate === null ? 'no other name' : cocktail.strDrinkAlternate}`;

    let agitation = createElement('p','cocktailAgitation');
    agitation.innerText = cocktail.strTags === null ? 'no listed Tags' : cocktail.strTags;

    let glass = createElement('span','glassType')
    glass.innerText = cocktail.strGlass;

    let instruction = createElement('div','instruction')
    instruction.innerText = cocktail.strInstructions;

    let favBtn = createElement('button','btn')
    favBtn.classList.add('btn-primary')
    favBtn.id = 'favDetBtn'
    favBtn.innerText = 'Favorite'
   
    cardLeft.append(img, alcoholic)
    cardRight.append(leaderName, agitation, glass, instruction, favBtn);
    details.append(cocktailName, cardLeft, cardRight);

  }
}
