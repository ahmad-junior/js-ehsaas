// Male and Female Percentages
/*
Write a program that asks the user for the number of males and the number of females registered in a class. The program should display the percentage of males and females in the class.
Input:
Enter the number of males registered: 45
Enter the number of females registered: 55
Output:
Percentage of males: 45.00%
Percentage of females: 55.00%
*/

// Declare and initialize variables
let nMale, nFemale, total = 0;

// Taking the input from the user
nMale = parseInt(prompt("Enter the number of males registered: "));
nFemale = parseInt(prompt("Enter the number of females registered: "));

// Calculating the total
total = nMale + nFemale;

// Calculating the percentages
const percentMale = ((nMale / total) * 100).toFixed(2);
const percentFemale = ((nFemale / total) * 100).toFixed(2);

// Displaying the output
console.log("Percentage of males: " + percentMale + "%");
console.log("Percentage of females: " + percentFemale + "%")