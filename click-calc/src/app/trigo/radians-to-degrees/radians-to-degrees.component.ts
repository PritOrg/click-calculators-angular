import { Component } from '@angular/core';

@Component({
  selector: 'app-radians-to-degrees',
  templateUrl: './radians-to-degrees.component.html',
  styleUrls: ['./radians-to-degrees.component.css'],
  standalone:false
  
})
export class RadiansToDegreesComponent {
  angle: string = 'π';
  degrees: string = '180°';

  calculateDegrees() {
    try {
      let angleValue = this.angle.replace(/\s+/g, ''); // Remove spaces
      let numerator: number;
      let pi:number;
      // Check if the angle contains the symbol for pi or the word 'pi'
      if (angleValue.includes('π') || angleValue.toLowerCase().includes('pi')) {
        // Replace 'pi' with 'π' for consistent processing
        angleValue = angleValue.toLowerCase().replace(/pi/g, 'π');

        // Check if it's a fraction like π/2 or pi/2
        if (angleValue.includes('/')) {
          let [num, denom] = angleValue.split('/');

          // If there's no explicit numerator, treat it as 1 (e.g., π/2 becomes 1π/2)
          if (num === 'π' || num === '') {
            num = '1';
          }

          num = num.replace('π', ''); // Remove π from the numerator
          numerator = (parseFloat(num) / parseFloat(denom)) * 180;
        } else {
          // Handle the case where π is multiplied by a number (e.g., 3π or π itself)
          let fraction = angleValue.replace('π', '');
          numerator = fraction ? parseFloat(fraction) * 180 : 180;
        }
      } else {
        // Handle the case where the input is purely a numerical value without π
        numerator = parseFloat(angleValue) * (180 / Math.PI);
      }

      this.degrees = `${numerator}°`;
    } catch (error) {
      this.degrees = 'Invalid input';
    }
  }
}
