import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';

const routes: Routes = [
  { path: '', component: PlayersComponent }
]

@NgModule({
  declarations: [ 
    PlayersComponent
   ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayersModule { }