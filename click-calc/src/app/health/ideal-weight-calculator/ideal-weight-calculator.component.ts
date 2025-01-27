import { Component } from '@angular/core';

@Component({
  selector: 'app-ideal-weight-calculator',
  templateUrl: './ideal-weight-calculator.component.html',
  styleUrls: ['./ideal-weight-calculator.component.scss'],
})
export class IdealWeightCalculatorComponent {
  // User Inputs
  gender: 'male' | 'female' = 'male';
  height: number | null = null;
  heightUnit: 'cm' | 'inches' = 'cm';
  currentWeight: number | null = null;
  weightUnit: 'kg' | 'lbs' = 'kg';
  defaultBMI: boolean = true;
  loading = false;
  // Results
  idealWeight: number | null = null;
  healthyRange: { min: number; max: number } | null = null;
  selectedFormula: any = null;
  formulas: any[] = [];
  calculationSteps: string[] = [];

  // Conversion constants
  static readonly KG_TO_LBS = 2.20462;
  static readonly CM_TO_INCHES = 0.393701;
  static readonly M_TO_CM = 100;

  constructor() {
    // Initialize available formulas
    this.formulas = [
      { name: 'Devine Formula', calculate: this.calculateDevine },
      { name: 'Robinson Formula', calculate: this.calculateRobinson },
      { name: 'Miller Formula', calculate: this.calculateMiller },
      { name: 'Hamwi Formula', calculate: this.calculateHamwi },
      { name: 'Broca Formula', calculate: this.calculateBroca },
      { name: 'Lorentz Formula', calculate: this.calculateLorentz },
    ];
    this.selectedFormula = this.formulas[0];
  }

  onFormulaChange() {
    if (this.selectedFormula) {
      this.calculateIdealWeight();
    }
  }

  onDefaultBMIChecked(isChecked: boolean) {
    this.defaultBMI = isChecked;
    this.calculateIdealWeight();
  }

  calculateIdealWeight() {
    if (this.selectedFormula && this.height) {
      this.loading = true;
      setTimeout(() => {
        const heightInCm =
          this.heightUnit === 'inches'
            ? this.inchesToCm(this.height!)
            : this.height;

        // Convert the current weight to kg if it's in lbs
        let currentWeightInKg = this.currentWeight;
        if (this.weightUnit === 'lbs' && this.currentWeight !== null) {
          currentWeightInKg = this.lbsToKg(this.currentWeight);
        }

        // Calculate the result using the selected formula
        const result = this.selectedFormula.calculate.call(this, heightInCm);

        // If the weight unit is lbs, convert the result back to lbs
        if (this.weightUnit === 'lbs' && result.weight !== null) {
          result.weight = this.kgToLbs(result.weight);
        }

        this.idealWeight = result.weight;
        this.calculationSteps = result.steps;
        this.healthyRange = this.calculateHealthyRange(heightInCm!);
        this.loading = false;
      }, 500);
    }
  }

  // Calculate healthy BMI range
  calculateHealthyRange(heightInCm: number): { min: number; max: number } {
    const heightInMeters = heightInCm / IdealWeightCalculatorComponent.M_TO_CM;
    const minBMI = 18.5;
    const maxBMI = 24.9;
    return {
      min: (this.weightUnit === 'lbs') ? this.kgToLbs(minBMI * heightInMeters ** 2) : minBMI * heightInMeters ** 2,
      max: (this.weightUnit === 'lbs') ? this.kgToLbs(maxBMI * heightInMeters ** 2) : maxBMI * heightInMeters ** 2,
    };
  }

  // Formula Calculations
  calculateDevine(heightInCm: number) {
    const steps = [];
    const base = this.gender === 'male' ? 50 : 45.5;
    const inchesOverFiveFeet = (heightInCm - 152.4) / 2.54;
    const weight = base + 2.3 * inchesOverFiveFeet;

    steps.push(`Base weight: ${base}`);
    steps.push(`Height adjustment: ${2.3 * inchesOverFiveFeet}`);
    return { weight, steps };
  }

  calculateRobinson(heightInCm: number) {
    const steps = [];
    const base = this.gender === 'male' ? 52 : 49;
    const inchesOverFiveFeet = (heightInCm - 152.4) / 2.54;
    const weight =
      base + (this.gender === 'male' ? 1.9 : 1.7) * inchesOverFiveFeet;

    steps.push(`Base weight: ${base}`);
    steps.push(
      `Height adjustment: ${
        (this.gender === 'male' ? 1.9 : 1.7) * inchesOverFiveFeet
      }`
    );
    return { weight, steps };
  }

  calculateMiller(heightInCm: number) {
    const steps = [];
    const base = this.gender === 'male' ? 56.2 : 53.1;
    const inchesOverFiveFeet = (heightInCm - 152.4) / 2.54;
    const weight =
      base + (this.gender === 'male' ? 1.41 : 1.36) * inchesOverFiveFeet;

    steps.push(`Base weight: ${base}`);
    steps.push(
      `Height adjustment: ${
        (this.gender === 'male' ? 1.41 : 1.36) * inchesOverFiveFeet
      }`
    );
    return { weight, steps };
  }

  calculateHamwi(heightInCm: number) {
    const steps = [];
    const base = this.gender === 'male' ? 48 : 45.5;
    const inchesOverFiveFeet = (heightInCm - 152.4) / 2.54;
    const weight =
      base + (this.gender === 'male' ? 2.7 : 2.2) * inchesOverFiveFeet;

    steps.push(`Base weight: ${base}`);
    steps.push(
      `Height adjustment: ${
        (this.gender === 'male' ? 2.7 : 2.2) * inchesOverFiveFeet
      }`
    );
    return { weight, steps };
  }

  calculateBroca(heightInCm: number) {
    const steps = [];
    const weight =
      (heightInCm - 100) / IdealWeightCalculatorComponent.KG_TO_LBS;

    steps.push(`Weight = (Height - 100) / 2.20462`);
    return { weight, steps };
  }

  calculateLorentz(heightInCm: number) {
    const steps = [];
    const adjustment =
      this.gender === 'male' ? (heightInCm - 150) / 4 : (heightInCm - 150) / 2;
    const weight = heightInCm - 100 - adjustment;

    steps.push(`Weight = (Height - 100) - Adjustment`);
    steps.push(`Adjustment: ${adjustment}`);
    return { weight, steps };
  }

  calculateBMI(heightInCm: number) {
    const bmi = 22; // Default BMI
    const weight = bmi * (heightInCm / 100) ** 2;

    return {
      weight,
      steps: [
        `BMI: ${bmi}`,
        `Height in meters: ${heightInCm / 100}`,
        `Weight: ${weight}`,
      ],
    };
  }

  // Conversion methods
  cmToInches(cm: number): number {
    return cm * IdealWeightCalculatorComponent.CM_TO_INCHES;
  }

  inchesToCm(inches: number): number {
    return inches / IdealWeightCalculatorComponent.CM_TO_INCHES;
  }

  kgToLbs(kg: number): number {
    return kg * IdealWeightCalculatorComponent.KG_TO_LBS;
  }

  lbsToKg(lbs: number): number {
    return lbs / IdealWeightCalculatorComponent.KG_TO_LBS;
  }
}
