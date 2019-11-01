console.log("Hello from my javascript file promptalert.js");

console.log("testing");

//An alert is something that is going to pop up on the screen like a message
alert("Warning!!!!!! This javascript file will self destruct in 10 seconds");
//This will make a pop up happen in your live server

//Can also use them with variable. The alert them pops up with the greeting.
let greeting = "hi everyone"
alert(greeting);

//Prompts can add values from user inputs.
let favouriteFood = prompt ("Do you prefer pizza or ice cream?");
//This will take the whatever the user inputs and log it into the code
console.log (favouriteFood);

let activity = prompt ("Do you want your pet to play or eat?");
let result = activity.toLowerCase();

if (result == "play"){
        alert ("YAYYYY your pet is very happy playing");
    } else if (result == "eat"){ 
        alert("Your pet is now well fed");
} else { alert ("Please make sure to select play or eat");
}
