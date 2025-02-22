import { Component } from '@angular/core';

@Component({
  selector: 'app-weight-converter',
  standalone: false,

  templateUrl: './weight-converter.component.html',
  styleUrl: './weight-converter.component.css',
})
export class WeightConverterComponent {
  weightValue: number = 1;
  weightFrom: string = 'kg';
  weightTo: string = 'lbs';
  convertedWeight: number | null = null;
  weightUnits = ['kg', 'lbs', 'grams', 'ounces', 'stones'];

  weightConversionRates: { [key: string]: number } = {
    kg: 1,
    lbs: 2.20462,
    grams: 1000,
    ounces: 35.274,
    stones: 0.157473,
  };
  constructor() {
    this.convertWeight();
  }
  convertWeight() {
    if (!this.weightValue || !this.weightFrom || !this.weightTo) {
      this.convertedWeight = null;
      return;
    }

    const inKg = this.weightValue / this.weightConversionRates[this.weightFrom]; // Convert to kg
    this.convertedWeight = inKg * this.weightConversionRates[this.weightTo]; // Convert to target unit
  }
}
