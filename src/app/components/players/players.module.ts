import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PlayersComponent } from './players.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { PipeModule } from 'src/app/pipes/pipes.module';
import { PlayersService } from 'src/app/services/players/players.service';

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
    AngularMaterialModule,
    PipeModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PlayersService]
})
export class PlayersModule { }