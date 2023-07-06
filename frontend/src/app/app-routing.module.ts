import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorListComponent } from './components/autor/autor-list/autor-list.component';
import { AutorFormComponent } from './components/autor/autor-form/autor-form.component';

import { CancionListComponent } from './components/cancion/cancion-list/cancion-list.component';


const routes: Routes = [
  {
    path:'',
    component:AutorListComponent
  },
  {
    path:'autor',
    component:AutorListComponent
  },
  {
    path:'autor/create',
    component:AutorFormComponent
  },
  {
    path:'autor/update/:id',
    component:AutorFormComponent
  },
  {
    path:'cancion',
    component:CancionListComponent
  },
  {
    path:'cancion/create',
    component:CancionFormComponent
  },
  {
    path:'cancion/update/:id',
    component:CancionFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
