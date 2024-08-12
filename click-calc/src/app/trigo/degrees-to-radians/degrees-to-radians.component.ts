import { Component } from '@angular/core';

@Component({
  selector: 'app-degrees-to-radians',
  templateUrl: './degrees-to-radians.component.html',
  styleUrls: ['./degrees-to-radians.component.css'],
})
export class DegreesToRadiansComponent {
  angle: number = 180;
  radians: string = 'π';
  decimalRadians: number = Math.PI;

  calculateRadians() {
    const gcd = this.greatestCommonDivisor(this.angle, 180);
    const numerator = this.angle / gcd;
    const denominator = 180 / gcd;

    if (denominator === 1) {
      this.radians = `${numerator}π`;
    } else if (numerator === 1) {
      this.radians = `π/${denominator}`;
    } else {
      this.radians = `${numerator}π/${denominator}`;
    }
    this.decimalRadians = (numerator * Math.PI) / denominator;
  }

  greatestCommonDivisor(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return this.greatestCommonDivisor(b, a % b);
  }
}
