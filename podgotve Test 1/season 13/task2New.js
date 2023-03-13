let input = "Today is a good day for test. The sun is shining. The students are happy. The birds are blue.";

function longestSentenceWordSentenceCount (string) {
    if(typeof string !== 'string') {
        return console.log("Input must be string!");
    }

    let sentenceCount = 0;

    for(let i=0; i<string.length; i++) {
        if (string.charAt(i) === ".") {
            sentenceCount++
        }
    }
    let flag = false;
    if(sentenceCount) {
        flag = true;
    } 

    let array = string.split(" ");
    let maxLength = 0;
    let longestWord = "";

    for(let i=0; i<array.length; i++) {
        if(array[i].includes(".") && maxLength < array[i].length-1) {
            maxLength = array[i].length-1;
            longestWord = array[i];
        } else if (maxLength < array[i].length) {
            maxLength = array[i].length;
            longestWord = array[i];
        }
    }

    array = string.split(".");
    maxLength = 0;
    let longestSentence = "";

    for (let i=0; i<array.length; i++) {
        if (maxLength < array[i].length) {
            maxLength = array[i].length;
            longestSentence = (array[i]+".").trim();
        }
    } 

    for (let i=0; i<array.length; i++) {
        if (array[i].includes(longestWord)) {
            longestWord = (array[i]+".").trim();
        }
    }

    return console.log(flag ? `Total sentences: ${sentenceCount}\nLongest sentence: ${longestSentence}\nSentence with the longest word: ${longestWord}` :
                              `There is only one string with no sentence \nLongest sentence: ${longestSentence}\nSentence with the longest word: ${longestWord}`);
}

longestSentenceWordSentenceCount(input);