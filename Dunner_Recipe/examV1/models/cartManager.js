class CartManager {
    constructor() {
        this.cartList = [];
    }

    addCartItem = (data, count) => {
        const cartItem = this.cartList.find(el => data.name === el.name);

        if (cartItem) {
            cartItem.count += count;
        } else {
            this.cartList.push(new CartItem(data, count));
        }
    }

    deleteItem = (item) => {
        const index = this.cartList.findIndex(el => el === item);
        this.cartList.splice(index, 1);
        return this.cartList.length;
    }

    getTotalCost = () => {
        let result = 0;
        this.cartList.forEach(el => result += el.price * el.count);
        return result;
    }

    getProductList = () => {
        return this.cartList.map(el => `${el.name} ${el.count}`).join(", ");
    }

    clearCart = () => {
        this.cartList.splice(0);
    }
}