let today = new Date();

let birthday = new Date("2020-10-05"); 
let Difference_In_Time = birthday.getTime() - today.getTime();
let Difference_In_Days = Math.floor(Difference_In_Time / (1000*3600*24));

console.log(Difference_In_Days);
