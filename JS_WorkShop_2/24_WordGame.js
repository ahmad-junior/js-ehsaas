// Word Game
/*
Write a program that plays a word game with the user. The program should ask the user to enter the following:
His or her name
His or her age
The name of a city
The name of a college
A profession
A type of animal
A pet’s name
After the user has entered these items, the program should display the following story, inserting the user’s input into the appropriate locations:
There once was a person named NAME who lived in CITY. At the age of AGE, NAME went to college at COLLEGE. NAME graduated and went to work as a PROFESSION. Then, NAME adopted a(n) ANIMAL named PETNAME. They both lived happily ever after! 
Input:
Enter your name: Alice
Enter your age: 25
Enter the name of a city: New York
Enter the name of a college: ABC University
Enter a profession: Engineer
Enter a type of animal: Lion
Enter a pet's name: Max
Output:
There once was a person named Alice who lived in New York

*/

// Input
const name = prompt("Enter your name: ");
const age = prompt("Enter your age: ");
const city = prompt("Enter the name of a city: ");
const college = prompt("Enter the name of a college: ");
const profession = prompt("Enter a profession: ");
const animal = prompt("Enter a type of animal: ");
const petName = prompt("Enter a pet's name: ");

// Process
const story = "There once was a person named " + name + " who lived in " + city + ". At the age of " + age + ", " + name + " went to college at " + college + ". " + name + " graduated and went to work as a " + profession + ". Then, " + name + " adopted a(n) " + animal + " named " + petName + ". They both lived happily ever after!";

// Note : Template Literals are good for this kind of thing.

// Output
console.log(story);
