import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { ContainerSpeciesComponent } from './container-species/container-species.component';
import { ViewSpeciesComponent } from './components/view-species/view-species.component';
import { ListSpeciesComponent } from './components/list-species/list-species.component';


@NgModule({
  declarations: [
    ContainerSpeciesComponent,
    ViewSpeciesComponent,
    ListSpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
