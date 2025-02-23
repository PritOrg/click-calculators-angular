import { Component } from '@angular/core';
import { factorial } from 'mathjs';


@Component({
  selector: 'app-permutation-combination-calc',
  standalone: false,
  
  templateUrl: './permutation-combination-calc.component.html',
  styleUrl: './permutation-combination-calc.component.css'
})
export class PermutationCombinationCalcComponent {
  n: number | null = 5;
  r: number | null = 4;
  nPr: number | null = null;
  nCr: number | null = null;
  errorMessage: string = "";
  steps: string[] = [];

  constructor() {
    this.calculate();
  }
  factorialMy(n: number): number {
   return factorial(n);
  }
  calculate() {
    this.errorMessage = "";
    this.steps = [];
    this.nPr = null;
    this.nCr = null;

    if (this.n === null || this.r === null) {
      this.errorMessage = "Please enter values for both n and r.";
      return;
    }

    if (!Number.isInteger(this.n) || !Number.isInteger(this.r) || this.n < 0 || this.r < 0) {
      this.errorMessage = "n and r must be non-negative integers.";
      return;
    }

    if (this.n < this.r) {
      this.errorMessage = "n must be greater than or equal to r.";
      return;
    }

    try {
      // Compute Factorials
      const nFactorial = factorial(this.n);
      const rFactorial = factorial(this.r);
      const nrFactorial = factorial(this.n - this.r);

      // Compute nPr
      this.nPr = nFactorial / nrFactorial;
      
      // Compute nCr
      this.nCr = this.nPr / rFactorial;

      // Store step-by-step calculations
      this.steps.push(`Step 1: Compute Factorials`);
      this.steps.push(`n! = ${this.n}! = ${nFactorial}`);
      this.steps.push(`r! = ${this.r}! = ${rFactorial}`);
      this.steps.push(`(n-r)! = (${this.n}-${this.r})! = ${nrFactorial}`);

      this.steps.push(`Step 2: Compute Permutation (nPr)`);
      this.steps.push(`P(${this.n}, ${this.r}) = ${this.n}! / (${this.n}-${this.r})!`);
      this.steps.push(`P(${this.n}, ${this.r}) = ${nFactorial} / ${nrFactorial} = ${this.nPr}`);

      this.steps.push(`Step 3: Compute Combination (nCr)`);
      this.steps.push(`C(${this.n}, ${this.r}) = P(${this.n}, ${this.r}) / ${this.r}!`);
      this.steps.push(`C(${this.n}, ${this.r}) = ${this.nPr} / ${rFactorial} = ${this.nCr}`);

    } catch (error) {
      this.errorMessage = "An error occurred during calculations.";
    }
  }
}
