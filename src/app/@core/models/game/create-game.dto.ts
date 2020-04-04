import { Player } from '../player.model';

export class CreateGameDto {
	public slots: number;
	public players: Player[];

	public constructor(data: Partial<CreateGameDto>) {
		Object.assign(this, data);
	}
}
