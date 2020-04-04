import { Player } from '../player.model';
import { GameStatus } from './game-status.enum';

export class Game {
	public status: GameStatus;
	public slots: number;
	public players: Player[];

	public constructor(data: Partial<Game>) {
		Object.assign(this, data);
	}
}
