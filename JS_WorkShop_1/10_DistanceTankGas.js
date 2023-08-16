// Distance per Tank of Gas
/*
    A car with a 20-gallon gas tank averages 23.5 miles per gallon when driven in town and 28.9 miles per gallon when driven on the highway. Write a program that calculates and displays the distance the car can travel on one tank of gas when driven in town and when driven on the highway.

Hint: The following formula can be used to calculate the distance:
Distance = Number of Gallons x Average Miles per Gallon
*/

// Variables
const gallons = 20;
const town = 23.5;
const highway = 28.9;
const unit = "miles";

// Calculations
const townDistance = gallons * town;
const highwayDistance = gallons * highway;

// Output
console.log("******* Distance per Tank of Gas *******");
console.log("Distance in town: " + townDistance + " " + unit);
console.log("Distance on highway: " + highwayDistance + " " + unit);
console.log("*************************************** ");