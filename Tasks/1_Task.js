// Task 1:
/*
Design a class named Sale having attributes itemCost and taxRate.
Write its get and set methods along with two derived functions named as getTax and getTotal.
*/

class Sale {
    // Constructor
    constructor(itemCost = 0, taxRate = 0) {
        this._itemCost = itemCost;
        this._taxRate = taxRate;
    }

    // Getters
    get itemCost() {
        return this._itemCost;
    }

    get taxRate() {
        return this._taxRate;
    }

    // Setters
    set itemCost(itemCost) {
        this._itemCost = itemCost;
    }

    set taxRate(taxRate) {
        this._taxRate = taxRate;
    }

    // Member Functions
    getTax() {
        return this._itemCost * (this._taxRate / 100);
    }

    getTotal() {
        return this._itemCost + this.getTax();
    }
}

// Usage
const itemCost = parseFloat(prompt("Enter item cost: "));
const taxRate = parseFloat(prompt("Enter tax rate (%): "));

// Create Sale object
const saleItem = new Sale();

// Set attributes
saleItem.itemCost = itemCost;
saleItem.taxRate = taxRate;

// Print results
console.log("Tax:", (saleItem.getTax()).toFixed(2));
console.log("Total:", (saleItem.getTotal()).toFixed(2));