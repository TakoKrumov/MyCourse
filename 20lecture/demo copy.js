let promise = new Promise((resolve, reject) => {
    let number = 5
    setTimeout(() => {
        if(number===4) {
            resolve("number is 4")
        }
        reject("Bahur");
    }, 2000)
});


promise
    .then(data => {
        console.log(data);
        return data;
    })
    .then(res => {
        console.log("From second then", res);
    })
    .then(result => {
        console.log(`1`,result);
    })
    .catch(err => {
        console.log(`2`,err);
    })