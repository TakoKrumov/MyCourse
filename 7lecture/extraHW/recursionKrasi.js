let num = 5;

function print (num,i) {
    if (i === num) {
        return;
    }
    console.log("MNogo qko");
    print(num, ++i);
}

print(num,0);