import { Component } from '@angular/core';

@Component({
  selector: 'app-lcm-gcd-calculator',
  standalone: false,
  
  templateUrl: './lcm-gcd-calculator.component.html',
  styleUrl: './lcm-gcd-calculator.component.css'
})
export class LcmGcdCalculatorComponent {
  numbersInput: string = "18, 12";
  lcm: number | null = null;
  gcd: number | null = null;
  gcdSteps: string[] = [];
  lcmSteps: string[] = [];

  constructor() {
    this.calculateLCMGCD();
  }

  calculateLCMGCD() {
    let numbers = this.numbersInput
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));

    if (numbers.length < 2) {
      this.lcm = null;
      this.gcd = null;
      this.gcdSteps = [];
      this.lcmSteps = [];
      return;
    }

    // Reset steps
    this.gcdSteps = [];
    this.lcmSteps = [];

    // Calculate GCD with steps
    this.gcd = numbers.reduce((acc, num) => this.findGCDWithSteps(acc, num));

    // Calculate LCM with steps
    this.lcm = numbers.reduce((acc, num) => {
      let gcd = this.findGCD(acc, num);
      let lcm = (acc * num) / gcd;
      this.lcmSteps.push(`LCM(${acc}, ${num}) = (${acc} × ${num}) / GCD(${acc}, ${num}) = ${lcm}`);
      return lcm;
    });
  }

  findGCD(a: number, b: number): number {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  findGCDWithSteps(a: number, b: number): number {
    let originalA = a;
    let originalB = b;
    while (b !== 0) {
      let temp = b;
      let remainder = a % b;
      this.gcdSteps.push(`GCD(${originalA}, ${originalB}) → ${a} ÷ ${b} = remainder ${remainder}`);
      a = temp;
      b = remainder;
    }
    return a;
  }
}
