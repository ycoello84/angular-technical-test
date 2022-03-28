import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStarshipComponent } from './components/list-starship/list-starship.component';
import { ViewStarshipComponent } from './components/view-starship/view-starship.component';
import { ContainerStarshipComponent } from './container-starship/container-starship.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerStarshipComponent,
    children: [
      {
        path: '',
        component: ListStarshipComponent
      },
      {
        path: 'view',
        component: ViewStarshipComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipRoutingModule { }
