// Stock Transaction Program
/*
Last month Joe purchased some stock in Acme Software, Inc. Here are the details of the purchase:
The number of shares that Joe purchased was 1,000.
When Joe purchased the stock, he paid $45.50 per share.
Joe paid his stockbroker a commission that amounted to 2% of the amount he paid for the stock. Two weeks later Joe sold the stock. Here are the details of the sale:
The number of shares that Joe sold was 1,000.
He sold the stock for $56.90 per share.
He paid his stockbroker another commission that amounted to 2% of the amount he 
received for the stock. Write a program that displays the following information:
The amount of money Joe paid for the stock.
The amount of commission Joe paid his broker when he bought the stock.
The amount that Joe sold the stock for.
The amount of commission Joe paid his broker when he sold the stock.
Display the amount of profit that Joe made after selling his stock and paying the two commissions to his broker. (If the amount of profit that your program displays is a negative number, then Joe lost money on the transaction.)
Output:
Stock Purchase Details:
Number of shares purchased: 1000
Price per share when purchased: $45.50
Commission paid when purchased: $91.00
Stock Sale Details:
Number of shares sold: 1000
Price per share when sold: $56.90
Commission paid when sold: $113.80
Profit from the transaction: $195.70
*/

// Variables
const purchaseShares = 1000;
const purchasePrice = 45.50;
const purchaseCommission = 0.02;
const saleShares = 1000;
const salePrice = 56.90;
const saleCommission = 0.02;
const currency = "$";

// Process
const purchaseAmount = purchaseShares * purchasePrice;
const purchaseCommissionAmount = purchaseAmount * purchaseCommission;
const saleAmount = saleShares * salePrice;
const saleCommissionAmount = saleAmount * saleCommission;
const profit = saleAmount - (saleCommissionAmount + purchaseAmount + purchaseCommissionAmount);

// Output
console.log("Stock Purchase Details:");
console.log(`Number of shares purchased: ${purchaseShares}`);
console.log(`Price per share when purchased: ${currency}${purchasePrice}`);
console.log(`Commission paid when purchased: ${currency}${purchaseCommissionAmount.toFixed(2)}`);
console.log("Stock Sale Details:");
console.log(`Number of shares sold: ${saleShares}`);
console.log(`Price per share when sold: ${currency}${salePrice}`);
console.log(`Commission paid when sold: ${currency}${saleCommissionAmount.toFixed(2)}`);
console.log(`Profit from the transaction: ${currency}${profit.toFixed(2)}`);

// Typo in Problem Statement! The 2% commission is 910.00, not 91.00 and similarly for the sale commission.