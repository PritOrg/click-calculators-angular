import { Component } from '@angular/core';

interface TableRow {
  operator: string;
  num: number;
  result: number | string;
  userInput: number | null;
  isCorrect: boolean | null;
}

@Component({
  selector: 'app-table-generator',
  standalone:false,
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.css'],
})
export class TableGeneratorComponent {
  selectedOperation: string = 'addition';
  baseNumber: number = 7;
  numberOfLines: number = 10;
  randomNumbers: boolean = false;
  randomStart: number = 1;
  generatedTable: TableRow[] = [];
  showAnswers: boolean = false;

  operationMap: Record<string, string> = {
    addition: '+',
    subtraction: '-',
    multiplication: '×',
    division: '÷'
  };

  generateTable(): void {
    this.generatedTable = [];
    for (let i = 0; i < this.numberOfLines; i++) {
      const randomNum = this.randomNumbers
        ? Math.floor(Math.random() * 10) + this.randomStart
        : i + 1;

      let operation: string = this.selectedOperation;
      let result: number | string = 0;

      if (operation === 'mix') {
        const operations = ['addition', 'subtraction', 'multiplication', 'division'];
        operation = operations[Math.floor(Math.random() * operations.length)];
      }

      const operator: string = this.operationMap[operation];

      switch (operation) {
        case 'addition':
          result = this.baseNumber + randomNum;
          break;
        case 'subtraction':
          result = this.baseNumber - randomNum;
          break;
        case 'multiplication':
          result = this.baseNumber * randomNum;
          break;
        case 'division':
          result = (this.baseNumber / randomNum).toFixed(2);
          break;
      }

      this.generatedTable.push({
        operator,
        num: randomNum,
        result,
        userInput: null,
        isCorrect: null
      });
    }
  }

  validateInput(row: TableRow): void {
    row.isCorrect = row.userInput === row.result;
  }

  toggleAnswers(): void {
    this.showAnswers = !this.showAnswers;
  }

  regenerateTable(): void {
    this.generateTable();
    this.showAnswers = false;
  }

  onOperationChange(): void {
    this.generateTable();
  }
}