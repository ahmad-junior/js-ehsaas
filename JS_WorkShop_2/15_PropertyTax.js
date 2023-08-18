// Property Tax
/*
A county collects property taxes on the assessment value of property, which is 60 percent of the property’s actual value. If an acre of land is valued at $10,000, its assessment value is $6,000. The property tax is then 75¢ for each $100 of the assessment value. The tax for the acre assessed at $6,000 will be $45. Write a program that asks for the actual value of a piece of property and displays the assessment value and property tax. 
Input:
Enter the actual value of the property: 10000
Output:
Assessment value: $6000.00
Property tax: $45.00
*/

// Declare and initialize variables
let actualValue = 0.0;
const ASSESSMENT_VALUE = 0.6;
const PROPERTY_TAX = 0.0075; // 75/10000 = 0.0075 ---> 75¢ for each $100 of the assessment value

// Taking the input from the user
actualValue = parseFloat(prompt("Enter the actual value of the property: "));

// Calculating
const assessmentValue = (actualValue * ASSESSMENT_VALUE).toFixed(2);
const propertyTax = (assessmentValue * PROPERTY_TAX).toFixed(2);

// Displaying the output
console.log("Assessment value: $" + assessmentValue);
console.log("Property tax: $" + propertyTax);