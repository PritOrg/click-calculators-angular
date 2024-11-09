import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreesToRadiansComponent } from './trigo/degrees-to-radians/degrees-to-radians.component';
import { RadiansToDegreesComponent } from './trigo/radians-to-degrees/radians-to-degrees.component';
import { IndexComponent } from './index/index.component';
import { AddComponent } from './percentage/add/add.component';
import { DiscountCalculatorComponent } from './percentage/discount-calculator/discount-calculator.component';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { TrigConverterComponent } from './trigo/trig-converter/trig-converter.component';
import { TrigCalculatorComponent } from './trigo/trig-calculator/trig-calculator.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { ComplementaryAngleComponent } from './trigo/complementary-angle/complementary-angle.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
