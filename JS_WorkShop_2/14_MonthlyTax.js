// Monthly Sales Tax
/*
A retail company must file a monthly sales tax report listing the sales for the month and the amount of sales tax collected. Write a program that asks for the month, the year, and the total amount collected at the cash register (that is, sales plus sales tax). Assume the state sales tax is 4 percent and the county sales tax is 2 percent. If the total amount collected is known and the total sales tax is 6 percent. The program should display a report similar to
Input:
Enter the month: October
Enter the year: 2023
Enter the total amount collected: 26572.89
Output:
Month: October
--------------------
Total Collected: $26572.89
Sales: $25068.76
County Sales Tax: $501.38
State Sales Tax: $1002.75
Total Sales Tax: $1504.13
*/

// Declare and initialize variables
let month, year, totalAmountCollected = 0.0;
const STATE_TAX = 0.04;
const COUNTY_TAX = 0.02;
const TOTAL_TAX = STATE_TAX + COUNTY_TAX;

// Taking the input from the user
month = prompt("Enter the month: ");
year = prompt("Enter the year: ");
totalAmountCollected = parseFloat(prompt("Enter the total amount collected: "));

// Calculating
const sales = (totalAmountCollected / (1 + TOTAL_TAX)).toFixed(2); 
// 1 + TOTAL_TAX = 1.06 ---> We are dividing by 1.06 to get the sales amount back from the total amount collected ---> We are getting 100% sales amount plus 6% tax amount from the user ---> We are dividing by 1.06 to get the 100% sales amount back
const countySalesTax = (sales * COUNTY_TAX).toFixed(2);
const stateSalesTax = (sales * STATE_TAX).toFixed(2);
const totalSalesTax = parseFloat((countySalesTax + stateSalesTax)).toFixed(2);

// Displaying the output
console.log("Month: " + month);
console.log("--------------------");
console.log("Total Collected: $" + totalAmountCollected);
console.log("Sales: $" + sales);
console.log("County Sales Tax: $" + countySalesTax);
console.log("State Sales Tax: $" + stateSalesTax);
console.log("Total Sales Tax: $" + totalSalesTax);

