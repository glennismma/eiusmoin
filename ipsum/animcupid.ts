interface Incomes {
  // Represents the total income from salaries
  salaries: number;

  // Represents the total income from investments
  investments: number;

  // Represents the total income from any other sources
  others: number;

  // Calculates the total income from all sources
  calculateTotal(): number;
}

class IncomeTracker implements Incomes {
  salaries: number;
  investments: number;
  others: number;

  constructor(salaries: number, investments: number, others: number) {
    this.salaries = salaries;
    this.investments = investments;
    this.others = others;
  }

  // Implementation of the calculateTotal method
  calculateTotal(): number {
    return this.salaries + this.investments + this.others;
  }
}

// Usage
const myIncomes = new IncomeTracker(50000, 15000, 5000);
console.log(`Total Income: ${myIncomes.calculateTotal()}`);
