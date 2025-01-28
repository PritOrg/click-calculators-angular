import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.css'],
  standalone:false

})
export class PolygonComponent implements OnInit {
  sides: number = 3; // Default number of sides
  sideLength: number = 0; // Default side length
  findValue: string = 'Area'; // Default property to calculate
  solveFrom: string = 'Side Length'; // Default property to use for calculation
  inputValue: number = 10; // Input value for calculations

  // Calculated properties
  perimeter: number = 0;
  area: number = 0;
  circumradius: number = 0;
  apothem: number = 0;
  inscribedCircleArea: number = 0;
  circumscribedCircleArea: number = 0;
  inscribedCircumference: number = 0;
  polygonPoints: string = '';

  // State management
  isCalculated: boolean = false;

  // Dropdown options
  calculationOptions: string[] = [
    'Side Length',
    'Perimeter',
    'Area',
    'Apothem (Inradius)',
    'Circumradius',
    'Area of the Circumscribed Circle',
    'Inscribed Circumference',
    'Area of the Inscribed Circle',
  ];

  // Dynamic steps and formulas
  steps: string[] = [];
  formulas: string[] = [];

  ngOnInit() {
    this.calculatePolygon();
  }

  calculatePolygon(): void {
    if (this.sides < 3 || this.inputValue <= 0) {
      this.isCalculated = false;
      return;
    }

    this.resetValues();

    // Perform calculations based on the selected solveFrom property
    switch (this.solveFrom) {
      case 'Side Length':
        this.sideLength = this.inputValue;
        this.calculateFromSideLength();
        break;
      case 'Perimeter':
        this.perimeter = this.inputValue;
        this.calculateFromPerimeter();
        break;
      case 'Area':
        this.area = this.inputValue;
        this.calculateFromArea();
        break;
      case 'Apothem (Inradius)':
        this.apothem = this.inputValue;
        this.calculateFromApothem();
        break;
      case 'Circumradius':
        this.circumradius = this.inputValue;
        this.calculateFromCircumradius();
        break;
    }

    // Calculate additional properties
    this.calculateDerivedProperties();
    this.generatePolygonPoints();
    this.isCalculated = true;
  }

  resetValues(): void {
    this.perimeter = 0;
    this.area = 0;
    this.circumradius = 0;
    this.apothem = 0;
    this.inscribedCircleArea = 0;
    this.circumscribedCircleArea = 0;
    this.inscribedCircumference = 0;
  }

  calculateFromSideLength(): void {
    this.perimeter = this.sides * this.sideLength;
    this.apothem = this.sideLength / (2 * Math.tan(Math.PI / this.sides));
    this.circumradius = this.sideLength / (2 * Math.sin(Math.PI / this.sides));
    this.area = 0.5 * this.perimeter * this.apothem;
  }

  calculateFromPerimeter(): void {
    this.sideLength = this.perimeter / this.sides;
    this.calculateFromSideLength();
  }

  calculateFromArea(): void {
    this.apothem = Math.sqrt((2 * this.area) / (this.sides * Math.tan(Math.PI / this.sides)));
    this.sideLength = 2 * this.apothem * Math.tan(Math.PI / this.sides);
    this.calculateFromSideLength();
  }

  calculateFromApothem(): void {
    this.sideLength = 2 * this.apothem * Math.tan(Math.PI / this.sides);
    this.calculateFromSideLength();
  }

  calculateFromCircumradius(): void {
    this.sideLength = 2 * this.circumradius * Math.sin(Math.PI / this.sides);
    this.calculateFromSideLength();
  }

  calculateDerivedProperties(): void {
    // Calculate properties related to the inscribed and circumscribed circles
    this.inscribedCircleArea = Math.PI * this.apothem ** 2;
    this.circumscribedCircleArea = Math.PI * this.circumradius ** 2;
    this.inscribedCircumference = 2 * Math.PI * this.apothem;
  }

