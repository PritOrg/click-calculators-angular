import { Component } from '@angular/core';

@Component({
  selector: 'app-trig-converter',
  templateUrl: './trig-converter.component.html',
  styleUrl: './trig-converter.component.css',
  standalone:false

})
export class TrigConverterComponent {
  angle: number = 0;
  angleUnit: string = 'degrees';
  initialFunction: string = 'sin';
  targetFunction: string = 'sin';
  conversionResult: number | null = null;

  // Converts the angle to radians if it's in degrees
  private convertToRadians(angle: number, unit: string): number {
    return unit === 'degrees' ? angle * (Math.PI / 180) : angle;
  }

  // Perform the trigonometric function conversion
  calculateConversion(): void {
    // Convert angle to radians if needed
    const radianAngle = this.convertToRadians(this.angle, this.angleUnit);
    
    // Calculate the initial function value
    let initialValue: number;
    switch (this.initialFunction) {
      case 'sin': initialValue = Math.sin(radianAngle); break;
      case 'cos': initialValue = Math.cos(radianAngle); break;
      case 'tan': initialValue = Math.tan(radianAngle); break;

      default: initialValue = NaN; break;
    }

    // Convert initial function value to the target function
    switch (this.targetFunction) {
      case 'sin': this.conversionResult = Math.asin(initialValue); break;
      case 'cos': this.conversionResult = Math.acos(initialValue); break;
      case 'tan': this.conversionResult = Math.atan(initialValue); break;

      default: this.conversionResult = NaN; break;
    }

    // Convert the result back to degrees if the initial unit was degrees
    if (this.angleUnit === 'degrees' && this.conversionResult !== null) {
      this.conversionResult = this.conversionResult * (180 / Math.PI);
    }
  }
}
