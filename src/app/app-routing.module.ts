import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavOptnComponent } from './nav-optn/nav-optn.component';

const routes: Routes = [ 
  { path: 'navigation', component: NavOptnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
