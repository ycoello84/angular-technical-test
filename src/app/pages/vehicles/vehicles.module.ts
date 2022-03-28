import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { ContainerVehiclesComponent } from './container-vehicles/container-vehicles.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';


@NgModule({
  declarations: [
    ContainerVehiclesComponent,
    ViewVehiclesComponent,
    ListVehiclesComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule
  ]
})
export class VehiclesModule { }
