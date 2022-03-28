import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeoplesComponent } from './components/list-peoples/list-peoples.component';
import { ViewPeoplesComponent } from './components/view-peoples/view-peoples.component';
import { ContainerPeopleComponent } from './container-people/container-people.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerPeopleComponent,
    children: [
      {
        path: '',
        component: ListPeoplesComponent
      },
      {
        path: 'view',
        component: ViewPeoplesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeoplesRoutingModule { }
