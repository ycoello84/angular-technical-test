import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeoplesRoutingModule } from './peoples-routing.module';
import { ViewPeoplesComponent } from './components/view-peoples/view-peoples.component';
import { ListPeoplesComponent } from './components/list-peoples/list-peoples.component';

import { ContainerPeopleComponent } from './container-people/container-people.component';
import { NameByUrlComponent } from './components/name-by-url/name-by-url.component';


@NgModule({
  declarations: [
    ViewPeoplesComponent,
    ListPeoplesComponent,
    ContainerPeopleComponent,
    NameByUrlComponent
  ],
  imports: [
    CommonModule,
    PeoplesRoutingModule
  ]
})
export class PeoplesModule { }
