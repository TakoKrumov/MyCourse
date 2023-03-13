let ourArray = [11,7.13,0.2,4.9,-5.1,6.34,1.12];
let gather = [];
gather.length = 3;
let sum = 0;
let temporarySum = 0;

for (let indexFirst = 0; indexFirst < ourArray.length - 2; indexFirst++) {

    for (let secondIndex = 1; secondIndex < ourArray.length - 1; secondIndex++) {

        for (let thirdIndex = 2; thirdIndex < ourArray.length; thirdIndex++) {

            let rules = indexFirst !== secondIndex && secondIndex !== thirdIndex && indexFirst !== thirdIndex;
            temporarySum = Math.abs(ourArray[indexFirst]) + Math.abs(ourArray[secondIndex]) + Math.abs(ourArray[thirdIndex]);
            let sumRules = sum < temporarySum;

            if (rules && sumRules) {
                sum = temporarySum;
                               
                let rules1 = Math.abs(ourArray[indexFirst]) > Math.abs(ourArray[secondIndex]);
                let rules1a = Math.abs(ourArray[secondIndex]) > Math.abs(ourArray[thirdIndex]);
                let rules2 = Math.abs(ourArray[indexFirst]) < Math.abs(ourArray[secondIndex]);
                let rules2a = Math.abs(ourArray[secondIndex]) < Math.abs(ourArray[thirdIndex]);
                let rules3 = Math.abs(ourArray[indexFirst]) > Math.abs(ourArray[secondIndex]);
                let rules3a = Math.abs(ourArray[indexFirst]) > Math.abs(ourArray[thirdIndex]);
                let rules3b = Math.abs(ourArray[indexFirst]) < Math.abs(ourArray[thirdIndex]);
                let rules4 = Math.abs(ourArray[indexFirst]) < Math.abs(ourArray[secondIndex]);

                if (rules1 && rules1a) {
                    gather[0] = Math.abs(ourArray[thirdIndex]);
                    gather[1] = Math.abs(ourArray[secondIndex]);
                    gather[2] = Math.abs(ourArray[indexFirst]);
                
                } else if (rules2 && rules2a) {
                    gather[0] = Math.abs(ourArray[indexFirst]);
                    gather[1] = Math.abs(ourArray[secondIndex]);
                    gather[2] = Math.abs(ourArray[thirdIndex]);
                    
                } else if (rules3 && rules3a) {
                    gather[0] = Math.abs(ourArray[secondIndex]);
                    gather[1] = Math.abs(ourArray[thirdIndex]);
                    gather[2] = Math.abs(ourArray[indexFirst]);

                } else if (rules3 && rules3b) {
                    gather[0] = Math.abs(ourArray[secondIndex]);
                    gather[1] = Math.abs(ourArray[indexFirst]);
                    gather[2] = Math.abs(ourArray[thirdIndex]);

                } else if (rules4 && rules3a) {
                    gather[0] = Math.abs(ourArray[thirdIndex]);
                    gather[1] = Math.abs(ourArray[indexFirst]);
                    gather[2] = Math.abs(ourArray[secondIndex]);

                } else if (rules4 && rules3b) {
                    gather[0] = Math.abs(ourArray[indexFirst]);
                    gather[1] = Math.abs(ourArray[thirdIndex]);
                    gather[2] = Math.abs(ourArray[secondIndex]);

                }
            }            

            
        }
    }
}

console.log(gather);
