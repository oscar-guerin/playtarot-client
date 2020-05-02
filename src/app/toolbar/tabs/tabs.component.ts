import { Component } from '@angular/core';
import { GameService } from '../../@core/services/game.service';
import { ObservableDestroy } from '../../@core/observable-destroy';
import { takeUntil } from 'rxjs/operators';
import { Game } from '../../@core/models/game/game.model';
import { head } from 'lodash';

interface TabsLink {
	link: string;
	label: string;
}

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html'
})
export class TabsComponent extends ObservableDestroy {

	public links: TabsLink[] = [
		{
			link: '/leaderboard',
			label: 'TOOLBAR.leaderboardMenu'
		},
	];

	public constructor(private readonly gameService: GameService) {
		super();
		this.gameService.getCurrentGame().pipe(
			takeUntil(this.onDestroy$),
		).subscribe((game: Game) => {
			if (game != null) {
				this.links.unshift({
					link: '/game',
					label: 'TOOLBAR.gameMenu'
				});
			} else if (head(this.links).link === '/game') {
				this.links.shift();
			}
		});
	}
}
