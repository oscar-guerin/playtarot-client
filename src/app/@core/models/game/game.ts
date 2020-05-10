import { Player } from '../player.model';
import { GameProgressionStatus } from '../../enumerations/game-progression-status.enum';

export class Game {
	public status: GameProgressionStatus;
	public slots: number;
	public players: Player[];

	public constructor(data: Partial<Game>) {
		Object.assign(this, data);
	}
}
