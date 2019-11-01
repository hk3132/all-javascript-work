let string = "Are sentiments apartments decisively the especially alteration. Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you. After nor you leave might share court balls. Needed feebly dining oh talked wisdom oppose at. Applauded use attempted strangers now are middleton concluded had. It is tried no added purse shall no on truth. Pleased anxious or as in by viewing forbade minutes prevent. Too leave had those get being led weeks blind. Had men rose from down lady able. Its son him ferrars proceed six parlors. Her say projection age announcing decisively men. Few gay sir those green men timed downs widow chief. Prevailed remainder may propriety can and."


//returns word count of string. This is splitting the string at the spaces
function wordCount (string){
    return string.split(" ").length
}
// returns character count of string. This is splitting each character as nothing has been passed in the ("")
function characterCount (string){
    return string.split("").length
}
// returns sentence count of string. This is splitting the string at each .
function sentenceCount (string){
    return string.split(".").length
}

console.log(wordCount(string));
console.log(characterCount(string));
console.log(sentenceCount(string));

//Longest Word
function lWord (string){
    let newString = string.split(".").join("") //removes the full stops in the string. Splits the string on all the .'s and then joins it again with empty spaces
    let newStringSplit = newString.split(" "); //This is splitting the string into words by splitting each space
    let longestWord = 0; //this is defining the start point for longest word at 0. 
    let word = ""; //this is a place holder to allow us to call the longest word later in the code
    for (let i = 0; i<newStringSplit.length; i++){
        if(newStringSplit[i].length > longestWord){ //This is testing if each word in the array is longer than zero (the value we assigned the longestWord above) 
            longestWord = newStringSplit[i].length //If it is we will update Longest word to be the character value ofthis new word. This will continue on a loop until no word in the string is longer than the updated variable
            word = newStringSplit[i]; // this is updating the value of our variable word to the longest word that we have found in the array
        }
    }
    return longestWord// This will return how long the longest word is
    , word// this will return what this word actually is
}

console.log(lWord(string));

//Average length of words

function averageWord(string){
        let newString = string.split(".").join("")
        let newSplitString = newString.split(" ");
        let wordCount1 = newSplitString.length;
        let wordTotal = 0;
        for (let i = 0; i < wordCount1; i++){
            wordTotal += newSplitString[i].length;
            // updates the value of wordAvg to the current value of word average + the length of the word
        }
    let avgLen = (wordTotal / wordCount1);
            // calculate the average as a mean calculation - the total length of all words added together/the total number of words
    return avgLen
    }

console.log(averageWord(string));

//Number of words above 3 characters

function three (string){
    let newString = string.split(".").join("")
    let newSplitString = newString.split(" ");
    let wordCount2 = newSplitString.length;
    var threeWords = 0;
    for (i = 0; i < wordCount2; i++) {
    if (newSplitString[i].length > 3){
    threeWords += 1;
    }
    }
return threeWords;
}

console.log(three(string));


