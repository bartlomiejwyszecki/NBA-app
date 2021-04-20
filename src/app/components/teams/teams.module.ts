import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';

const routes: Routes = [
  { path: '', component: TeamsComponent }
]

@NgModule({
  declarations: [ TeamsComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class TeamsModule { }