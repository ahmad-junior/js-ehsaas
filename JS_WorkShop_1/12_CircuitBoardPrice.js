// Circuit Board Price
/*
    An electronics company sells circuit boards at a 35 percent profit. Write a program that will calculate the selling price of a circuit board that costs $14.95. Display the result on the screen.
*/

// Variables
const cost = 14.95;
const profit = 0.35;
const unit = "$";

// Calculations
const price = cost + (cost * profit);

// Output
console.log("******* Circuit Board Price *******");
console.log("Price: " + unit + price);
console.log("********************************** ");