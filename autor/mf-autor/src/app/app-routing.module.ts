import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AutorListComponent } from './components/autor-list/autor-list.component';
import { AutorFormComponent } from './components/autor-form/autor-form.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
