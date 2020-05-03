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
			map((game: Game) => game.players),
		);
		const rearrangedPlayers$: Observable<Player[]> = combineLatest([user$, players$]).pipe(
			map(([user, players]: [AppUser, Player[]]) =>
				this.reorderPlayersArray(players, user)
			),
		);

		this.eastPlayer$ = this.placePlayerOnBoard(players$, 1);
		this.northEastPlayer$ = this.placePlayerOnBoard(players$, 2);
		this.northWestPlayer$ = this.placePlayerOnBoard(players$, 3);
		this.westPlayer$ = this.placePlayerOnBoard(players$, 4);

		this.centerSectionContent = GameCenterSectionContent.START;
	}

	private placePlayerOnBoard(players$: Observable<Player[]>, position: number): Observable<Player> {
		return players$.pipe(
			map((players: Player[]) => players[position])
		);
	}

	private reorderPlayersArray(players: Player[], currentUser: AppUser): Player[] {
		const currentUserIndex: number = players.findIndex((player: Player) => player.userUid === currentUser.uid);
		if (!currentUserIndex) {
			return [players[currentUserIndex], ...players.slice(0, currentUserIndex), ...players.slice(currentUserIndex + 1)];
		}

		return players;
	}
}
