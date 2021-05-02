import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PipeModule } from 'src/app/pipes/pipes.module';
import { RankComponent } from './rank.component';


const routes: Routes = [
  { path: '', component: RankComponent }
]

@NgModule({
  declarations: [ 
    RankComponent
   ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    PipeModule
  ],
  providers: []
})
export class RankModule { }