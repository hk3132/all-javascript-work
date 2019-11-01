// Write a function to swap the case of each character in a string. e.g. “Adam Smith” becomes “aDAM sMITH”

let name = "Heather Kay"
let name1 = []

function caseChange (string1){
    let name1 = string1.split("");
    console.log(name1)
for (i=0; i<name1.length; i++){
    if (name1[i] === name1[i].toUpperCase()){
        name1[i] = name1[i].toLowerCase();
    } else if (name1[i] === name1[i].toLowerCase()){
        name1[i] = name1[i].toUpperCase();
    }
}
let name2 = name1.join("");
console.log(name2);
}

caseChange(name)
