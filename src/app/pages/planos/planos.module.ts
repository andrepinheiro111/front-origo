import { HttpClientModule } from '@angular/common/http';
import { PlanosRoutes } from './planos.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanosComponent } from './planos.component';

@NgModule({
  declarations: [
    PlanosComponent
  ],
  imports: [
    RouterModule.forChild(PlanosRoutes),
    HttpClientModule,
    CommonModule
  ]
})
export class PlanosModule { }