  generateStepsAndFormulas(): void {
    this.steps = [];
    this.formulas = [];
  
    switch (this.findValue) {
      case 'Area':
        this.steps.push('1. Calculate the Apothem: Apothem = Side Length / (2 × tan(π / Number of Sides)).');
        this.steps.push('2. Calculate the Perimeter: Perimeter = Number of Sides × Side Length.');
        this.steps.push('3. Calculate the Area: Area = 0.5 × Perimeter × Apothem.');
        this.formulas.push('Apothem = Side Length / (2 × tan(π / Number of Sides))');
        this.formulas.push('Perimeter = Number of Sides × Side Length');
        this.formulas.push('Area = 0.5 × Perimeter × Apothem');
        break;
  
      case 'Perimeter':
        this.steps.push('1. Calculate the Perimeter: Perimeter = Number of Sides × Side Length.');
        this.formulas.push('Perimeter = Number of Sides × Side Length');
        break;
  
      case 'Circumradius':
        this.steps.push('1. Calculate the Circumradius: Circumradius = Side Length / (2 × sin(π / Number of Sides)).');
        this.formulas.push('Circumradius = Side Length / (2 × sin(π / Number of Sides))');
        break;
  
      case 'Apothem':
        this.steps.push('1. Calculate the Apothem: Apothem = Side Length / (2 × tan(π / Number of Sides)).');
        this.formulas.push('Apothem = Side Length / (2 × tan(π / Number of Sides))');
        break;
  
      case 'Inscribed Circle Area':
        this.steps.push('1. Calculate the Apothem: Apothem = Side Length / (2 × tan(π / Number of Sides)).');
        this.steps.push('2. Calculate the Inscribed Circle Area: Area = π × (Apothem)².');
        this.formulas.push('Apothem = Side Length / (2 × tan(π / Number of Sides))');
        this.formulas.push('Inscribed Circle Area = π × (Apothem)²');
        break;
  
      case 'Circumscribed Circle Area':
        this.steps.push('1. Calculate the Circumradius: Circumradius = Side Length / (2 × sin(π / Number of Sides)).');
        this.steps.push('2. Calculate the Circumscribed Circle Area: Area = π × (Circumradius)².');
        this.formulas.push('Circumradius = Side Length / (2 × sin(π / Number of Sides))');
        this.formulas.push('Circumscribed Circle Area = π × (Circumradius)²');
        break;
  
      case 'Inscribed Circle Circumference':
        this.steps.push('1. Calculate the Apothem: Apothem = Side Length / (2 × tan(π / Number of Sides)).');
        this.steps.push('2. Calculate the Inscribed Circle Circumference: Circumference = 2 × π × Apothem.');
        this.formulas.push('Apothem = Side Length / (2 × tan(π / Number of Sides))');
        this.formulas.push('Inscribed Circle Circumference = 2 × π × Apothem');
        break;
  
      default:
        this.steps.push('Please select a valid property to calculate.');
        break;
    }
  }
  

  generatePolygonPoints(): void {
    const points: string[] = [];
    const scale = 100; // Scale factor for visualization
    const centerX = 0;
    const centerY = 0;

    for (let i = 0; i < this.sides; i++) {
      const angle = (i * 2 * Math.PI) / this.sides;
      const x = centerX + scale * Math.cos(angle);
      const y = centerY + scale * Math.sin(angle);
      points.push(`${x},${y}`);
    }

    this.polygonPoints = points.join(' ');
  }
  getResult(property: string): number {
    switch (property) {
      case 'Area': return this.area;
      case 'Perimeter': return this.perimeter;
      case 'Circumradius': return this.circumradius;
      case 'Apothem (Inradius)': return this.apothem;
      case 'Area of the Inscribed Circle': return this.inscribedCircleArea;
      case 'Area of the Circumscribed Circle': return this.circumscribedCircleArea;
      case 'Inscribed Circumference': return this.inscribedCircumference;
      default: return 0;
    }
  }

  
}
