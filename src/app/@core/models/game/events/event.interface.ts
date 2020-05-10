import { EventType } from '../../../interceptors/event-type.enum';
import { GameStatus } from '../game-status';

export interface IEvent {
	event: EventType;

	do(gameStatus: GameStatus): GameStatus;

	undo(gameStatus: GameStatus): GameStatus;
}
