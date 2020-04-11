import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { GameModule } from './game/game.module';
import { RegisterModule } from './register/register.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then((m: { HomeModule: HomeModule }) => m.HomeModule)
	},
	{
		path: 'game',
		loadChildren: () => import('./game/game.module').then((m: { GameModule: GameModule }) => m.GameModule)
	},
	{
		path: 'leaderboard',
		loadChildren: () => import('./leaderboard/leaderboard.module').then((m: { LeaderboardModule: LeaderboardModule }) => m.LeaderboardModule)
	},
	{
		path: 'register',
		loadChildren: () => import('./register/register.module').then((m: { RegisterModule: RegisterModule }) => m.RegisterModule)
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {enableTracing: false})
	],
	exports: [
		RouterModule
	],
	providers: []
})
export class AppRoutingModule {
}
