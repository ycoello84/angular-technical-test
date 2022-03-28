import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVehiclesComponent } from './components/list-vehicles/list-vehicles.component';
import { ViewVehiclesComponent } from './components/view-vehicles/view-vehicles.component';
import { ContainerVehiclesComponent } from './container-vehicles/container-vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerVehiclesComponent,
    children: [
      {
        path: '',
        component: ListVehiclesComponent
      },
      {
        path: 'view',
        component: ViewVehiclesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
