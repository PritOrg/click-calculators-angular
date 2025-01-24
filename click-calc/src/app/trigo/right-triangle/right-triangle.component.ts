import { Component } from '@angular/core';

@Component({
  selector: 'app-right-triangle',
  templateUrl: './right-triangle.component.html',
  styleUrls: ['./right-triangle.component.css'],
})
export class RightTriangleComponent {
  sideA: number | null = null;
  sideB: number | null = null;
  hypotenuseC: number | null = null;

  calculatedHypotenuse: number = 0;
  angleA: number = 0;
  angleB: number = 0;
  area: number = 0;
  perimeter: number = 0;

  isCalculated: boolean = false;
  isRightTriangle: boolean | null = null; // True if it's a valid right triangle

  // Main Calculation Logic
  calculate(): void {
    this.resetCalculations();

    const a = this.sideA || 0;
    const b = this.sideB || 0;
    const c = this.hypotenuseC || 0;

    // If all three sides are provided, validate the triangle
    if (a && b && c) {
      if (Math.abs(c ** 2 - (a ** 2 + b ** 2)) < 1e-6) {
        this.isRightTriangle = true;
        this.performCalculations(a, b, c);
      } else {
        this.isRightTriangle = false;
      }
      return;
    }

    // If two sides are provided, calculate the third side
    if (a && b) {
      this.calculatedHypotenuse = Math.sqrt(a ** 2 + b ** 2);
      this.performCalculations(a, b, this.calculatedHypotenuse);
    } else if (a && c) {
      if (c > a) {
        this.sideB = Math.sqrt(c ** 2 - a ** 2);
        this.performCalculations(a, this.sideB, c);
      }
    } else if (b && c) {
      if (c > b) {
        this.sideA = Math.sqrt(c ** 2 - b ** 2);
        this.performCalculations(this.sideA, b, c);
      }
    }
  }

  // Perform calculations for angles, area, and perimeter
  private performCalculations(a: number, b: number, c: number): void {
    this.calculatedHypotenuse = c;
    this.angleA = this.toDegrees(Math.atan(a / b));
    this.angleB = this.toDegrees(Math.atan(b / a));
    this.area = (a * b) / 2;
    this.perimeter = a + b + c;
    this.isCalculated = true;
    this.isRightTriangle = true;
  }

  // Reset calculation values
  private resetCalculations(): void {
    this.calculatedHypotenuse = 0;
    this.angleA = 0;
    this.angleB = 0;
    this.area = 0;
    this.perimeter = 0;
    this.isCalculated = false;
    this.isRightTriangle = null;
  }

  // Convert radians to degrees
  private toDegrees(radians: number): number {
    return radians * (180 / Math.PI);
  }
}
