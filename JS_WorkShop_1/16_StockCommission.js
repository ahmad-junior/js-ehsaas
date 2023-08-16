// Stock Commission
/* 
    Kathryn bought 750 shares of stock at a price of $35.00 per share. She must pay her stockbroker a 2 percent commission for the transaction. Write a program that calculates and displays the following:
    • The amount paid for the stock alone (without the commission)
    • The amount of the commission
    • The total amount paid (for the stock plus the commission)
*/

// Variables
const shares = 750;
const pricePerShare = 35.00;
const commission = 0.02;
const cruncy = "$";

// Calculations
const amountPaidForStock = shares * pricePerShare;
const amountOfCommission = amountPaidForStock * commission;
const totalAmountPaid = amountPaidForStock + amountOfCommission;

// Output
console.log("********** Stock Commission **********");
console.log("Amount Paid for Stock: " + cruncy + amountPaidForStock);
console.log("Amount of Commission: " + cruncy + amountOfCommission);
console.log("Total Amount Paid: " + cruncy + totalAmountPaid);
console.log("**************************************");
