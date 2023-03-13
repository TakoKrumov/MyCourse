class Recipe {
  constructor(title, href, ingredients, thumbnail) {
    this.title = title;
    this.href = href;
    this.ingredients = ingredients;
    this.thumbnail = thumbnail;
    this.addToFav = false;
  }
}

class RecipeManager {
  constructor() {
    this.recipeList = DATA.map(
      (recipe) =>
        new Recipe(
          recipe.title,
          recipe.href,
          recipe.ingredients,
          recipe.thumbnail
        )
    );

    this.addToFavorite = [];
    this.ingredientsList = this.generateIngredients();

  }

  // searchByName = (name) => {
  //   return this.allItems.filter((item) =>
  //     item.name.toLowerCase().includes(name.trim().toLowerCase())
  //   );
  // };

  // addToFav = (item) => {
  //   if (!item.isFav) {
  //     item.isFav = true;
  //     this.favItems.push(item);
  //   } else {
  //     item.isFav = false;
  //     let index = this.favItems.indexOf(item);
  //     this.favItems.splice(index, 1);
  //   }
  // };
  searchByIngredients = (ingredient) => {
     this.recipeList.filter((recipe) => {
      recipe.ingredients.includes(ingredient);

     })
  }
  
  generateIngredients = () => {
    const ingredientsSelect = [];

    this.recipeList.forEach((recipe) => {
      recipe.ingredients.split(',').forEach((ingredient) => {
        if (!ingredientsSelect.includes(ingredient.trim().toLowerCase())) {
          ingredientsSelect.push(ingredient.trim().toLowerCase());
        }
        ingredientsSelect.sort();
      })
      
    });
    return ingredientsSelect;
  };

}
