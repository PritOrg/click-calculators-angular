import { Component } from '@angular/core';

@Component({
  selector: 'app-large-number-calc',
  templateUrl: './large-number-calc.component.html',
  styleUrl: './large-number-calc.component.css',
  standalone:false

})
export class LargeNumberCalcComponent {
  firstNumber: string = '1'; // First number input
  secondNumber: string = '1'; // Second number input
  operation: string = '+'; // Selected operation
  result: string | null = ''; // Result of calculation
  isCollapsed: boolean = true; // Collapsed state of result

  ngOnInit(){
    this.calculate();
  }
  calculate() {
    if (!this.firstNumber || !this.secondNumber || !this.operation) {
      this.result = null;
      return;
    }

    try {
      const a = BigInt(this.firstNumber);
      const b = BigInt(this.secondNumber);
      let calculationResult: BigInt;

      switch (this.operation) {
        case '+':
          calculationResult = a + b;
          break;
        case '-':
          calculationResult = a - b;
          break;
        case '*':
          calculationResult = a * b;
          break;
        case '/':
          if (b === BigInt(0)) throw new Error('Division by zero is not allowed.');
          calculationResult = a / b;
          break;
        case '^':
          if (b < BigInt(0)) calculationResult = BigInt(0);
          else calculationResult = a ** b;
          break;
        case '%':
          calculationResult = a % b;
          break;
        default:
          throw new Error('Invalid operation selected.');
      }

      this.result = calculationResult.toString();
    } catch (error) {
      this.result = `Error: ${(error as Error).message}`;
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
