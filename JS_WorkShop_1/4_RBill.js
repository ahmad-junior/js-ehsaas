// Restaurant Bill
/*
    Write a program that computes the tax and tip on a restaurant bill for a patron with a $88.67 meal charge. The tax should be 6.75 percent of the meal cost. The tip should be 20 percent of the total after adding the tax. Display the meal cost, tax amount, tip amount, and total bill on the screen.
*/

// Variables
const meal = 88.67;
const tax = 0.0675; // 6.75%
const tip = 0.2; // 20%
const cruncy = "$";

// Calculations
const mealTax = meal * tax;
const mealTip = (meal + mealTax) * tip;
const totalBill = meal + mealTax + mealTip;

// Output
console.log("******* Restaurant Bill******* ");
console.log("Meal: " + cruncy + meal);
console.log("Tax: " + cruncy + mealTax);
console.log("Tip: " + cruncy + mealTip);
console.log("Total: " + cruncy + totalBill);
console.log("****************************** ");