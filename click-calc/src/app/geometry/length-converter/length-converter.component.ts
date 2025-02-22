import { Component } from '@angular/core';

@Component({
  selector: 'app-length-converter',
  standalone: false,

  templateUrl: './length-converter.component.html',
  styleUrl: './length-converter.component.css',
})
export class LengthConverterComponent {
  lengthValue: number = 1;
  lengthFrom: string = 'meters';
  lengthTo: string = 'feet';
  convertedLength: number | null = null;
  lengthUnits = ['meters', 'feet', 'inches', 'cm', 'yards', 'miles'];

  lengthConversionRates: { [key: string]: number } = {
    meters: 1,
    feet: 3.28084,
    inches: 39.3701,
    cm: 100,
    yards: 1.09361,
    miles: 0.000621371,
  };
  constructor() {
    this.convertLength();
  }
  convertLength() {
    if (!this.lengthValue || !this.lengthFrom || !this.lengthTo) {
      this.convertedLength = null;
      return;
    }

    const inMeters =
      this.lengthValue / this.lengthConversionRates[this.lengthFrom]; // Convert to meters
    this.convertedLength = inMeters * this.lengthConversionRates[this.lengthTo]; // Convert to target unit
  }
}
