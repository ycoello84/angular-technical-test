import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPlanetsComponent } from './components/list-planets/list-planets.component';
import { ViewPlanetsComponent } from './components/view-planets/view-planets.component';
import { ContainerPlanetsComponent } from './container-planets/container-planets.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerPlanetsComponent,
    children: [
      {
        path: '',
        component: ListPlanetsComponent
      },
      {
        path: 'view',
        component: ViewPlanetsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
