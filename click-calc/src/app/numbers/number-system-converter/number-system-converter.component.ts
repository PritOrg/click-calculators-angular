import { Component } from '@angular/core';

@Component({
  selector: 'app-number-system-converter',
  standalone: false,
  
  templateUrl: './number-system-converter.component.html',
  styleUrl: './number-system-converter.component.css'
})
export class NumberSystemConverterComponent {
  inputNumber: string = "10";
  fromBase: number | 'custom' = 10;
  toBase: number | 'custom' = 2;
  customFromBase: number | null = null;
  customToBase: number | null = null;
  convertedValue: string | null = null;

  availableBases = [
    { value: 2, label: "Binary (Base 2)" },
    { value: 8, label: "Octal (Base 8)" },
    { value: 10, label: "Decimal (Base 10)" },
    { value: 16, label: "Hexadecimal (Base 16)" },
    { value: 'custom', label: "Custom Base" }
  ];

  constructor() {
    this.convertNumber();
  }

  convertNumber() {
    if (!this.inputNumber) {
      this.convertedValue = null;
      return;
    }

    // Remove spaces
    const cleanedInput = this.inputNumber.replace(/\s+/g, '');

    let actualFromBase = this.fromBase === 'custom' ? this.customFromBase : this.fromBase;
    let actualToBase = this.toBase === 'custom' ? this.customToBase : this.toBase;

    if (!actualFromBase || !actualToBase || actualFromBase < 2 || actualToBase < 2 || actualFromBase > 36 || actualToBase > 36) {
      this.convertedValue = "Invalid Base";
      return;
    }

    try {
      // Convert to decimal first
      const decimalValue = parseInt(cleanedInput, actualFromBase);

      // Convert decimal to target base
      this.convertedValue = decimalValue.toString(actualToBase).toUpperCase();
    } catch (error) {
      this.convertedValue = "Invalid Input";
    }
  }
}
