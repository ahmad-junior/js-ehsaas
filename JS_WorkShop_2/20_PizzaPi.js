// Pizza Pi
/*
Joe’s Pizza Palace needs a program to calculate the number of slices a pizza of any size can be divided into. The program should perform the following steps:
Ask the user for the diameter of the pizza in inches.
Calculate the number of slices that may be taken from a pizza of that size.
Display a message telling the number of slices.
To calculate the number of slices that may be taken from the pizza, you must know the following facts:
Each slice should have an area of 14.125 inches.
To calculate the number of slices, simply divide the area of the pizza by 14.125.
The area of the pizza is calculated with this formula:
Area = πr^2
NOTE: π is the Greek letter pi. 3.14159 can be used as its value. The variable r is the radius of the pizza. Divide the diameter by 2 to get the radius. Make sure the output of the program displays the number of slices in fixed point notation, rounded to one decimal place of precision. Use a named constant for pi. 
Input:
Enter the diameter of the pizza in inches: 16
Output:
Number of slices that may be taken from the pizza: 14.2
*/

// Variables
const pi = 3.14159; // Math.PI is a built-in constant and Good Practice to use it
let diameter = 0.0;
const sliceArea = 14.125;

// Input
diameter = parseFloat(prompt("Enter the diameter of the pizza in inches: "));

// Process
const radius = diameter / 2;
const area = pi * radius ** 2;
const numberOfSlices = area / sliceArea;

// Output
console.log("Number of slices that may be taken from the pizza: " + numberOfSlices.toFixed(1));