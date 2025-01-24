import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  calculatorSections = [
    {
      title: 'Percentage Calculations',
      icon: 'percent',
      color: '#4CAF50',
      items: [
        { 
          title: 'Add a Percentage', 
          description: 'Calculate percentages with ease', 
          link: '/percentage/add',
          icon: 'calculate'
        },
        { 
          title: 'Discount Calculator', 
          description: 'Determine precise discounted prices', 
          link: '/percentage/discount-calc',
          icon: 'local_offer'
        },
      ]
    },
    {
      title: 'Trigonometry Tools',
      icon: 'science',
      color: '#2196F3',
      items: [
        { 
          title: 'Degrees to Radians', 
          description: 'Convert angle measurements', 
          link: '/trigo/degrees-to-radians',
          icon: 'transform'
        },
        { 
          title: 'Radians to Degrees', 
          description: 'Precise angle conversions', 
          link: '/trigo/radians-to-degrees',
          icon: 'change_circle'
        },
        { 
          title: 'Trigonometry Convertor', 
          description: 'Advanced angle transformations', 
          link: '/trigo/convertor',
          icon: 'alt_route'
        },
        { 
          title: 'Trigonometry Calculator', 
          description: 'Complex trigonometric calculations', 
          link: '/trigo/calculator',
          icon: 'dashboard_customize'
        },
        { 
          title: 'Complementary Angle', 
          description: 'Calculate complementary angles', 
          link: '/trigo/complementary-angle',
          icon: 'calculate'
        },
        { 
          title: 'Right Triangle Calculator', 
          description: 'Solve right triangle problems', 
          link: '/trigo/right-triangle',
          icon: 'change_history'
        },
      ]
    },
    {
      title: 'Utility Calculators',
      icon: 'build',
      color: '#FF9800',
      items: [
        { 
          title: 'Table Generator', 
          description: 'Create custom multiplication tables', 
          link: '/table-generator',
          icon: 'grid_on'
        },
        { 
          title: 'Salary Calculator', 
          description: 'Compute precise salary details', 
          link: '/salary-calculator',
          icon: 'monetization_on'
        },
        { 
          title: 'Decimal to Ratio Converter', 
          description: 'Convert decimal numbers to ratios', 
          link: '/ratio-calculator',
          icon: 'compare_arrows'
        },
      ]
    },
    {
      title: 'Number Calculators',
      icon: 'filter_1',
      color: '#9C27B0',
      items: [
        { 
          title: 'Large Number Calculator', 
          description: 'Handle and calculate large numbers', 
          link: '/number/large-number-calculator',
          icon: 'exposure_plus_2'
        },
        { 
          title: 'Scientific Notation Calculator', 
          description: 'Convert numbers to scientific notation', 
          link: '/number/scientific-notation-calculator',
          icon: 'functions'
        },
        { 
          title: 'Long Division Calculator', 
          description: 'Perform long division with ease', 
          link: '/number/long-number-division-calculator',
          icon: 'format_list_numbered'
        },
      ]
    }
  ];
}