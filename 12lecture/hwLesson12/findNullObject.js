function findNullObject (name) {
    console.log(name);
    if (name === null) {
        return;
    }  
    return findNullObject (name.__proto__);
}