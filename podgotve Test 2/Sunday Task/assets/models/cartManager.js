
class CartItem {

    constructor(brand,name,price, count = 1){

        this.brand = brand;
        this.name = name;
        this.price = price;
        this.count = count;

    }
}


class CartManager {

    constructor(){

        this.cartArr = [];
    }


    addToCart = (item) => {

        let haveFav = this.cartArr.find(obj => obj.name === item.name);

        if(haveFav){
            haveFav.count++;
        }
        else {
            this.cartArr.push(new CartItem (item.brand, item.name, item.price));
        }
    }



}