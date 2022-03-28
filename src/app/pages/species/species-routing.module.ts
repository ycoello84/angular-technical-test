import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSpeciesComponent } from './components/list-species/list-species.component';
import { ViewSpeciesComponent } from './components/view-species/view-species.component';
import { ContainerSpeciesComponent } from './container-species/container-species.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerSpeciesComponent,
    children: [
      {
        path: '',
        component: ListSpeciesComponent
      },
      {
        path: 'view',
        component: ViewSpeciesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
