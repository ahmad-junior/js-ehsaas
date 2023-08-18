/*
The monthly payment on a loan may be calculated by the following formula:

Payment = ((Rate * (1 + Rate)^N) / ((1 + Rate)^N - 1)) * L

Rate is the monthly interest rate, which is the annual interest rate divided by 12. (12% annual interest would be 1 percent monthly interest.) N is the number of payments, and L is the amount of the loan. Write a program that asks for these values and displays a report similar to
Loan Amount: $ 10000.00
Monthly Interest Rate: 1%
Number of Payments: 36
Monthly Payment: $ 332.14
Amount Paid Back: $ 11957.15
Interest Paid: $ 1957.15
Input:
Enter the loan amount: 10000
Enter the annual interest rate (as a percentage): 12
Enter the number of payments: 36
Output:
Monthly payment: $332.14
Amount paid back: $11957.15
Interest paid: $1957.15
*/

// Variables
const crunncy = "$";
let loanAmount, annualInterestRate, numberOfPayments = 0.0;

// Input
loanAmount = parseInt(prompt("Enter the loan amount: "));
annualInterestRate = parseFloat(prompt("Enter the annual interest rate (as a percentage): "));
numberOfPayments = parseInt(prompt("Enter the number of payments: "));
annualInterestRate = annualInterestRate/100; // Convert percentage to decimal

// Process
const monthlyInterestRate = annualInterestRate / 12;
const monthlyPayment = ((monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments) / ((1 + monthlyInterestRate) ** numberOfPayments - 1)) * loanAmount;
const amountPaidBack = monthlyPayment * numberOfPayments;
const interestPaid = amountPaidBack - loanAmount;

// Output
console.log("Monthly payment: " + crunncy + monthlyPayment.toFixed(2));
console.log("Amount paid back: " + crunncy + amountPaidBack.toFixed(2));
console.log("Interest paid: " + crunncy + interestPaid.toFixed(2));
