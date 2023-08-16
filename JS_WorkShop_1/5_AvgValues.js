// Average of Values
/*
    To get the average of a series of values, you add the values up and then divide the sum by the number of values. Write a program that stores the following values in five different variables: 28, 32, 37, 24, and 33. The program should first calculate the sum of these five variables and store the result in a separate variable named sum. Then, the program should divide the sum variable by 5 to get the average. Display the average on the screen.
*/

// Note : Use of array would be better for this program. But, we haven't covered arrays yet. So, we will use variables.

// Variables
const varOne = 28;
const varTwo = 32;
const varThree = 37;
const varFour = 24;
const varFive = 33;
const varCount = 5;
const cruncy = "$";

// Calculations
const sum = varOne + varTwo + varThree + varFour + varFive;
const average = sum / varCount;

// Output
console.log("******* Average of Values *******");
console.log("Sum: " + cruncy + sum);
console.log("Average: " + cruncy + average);
console.log("****************************** ");