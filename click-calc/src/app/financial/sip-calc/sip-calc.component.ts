import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-sip-calc',
  standalone: false,
  
  templateUrl: './sip-calc.component.html',
  styleUrl: './sip-calc.component.css'
})
export class SipCalcComponent {
  amount: number = 5000;
  rate: number = 12;
  years: number = 5;
  result: number = 0;
  totalInvested: number = 0;
  wealthGained: number = 0;
  chart: any;
  


  ngOnInit(){
    this.calculateSIP();
  }
  constructor() { }

  calculateSIP() {

    const monthlyRate = this.rate / (12 * 100);
    const months = this.years * 12;
    
    this.result = this.amount * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
      (1 + monthlyRate);
    
    this.totalInvested = this.amount * months;
    this.wealthGained = this.result - this.totalInvested;
  }

}
