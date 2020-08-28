import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetitemsComponent } from './components/item/getitems/getitems.component';
import { AdditemComponent } from './components/item/additem/additem.component';
import { GetownersComponent } from './components/owner/getowners/getowners.component';
import { AddownerComponent } from './components/owner/addowner/addowner.component';
import { HomeComponent } from './components/home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetitemsComponent,
    AdditemComponent,
    GetownersComponent,
    AddownerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
