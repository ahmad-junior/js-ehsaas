// Angle Calculator
/*
Write a program that asks the user for an angle, entered in radians. The program should then display the sine, cosine, and tangent of the angle. The output should be displayed in fixed-point notation, rounded to four decimal places of precision.
Input:
Enter an angle in radians: 1.2
Output:
Sine: 0.9320
Cosine: 0.3624
Tangent: 2.5735
*/

// Variables
let angle = 0.0;
const diRound = 4;

// Input
angle = parseFloat(prompt("Enter an angle in radians: "));

// Process
const sine = Math.sin(angle).toFixed(diRound);
const cosine = Math.cos(angle).toFixed(diRound);
const tangent = Math.tan(angle).toFixed(diRound);

// Output
console.log(`Sine: ${sine}`);
console.log(`Cosine: ${cosine}`);
console.log(`Tangent: ${tangent}`);