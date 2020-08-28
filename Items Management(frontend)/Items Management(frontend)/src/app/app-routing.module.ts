import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetitemsComponent } from './components/item/getitems/getitems.component';
import { AdditemComponent } from './components/item/additem/additem.component';
import { HomeComponent } from './components/home/home.component';
import { AddownerComponent } from './components/owner/addowner/addowner.component';
import { GetownersComponent } from './components/owner/getowners/getowners.component';


const routes: Routes = [

  {
    path : '',
    component : HomeComponent

  },
  {
    path : 'getitems',
    component : GetitemsComponent

  },
  {
    path : 'additem',
    component : AdditemComponent

  },
  {
    path : 'addowner',
    component : AddownerComponent
  },
  {
    path : 'getowners',
    component : GetownersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
