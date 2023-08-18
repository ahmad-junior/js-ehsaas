// How Much Insurance?
/*
Many financial experts advise that property owners should insure their homes or buildings for at least 80 percent of the amount it would cost to replace the structure. Write a program that asks the user to enter the replacement cost of a building and then displays the minimum amount of insurance he or she should buy for the property. 
Input:
Enter the replacement cost of the building: 200000
Output:
Minimum amount of insurance needed: $160000.00
*/

// Declare and initialize variables
let percent = 0.8;
let replacementCost = 0.0;

// Taking the input from the user
replacementCost = parseFloat(prompt("Enter the replacement cost of the building: "));

// Calculating
const minimumInsurance = (replacementCost * percent).toFixed(2);

// Displaying the output
console.log("Minimum amount of insurance needed: $" + minimumInsurance);