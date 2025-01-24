import { Component } from '@angular/core';

@Component({
  selector: 'app-matrices-calc',
  templateUrl: './matrices-calc.component.html',
  styleUrl: './matrices-calc.component.css',
})
export class MatricesCalcComponent {
  operation: string = 'add';
  matrixA: number[][] = [
    [1, 1],
    [1, 1],
  ];
  matrixB: number[][] = [
    [1, 1],
    [1, 1],
  ];
  result: number[][] = [];
  isCalculating: boolean = false;
  error: string | null = null;
  steps: string[] = [];

  // Add these new properties for better matrix management
  maxSize = 5; // Maximum matrix size
  minSize = 1; // Minimum matrix size

  ngOnInit() {
    this.performCalculation();
  }
  calculateResult() {
    this.error = null;
    this.isCalculating = true;

    try {
      this.validateMatrices();
      this.performCalculation();
    } catch (err: any) {
      this.error = err.message;
      this.result = [];
    } finally {
      this.isCalculating = false;
    }
  }

  private validateMatrices() {
    if (this.operation === 'add' || this.operation === 'subtract') {
      if (
        this.matrixA.length !== this.matrixB.length ||
        this.matrixA[0].length !== this.matrixB[0].length
      ) {
        throw new Error(
          'Matrices must have the same dimensions for addition or subtraction.'
        );
      }
    } else if (this.operation === 'multiply') {
      if (this.matrixA[0].length !== this.matrixB.length) {
        throw new Error(
          'Number of columns in Matrix A must match the number of rows in Matrix B for multiplication.'
        );
      }
    }
  }

  private performCalculation() {
    switch (this.operation) {
      case 'add':
        this.result = this.addMatrices(this.matrixA, this.matrixB);
        break;
      case 'subtract':
        this.result = this.subtractMatrices(this.matrixA, this.matrixB);
        break;
      case 'multiply':
        this.result = this.multiplyMatrices(this.matrixA, this.matrixB);
        break;
    }
  }

  // Enhanced matrix management methods
  addRow(matrix: number[][], isMatrixA: boolean) {
    if (matrix.length >= this.maxSize) {
      this.error = `Maximum matrix size is ${this.maxSize}x${this.maxSize}`;
      return;
    }
    const newRow = Array(matrix[0].length).fill(0);
    matrix.push(newRow);
    this.clearResult();
  }

  removeRow(matrix: number[][], isMatrixA: boolean) {
    if (matrix.length > this.minSize) {
      matrix.pop();
      this.clearResult();
    }
  }

  addColumn(matrix: number[][], isMatrixA: boolean) {
    if (matrix[0].length >= this.maxSize) {
      this.error = `Maximum matrix size is ${this.maxSize}x${this.maxSize}`;
      return;
    }
    matrix.forEach((row) => row.push(0));
    this.clearResult();
  }

  removeColumn(matrix: number[][], isMatrixA: boolean) {
    if (matrix[0].length > this.minSize) {
      matrix.forEach((row) => row.pop());
      this.clearResult();
    }
  }

  clearResult() {
    this.result = [];
    this.error = null;
    this.steps = [];
  }

  addMatrices(A: number[][], B: number[][]): number[][] {
    return A.map((row, i) => row.map((cell, j) => cell + B[i][j]));
  }

  subtractMatrices(A: number[][], B: number[][]): number[][] {
    return A.map((row, i) => row.map((cell, j) => cell - B[i][j]));
  }

  multiplyMatrices(A: number[][], B: number[][]): number[][] {
    const result = Array(A.length)
      .fill(0)
      .map(() => Array(B[0].length).fill(0));
    for (let i = 0; i < A.length; i++) {
      for (let j = 0; j < B[0].length; j++) {
        for (let k = 0; k < A[0].length; k++) {
          result[i][j] += A[i][k] * B[k][j];
        }
      }
    }
    return result;
  }
}
