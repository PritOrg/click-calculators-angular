import { Component } from '@angular/core';

@Component({
  selector: 'app-over-weight-calculator',
  standalone: false,
  
  templateUrl: './over-weight-calculator.component.html',
  styleUrl: './over-weight-calculator.component.css'
})
export class OverWeightCalculatorComponent {
  height: number | null = null;
  weight: number | null = null;
  heightUnit: string = 'meters';
  weightUnit: string = 'kg';
  bmi: number | null = null;
  bmiCategory: string | null = null;
  pi: number | null = null;
  piCategory: string | null = null;

  // Converts height to meters
  convertHeightToMeters(): number | null {
    if (!this.height) return null;

    switch (this.heightUnit) {
      case 'meters':
        return this.height;
      case 'cm':
        return this.height / 100;
      case 'feet':
        return this.height * 0.3048;
      case 'feet-inches': {
        const [feet, inches] = this.height.toString().split('.').map(Number);
        return feet * 0.3048 + (inches || 0) * 0.0254;
      }
      case 'inches':
        return this.height * 0.0254;
      default:
        return null;
    }
  }

  // Converts weight to kilograms
  convertWeightToKg(): number | null {
    if (!this.weight) return null;

    return this.weightUnit === 'lbs' ? this.weight * 0.453592 : this.weight;
  }

  calculateMetrics(): void {
    const heightInMeters = this.convertHeightToMeters();
    const weightInKg = this.convertWeightToKg();

    if (!heightInMeters || !weightInKg) {
      this.bmi = null;
      this.pi = null;
      this.bmiCategory = null;
      this.piCategory = null;
      return;
    }

    // BMI Calculation
    this.bmi = weightInKg / Math.pow(heightInMeters, 2);
    if (this.bmi < 18.5) this.bmiCategory = 'Underweight';
    else if (this.bmi < 25) this.bmiCategory = 'Healthy weight';
    else if (this.bmi < 30) this.bmiCategory = 'Overweight';
    else if (this.bmi < 35) this.bmiCategory = 'Class 1 obesity';
    else if (this.bmi < 40) this.bmiCategory = 'Class 2 obesity';
    else this.bmiCategory = 'Class 3 obesity';

    // Ponderal Index Calculation
    this.pi = weightInKg / Math.pow(heightInMeters, 3);
    if (this.pi < 11) this.piCategory = 'Underweight';
    else if (this.pi < 15) this.piCategory = 'Normal weight';
    else if (this.pi < 17) this.piCategory = 'Overweight';
    else this.piCategory = 'Obese';
  }
}
