// Energy Drink Consumption
/*
    A soft drink company recently surveyed 16,500 of its customers and found that approximately 15 percent of those surveyed purchase one or more energy drinks per week. Of those customers who purchase energy drinks, approximately 58 percent of them prefer citrus-flavored energy drinks. Write a program that displays the following:
• The approximate number of customers in the survey who purchase one or more energy drinks per week
• The approximate number of customers in the survey who prefer citrus-flavored energy drinks
*/

// Variables
const customers = 16500;
const energyDrinkConsumers = 0.15;
const citrusFEDC = 0.58;

// Calculations --> Round to the nearest whole number
const PurchaseOneOrMoreED = Math.round(customers * energyDrinkConsumers);
const PreferCitrusFEDC = Math.round(PurchaseOneOrMoreED * citrusFEDC);

// Remember: The citric-flavored energy drink consumers are a subset of the energy drink consumers.
// Remember: The Math.round() Method rounds a number to the nearest integer.

// Output
console.log("********** Energy Drink Consumption **********");
console.log("Customers who purchase one or more energy drinks per week: " + PurchaseOneOrMoreED);
console.log("Customers who prefer citrus-flavored energy drinks: " + PreferCitrusFEDC);
console.log("**********************************************");