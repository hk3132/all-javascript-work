//this will sort an array of numbers
let array = [4, 7, 8, 2, 1, 5, 3, 6]
// this will sort an array of letters
let letArray = ["G", "B", "E", "F", "Z", "T", "U"]
// this will sort a string of words
let word = "Hippopotamus";
let word1 = word.toLowerCase();
let wordSplit = word1.split("");
console.log(wordSplit);


function quicksort(items){
    if (items.length <= 1) {
      return items;
    }
  
    let pivot = items[0];
    //this is splitting the array
    
    let left = []; 
    let right = [];
    //this is setting two arrays on either side of the pivot. one called left and some called right
  
    for (let i = 1; i < items.length; i++) {
      items[i] < pivot ? left.push(items[i]) : right.push(items[i]);
        // The conditional operator ? assigns a value to a variable based on a condition. 
        //If the variable i is less than the value of the pivot, then i will be pushed to the left split of the array, if the value of the variable is more than the pivot, then i will be pushed to the right split of the array.
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
    // the concat function is combining the split array left, the pivot and right back together
};
                        // chnage what we are calling here to call the number, letter, or string word array
let sorted = quicksort(array);
  
  console.log(sorted);