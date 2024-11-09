import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trig-calculator',
  templateUrl: './trig-calculator.component.html',
  styleUrls: ['./trig-calculator.component.css']
})
export class TrigCalculatorComponent implements OnInit {
  angle: number = 30; // Initial angle
  mode: 'degree' | 'radian' = 'degree'; // Default mode
  trigFunction: string = 'sin'; // Default trigonometric function
  result: number | null = null; // Calculation result

  constructor() {}

  ngOnInit(): void {
    this.calculateTrig();
  }

  calculateTrig() {
    const angleInRadians = this.mode === 'degree' ? this.angle * (Math.PI / 180) : this.angle;
    switch (this.trigFunction) {
      case 'sin':
        this.result = Math.sin(angleInRadians);
        break;
      case 'cos':
        this.result = Math.cos(angleInRadians);
        break;
      case 'tan':
        this.result = Math.tan(angleInRadians);
        break;
      case 'cot':
        this.result = 1 / Math.tan(angleInRadians);
        break;
      case 'sec':
        this.result = 1 / Math.cos(angleInRadians);
        break;
      case 'cosec':
        this.result = 1 / Math.sin(angleInRadians);
        break;
    }
  }

  onAngleChange() {
    this.calculateTrig();
  }

  onModeChange() {
    this.calculateTrig();
  }

  onFunctionChange() {
    this.calculateTrig();
  }

  generateTrigTable(): any[] {
    const angles = [0, 30, 45, 60, 90, 120, 135, 150, 180, 210, 225, 240, 270, 300, 315, 330, 360];
    return angles.map(deg => {
      const radian = deg * Math.PI / 180;
      const sin = Math.sin(radian);
      const cos = Math.cos(radian);
      const tan = Math.tan(radian);
      const cot = sin === 0 ? "∞" : 1 / tan;
      const sec = cos === 0 ? "∞" : 1 / cos;
      const cosec = sin === 0 ? "∞" : 1 / sin;
  
      return {
        degree: deg,
        radian: radian.toFixed(4),
        sin: sin.toFixed(4),
        cos: cos.toFixed(4),
        tan: Math.abs(tan) < Number.MAX_SAFE_INTEGER ? tan.toFixed(4) : "∞",
        cot: cot,
        sec: sec,
        cosec: cosec
      };
    });
  }
  
}
