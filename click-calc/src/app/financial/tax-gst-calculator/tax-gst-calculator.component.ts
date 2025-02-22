import { Component } from '@angular/core';

@Component({
  selector: 'app-tax-gst-calculator',
  standalone: false,
  
  templateUrl: './tax-gst-calculator.component.html',
  styleUrl: './tax-gst-calculator.component.css'
})
export class TaxGstCalculatorComponent {
  amount: number = 10000;
  taxRate: number = 10;
  gstRate: number = 18;
  selectedCountry: string = 'IN';

  totalTax: number = 0;
  totalGST: number = 0;
  finalAmount: number = 0;


  constructor() {
    this.calculateTaxGST();
  }

  calculateTaxGST() {
    if (!this.amount || !this.taxRate || !this.gstRate) {
      this.totalTax = 0;
      this.totalGST = 0;
      this.finalAmount = this.amount;
      return;
    }

    this.totalTax = (this.amount * this.taxRate) / 100;
    this.totalGST = (this.amount * this.gstRate) / 100;
    this.finalAmount = this.amount + this.totalTax + this.totalGST;
  }

}
