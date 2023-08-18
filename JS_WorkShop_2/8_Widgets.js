// How Many Widgets?
/*
The Yukon Widget Company manufactures widgets that weigh 12.5 pounds each. Write a program that calculates how many widgets are stacked on a pallet, based on the total weight of the pallet. The program should ask the user how much the pallet weighs by itself and with the widgets stacked on it. It should then calculate and display the number of widgets stacked on the pallet.
Input:
Enter the weight of the pallet (in pounds): 750
Enter the weight of the pallet with widgets (in pounds): 925
Output:
Number of widgets stacked on the pallet: 14
*/

// Declare and initialize variables
let palletWeight = 0;
let widgetWeight = 12.5;
let palletWithWidgets = 0;

// Taking the input from the user
palletWeight = parseInt(prompt("Enter the weight of the pallet (in pounds): "));
palletWithWidgets = parseInt(prompt("Enter the weight of the pallet with widgets (in pounds): "));

// Calculating the number of widgets
const nWidgets = ((palletWithWidgets - palletWeight) / widgetWeight).toFixed(0);

// Displaying the output
console.log("Number of widgets stacked on the pallet: " + nWidgets);

