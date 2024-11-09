import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  calculatorSections = [
    {
      title: 'Percentage Calculations',
      items: [
        { title: 'Add a Percentage Calculator', description: 'Easily calculate percentages...', link: '/percentage/add' },
        { title: 'Discount Calculator', description: 'Determine the discounted price...', link: '/percentage/discount-calc' },
      ]
    },
    {
      title: 'Fractions and Ratios',
      items: [
        { title: 'Decimal to Ratio Calculator', description: 'Convert decimal values...', link: '#' },
        { title: 'Percentage to Ratio Calculator', description: 'Convert percentages...', link: '#' },
      ]
    },
    {
      title: 'Geometry and Trigonometry',
      items: [
        { title: 'Degrees to Radians', description: 'Convert angles in degrees...', link: '/trigo/degrees-to-radians' },
        { title: 'Radians to Degrees', description: 'Convert angles in radians...', link: '/trigo/radians-to-degrees' },
        { title: 'Trigonometry Convertors', description: 'Explore trigonometry-related conversions...', link: 'trigo/convertor' },
        { title: 'Trigonometry Calculator', description: 'Perform advanced trigonometric calculations...', link: 'trigo/calculator' },
      ]
    },
    // Additional sections here
  ];
  
}
