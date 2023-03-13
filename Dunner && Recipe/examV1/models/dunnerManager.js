class DunnerManager {
    constructor() {
        this.dunnerList = [];
    }

    addDunner = (dunnerData) => {
        const isDunnerExist = this.dunnerList.find(dunner => dunner.name === dunnerData.name);

        if (!isDunnerExist) {
            this.dunnerList.push(new Dunner(dunnerData));
        }
    }

    getDunnerList = () => {
        return this.dunnerList;
    }

    searchDunnerList = (search="") => {
        const searchResult = this.dunnerList.filter(dunner => {
            const dunnerName = dunner.name.trim().toLowerCase();
            const searchWord = search.trim().toLowerCase();

            return dunnerName.includes(searchWord);
        });
        return searchResult;
    }
}