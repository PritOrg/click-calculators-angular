import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  standalone: false,
  
  templateUrl: './emi-calculator.component.html',
  styleUrl: './emi-calculator.component.css'
})
export class EmiCalculatorComponent {
  loanAmount: number = 500000;
  annualInterestRate: number = 7.5;
  loanTenure: number = 5;

  emi: number = 0;
  totalPayment: number = 0;
  totalInterest: number = 0;

  monthlyInterestRate: number = 0;
  totalMonths: number = 0;

  constructor() {
    this.calculateEMI();
  }

  calculateEMI() {
    if (!this.loanAmount || !this.annualInterestRate || !this.loanTenure) {
      this.emi = 0;
      this.totalPayment = 0;
      this.totalInterest = 0;
      return;
    }

    this.monthlyInterestRate = this.annualInterestRate / (12 * 100);
    this.totalMonths = this.loanTenure * 12;

    this.emi = 
      (this.loanAmount * this.monthlyInterestRate * Math.pow(1 + this.monthlyInterestRate, this.totalMonths)) /
      (Math.pow(1 + this.monthlyInterestRate, this.totalMonths) - 1);

    this.totalPayment = this.emi * this.totalMonths;
    this.totalInterest = this.totalPayment - this.loanAmount;
  }
}
