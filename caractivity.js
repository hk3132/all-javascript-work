//Activity:
//Let’s create a class called Cars for a car parking company.
// This will allow you to store information of: car registration number, number of hours parked and total amount charged. (Say £1.50 per hour?)
//The first car entered the car park, parked for 5 hours and ready to pay. Display this information so the driver can pay for his/her parking fee.

let hourlyCharge = 1.50

class Car {
    constructor(regNumber, hoursParked){
        this.carReg = regNumber;
        this.hoursParked = hoursParked;
    }
    get totalCharge (){return `${hourlyCharge}` * `${this.hoursParked}`};
    display(){console.log(`Your total to pay is ${this.totalCharge}`)};
}

const car1 = new Car ("HN758BB", 5)

// car1.display();


//Activity(1): Car Park Let’s continue with our car park project.
// Add a subclass for staff, so that staff can provide their staff number, and credits they have left to pay for the car park fees.
//Given a staff member parked for 5 hours as before, show how much it will be charged and remaining balance.


class Staff extends Car {
    constructor(regNumber, hoursParked, staffNumber, staffCredits)
    {
    super (regNumber, hoursParked)
    this.staffNumber = staffNumber;
    this.credits = staffCredits;
} 
get remainingCredits(){return `${this.credits}` - `${this.totalCharge}`};
get remainingCharge (){return `${this.totalCharge}` - `${this.credits}`};
display(){if(this.credits >= this.totalCharge){console.log(`Thank you ${this.staffNumber} for paying, you have ${this.remainingCredits} credits remaining`)} else {console.log(`Sorry, You only have ${this.credits} credits remaining, please insert ${this.remainingCharge}`)}
}
}

const staff1 = new Staff("HH572HH", 5, 6393758, 20)

staff1.display();

const staff2 = new Staff ("JNAKD88", 7, 6583875, 5)

staff2.display();

car1.display();