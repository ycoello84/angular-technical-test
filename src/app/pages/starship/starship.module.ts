import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipRoutingModule } from './starship-routing.module';
import { ContainerStarshipComponent } from './container-starship/container-starship.component';
import { ListStarshipComponent } from './components/list-starship/list-starship.component';
import { ViewStarshipComponent } from './components/view-starship/view-starship.component';


@NgModule({
  declarations: [
    ContainerStarshipComponent,
    ListStarshipComponent,
    ViewStarshipComponent
  ],
  imports: [
    CommonModule,
    StarshipRoutingModule
  ]
})
export class StarshipModule { }
