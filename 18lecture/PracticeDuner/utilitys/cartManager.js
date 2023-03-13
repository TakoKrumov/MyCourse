class CartItem {
  constructor(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
}

class HistoryList {

  constructor(productList,address) {
    this.date = new Date().toLocaleDateString();
    this.address = address;

    this.productList = productList.map( item => 
      `${item.name} ${item.count}`).join(',');

    this.total = productList.reduce((accumulated, cartItem) =>
    accumulated + (cartItem.price*cartItem.count),0);
  }
}
class CartManager {

  cartItems = [];
  orderHistory = [];

  addToCart = (duner, count) => {
    /*  find (when we search for single item is better)
            have optimization and when find what are
            we looking for its stop iteration and dont
             go trough the whole list 
        */

    let dunerInCart = this.cartItems.find(

      (cartItem) => cartItem.name === duner.name

    );

    if (dunerInCart) {

      dunerInCart.count += count;

    } else {
      this.cartItems.push(new CartItem(duner.name, duner.price, count));
    }
  };

  editCartItem = (cartItem, newCount) => {
    if (newCount === 0) {

      let index = this.cartItems.findIndex(
        (item) => (item.name = cartItem.name)
      );
      this.cartItems.splice(index, 1); // directly modify the Array!

    } else {
      cartItem.count = newCount;
    }
  };

  getTotalSum = () => {
    /*
     we are ussing reduce because we need to get from many 
     values to one! And always give starting value in our case is 0! 
    */
    return this.cartItems.reduce((accumulated, cartItem) =>
             accumulated + (cartItem.price*cartItem.count),0);
  };

  deliver = (address) => {
    this.orderHistory.push(new HistoryList(this.cartItems,address));
  }
}
