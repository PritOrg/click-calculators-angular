import { Component } from '@angular/core';

@Component({
  selector: 'app-factorial-calculator',
  standalone: false,
  
  templateUrl: './factorial-calculator.component.html',
  styleUrl: './factorial-calculator.component.css'
})
export class FactorialCalculatorComponent {
  n: number | null = 5;
  factorial: string | null = null;
  formattedFactorial: string = '';
  steps: string[] = [];

  constructor(){
    this.calculateFactorial();
  }
  calculateFactorial(): void {
    if (this.n === null || this.n < 0) {
      this.factorial = null;
      this.formattedFactorial = '';
      this.steps = [];
      return;
    }

    let result = BigInt(1);
    this.steps = [];
    for (let i = 1; i <= this.n; i++) {
      result *= BigInt(i);
      this.steps.push(`${i}! = ${result.toString()}`);
    }

    this.factorial = result.toString();
    this.formattedFactorial = this.formatLargeNumber(result);
  }

  formatLargeNumber(num: bigint): string {
    const numStr = num.toString();
    return numStr.length > 12 ? Number(num).toExponential(6) : numStr;
  }

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.factorial ?? '').then(() => {
      alert('Factorial copied to clipboard!');
    });
  }
}
