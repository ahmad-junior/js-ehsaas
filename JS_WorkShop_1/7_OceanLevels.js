// Ocean Levels
/*
    Assuming the ocean’s level is currently rising at about 1.5 millimeters per year, write a program that displays:
    • The number of millimeters higher than the current level that the ocean’s level will be in 5 years
    • The number of millimeters higher than the current level that the ocean’s level will be in 7 years
    • The number of millimeters higher than the current level that the ocean’s level will be in 10 years
*/

// Variables
const riseRate = 1.5;
const unit = "millimeters";
const cruncy = "$";

// Calculations
const riseFive = riseRate * 5;
const riseSeven = riseRate * 7;
const riseTen = riseRate * 10;

// Output
console.log("******* Ocean Levels *******");
console.log("Ocean's level will be " + riseFive + " " + unit + " higher in 5 years.");
console.log("Ocean's level will be " + riseSeven + " " + unit + " higher in 7 years.");
console.log("Ocean's level will be " + riseTen + " " + unit + " higher in 10 years.");
console.log("*************************** ");