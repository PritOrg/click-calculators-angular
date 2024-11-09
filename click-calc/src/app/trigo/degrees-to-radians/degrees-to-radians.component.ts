import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-degrees-to-radians',
  templateUrl: './degrees-to-radians.component.html',
  styleUrls: ['./degrees-to-radians.component.css'],animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
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
