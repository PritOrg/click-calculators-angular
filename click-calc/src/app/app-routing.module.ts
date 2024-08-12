import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreesToRadiansComponent } from './trigo/degrees-to-radians/degrees-to-radians.component';
import { RadiansToDegreesComponent } from './trigo/radians-to-degrees/radians-to-degrees.component';

const routes: Routes = [
  {
    path:'trigo/degrees-to-radians',
    component:DegreesToRadiansComponent
  },
  {
    path:'trigo/radians-to-degrees',
    component:RadiansToDegreesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
