import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './home/home.module';
import { GameModule } from './game/game.module';

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
