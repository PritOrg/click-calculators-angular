import { Component } from '@angular/core';

@Component({
  selector: 'app-number-system-operations',
  standalone: false,

  templateUrl: './number-system-operations.component.html',
  styleUrl: './number-system-operations.component.css',
})
export class NumberSystemOperationsComponent {
  number1: string = '1010';
  number2: string = '1010';
  base: number | 'custom' = 2;
  customBase: number | null = null;
  operation: string = 'add';
  result: string | null = null;


  availableBases = [
    { value: 2, label: 'Binary (Base 2)' },
    { value: 8, label: 'Octal (Base 8)' },
    { value: 10, label: 'Decimal (Base 10)' },
    { value: 16, label: 'Hexadecimal (Base 16)' },
    { value: 'custom', label: 'Custom Base' },
  ];

  availableOperations = [
    { value: 'add', label: 'Addition (+)' },
    { value: 'subtract', label: 'Subtraction (-)' },
    { value: 'multiply', label: 'Multiplication (×)' },
    { value: 'divide', label: 'Division (÷)' },
  ];

  constructor() {
    this.performOperation();
  }

  performOperation() {
    if (!this.number1 || !this.number2) {
      this.result = null;
      return;
    }

    const cleanNum1 = this.number1.replace(/\s+/g, '');
    const cleanNum2 = this.number2.replace(/\s+/g, '');

    let actualBase = this.base === 'custom' ? this.customBase : this.base;

    if (!actualBase || actualBase < 2 || actualBase > 36) {
      this.result = 'Invalid Base';
      return;
    }

    try {
      // Converting numbers to decimal
      let num1 = parseInt(cleanNum1, actualBase);
      let num2 = parseInt(cleanNum2, actualBase);
      let output: number;

      switch (this.operation) {
        case 'add':
          output = num1 + num2;
          break;
        case 'subtract':
          output = num1 - num2;
          break;
        case 'multiply':
          output = num1 * num2;
          break;
        case 'divide':
          if (num2 === 0) {
            this.result = 'Cannot divide by zero';
            return;
          }
          output = Math.floor(num1 / num2);
          break;
        default:
          this.result = 'Invalid Operation';
          return;
      }

      // Converting result back to selected base
      this.result = output.toString(actualBase).toUpperCase();
    } catch (error) {
      this.result = 'Invalid Input';
    }
  }
}
