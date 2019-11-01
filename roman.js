// The goal of this exercise is to convert regular Arabic numbers to Roman numerals

function toRoman (n){
    let result = "";
    let num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
    // make a for loop to loop  over every element of our array
    for (let i = 0; i<=num.length; i++) {
        // We first check if our n is less than or equal to one of our defined num 1000, 500, 100, 50 etc.
          while (num[i] <= n) {  
        //Once we find a value that is smaller or equal to our number, we will push the matching letter to our solution and subtract this value from our number      
            result += roman[i];
            //add the matching roman number to our result string
            n -= num[i];
            // subtract the number value of the roman number from our n input. This remaining n value is then run through the loop again unitl the number is fully divisible by a roman numeral value
          }
        }
        console.log(result);
      }

toRoman(2590);
