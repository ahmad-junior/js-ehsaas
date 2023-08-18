// Average Rainfall
/*
Write a program that calculates the average rainfall for three months. The program should ask the user to enter the name of each month, such as June or July, and the amount of rain (in inches) that fell each month. The program should display a message similar to the following: The average rainfall for June, July, and August is 6.72 inches.
Input:
Enter the name of month 1: June
Enter the amount of rain (in inches) for June: 5.2
Enter the name of month 2: July
Enter the amount of rain (in inches) for July: 7.8
Enter the name of month 3: August
Enter the amount of rain (in inches) for August: 4.5
Output:
The average rainfall for June, July, and August is 5.83 inches.
*/

// Declare and initialize variables
let monthOne, monthTwo, monthThree = "";
let rainOne, rainTwo, rainThree = 0.0;

const unit = "inches";

// Taking the input from the user
monthOne = prompt("Enter the name of month 1: ");
rainOne = parseFloat(prompt("Enter the amount of rain (in inches) for " + monthOne + ": "));
monthTwo = prompt("Enter the name of month 2: ");
rainTwo = parseFloat(prompt("Enter the amount of rain (in inches) for " + monthTwo + ": "));
monthThree = prompt("Enter the name of month 3: ");
rainThree = parseFloat(prompt("Enter the amount of rain (in inches) for " + monthThree + ": "));

// Calculating the average
const average = (rainOne + rainTwo + rainThree) / 3;

// Displaying the output
console.log("The average rainfall for " + monthOne + ", " + monthTwo + ", and " + monthThree + " is " + average.toFixed(2) + " " + unit + ".");