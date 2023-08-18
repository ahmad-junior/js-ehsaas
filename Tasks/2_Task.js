/*
Task 2:
Design a class called Date. The class should store a date in three integers: month, day, and year. There should be member functions to print the date in the following forms: 
12/25/2014 
December 25, 2014 
25 December 2014 
Demonstrate the class by writing a complete program implementing it. 
Input Validation: Do not accept values for the day greater than 31 or less than 1. Do not accept values for the month greater than 12 or less than 1.
*/

class Date {
    // Member Variables ---> Month names
    MONTHS = {
        1: "January", 2: "February", 3: "March", 4: "April", 5: "May",
        6: "June", 7: "July", 8: "August", 9: "September", 10: "October",
        11: "November", 12: "December"
    };

    // Constructor
    constructor(month = 1, day = 1, year = 1900) {
        this._month = month;
        this._day = day;
        this._year = year;
    }

    // Getters
    get month() {
        return this._month;
    }

    get day() {
        return this._day;
    }

    get year() {
        return this._year;
    }

    // Setters
    set month(month) {
        // Validate month
        if (month < 1 || month > 12) {
            throw new Error("Invalid month!");
        }

        this._month = month;
    }

    set day(day) {
        // Validate day
        if (day < 1 || day > 31) {
            throw new Error("Invalid day!");
        }

        this._day = day;
    }

    set year(year) {
        // Validate year
        if (year < 1900 || year > 2100) {
            throw new Error("Invalid year!");
        }

        this._year = year;
    }

    // Member Functions
    // Get month name
    getMonthName(month = this._month) {
        return this.MONTHS[month];
    }


    // Print date in format: 12/25/2014 ---> Format: MM/DD/YYYY
    printMDY() {
        console.log(`${this._month}/${this._day}/${this._year}`);
    }

    // Print date in format: December 25, 2014 ---> Format: Month DD, YYYY
    printMDYLong() {
        console.log(`${this.getMonthName()} ${this._day}, ${this._year}`);
    }

    // Print date in format: 25 December 2014 ---> Format: DD Month YYYY
    printDMYLong() {
        console.log(`${this._day} ${this.getMonthName()} ${this._year}`);
    }
}

// Usage
const month = parseInt(prompt("Enter month: "));
const day = parseInt(prompt("Enter day: "));
const year = parseInt(prompt("Enter year: "));

// Create Date object
const date = new Date();

// Set attributes
date.month = month;
date.day = day;
date.year = year;

// Print results
date.printMDY();
date.printMDYLong();
date.printDMYLong();