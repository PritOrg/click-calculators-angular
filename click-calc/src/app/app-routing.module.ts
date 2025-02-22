import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverWeightCalculatorComponent } from './health/over-weight-calculator/over-weight-calculator.component';
import { IndexComponent } from './index/index.component';
import { PrimeFactorizationComponent } from './numbers/prime-factorization/prime-factorization.component';
import { LongDivisionComponent } from './numbers/long-division/long-division.component';
import { ScientificNotationCalculatorComponent } from './numbers/scientific-notation-calculator/scientific-notation-calculator.component';
import { LargeNumberCalcComponent } from './numbers/large-number-calc/large-number-calc.component';
import { AddComponent } from './percentage/add/add.component';
import { DiscountCalculatorComponent } from './percentage/discount-calculator/discount-calculator.component';
import { DecimalToRatioComponent } from './decimal-to-ratio/decimal-to-ratio.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { RightTriangleComponent } from './trigo/right-triangle/right-triangle.component';
import { ComplementaryAngleComponent } from './trigo/complementary-angle/complementary-angle.component';
import { TrigCalculatorComponent } from './trigo/trig-calculator/trig-calculator.component';
import { TrigConverterComponent } from './trigo/trig-converter/trig-converter.component';
import { RadiansToDegreesComponent } from './trigo/radians-to-degrees/radians-to-degrees.component';
import { DegreesToRadiansComponent } from './trigo/degrees-to-radians/degrees-to-radians.component';
import { PolygonComponent } from './geometry/polygon/polygon.component';
import { IdealWeightCalculatorComponent } from './health/ideal-weight-calculator/ideal-weight-calculator.component';
import { MatricesCalcComponent } from './matrices-calc/matrices-calc.component';
import { SipCalcComponent } from './financial/sip-calc/sip-calc.component';
import { InterestCalculatorComponent } from './financial/interest-calculator/interest-calculator.component';
import { EmiCalculatorComponent } from './financial/emi-calculator/emi-calculator.component';
import { TaxGstCalculatorComponent } from './financial/tax-gst-calculator/tax-gst-calculator.component';
import { WeightConverterComponent } from './geometry/weight-converter/weight-converter.component';
import { LengthConverterComponent } from './geometry/length-converter/length-converter.component';
import { LcmGcdCalculatorComponent } from './numbers/lcm-gcd-calculator/lcm-gcd-calculator.component';
import { NumberSystemConverterComponent } from './numbers/number-system-converter/number-system-converter.component';
import { NumberSystemOperationsComponent } from './numbers/number-system-operations/number-system-operations.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'trigo/degrees-to-radians',
    component: DegreesToRadiansComponent,
  },
  {
    path: 'trigo/radians-to-degrees',
    component: RadiansToDegreesComponent,
  },
  {
    path: 'trigo/convertor',
    component: TrigConverterComponent,
  },
  {
    path: 'trigo/calculator',
    component: TrigCalculatorComponent,
  },
  {
    path: 'trigo/complementary-angle',
    component: ComplementaryAngleComponent,
  },
  {
    path: 'trigo/right-triangle',
    component: RightTriangleComponent,
  },
  {
    path: 'geometry/polygon-calculator',
    component: PolygonComponent,
  },
  {
    path: 'geometry/weight-converter',
    component: WeightConverterComponent,
  },
  {
    path: 'geometry/length-converter',
    component: LengthConverterComponent,
  },
  {
    path: 'percentage/add',
    component: AddComponent,
  },
  {
    path: 'percentage/discount-calc',
    component: DiscountCalculatorComponent,
  },
  {
    path: 'number/ratio-calculator',
    component: DecimalToRatioComponent,
  },
  {
    path: 'number/large-number-calculator',
    component: LargeNumberCalcComponent,
  },
  {
    path: 'number/scientific-notation-calculator',
    component: ScientificNotationCalculatorComponent,
  },
  {
    path: 'number/long-number-division-calculator',  
    component: LongDivisionComponent,
  },
  {
    path: 'number/prime-factorization',  
    component: PrimeFactorizationComponent,
  },
  {
    path: 'number/lcm-gcd-calculator',  
    component: LcmGcdCalculatorComponent,
  },
  {
    path: 'number/number-system-convertor',  
    component: NumberSystemConverterComponent,
  },
  {
    path: 'number/number-system-operations',  
    component: NumberSystemOperationsComponent,
  },
  {
    path: 'matrices-calculator',  
    component: MatricesCalcComponent,
  },
  {
    path: 'health/ideal-weight-calculator',  
    component: IdealWeightCalculatorComponent,
  },
  {
    path: 'health/over-weight-calculator',  
    component: OverWeightCalculatorComponent,
  },
  {
    path: 'financial/sip-calculator',  
    component: SipCalcComponent,
  },
  {
    path: 'financial/interest-calculator',  
    component: InterestCalculatorComponent,
  },
  {
    path: 'financial/emi-calculator',  
    component: EmiCalculatorComponent,
  },
  {
    path: 'financial/tax-gst-calculator',  
    component: TaxGstCalculatorComponent,
  },
  {
    path: 'table-generator',
    component: TableGeneratorComponent,
  },
  {
    path: 'salary-calculator',
    component: SalaryCalculatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
