// Currency
/*
Write a program that will convert U.S. dollar amounts to Japanese yen and to euros, storing the conversion factors in the constants YEN_PER_DOLLAR and EUROS_PER_DOLLAR. To get the most up-to-date exchange rates, search the Internet using the term “currency exchange rate”. If you cannot find the most recent exchange rates, use the following:
1 Dollar = 98.93 Yen
1 Dollar = 0.74 Euros
Format your currency amounts in fixed-point notation, with two decimal places of precision, and be sure the decimal point is always displayed
Input:
Enter U.S. dollar amount: 100
Output:
Equivalent Japanese yen: ¥9893.00
Equivalent Euros: €74.00
*/

// Declare and initialize variables
const YEN_PER_DOLLAR = 98.93;
const EUROS_PER_DOLLAR = 0.74;
let dollarAmount = 0.0;

// Taking the input from the user
dollarAmount = parseFloat(prompt("Enter U.S. dollar amount: "));

// Calculating
const yenAmount = (dollarAmount * YEN_PER_DOLLAR).toFixed(2);
const eurosAmount = (dollarAmount * EUROS_PER_DOLLAR).toFixed(2);

// Displaying the output
console.log("Equivalent Japanese yen: ¥" + yenAmount);
console.log("Equivalent Euros: €" + eurosAmount);