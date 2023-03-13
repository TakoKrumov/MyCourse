let aaa = [' aaa : 125426dswe','aaa','bbb','aab : a214sava','aba','baa','bab','aaaa : aaaaaaaaaaaa','Ö'];

let result = aaa.sort((a,b) => a.localeCompare(b));

console.log(result);

result = aaa.sort((a,b) => b.localeCompare(a));

console.log(result);

result = aaa.sort();

console.log(result);

result = aaa.sort((a,b) => {
    let biggestLength = a.length;
    let start = a;
    let second = b;
    if (a.length < b.length) {
        biggestLength = b.length;
        start = b;
        second = a;
    }

    for(let i=0; i<biggestLength; i ++) {
        if(start.charAt(i) > second.charAt(i)) {
            return (a,b);
        } else if (start.charAt(i) === second.charAt(i)) {
            return (a,b);
        } else if (start.charAt(i) < second.charAt(i)) {
            return (b,a);
        }
    }
});

console.log(result);
