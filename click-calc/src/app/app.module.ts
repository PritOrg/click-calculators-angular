import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DegreesToRadiansComponent } from './trigo/degrees-to-radians/degrees-to-radians.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RadiansToDegreesComponent } from './trigo/radians-to-degrees/radians-to-degrees.component';
import { MatInputModule } from '@angular/material/input';
import { IndexComponent } from './index/index.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { AddComponent } from './percentage/add/add.component';
import { DiscountCalculatorComponent } from './percentage/discount-calculator/discount-calculator.component';
import { TableGeneratorComponent } from './table-generator/table-generator.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { TrigConverterComponent } from './trigo/trig-converter/trig-converter.component';
import { MatRadioModule } from '@angular/material/radio';
import { TrigCalculatorComponent } from './trigo/trig-calculator/trig-calculator.component';
import { SalaryCalculatorComponent } from './salary-calculator/salary-calculator.component';
import { ComplementaryAngleComponent } from './trigo/complementary-angle/complementary-angle.component';
import { DecimalToRatioComponent } from './ratio/decimal-to-ratio/decimal-to-ratio.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RightTriangleComponent } from './trigo/right-triangle/right-triangle.component';
import { LargeNumberCalcComponent } from './numbers/large-number-calc/large-number-calc.component';
import { ScientificNotationCalculatorComponent } from './numbers/scientific-notation-calculator/scientific-notation-calculator.component';
import { LongDivisionComponent } from './numbers/long-division/long-division.component';
import { MatricesCalcComponent } from './matrices-calc/matrices-calc.component';
import { PolygonComponent } from './geometry/polygon/polygon.component';
import { PrimeFactorizationComponent } from './numbers/prime-factorization/prime-factorization.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DegreesToRadiansComponent,
    RadiansToDegreesComponent,
    IndexComponent,
    AddComponent,
    DiscountCalculatorComponent,
    TableGeneratorComponent,
    TrigConverterComponent,
    TrigCalculatorComponent,
    SalaryCalculatorComponent,
    ComplementaryAngleComponent,
    DecimalToRatioComponent,
    RightTriangleComponent,
    LargeNumberCalcComponent,
    ScientificNotationCalculatorComponent,
    LongDivisionComponent,
    MatricesCalcComponent,
    PolygonComponent,
    PrimeFactorizationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    BrowserAnimationsModule,
    MatStepperModule,
    MatCardModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatButtonToggleModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
