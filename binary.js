// Research on what a binary search is
// Given a sorted array of numbers, implement a binary search to find the position of a given number, or if not found, the position of the next largest number.
// Example:
//find_nearest (7, array(1,6,7,9,13)) //return “2”
//find_nearest (8, array(1,6,7,9,13)) //return “3"

let numbers = [1, 5, 6, 7, 8, 9, 11, 14, 15, 17, 19]


function findNearest(array, target){
  let startIndex = 0;
  let endIndex = numbers.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
    if(target === array[middleIndex]) {
       return console.log(`Target was found at index ${middleIndex}`);
    }
    else if(target > array[middleIndex]) {
        startIndex = middleIndex + 1;
    }
    else if(target < array[middleIndex]) {
        endIndex = middleIndex - 1;
      }
    }
    console.log(`Target value not found in array, the next largest number is at index ${(endIndex +1)}, it is number ${(array[endIndex +1])}`);
  }


  findNearest(numbers, 3);