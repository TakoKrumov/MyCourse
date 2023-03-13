

class Foot {

    constructor(brand,model,name,price,img){
        this.brand = brand;
        this.model = model;
        this.name = name;
        this.price = price;
        this.img = img;
        this.isFav = false;
    }
}


class FootManager {

    constructor(){
        this.allItems = DATA.map(item => new Foot(
            item.brand,
            item.model,
            item.name,
            item.value,
            item.imgURL

        ))

        this.favItems =[];
        this.brandList = this.generateBrandsSelect();
    }

    searchByName = (name) => {

        return this.allItems.filter(item => item.name.toLowerCase().includes(name.trim().toLowerCase()));

    }
    searchByBrand = (brand) => {

        return this.allItems.filter(item => item.brand === brand);

    }

    addToFav = (item) => {

        if(!item.isFav){
            item.isFav = true;
            this.favItems.push(item);
         
        } else {

            item.isFav = false;
            let index = this.favItems.indexOf(item);
            this.favItems.splice(index,1);
        }
    }

    generateBrandsSelect = () => {
        const result = [];

        this.allItems.forEach(item => {
         
            if(!result.includes(item.brand)){
                result.push(item.brand);
            }
        })
        return result;
    }

}