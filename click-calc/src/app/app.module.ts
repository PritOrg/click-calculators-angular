import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverWeightCalculatorComponent } from './health/over-weight-calculator/over-weight-calculator.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './index/index.component';
import { PrimeFactorizationComponent } from './numbers/prime-factorization/prime-factorization.component';
import { LongDivisionComponent } from './numbers/long-division/long-division.component';
import { LargeNumberCalcComponent } from './numbers/large-number-calc/large-number-calc.component';
import { ScientificNotationCalculatorComponent } from './numbers/scientific-notation-calculator/scientific-notation-calculator.component';
import { DiscountCalculatorComponent } from './percentage/discount-calculator/discount-calculator.component';
import { AddComponent } from './percentage/add/add.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { DecimalToRatioComponent } from './decimal-to-ratio/decimal-to-ratio.component';
import { RightTriangleComponent } from './trigo/right-triangle/right-triangle.component';
import { TrigCalculatorComponent } from './trigo/trig-calculator/trig-calculator.component';
import { TrigConverterComponent } from './trigo/trig-converter/trig-converter.component';
import { ComplementaryAngleComponent } from './trigo/complementary-angle/complementary-angle.component';
import { DegreesToRadiansComponent } from './trigo/degrees-to-radians/degrees-to-radians.component';
import { RadiansToDegreesComponent } from './trigo/radians-to-degrees/radians-to-degrees.component';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { IdealWeightCalculatorComponent } from './health/ideal-weight-calculator/ideal-weight-calculator.component';
import { PolygonComponent } from './geometry/polygon/polygon.component';
import { MatricesCalcComponent } from './matrices-calc/matrices-calc.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    OverWeightCalculatorComponent,
    IdealWeightCalculatorComponent,
    PolygonComponent,
    MatricesCalcComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LargeNumberCalcComponent,
    PrimeFactorizationComponent,
    LongDivisionComponent,
    ScientificNotationCalculatorComponent,
    DiscountCalculatorComponent,
    SalaryCalculatorComponent,
    DecimalToRatioComponent,
    TrigConverterComponent,
    TrigCalculatorComponent,
    RightTriangleComponent,
    ComplementaryAngleComponent,
    DegreesToRadiansComponent,
    RadiansToDegreesComponent,
    TableGeneratorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
     
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
