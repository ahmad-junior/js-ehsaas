/*
Automobile Costs
Write a program that asks the user to enter the monthly costs for the following expenses incurred from operating his or her automobile: loan payment, insurance, gas, oil, tires, and maintenance. The program should then display the total monthly cost of these expenses, and the total annual cost of these expenses. 
Input:
Enter monthly loan payment: 300
Enter monthly insurance cost: 80
Enter monthly gas cost: 150
Enter monthly oil cost: 20
Enter monthly tires cost: 30
Enter monthly maintenance cost: 50
Output:
Total monthly cost: $630.00
Total annual cost: $7560.00
*/

// Declare and initialize variables
let loanPayment, insurance, gas, oil, tires, maintenance = 0.0;

// Taking the input from the user
loanPayment = parseFloat(prompt("Enter monthly loan payment: "));
insurance = parseFloat(prompt("Enter monthly insurance cost: "));
gas = parseFloat(prompt("Enter monthly gas cost: "));
oil = parseFloat(prompt("Enter monthly oil cost: "));
tires = parseFloat(prompt("Enter monthly tires cost: "));
maintenance = parseFloat(prompt("Enter monthly maintenance cost: "));

// Calculating
const totalMonthlyCost = (loanPayment + insurance + gas + oil + tires + maintenance).toFixed(2);
const totalAnnualCost = (totalMonthlyCost * 12).toFixed(2);

// Displaying the output
console.log("Total monthly cost: $" + totalMonthlyCost);
console.log("Total annual cost: $" + totalAnnualCost);