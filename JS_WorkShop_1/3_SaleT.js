// Sales Tax
/*
    Write a program that will compute the total sales tax on a $95 purchase. Assume the state sales tax is 4 percent and the county sales tax is 2 percent.
*/

// Variables
const purchase = 95;
const stateTax = 0.04;
const countyTax = 0.02;
const cruncy = "$";

// Calculations
const totalTax = purchase * (stateTax + countyTax);

// Output
console.log("The total sales tax on a " + cruncy + purchase + " purchase is " + cruncy + totalTax + ".");