import { Component, OnInit } from '@angular/core';
import { Hand } from '../@core/models/hand.model';
import { Card } from '../@core/models/cards/card.model';
import { GameService } from '../@core/services/game.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PlayerDeal } from '../@core/models/player-deal.model';
import { Player } from '../@core/models/player.model';

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
export class GameComponent implements OnInit {

	public northWestPlayer$: Observable<Player>;
	public northEastPlayer$: Observable<Player>;
	public westPlayer$: Observable<Player>;
	public eastPlayer$: Observable<Player>;
	public hand$: Observable<Hand>;
	public northWestCard$: Observable<Card>;
	public southCard$: Observable<Card>;
	public centerSectionContent: GameCenterSectionContent;

	public constructor(private readonly gameService: GameService) {
		this.centerSectionContent = GameCenterSectionContent.START;
		this.hand$ = this.gameService.dealEvent().pipe(
			tap(() => this.centerSectionContent = GameCenterSectionContent.BOARD),
			map((playerDeal: PlayerDeal) => new Hand(playerDeal.playerCards))
		);

		// const relativelyPositionedPlayer$: Observable<Player> = this.gameService.playersEvent().pipe(
		// 	map((players: Player[]) => {
		// 		const southPlayerPosition: number = players[0].position;
		//
		// 		return players.map((player: Player) => player.merge({position: player.position - southPlayerPosition}));
		// 	}),
		// 	flatMap((x: Player[]) => x),
		// );
		// this.westPlayer$ = relativelyPositionedPlayer$.pipe(filter((player: Player) => player.position === -1));
		// this.northWestPlayer$ = relativelyPositionedPlayer$.pipe(filter((player: Player) => player.position === -2));
		// this.eastPlayer$ = relativelyPositionedPlayer$.pipe(filter((player: Player) => player.position === 1));
		// this.northEastPlayer$ = relativelyPositionedPlayer$.pipe(filter((player: Player) => player.position === 2));
	}

	public ngOnInit(): void {
		this.gameService.join('i');
	}

	public played(card: Card): void {
		this.gameService.play(card);
		this.southCard$ = of(card);
	}

	public requestGameStart(): void {
		// this.gameService.start();
		// this.northWestPlayer$ = of(new Player({
		// 	user: new User({username: 'Anonymous'}),
		// 	playerDeal: new PlayerDeal({
		// 		playerCards: Hand.createHidden(15)
		// 	})
		// }));
		// this.northEastPlayer$ = this.northWestPlayer$;
		// this.westPlayer$ = this.northWestPlayer$;
		// this.eastPlayer$ = this.northWestPlayer$;
	}
}
