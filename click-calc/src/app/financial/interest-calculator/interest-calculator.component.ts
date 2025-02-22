import { Component } from '@angular/core';

@Component({
  selector: 'app-interest-calculator',
  standalone: false,
  
  templateUrl: './interest-calculator.component.html',
  styleUrl: './interest-calculator.component.css'
})
export class InterestCalculatorComponent {
  principal: number = 10000;
  rate: number = 5;
  time: number = 5;
  frequency: number = 1;

  simpleInterest: number = 0;
  totalSimpleAmount: number = 0;
  compoundInterest: number = 0;
  totalCompoundAmount: number = 0;
  resultsAvailable: boolean = false;

  ngOnInit(){
    this.calculateInterest();
  }
  calculateInterest() {
    // Simple Interest Formula: SI = (P × R × T) / 100
    this.simpleInterest = (this.principal * this.rate * this.time) / 100;
    this.totalSimpleAmount = this.principal + this.simpleInterest;

    // Compound Interest Formula: A = P (1 + R/N)^(N×T)
    let ratePerPeriod = this.rate / (this.frequency * 100);
    let exponent = this.frequency * this.time;
    this.totalCompoundAmount = this.principal * Math.pow((1 + ratePerPeriod), exponent);
    this.compoundInterest = this.totalCompoundAmount - this.principal;
    this.resultsAvailable = true;
  }
}
