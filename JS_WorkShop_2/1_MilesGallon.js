// Miles per Gallon
/*
    Write a program that calculates a car’s gas mileage. The program should ask the user to enter the number of gallons of gas the car can hold and the number of miles it can be driven on a full tank. It should then display the number of miles that may be driven per gallon of gas.

    Input:
        Enter the number of gallons of gas the car can hold: 15.5
        Enter the number of miles the car can be driven on a full tank: 350
    Output:
        The car's gas mileage is 22.58 miles per gallon.
*/

// Variables
let gallons = 0.0;
let miles = 0.0;
let mpg = 0.0;
const unit = "miles per gallon";

// Input
gallons = parseFloat(prompt("Enter the number of gallons of gas the car can hold:"));
miles = parseFloat(prompt("Enter the number of miles the car can be driven on a full tank:"));

// Process
mpg = miles / gallons;

// Output
console.log(`The car's gas mileage is ${mpg.toFixed(2)} ${unit}.`); // Advanced : Template Literals
// console.log("The car's gas mileage is " + mpg.toFixed(2) + " " + unit + "."); // Basic : Concatenation


// Tip : Use Readline module for input in Node.js
// Note : Prompt is not a part of Node.js. It is a part of the browser. So, it will not work in Node.js.
