// Triangle Pattern
/*  
    Write a program that displays the following pattern on the screen:
    *
    ***
    *****
    *******
*/

// Variables
const character = "*";
const lines = 4;

// Logic ---> Using For Loop
for (let i = 1; i <= lines; i++) {

    let output = ""; // Resetting output for each line

    for (let j = 1; j <= i; j++) {
        output += character;
    }

    console.log(output);
}

