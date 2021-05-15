import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayersResolverService } from './services/players/players.resolver';
import { RankEastResolver } from './services/rank/rank.east.resolver';
import { RankWestResolver } from './services/rank/rank.west.resolver';
import { TeamsResolverService } from './services/teams/teams.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'teams',
      loadChildren: () => import('./components/teams/teams.module').then(m => m.TeamsModule),
      resolve: {
        teams: TeamsResolverService
      }
  },
  {
    path: 'players', 
      loadChildren: () => import('./components/players/players.module').then(m => m.PlayersModule),
      resolve: {
        players: PlayersResolverService
      }
  },
  {
    path: 'rank',
      loadChildren: () => import('./components/rank/rank.module').then(m => m.RankModule),
      resolve: {
        east: RankEastResolver,
        west: RankWestResolver
      }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
