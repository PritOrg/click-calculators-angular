import { Component } from '@angular/core';

@Component({
  selector: 'app-scientific-notation-calculator',
  templateUrl: './scientific-notation-calculator.component.html',
  styleUrl: './scientific-notation-calculator.component.css',
  standalone:false

})
export class ScientificNotationCalculatorComponent {
  inputNumber: string = '100'; // User input
  result!: {
    scientificNotation: string ;
    eNotation: string;
    mantissa: number;
    exponent: number;
    significantFigures: number;
  } | null;

  ngOnInit(){
    this.convertToScientificNotation();
  }
  convertToScientificNotation() {
    if (!this.inputNumber || isNaN(Number(this.inputNumber))) {
      this.result = null;
      return;
    }
  
    const num = parseFloat(this.inputNumber); 
    const exponent = Math.floor(Math.log10(Math.abs(num))); 
    const mantissa = num / Math.pow(10, exponent); 
  
    // Count significant figures
    const significantFigures = mantissa.toString().replace('.', '').replace(/^0+|0+$/g, '').length;
  
    // Format the result
    this.result = {
      scientificNotation: `${mantissa.toFixed(6)} × 10^${exponent}`,
      eNotation: `${mantissa.toFixed(6)}e${exponent}`,
      mantissa: parseFloat(mantissa.toFixed(6)),
      exponent,
      significantFigures,
    };
  }
  
}
