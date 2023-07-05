import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutorListComponent } from './components/autor/autor-list/autor-list.component';
import { AutorFormComponent } from './components/autor/autor-form/autor-form.component';
import { CancionListComponent } from './components/cancion/cancion-list/cancion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AutorListComponent,
    AutorFormComponent,
    CancionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
