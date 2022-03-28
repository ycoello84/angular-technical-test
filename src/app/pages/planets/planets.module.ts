import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { ViewPlanetsComponent } from './components/view-planets/view-planets.component';
import { ListPlanetsComponent } from './components/list-planets/list-planets.component';
import { ContainerPlanetsComponent } from './container-planets/container-planets.component';


@NgModule({
  declarations: [
    ViewPlanetsComponent,
    ListPlanetsComponent,
    ContainerPlanetsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ]
})
export class PlanetsModule { }
