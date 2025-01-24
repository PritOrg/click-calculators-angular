import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal-to-ratio',
  templateUrl: './decimal-to-ratio.component.html',
  styleUrl: './decimal-to-ratio.component.css'
})
export class DecimalToRatioComponent {
  inputValue: string = '0.3';
  ratio: string | null = null;

  ngOnInit(){
    this.calculateRatio();
  }
  calculateRatio() {
    if (this.inputValue.trim() === '') {
      this.ratio = null;
      return;
    }

    const parsedValue = this.parseInput(this.inputValue);
    if (parsedValue !== null) {
      const [numerator, denominator] = this.convertToRatio(parsedValue);
      this.ratio = `${numerator}:${denominator}`;
    } else {
      this.ratio = 'Invalid input';
    }
  }

  private parseInput(input: string): number | null {
    // Check if input is a percentage (e.g., 30%)
    if (input.includes('%')) {
      const percentageValue = parseFloat(input.replace('%', '').trim());
      if (!isNaN(percentageValue)) {
        return percentageValue / 100; // Convert percentage to decimal
      }
    }

    // Handle fractions, decimals, integers, and mixed numbers
    if (input.includes('/')) {
      // Fraction or mixed number
      const parts = input.split(' ');
      if (parts.length === 2) {
        // Mixed number (e.g., 1 1/2)
        const wholeNumber = parseInt(parts[0], 10);
        const fractionParts = parts[1].split('/');
        if (fractionParts.length === 2) {
          const numerator = parseInt(fractionParts[0], 10);
          const denominator = parseInt(fractionParts[1], 10);
          if (!isNaN(wholeNumber) && !isNaN(numerator) && !isNaN(denominator)) {
            return wholeNumber + numerator / denominator;
          }
        }
      } else if (parts.length === 1) {
        // Simple fraction (e.g., 1/2)
        const fractionParts = input.split('/');
        if (fractionParts.length === 2) {
          const numerator = parseInt(fractionParts[0], 10);
          const denominator = parseInt(fractionParts[1], 10);
          if (!isNaN(numerator) && !isNaN(denominator)) {
            return numerator / denominator;
          }
        }
      }
    } else if (!isNaN(Number(input))) {
      // Decimal or integer
      return parseFloat(input);
    }

    return null;
  }

  private convertToRatio(value: number): [number, number] {
    const precision = 1000000; // High precision for floating-point conversion
    const numerator = Math.round(value * precision);
    const denominator = precision;
    const gcd = this.getGCD(numerator, denominator);
    return [numerator / gcd, denominator / gcd];
  }

  private getGCD(a: number, b: number): number {
    return b === 0 ? a : this.getGCD(b, a % b);
  }   
}
