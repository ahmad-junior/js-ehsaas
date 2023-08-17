// Stadium Seating
/*
There are three seating categories at a stadium. For a softball game, Class A seats cost $15, Class B seats cost $12, and Class C seats cost $9. Write a program that asks how many tickets for each class of seats were sold, then displays the amount of income generated from ticket sales. Format your dollar amount in fixed-point notation, with two decimal places of precision, and be sure the decimal point is always displayed.
Input:
Enter the number of Class A tickets sold: 120
Enter the number of Class B tickets sold: 230
Enter the number of Class C tickets sold: 180
Output:
Total income from ticket sales: $ 5580.00
*/

// Variables
let classA = 0;
let classB = 0;
let classC = 0;

const CLASS_A_PRICE = 15;
const CLASS_B_PRICE = 12;
const CLASS_C_PRICE = 9;

const __Cruncy = "$";

// Input
classA = parseInt(prompt("Enter the number of Class A tickets sold: "));
classB = parseInt(prompt("Enter the number of Class B tickets sold: "));
classC = parseInt(prompt("Enter the number of Class C tickets sold: "));

// Process
let totalIncome = classA * CLASS_A_PRICE + classB * CLASS_B_PRICE + classC * CLASS_C_PRICE;

// Output
console.log(`Total income from ticket sales: ${__Cruncy} ${totalIncome.toFixed(2)}`);

// Note : Typo in output expected result is wrong $ 5580.00 the right is $ 6180.00