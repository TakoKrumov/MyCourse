class Recipe {

    constructor(title, href, ingredients, thumbnail) {
        this.title = title;
        this.href = href;
        this.ingredients = ingredients;
        this.img = thumbnail;
        this.cookedTimes = 0;
        this.isFavourite = false;
        this.id = `recipe${Recipe.prototype.lastID++}`;
    }
}

Recipe.prototype.lastID = 0;