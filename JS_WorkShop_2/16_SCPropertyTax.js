// Senior Citizen Property Tax
/*
Madison County provides a $5,000 homeowner exemption for its senior citizens. For example, if a senior’s house is valued at $158,000 its assessed value would be $94,800, as explained above. However, he would only pay tax on $89,800. At last year’s tax rate of $2.64 for each $100 of assessed value, the property tax would be $2,370.72. In addition to the tax break, senior citizens are allowed to pay their property tax in four equal payments. The quarterly payment due on this property would be $592.68. Write a program that asks the user to input the actual value of a piece of property and the current tax rate for each $100 of assessed value. The program should then calculate and report how much annual property tax a senior homeowner will be charged for this property and what the quarterly tax bill will be.
Input:
Enter the actual value of the property: 158000
Enter the current tax rate (per $100): 2.64
Output:
Annual property tax for a senior: $2370.72
Quarterly tax bill for a senior: $592.68
*/

// Variables
const crunncy = "$";
const seniorExemption = 5000;
let seniorTaxRate = 2.64;
let actualValue = 158000;
let assessedValue = 0;
let annualPropertyTax = 0;
let quarterlyTaxBill = 0;

// Input
actualValue = parseInt(prompt("Enter the actual value of the property: "));
seniorTaxRate = parseFloat(prompt("Enter the current tax rate (per $100): "));

// Process
assessedValue = actualValue * 0.6; // 60% of actual value
annualPropertyTax = (assessedValue - seniorExemption) * (seniorTaxRate / 100);
quarterlyTaxBill = annualPropertyTax / 4;

// Output
console.log("Annual property tax for a senior: " + crunncy + annualPropertyTax.toFixed(2));
console.log("Quarterly tax bill for a senior: " + crunncy + quarterlyTaxBill.toFixed(2));
