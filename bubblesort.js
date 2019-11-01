// Write some code to perform a Bubble Sort on an array of numbers that returns a new, sorted array.

let arr = [4, 7, 8, 2, 1, 5, 3, 6]
let complete

function bubbleSort (arr) {
    do {
        complete = false;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i+1], arr[i] ] = [arr[i], arr[i+1]]
                complete = true
                console.log(arr)
            }
        }
    } while (complete);
  }

bubbleSort(arr);

// This also works with letters 
let lArr = ["E", "T", "H", "B", "Y"]

bubbleSort(lArr);

// With a string word

let word = "Hippopotamus";

let word1 = word.toLowerCase();
let wordSplit = word1.split("");
console.log(wordSplit);

function bubbleSort (arr) {
    do {
        complete = false;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i+1], arr[i] ] = [arr[i], arr[i+1]]
                complete = true
                console.log(arr)
            }
        }
    } while (complete);
  }

  bubbleSort (wordSplit);