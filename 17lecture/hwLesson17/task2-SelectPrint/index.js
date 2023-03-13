
let selector = document.getElementById('carSelector');

selector.addEventListener('change',printResults);
let optGroup = document.getElementsByClassName('optGroup');
let newOp = [];
for(let i=0; i<optGroup.length; i++) {  
    newOp.push(optGroup[i].textContent);   
}

function printResults () {
    let results = document.getElementById('results');
    let values = document.getElementById('carSelector').value;  
    let carGroup = '';

    function group (values) {
        for(let i=0; i<newOp.length; i++) {
            if(newOp[i].includes(values)){
                carGroup = optGroup[i].label;
            }
        }    
    }

    group(values);
    if(values !== 'pick one...') {
        results.innerHTML = `This is the results: <strong> ${values} </strong> and this is from the group of <strong>${carGroup}!</strong>`;
    } else {
        results.innerHTML = `<strong>select other value</strong>`;
    }
    
}

// let ferrari = document.getElementById('sltFerrari');
// let lamborghini = document.getElementById('sltLamborghini');
// let koenigsegg = document.getElementById('sltKoenigsegg');
// let bmw = document.getElementById('sltBMW');
// let volvo = document.getElementById('sltVolvo');
// let audi = document.getElementById('sltAudi');
// let mercedes = document.getElementById('sltMercedes');
// let vw = document.getElementById('sltVW');
// let mazda = document.getElementById('sltMazda');
// let opel = document.getElementById('sltOpel');
// let pool = [
//     ferrari,lamborghini,koenigsegg,
//     bmw,volvo,audi,mercedes,vw,mazda,opel
//     ];

// for (let i=0; i<pool.length; i++) {
//     pool[i].addEventListener('click',printMe);

//     function printMe () {
//         console.log(pool[i].textContent);
//     }
// }

