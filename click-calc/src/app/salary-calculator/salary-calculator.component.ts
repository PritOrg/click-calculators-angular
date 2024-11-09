import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-calculator',
  templateUrl: './salary-calculator.component.html',
  styleUrls: ['./salary-calculator.component.css']
})
export class SalaryCalculatorComponent {
  salary: number = 35000;
  hoursPerWeek: number = 40;
  weeksPerYear: number = 52;

  monthlySalary: number = 0;
  biweeklySalary: number = 0;
  weeklySalary: number = 0;
  dailySalary: number = 0;
  hourlyWage: number = 0;

  constructor() {
    this.calculateSalaries();
  }

  // Method to calculate all salary values
  calculateSalaries(): void {
    if (this.salary > 0 && this.hoursPerWeek > 0 && this.weeksPerYear > 0) {
      this.monthlySalary = this.salary / 12;
      this.weeklySalary = this.salary / this.weeksPerYear;
      this.biweeklySalary = 2 * this.weeklySalary;
      this.dailySalary = this.weeklySalary / 5; // Assuming 5 working days per week
      this.hourlyWage = this.weeklySalary / this.hoursPerWeek;
    }
  }
}
