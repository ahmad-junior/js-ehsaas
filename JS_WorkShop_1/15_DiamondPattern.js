// Diamond Pattern
/*
    Write a program that displays the following pattern:
       *
      ***
     *****
    *******
     *****
      ***
       *
*/

// I'm using some advanced concepts here, so don't worry if you don't understand it yet.
// .repeat() is a method that repeats a string a certain number of times.

// Variables
const character = "*";
const height = 4;

// Logic ---> Using For Loop
const maxSpaces = height - 1; 

for (let i = 1; i <= height; i++) {
    let spaces = ' '.repeat(maxSpaces - i + 1);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}

for (let i = height - 1; i >= 1; i--) {
    let spaces = ' '.repeat(maxSpaces - i + 1);
    let stars = '*'.repeat(2 * i - 1);
    console.log(spaces + stars);
}

