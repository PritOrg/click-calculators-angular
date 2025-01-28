import { Component } from '@angular/core';

@Component({
  selector: 'app-prime-factorization',
  standalone: false,
  
  templateUrl: './prime-factorization.component.html',
  styleUrl: './prime-factorization.component.css'
})
export class PrimeFactorizationComponent {
  inputNumber: number = 100;
  primeFactors: number[] = [];
  exponentialForm: string = '';
  primeTree: any[] = [];
  showPrimeIndex: boolean = false;
  primeIndex: number = 0;
  primeValue: number = 0;
  inputError: string = '';
  ngOnInit(){
    this.calculatePrimeFactors();
  }
  calculatePrimeFactors(): void {
    // if (this.inputNumber <= 0 || !Number.isInteger(this.inputNumber)) {
    //   alert('Please enter a positive integer.');
    //   return;
    // }

    if (this.inputNumber > 10_000_000_000_000) {
      alert('Number exceeds 10 trillion. Please input a smaller number.');
      return;
    }

    // Calculate prime factors, exponential form, and tree
    this.primeFactors = this.getPrimeFactors(this.inputNumber);
    this.exponentialForm = this.getExponentialForm(this.primeFactors);
    this.primeTree = this.buildPrimeTree(this.inputNumber, this.primeFactors);

    // Show nth prime value for small input numbers
    if (this.inputNumber <= 5000) {
      this.showPrimeIndex = true;
      this.primeIndex = this.inputNumber;
      this.primeValue = this.getNthPrime(this.primeIndex);
    } else {
      this.showPrimeIndex = false;
    }
  }

  getPrimeFactors(number: number): number[] {
    const factors: number[] = [];
    let divisor = 2;
    while (number >= 2) {
      if (number % divisor === 0) {
        factors.push(divisor);
        number = number / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

  getExponentialForm(factors: number[]): string {
    const counts: { [key: number]: number } = factors.reduce((acc: { [key: number]: number }, factor: number) => {
      acc[factor] = (acc[factor] || 0) + 1;
      return acc;
    }, {});
    return Object.entries(counts)
      .map(([factor, count]) => (count > 1 ? `${factor}^${count}` : `${factor}`))
      .join(' × ');
  }

  buildPrimeTree(number: number, factors: number[]): any[] {
    const tree = [];
    let current = number;
    for (const factor of factors) {
      tree.push({ value: current, divisor: factor });
      current = current / factor;
    }
    tree.push({ value: 1 });
    return tree;
  }

  getNthPrime(n: number): number {
    // Generate primes dynamically if needed
    if (n <= 0) return -1;
    const primes: number[] = [];
    let candidate = 2;

    while (primes.length < n) {
      if (this.isPrime(candidate)) {
        primes.push(candidate);
      }
      candidate++;
    }

    return primes[n - 1];
  }

  isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  downloadCSV(): void {
    const csvContent = 'data:text/csv;charset=utf-8,' + this.primeFactors.join(',');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'prime_factors.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  validateInput() {
    if (this.inputNumber < 1 || this.inputNumber > 10000000000000) {
      this.inputError = 'Please enter a number between 1 and 10 trillion';
    } else {
      this.inputError = '';
      this.calculatePrimeFactors();
    }
  }
  
  copyResultsToClipboard() {
    const resultText = `
      Input: ${this.inputNumber}
      Prime Factors: ${this.primeFactors.join(' × ')}
      Exponential Form: ${this.exponentialForm}
    `;
    navigator.clipboard.writeText(resultText);
    // Show a snackbar or toast notification
  }
}
