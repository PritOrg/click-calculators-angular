import { Component } from '@angular/core';
import Fuse, { IFuseOptions } from 'fuse.js';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  standalone : false,
  styleUrl: './index.component.css'
})
export class IndexComponent {
  
  mostUsedCalculator: string = 'Percentage Calculator';
  recentlyAdded: string = 'Scientific Notation Calculator';
  calculatorSections: CalculatorSection[] = [
    {
      id: 'percentage',
      title: 'Percentage Calculations',
      icon: 'percent',
      color: '#4CAF50',
      items: [
        { 
          title: 'Add a Percentage',
          description: 'Calculate percentages with ease',
          link: '/percentage/add',
          icon: 'calculate',
          tags: ['Basic', 'Mathematics'],
          features: ['Instant calculation', 'Multiple formats'],
          previewImage: 'assets/images/percentage-add.png'
        },
        { 
          title: 'Discount Calculator',
          description: 'Determine precise discounted prices',
          link: '/percentage/discount-calc',
          icon: 'local_offer',
          tags: ['Shopping', 'Finance'],
          features: ['Price comparison', 'Bulk calculations'],
          previewImage: 'assets/images/discount-calc.png'
        }
      ]
    },
    {
      id: 'trigonometry',
      title: 'Trigonometry Tools',
      icon: 'science',
      color: '#2196F3',
      items: [
        { 
          title: 'Degrees to Radians',
          description: 'Convert angle measurements',
          link: '/trigo/degrees-to-radians',
          icon: 'transform',
          tags: ['Conversion', 'Angles'],
          features: ['Precise conversion', 'Multiple decimal places'],
          previewImage: 'assets/images/deg-to-rad.png'
        },
        { 
          title: 'Radians to Degrees',
          description: 'Precise angle conversions',
          link: '/trigo/radians-to-degrees',
          icon: 'change_circle',
          tags: ['Conversion', 'Angles'],
          features: ['Reverse conversion', 'Step-by-step guide'],
          previewImage: 'assets/images/rad-to-deg.png'
        },
        { 
          title: 'Trigonometry Convertor',
          description: 'Advanced angle transformations',
          link: '/trigo/convertor',
          icon: 'alt_route',
          tags: ['Advanced', 'Multi-function'],
          features: ['Multiple conversions', 'Formula display'],
          previewImage: 'assets/images/trigo-convert.png'
        },
        { 
          title: 'Trigonometry Calculator',
          description: 'Complex trigonometric calculations',
          link: '/trigo/calculator',
          icon: 'dashboard_customize',
          tags: ['Advanced', 'Scientific'],
          features: ['All trig functions', 'Custom angles'],
          previewImage: 'assets/images/trigo-calc.png'
        },
        { 
          title: 'Complementary Angle',
          description: 'Calculate complementary angles',
          link: '/trigo/complementary-angle',
          icon: 'calculate',
          tags: ['Geometry', 'Basic'],
          features: ['Visual representation', 'Quick calculation'],
          previewImage: 'assets/images/comp-angle.png'
        },
        { 
          title: 'Right Triangle Calculator',
          description: 'Solve right triangle problems',
          link: '/trigo/right-triangle',
          icon: 'change_history',
          tags: ['Geometry', 'Practical'],
          features: ['Side calculations', 'Angle calculations'],
          previewImage: 'assets/images/right-triangle.png'
        }
      ]
    },
    {
      id: 'geometry',
      title: 'Geometry Calculators',
      icon: 'square_foot',
      color: '#3F51B5',
      items: [
        { 
          title: 'Polygon Calculator',
          description: 'Compute polygon properties',
          link: '/geometry/polygon-calculator',
          icon: 'category',
          tags: ['Geometry', 'Shapes'],
          features: ['Area calculation', 'Perimeter calculation'],
          previewImage: 'assets/images/polygon-calc.png'
        },
        { 
          title: 'Weight Converter',
          description: 'Convert between different weight units',
          link: '/geometry/weight-converter',
          icon: 'scale',
          tags: ['Conversion', 'Utility'],
          features: ['Multiple units', 'Instant results'],
          previewImage: 'assets/images/weight-conv.png'
        },
        { 
          title: 'Length Converter',
          description: 'Convert between different length units',
          link: '/geometry/length-converter',
          icon: 'straighten',
          tags: ['Conversion', 'Utility'],
          features: ['Multiple units', 'Instant results'],
          previewImage: 'assets/images/length-conv.png'
        }
      ]
    },
    {
      id: 'numbers',
      title: 'Number Calculators',
      icon: 'filter_1',
      color: '#9C27B0',
      items: [
        { 
          title: 'Large Number Calculator',
          description: 'Handle and calculate large numbers',
          link: '/number/large-number-calculator',
          icon: 'exposure_plus_2',
          tags: ['Advanced', 'Scientific'],
          features: ['Big number support', 'Scientific notation'],
          previewImage: 'assets/images/large-num.png'
        },
        { 
          title: 'Scientific Notation Calculator',
          description: 'Convert numbers to scientific notation',
          link: '/number/scientific-notation-calculator',
          icon: 'functions',
          tags: ['Scientific', 'Conversion'],
          features: ['Bi-directional conversion', 'Decimal precision'],
          previewImage: 'assets/images/sci-notation.png'
        },
        { 
          title: 'Long Division Calculator',
          description: 'Perform long division with ease',
          link: '/number/long-number-division-calculator',
          icon: 'format_list_numbered',
          tags: ['Basic Math', 'Education'],
          features: ['Step-by-step solution', 'Remainder display'],
          previewImage: 'assets/images/long-division.png'
        },
        { 
          title: 'Prime Factorization Calculator',
          description: 'Find prime factors of large numbers',
          link: '/number/prime-factorization',
          icon: 'filter_none',
          tags: ['Mathematics', 'Prime Numbers'],
          features: ['Factorization tree', 'Exponential form'],
          previewImage: 'assets/images/prime-factor.png'
        },
        { 
          title: 'Decimal to Ratio Converter',
          description: 'Convert decimal numbers to ratios',
          link: '/number/ratio-calculator',
          icon: 'compare_arrows',
          tags: ['Conversion', 'Mathematics'],
          features: ['Simplification', 'Fraction conversion'],
          previewImage: 'assets/images/ratio-conv.png'
        },
        { 
          title: 'LCM and GCD Calculator',
          description: 'Calculate LCM and GCD of numbers',
          link: '/number/lcm-gcd-calculator',
          icon: 'calculate',
          tags: ['Mathematics', 'Number Theory'],
          features: ['Multiple numbers support', 'Step-by-step solution'],
          previewImage: 'assets/images/lcm-gcd.png'
        },
        { 
          title: 'Number System Converter',
          description: 'Convert between different number systems',
          link: '/number/number-system-convertor',
          icon: 'swap_horiz',
          tags: ['Conversion', 'Mathematics'],
          features: ['Binary, Octal, Decimal, Hex', 'Instant results'],
          previewImage: 'assets/images/number-system.png'
        },
        { 
          title: 'Number System Operations',
          description: 'Perform operations in different number systems',
          link: '/number/number-system-operations',
          icon: 'functions',
          tags: ['Mathematics', 'Advanced'],
          features: ['Addition, Subtraction, Multiplication, Division', 'Multiple bases'],
          previewImage: 'assets/images/number-ops.png'
        },
        { 
          title: 'Permutation and Combination Calculator',
          description: 'Calculate permutations and combinations',
          link: '/number/permutation-combination-calc',
          icon: 'functions',
          tags: ['Mathematics', 'Probability'],
          features: ['Step-by-step solution', 'Multiple inputs'],
          previewImage: 'assets/images/perm-comb.png'
        },
        { 
          title: 'Factorial Calculator',
          description: 'Calculate factorial of a number',
          link: '/number/factorial-calculator',
          icon: 'exclamation',
          tags: ['Mathematics', 'Basic'],
          features: ['Large number support', 'Step-by-step solution'],
          previewImage: 'assets/images/factorial.png'
        }
      ]
    },
    {
      id: 'health',
      title: 'Health Calculators',
      icon: 'favorite',
      color: '#E91E63',
      items: [
        { 
          title: 'Ideal Weight Calculator',
          description: 'Find your ideal weight range',
          link: '/health/ideal-weight-calculator',
          icon: 'accessibility_new',
          tags: ['Health', 'Fitness'],
          features: ['BMI-based calculation', 'Custom age range'],
          previewImage: 'assets/images/ideal-weight.png'
        },
        { 
          title: 'Overweight Calculator',
          description: 'Assess your weight status',
          link: '/health/over-weight-calculator',
          icon: 'fitness_center',
          tags: ['Health', 'Wellness'],
          features: ['BMI check', 'Weight suggestions'],
          previewImage: 'assets/images/overweight-calc.png'
        }
      ]
    },
    {
      id: 'financial',
      title: 'Financial Calculators',
      icon: 'attach_money',
      color: '#FF5722',
      items: [
        { 
          title: 'SIP Calculator',
          description: 'Calculate Systematic Investment Plan returns',
          link: '/financial/sip-calculator',
          icon: 'trending_up',
          tags: ['Finance', 'Investment'],
          features: ['Future value calculation', 'Customizable inputs'],
          previewImage: 'assets/images/sip-calc.png'
        },
        { 
          title: 'Interest Calculator',
          description: 'Calculate simple and compound interest',
          link: '/financial/interest-calculator',
          icon: 'monetization_on',
          tags: ['Finance', 'Savings'],
          features: ['Multiple interest types', 'Detailed breakdown'],
          previewImage: 'assets/images/interest-calc.png'
        },
        { 
          title: 'EMI Calculator',
          description: 'Calculate Equated Monthly Installments',
          link: '/financial/emi-calculator',
          icon: 'credit_card',
          tags: ['Finance', 'Loans'],
          features: ['Loan amount calculation', 'Interest rate analysis'],
          previewImage: 'assets/images/emi-calc.png'
        },
        { 
          title: 'Tax and GST Calculator',
          description: 'Calculate taxes and GST',
          link: '/financial/tax-gst-calculator',
          icon: 'receipt',
          tags: ['Finance', 'Tax'],
          features: ['Tax rate calculation', 'GST breakdown'],
          previewImage: 'assets/images/tax-gst.png'
        }
      ]
    },
    {
      id: 'utility',
      title: 'Utility Calculators',
      icon: 'build',
      color: '#FF9800',
      items: [
        { 
          title: 'Table Generator',
          description: 'Create custom multiplication tables',
          link: '/table-generator',
          icon: 'grid_on',
          tags: ['Education', 'Basic Math'],
          features: ['Customizable range', 'Printable format'],
          previewImage: 'assets/images/table-gen.png'
        },
        { 
          title: 'Salary Calculator',
          description: 'Compute precise salary details',
          link: '/salary-calculator',
          icon: 'monetization_on',
          tags: ['Finance', 'Professional'],
          features: ['Tax calculation', 'Multiple currencies'],
          previewImage: 'assets/images/salary-calc.png'
        },
        { 
          title: 'Matrices Calculator',
          description: 'Perform matrix calculations',
          link: '/matrices-calculator',
          icon: 'table_chart',
          tags: ['Linear Algebra', 'Advanced Math'],
          features: ['Determinant calculation', 'Multiplication'],
          previewImage: 'assets/images/matrix-calc.png'
        }
      ]
    }
  ];

  private allCalculators: CalculatorItem[];

  searchResults: CalculatorItem[] = [];
  
  // Fuse.js instance for fuzzy searching
  private fuse: Fuse<CalculatorItem>;
  constructor() {
    this.allCalculators = this.flattenCalculators(this.calculatorSections);

    const fuseOptions: IFuseOptions<CalculatorItem> = {
      keys: ['title', 'description', 'tags', 'features'], 
      threshold: 0.3,  
      includeScore: true
    };

    this.fuse = new Fuse(this.allCalculators, fuseOptions);
  }

  private flattenCalculators(sections: CalculatorSection[]): CalculatorItem[] {
    return sections.flatMap(section => section.items);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  searchCalculators(event: any) {
    const query = event.target.value.trim();
    this.searchResults = query ? this.fuse.search(query).map(result => result.item) : [];
    
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Interface Definitions
interface CalculatorItem {
  title: string;
  description: string;
  link: string;
  icon: string;
  tags?: string[];
  features?: string[];
  previewImage?: string;
}

interface CalculatorSection {
  id: string;
  title: string;
  icon: string;
  color: string;
  items: CalculatorItem[];
}
