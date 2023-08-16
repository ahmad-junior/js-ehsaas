// Sales Prediction
/*
    The East Coast sales division of a company generates 58 percent of total sales. Based on that percentage, write a program that will predict how much the East Coast division will generate if the company has $8.6 million in sales this year.
*/

// Variables
const tPercent = 0.58;
const tSales = 8.6;
const cruncy = "$";
const suffix = " million";

// Calculations
const eSales = tSales * tPercent;

// Output
console.log("The East Coast division will generate " + cruncy + eSales + suffix + " in sales this year.");