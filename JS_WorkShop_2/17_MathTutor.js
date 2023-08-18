/*
Math Tutor
Write a program that can be used as a math tutor for a young student. The program should display two random numbers to be added, such as
    247
    +129
-------
The program should then pause while the student works on the problem. When the student is ready to check the answer, he or she can press a key and the program will display the correct solution:
    247
    +129
----------
    376
*/

// Variables
const numOne = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 1000
const numTwo = Math.floor(Math.random() * 1000);
const operator = "+";

// Display the problem
console.log(numOne);
console.log(operator + numTwo);

// Pause
prompt("Press any key to see the answer.");
// I'm using prompt() right now. ---> Next time, I'll use async/await and event listener to wait for the user to press a key.

// Display the answer
console.log("-----------------");
console.log(numOne);
console.log(operator + numTwo);
console.log("-----------------");
console.log(numOne + numTwo);