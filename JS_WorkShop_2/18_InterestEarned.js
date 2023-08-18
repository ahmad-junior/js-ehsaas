// Interest Earned
/*
Assuming there are no deposits other than the original investment, the balance in a savings account after one year may be calculated as

Amount = Principal * (1 + Rate/T)^T

Principal is the balance in the savings account, Rate is the interest rate, and T is the number of times the interest is compounded during a year (T is 4 if the interest is compounded quarterly). Write a program that asks for the principal, the interest rate, and the number of times the interest is compounded. It should display a report similar to
Interest Rate: 4.25%
Times Compounded: 12
Principal: $ 1000.00
Interest: $ 43.34
Amount in Savings: $ 1043.34
Input:
Enter the principal: 1000 
Enter the annual interest rate (as a percentage): 4.25
Enter the number of times interest is compounded per year: 12
Output:
Interest earned: $43.34
Amount in Savings: $1043.34
*/

// Variables
const crunncy = "$";
let principal, rate, T = 0.0;

// Input
principal = parseInt(prompt("Enter the principal: "));
rate = parseFloat(prompt("Enter the annual interest rate (as a percentage): "));
T = parseInt(prompt("Enter the number of times interest is compounded per year: "));
rate = rate/100; // Convert percentage to decimal

// Process
const amount = principal * ((1 + rate / T) ** T); // ** is the exponentiation operator
const interest = amount - principal;

// Output
console.log("Interest earned: " + crunncy + interest.toFixed(2));
console.log("Amount in Savings: " + crunncy + (principal + interest).toFixed(2));
