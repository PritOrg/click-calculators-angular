import { Component } from '@angular/core';

@Component({
  selector: 'app-long-division',
  templateUrl: './long-division.component.html',
  styleUrls: ['./long-division.component.css'],
  standalone:false

})
export class LongDivisionComponent {
  dividend: number | null = 752834242; // Default example dividend
  divisor: number | null = 39; // Default example divisor
  steps: {
    partialDividend: number;
    divisor: number;
    quotient: number;
    partialProduct: number;
    remainder: number;
  }[] = [];
  finalQuotient: number | null = null;
  finalRemainder: number | null = null;

  ngOnInit() {
    this.calculateDivision(); // Automatically calculate for default values
  }

  calculateDivision() {
    if (this.dividend === null || this.divisor === null || this.divisor === 0) {
      alert('Please provide valid inputs! Divisor cannot be zero.');
      return;
    }

    // Initialize variables
    let currentDividend = this.dividend;
    const divisor = this.divisor;
    this.steps = [];
    let quotientDigit = 0;
    let placeValue = Math.pow(10, Math.floor(Math.log10(currentDividend)) - Math.floor(Math.log10(divisor)));

    while (currentDividend >= divisor || placeValue >= 1) {
      const partialDividend = Math.floor(currentDividend / placeValue) || 0;

      if (partialDividend >= divisor) {
        quotientDigit = Math.floor(partialDividend / divisor);
        const partialProduct = quotientDigit * divisor;
        const remainder = partialDividend - partialProduct;

        // Push current step to steps array
        this.steps.push({
          partialDividend,
          divisor,
          quotient: quotientDigit,
          partialProduct,
          remainder,
        });

        // Update the current dividend
        currentDividend = remainder * placeValue + (currentDividend % placeValue);
      } else {
        this.steps.push({
          partialDividend,
          divisor,
          quotient: 0,
          partialProduct: 0,
          remainder: partialDividend,
        });
      }

      placeValue = Math.floor(placeValue / 10);
    }

    // Calculate final values
    this.finalQuotient = Math.floor(this.dividend / divisor);
    this.finalRemainder = currentDividend;
  }
}
