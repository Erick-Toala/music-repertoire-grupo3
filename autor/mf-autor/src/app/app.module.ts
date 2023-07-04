import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutorListComponent } from './components/autor-list/autor-list.component';
import { AutorFormComponent } from './components/autor-form/autor-form.component';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NavbarComponent,
    AutorListComponent,
    AutorFormComponent
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
