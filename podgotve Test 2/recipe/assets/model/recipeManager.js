class Recipe {
  
  constructor(title, href, ingredients, thumbnail) {
    this.title = title;
    this.href = href;
    this.ingredients = ingredients;
    this.thumbnail = thumbnail;
    this.cookedTimes = 0;
    this.isFavorite = false;
    this.id = `recipe${Recipe.prototype.lastID++}`;
  }
}

Recipe.prototype.lastID = 0;

class RecipeManager {
  
  constructor () {
    this.recipesList = DATA.map(recipe => new Recipe(
      recipe.title,
      recipe.href,
      recipe.ingredients,
      recipe.thumbnail,
    ));

    //list with all ingredients 
    this.allIngredients = this.generateAllIngredients();

    //list of all favorite recipes
    this.favoriteRecipes =[];
     
  }
  //generating list of all ingredients 
  generateAllIngredients = () => {
    const allIngredientsList = [];

    this.recipesList.forEach (recipe => {
      recipe.ingredients.split(",").forEach(ingredient => {
        if(!allIngredientsList.includes(ingredient.trim())) {
          allIngredientsList.push(ingredient.trim());
        }
      });
    });

    return allIngredientsList;
  }

  //creating start for search method via INPUT(user) value && via Select button
  searchViaTitleAndIngredient = (inputValue = "", ingredient="") => {
    let result = this.recipesList.filter (recipe => {
      let isTitleEqual = recipe.title.toLowerCase().includes(inputValue.trim().toLocaleLowerCase());
      let isIngredient = recipe.ingredients.toLowerCase().includes(ingredient.toLowerCase());
      
      return isTitleEqual && isIngredient; 
    });

    return result;
  }

  //creating start for adding to favorites
  addToFavorite = (recipe) => {
    let isAdded = this.favoriteRecipes.find(element =>
      element === recipe);

    if (!isAdded) {
      this.favoriteRecipes.push(recipe);
      recipe.isFavorite = true;
    }
  } 

  //creating start for removing from favorites
  removeFromFavorite = (recipe) => {
    let ifAdded = this.favoriteRecipes.findIndex(element =>
      element === recipe);

    if (ifAdded !== -1) {
      this.favoriteRecipes.splice(ifAdded, 1);
      recipe.isFavorite = false;
    }
  }

  // creating start for adding recipe
  addRecipe = (recipe) => {

    this.recipesList.unshift(new Recipe(
      recipe.title,
      recipe.href,
      recipe.ingredients,
      recipe.thumbnail
    ));

    recipe.ingredients.split(',').forEach(ingredient =>{
      this.allIngredients.includes(ingredient.trim()) || 
      this.allIngredients.push(ingredient);
    });
  }

  //part of how much time we have cooked something
  cookRecipe = (recipe) => {
    recipe.cookedTimes +=1;
  }
  // get the times the button cook was pressed
  getAllCookedRecipes = () => {
    let result = this.recipesList.filter(recipe => 
        recipe.cookedTimes >0);
        return result;
  }

}