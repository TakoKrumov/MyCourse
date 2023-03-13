class RecipeManager {
    constructor() {
        this.recipes = DATA.map(el => new Recipe(el.title, el.href, el.ingredients, el.thumbnail));
        this.favouriteRecipes = [];
        this.allIgradients = this.generateGradients();
    }

    generateGradients = () => {
        const allIngradientsGenerated = [];

        this.recipes.forEach(el => {
            el.ingredients.split(", ").forEach(elIngradient => {
                if (!allIngradientsGenerated.includes(elIngradient)) {
                    allIngradientsGenerated.push(elIngradient);
                }
            });
        });

        return allIngradientsGenerated;
    }

    addRecipe = (data) => {
        this.recipes.unshift(new Recipe(data.title, data.href, data.ingredients, data.thumbnail));

        console.log(data.ingredients);
        data.ingredients.split(", ").forEach(el => {
            this.allIgradients.includes(el) || this.allIgradients.push(el);
        })
    } 

    addToFavourite = (recipe) => {
        const isAdded = this.favouriteRecipes.find(el => el === recipe);

        if (!isAdded) {
            this.favouriteRecipes.push(recipe);
            recipe.isFavourite = true;
        } 
    }

    removeFromFavourite = (recipe) => {
        const findIndex = this.favouriteRecipes.findIndex(el => el === recipe);
        if (findIndex !== -1) {
            this.favouriteRecipes.splice(findIndex, 1);
            recipe.isFavourite = false;
        }
    }

    cookRecipe = (recipe) => {
        recipe.cooked += 1;
    }

    searchRecipeByName = (name="") => {
        const result = this.recipes.filter(recp => recp.title.toLowerCase().includes(name.trim().toLowerCase()));

        return result;
    }

    searchRecipeByIngradient = (ingradient) => {
        const result = this.recipes.filter(el => el.ingredients.toLowerCase().includes(ingradient.toLowerCase()));

        return result;
    }

    allSearch = (name="", ingradient="") => {
        const result = this.recipes.filter(recp => {
            const isNameEqual = recp.title.toLowerCase().includes(name.trim().toLowerCase());
            const isIngradient = recp.ingredients.toLowerCase().includes(ingradient.toLowerCase());
            return isNameEqual && isIngradient;
        });

        return result;
    }

    cookRecipe = (recipe) => {
        recipe.cookedTimes += 1;
    }

    getAllCookedRecipes = () => {
        const result = this.recipes.filter(recp => recp.cookedTimes > 0);
        return result;
    }
}