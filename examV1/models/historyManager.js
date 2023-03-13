class HistoryManager {
    constructor() {
        this.historyList = [];
    }

    addToHistoryList(date, address, productList, totalPrice) {
        this.historyList.push(new HistoryOrder(date, address, productList, totalPrice));
    }
}