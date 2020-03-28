import { Player } from './player.model';

export class Game {
	public slots: number;
	public players: Player[];

	public constructor(data: Partial<Game>) {
		Object.assign(this, data);
	}
}
