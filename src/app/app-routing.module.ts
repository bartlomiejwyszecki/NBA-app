import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams',
      loadChildren: () => import('./components/teams/teams.module').then(m => m.TeamsModule) 
  },
  {
    path: 'players', 
      loadChildren: () => import('./components/players/players.module').then(m => m.PlayersModule)
  },
  {
    path: 'rank',
      loadChildren: () => import('./components/rank/rank.module').then(m => m.RankModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
