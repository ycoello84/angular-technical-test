import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'peoples',
    loadChildren: () => import('./pages/peoples/peoples.module').then(m => m.PeoplesModule)
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.module').then(m => m.PlanetsModule)
  },
  {
    path: 'species',
    loadChildren: () => import('./pages/species/species.module').then(m => m.SpeciesModule)
  },
  {
    path: 'starship',
    loadChildren: () => import('./pages/starship/starship.module').then(m => m.StarshipModule)
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./pages/vehicles/vehicles.module').then(m => m.VehiclesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
