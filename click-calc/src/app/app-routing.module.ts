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
    path: 'percentage/add',
    component: AddComponent,
  },
  {
    path: 'percentage/discount-calc',
    component: DiscountCalculatorComponent,
  },
  {
    path: 'table-generator',
    component: TableGeneratorComponent,
  },
  {
    path: 'salary-calculator',
    component: SalaryCalculatorComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
