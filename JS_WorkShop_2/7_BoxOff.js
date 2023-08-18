// Box Office
/*
A movie theater only keeps a percentage of the revenue earned from ticket sales. The remainder goes to the movie distributor. Write a program that calculates a theater’s gross and net box office profit for a night. The program should ask for the name of the movie, and how many adult and child tickets were sold. (The price of an adult ticket is $10.00 and a child’s ticket is $6.00.)
NOTE: Assume the theater keeps 20 percent of the gross box office profit.
Input:
Enter the name of the movie: Wheels of Fury
Enter the number of adult tickets sold: 382
Enter the number of child tickets sold: 127
Output:
Movie Name: "Wheels of Fury"
Adult Tickets Sold: 382
Child Tickets Sold: 127
Gross Box Office Profit: $4582.00
Net Box Office Profit: $916.40
Amount Paid to Distributor: $3665.60
*/

// Declare and initialize variables
let movieName = "";
let nAdultTickets = 0;
let nChildTickets = 0;
const adultTicketPrice = 10;
const childTicketPrice = 6;
const cruncy = "$";
const keepProfit = 0.2;

// Taking the input from the user
movieName = prompt("Enter the name of the movie: ");
nAdultTickets = parseInt(prompt("Enter the number of adult tickets sold: "));
nChildTickets = parseInt(prompt("Enter the number of child tickets sold: "));

// Calculations
const grossBoxOfficeProfit = ((nAdultTickets * adultTicketPrice) + (nChildTickets * childTicketPrice)).toFixed(2);
const netBoxOfficeProfit = (grossBoxOfficeProfit * keepProfit).toFixed(2);
const amountPaidToDistributor = (grossBoxOfficeProfit - netBoxOfficeProfit).toFixed(2);

// Displaying the output
console.log("Movie Name: " + '"' + movieName + '"');
console.log("Adult Tickets Sold: " + nAdultTickets);
console.log("Child Tickets Sold: " + nChildTickets);
console.log("Gross Box Office Profit: " + cruncy + grossBoxOfficeProfit);
console.log("Net Box Office Profit: " + cruncy + netBoxOfficeProfit);
console.log("Amount Paid to Distributor: " + cruncy + amountPaidToDistributor);
