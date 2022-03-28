import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { ContainerComponent } from './container/container.component';
import { ViewFilmsComponent } from './components/view-films/view-films.component';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ContainerComponent,
    ViewFilmsComponent,
    ListFilmsComponent
  ],
  imports: [
    CommonModule,
    // RouterModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
