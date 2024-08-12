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
import { MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { DegreesToRadiansComponent } from './trigo/degrees-to-radians/degrees-to-radians.component';
import { MatFormField, MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { RadiansToDegreesComponent } from './trigo/radians-to-degrees/radians-to-degrees.component';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DegreesToRadiansComponent,
    RadiansToDegreesComponent
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
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
