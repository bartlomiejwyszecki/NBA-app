import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';


const routes: Routes = [
  { path: '', component: PlayersComponent }
]

@NgModule({
  declarations: [ 
    PlayersComponent
   ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayersModule { }