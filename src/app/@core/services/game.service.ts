import { Injectable } from '@angular/core';
import { Card } from '../models/cards/card.model';
import { EMPTY, Observable } from 'rxjs';
import { PlayerDeal } from '../models/player-deal.model';
import { Player } from '../models/player.model';

@Injectable()
export class GameService {

	public constructor() {
	}

	public join(roomUuid: string): void {
	}

	public start(): void {
	}

	public play(card: Card): void {
	}

	public playersEvent(): Observable<Player[]> {
		return EMPTY;
	}

	public dealEvent(): Observable<PlayerDeal> {
		return EMPTY;
	}

	public playEvent(): Observable<Card> {
		return EMPTY;
	}
}
