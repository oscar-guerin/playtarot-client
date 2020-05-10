import { IEvent } from './event.interface';
import { EventType } from '../../../interceptors/event-type.enum';
import { Bid } from '../../../enumerations/bid.enum';
import { GameStatus } from '../game-status';

export class BidEvent implements IEvent {

	public event: EventType = EventType.BID;

	public playerPosition: number;

	public bid: Bid;

	public constructor(data: Partial<BidEvent> = {}) {
		Object.assign(this, data);
	}

	public do(gameStatus: GameStatus): GameStatus {
		gameStatus.bids[this.playerPosition] = this.bid;

		return gameStatus;
	}

	public undo(gameStatus: GameStatus): GameStatus {
		gameStatus.bids[this.playerPosition] = undefined;

		return gameStatus;
	}


}
