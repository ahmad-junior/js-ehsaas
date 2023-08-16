// Total Purchase
/*
    A customer in a store is purchasing five items. The prices of the five items are
    Price of item 1 = $15.95
    Price of item 2 = $24.95
    Price of item 3 = $6.95
    Price of item 4 = $12.95
    Price of item 5 = $3.95
    Write a program that holds the prices of the five items in five variables. Display each item’s price, the subtotal of the sale, the amount of sales tax, and the total. Assume the sales tax is 7%.
*/

// Variables
const item1 = 15.95;
const item2 = 24.95;
const item3 = 6.95; 
const item4 = 12.95;
const item5 = 3.95;
const tax = 0.07; // 7%
const cruncy = "$";

// Calculations
const subtotal = item1 + item2 + item3 + item4 + item5;
const salesTax = subtotal * tax;
const total = subtotal + salesTax;

// Output
console.log("******* Total Purchase *******");
console.log("Item 1: " + cruncy + item1);
console.log("Item 2: " + cruncy + item2);
console.log("Item 3: " + cruncy + item3);
console.log("Item 4: " + cruncy + item4);
console.log("Item 5: " + cruncy + item5);
console.log("-------------------------------");
console.log("Subtotal: " + cruncy + subtotal);
console.log("Sales Tax: " + cruncy + salesTax);
console.log("Total: " + cruncy + total);
