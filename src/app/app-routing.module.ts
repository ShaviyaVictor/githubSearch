import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  NavbarComponent  } from 'src/app/components/CompoNavBar/navbar/navbar.component'

const routes: Routes = [

  { path: 'search', component: NavbarComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
