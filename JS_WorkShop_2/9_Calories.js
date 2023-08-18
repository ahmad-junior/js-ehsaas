// How Many Calories?
/*
A bag of cookies holds 30 cookies. The calorie information on the bag claims that there are 10 “servings” in the bag and that a serving equals 300 calories. Write a program that asks the user to input how many cookies he or she actually ate and then reports how many total calories were consumed.
Input:
Enter the number of cookies you ate: 3
Output:
Total calories consumed: 900
*/

// Declare and initialize variables
// ---> We don't need these variables anymore
// let holdedCookies = 30;
// let servings = 10;
// ******************************************

let caloriesPerServing = 300;

// Taking the input from the user
let eatenCookies = parseInt(prompt("Enter the number of cookies you ate: "));
let totalCalories = (eatenCookies * caloriesPerServing).toFixed(0);

// Displaying the output
console.log("Total calories consumed: " + totalCalories);