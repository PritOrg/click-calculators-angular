import { Component } from '@angular/core';

@Component({
  selector: 'app-discount-calculator',
  templateUrl: './discount-calculator.component.html',
  styleUrl: './discount-calculator.component.css'
})
export class DiscountCalculatorComponent {
  originalPrice: number = 100;
  discountPercentage: number = 10;
  discountAmount: number = 0;
  finalPrice: number = 0;
  constructor(){
    this.calculateDiscount()
  }
  calculateDiscount() {
    this.discountAmount = (this.originalPrice * this.discountPercentage) / 100;
    this.finalPrice = this.originalPrice - this.discountAmount;
  }
}
