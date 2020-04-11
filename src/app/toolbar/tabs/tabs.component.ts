import { Component } from '@angular/core';

interface TabsLink {
	link: string;
	label: string;
}

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html'
})
export class TabsComponent {

	public links: TabsLink[] = [
		{
			link: '/game',
			label: 'TOOLBAR.gameMenu'
		},
		{
			link: '/leaderboard',
			label: 'TOOLBAR.leaderboardMenu'
		},
	];

	public constructor() {
	}
}
