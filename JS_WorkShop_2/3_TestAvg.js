
// Test Average
/*
Write a program that asks for five test scores. The program should calculate the average test score and display it. The number displayed should be formatted in fixed-point notation, with one decimal point of precision.
Input:
Enter test score 1: 85
Enter test score 2: 92
Enter test score 3: 78
Enter test score 4: 88
Enter test score 5: 95
Output:
Average test score: 87.60
*/

// Variables
let scoreOne = 0;
let scoreTwo = 0;
let scoreThree = 0;
let scoreFour = 0;
let scoreFive = 0;

// Taking input from the user
scoreOne = parseInt(prompt("Enter test score 1: "));
scoreTwo = parseInt(prompt("Enter test score 2: "));
scoreThree = parseInt(prompt("Enter test score 3: "));
scoreFour = parseInt(prompt("Enter test score 4: "));
scoreFive = parseInt(prompt("Enter test score 5: "));

// Process
const avg = (scoreOne + scoreTwo + scoreThree + scoreFour + scoreFive) / 5;

// Output
console.log("Average test score: " + avg.toFixed(2));