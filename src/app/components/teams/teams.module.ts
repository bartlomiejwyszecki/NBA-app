import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TeamsComponent } from './teams.component';
import { TeamProfileComponent } from './team-profile/team-profile.component';
import { TeamStatsComponent } from './team-stats/team-stats.component';


const routes: Routes = [
  { path: '', component: TeamsComponent },
  { path: 'team-profile/:id', component: TeamProfileComponent },
  { path: 'team-stats/:id', component: TeamStatsComponent }
]

@NgModule({
  declarations: [ TeamsComponent, TeamProfileComponent ],
  imports: [ 
    CommonModule,
    RouterModule.forChild(routes) ]
})
export class TeamsModule { }