import { Component } from '@angular/core';
import { Hand } from '../@core/models/hand.model';
import { Card } from '../@core/models/cards/card.model';
import { GameService } from '../@core/services/game.service';
import { combineLatest, Observable } from 'rxjs';
import { Player } from '../@core/models/player.model';
import { Game } from '../@core/models/game/game.model';
import { map } from 'rxjs/operators';
import { UserService } from '../@core/services/user.service';
import { AppUser } from '../@core/models/user.model';

export enum GameCenterSectionContent {
	AWAIT_START = 'await_start',
	START = 'start',
	BETS = 'bets',
	BOARD = 'board'
}

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent {

	public northWestPlayer$: Observable<Player>;
	public northEastPlayer$: Observable<Player>;
	public westPlayer$: Observable<Player>;
	public eastPlayer$: Observable<Player>;
	public hand$: Observable<Hand>;
	public northWestCard$: Observable<Card>;
	public southCard$: Observable<Card>;
	public centerSectionContent: GameCenterSectionContent;

	public constructor(private readonly gameService: GameService,
					   private readonly userService: UserService) {
		const game$: Observable<Game> = this.gameService.getCurrentGame();
		const user$: Observable<AppUser> = this.userService.getCurrentUser();
		const players$: Observable<Player[]> = game$.pipe(
			map((game: Game) => game.players)
		);
		const userPosition$: Observable<number> = combineLatest([user$, players$]).pipe(
			map(([user, players]: [AppUser, Player[]]) =>
				players.findIndex((player: Player) => player.userUid === user.uid)
			)
		);

		this.westPlayer$ = this.placePlayerOnBoard(players$, userPosition$, -1);
		this.eastPlayer$ = this.placePlayerOnBoard(players$, userPosition$, +1);
		this.northWestPlayer$ = this.placePlayerOnBoard(players$, userPosition$, -2);
		this.northEastPlayer$ = this.placePlayerOnBoard(players$, userPosition$, +2);

		this.centerSectionContent = GameCenterSectionContent.START;
	}

	private placePlayerOnBoard(players$: Observable<Player[]>, userPosition$: Observable<number>, relativePos: number): Observable<Player> {
		return combineLatest([players$, userPosition$]).pipe(
			map(([players, position]: [Player[], number]) =>
				players[position + relativePos]
			)
		);
	}
}
