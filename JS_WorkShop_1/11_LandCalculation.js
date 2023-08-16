// Land Calculation
/*
    One acre of land is equivalent to 43,560 square feet. Write a program that calculates the number of acres in a tract of land with 391,876 square feet.
*/

// Variables
const acre = 43560;
const land = 391876;
const unit = "acres";

// Calculations
const acres = land / acre;

// Output
console.log("******* Land Calculation *******");
console.log("Acres: " + acres + " " + unit);
console.log("******************************* ");