// Celsius to Fahrenheit
/*
Write a program that converts Celsius temperatures to Fahrenheit temperatures. 
Input:
Enter temperature in Celsius: 25
Output:
Temperature in Fahrenheit: 77.0°F
*/

// Declare and initialize variables
let celsius = 0.0;

// Taking the input from the user
celsius = parseFloat(prompt("Enter temperature in Celsius: "));

// Calculating
const fahrenheit = ((celsius * 9/5) + 32).toFixed(1);

// Displaying the output
console.log("Temperature in Fahrenheit: " + fahrenheit + "°F");