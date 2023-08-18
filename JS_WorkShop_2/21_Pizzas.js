// How Many Pizzas?
/*
Modify the program you wrote in Programming Challenge 18 (Pizza Pi) so that it reports the number of pizzas you need to buy for a party if each person attending is expected to eat an average of four slices. The program should ask the user for the number of people who will be at the party and for the diameter of the pizzas to be ordered. It should then calculate and display the number of pizzas to purchase. 
Input:
Enter the number of people at the party: 20
Enter the diameter of the pizzas to be ordered: 14
Output:
Number of pizzas to purchase: 9
*/

// Variables
const pi = 3.14159; // Math.PI is a built-in constant and Good Practice to use it
let numberOfPeople = 0.0;
let diameter = 0.0;
const sliceArea = 14.125;
const slicesPerPerson = 4;

// Input
numberOfPeople = parseFloat(prompt("Enter the number of people at the party: "));
diameter = parseFloat(prompt("Enter the diameter of the pizzas to be ordered: "));

// Process
const radius = diameter / 2;
const area = pi * radius ** 2;
const numberOfSlices = (area / sliceArea); // 10.something
const numberOfPizzas = Math.ceil(numberOfPeople * slicesPerPerson / numberOfSlices);

// Output
console.log(`Number of pizzas to purchase: ${numberOfPizzas}`);

// Typo in the problem statement: 8 pizzas, not 9