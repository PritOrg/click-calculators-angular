import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  initialValue: number = 100;
  percentage: number = 10;
  operation: string = 'add';
  finalValue: number = 110;

  calculateFinalValue(): void {
    if (this.operation === 'add') {
      this.finalValue = this.initialValue * (1 + this.percentage / 100);
    } else {
      this.finalValue = this.initialValue * (1 - this.percentage / 100);
    }
  }
}
