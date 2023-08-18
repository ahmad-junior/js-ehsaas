// Ingredient Adjuster
/*
A cookie recipe calls for the following ingredients:
1.5 cups of sugar
1 cup of butter
2.75 cups of flour
The recipe produces 48 cookies with this amount of the ingredients. Write a program that asks the user how many cookies he or she wants to make, and then displays the number of cups of each ingredient needed for the specified number of cookies.
Input:
Enter the number of cookies you want to make: 72
Output:
To make 72 cookies, you need:
1.5 cups of sugar
1.0 cup of butter
2.75 cups of flour
*/

// Declare and initialize variables
let nCookies = 0;
const sugar = 1.5;
const butter = 1;
const flour = 2.75;
const pCookies = 48;

// Taking the input from the user
nCookies = parseInt(prompt("Enter the number of cookies you want to make: "));

// Calculating the number of cups of each ingredient
const nSugar = ((nCookies / pCookies) * sugar).toFixed(2);
const nButter = ((nCookies / pCookies) * butter).toFixed(2);
const nFlour = ((nCookies / pCookies) * flour).toFixed(2);

// Displaying the output
console.log("To make " + nCookies + " cookies, you need:");
console.log(nSugar + " cups of sugar");
console.log(nButter + " cups of butter");
console.log(nFlour + " cups of flour");

// Note : Typo in output! Please fix it to N cups of sugar, N cups of butter, N cups of flour