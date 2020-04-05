import { Player } from '../models/player.model';
import { AppUser } from '../models/user.model';

export class CreateGameDto {
	public slots: number;
	public player: Player;

	public constructor(data: Partial<CreateGameDto>) {
		Object.assign(this, data);
	}

	public static build(user: AppUser, slots: number): CreateGameDto {
		return new CreateGameDto({
			slots,
			player: Player.fromUser(user)
		});
	}
}
