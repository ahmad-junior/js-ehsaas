// Miles per Gallon
/*
    A car holds 15 gallons of gasoline and can travel 375 miles before refueling. Write a program that calculates the number of miles per gallon the car gets. Display the result on the screen.
    Hint: Use the following formula to calculate miles per gallon (MPG):
    MPG = Miles Driven/Gallons of Gas Used
*/

// Variables
const gallons = 15;
const miles = 375;
const unit = "miles per gallon";

// Calculations
const mpg = miles / gallons;

// Output
console.log("******* Miles per Gallon *******");
console.log("Miles per gallon: " + mpg + " " + unit);
console.log("******************************* ");