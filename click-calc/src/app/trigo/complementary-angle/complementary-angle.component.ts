import { Component } from '@angular/core';

@Component({
  selector: 'app-complementary-angle',
  templateUrl: './complementary-angle.component.html',
  styleUrls: ['./complementary-angle.component.css'],
  standalone:false

})
export class ComplementaryAngleComponent {
  angleInput: string = '45';
  unit: 'degrees' | 'radians' = 'degrees';
  complementaryAngle: number | null = null;
  complementaryAngleDegrees: number | null = null;
  complementaryAngleRadians: number | null = null;
  shortAnswer: string = '';
  detailedAnswer: string = '';

  x2: number = 0;
  y2: number = 0;
  labelX: number = 0;
  labelY: number = 0;

  ngOnInit(){
    this.calculateComplementaryAngle();
  }
  calculateComplementaryAngle() {
    let angle: number;

    // Convert pi notation (e.g., pi/3) to numeric radians if unit is radians
    if (this.unit === 'radians' && this.angleInput.includes('pi')) {
      // Safely handle 'pi' input, using Math.PI directly
      angle = this.angleInput.replace(/pi/g, 'Math.PI').includes('/') ?
        eval(this.angleInput.replace('pi', 'Math.PI')) :
        parseFloat(this.angleInput.replace('pi', 'Math.PI'));
    } else {
      angle = parseFloat(this.angleInput);
    }

    // Validate the input angle
    if (isNaN(angle)) {
      this.shortAnswer = 'Invalid input';
      this.detailedAnswer = '';
      this.complementaryAngle = null;
      return;
    }

    // Calculate complementary angle and coordinates
    if (this.unit === 'degrees') {
      this.complementaryAngleDegrees = 90 - angle;
      this.shortAnswer = `The complementary angle of ${angle}° is ${this.complementaryAngleDegrees}°.`;
      this.detailedAnswer = `To find the complement of ${angle}°, we subtract it from 90°:\nComplement = 90° - ${angle}° = ${this.complementaryAngleDegrees}°.`;
      
      const radians = this.complementaryAngleDegrees * Math.PI / 180;
      this.updateCoordinates(radians);
    } else if (this.unit === 'radians') {
      this.complementaryAngleRadians = Math.PI / 2 - angle;
      this.shortAnswer = `The complementary angle of ${angle} rad is ${this.complementaryAngleRadians.toFixed(2)} rad.`;
      this.detailedAnswer = `To find the complement of ${angle} rad, we subtract it from π/2:\nComplement = π/2 - ${angle} = ${this.complementaryAngleRadians.toFixed(2)} rad.`;

      this.updateCoordinates(this.complementaryAngleRadians);
    }
  }

  private updateCoordinates(radians: number) {
    // Calculate coordinates based on the angle in radians
    this.x2 = 150 + 120 * Math.cos(radians); // Centered at 150,150 with 120 radius
    this.y2 = 150 - 120 * Math.sin(radians); // Adjust y for the SVG coordinate system
    this.labelX = 150 + 60 * Math.cos(radians); // Label position for complementary angle
    this.labelY = 150 - 60 * Math.sin(radians); // Adjust y for the label
  }
}
