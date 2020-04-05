import { Player } from '../models/player.model';
import { AppUser } from '../models/user.model';

export class UpdateGameDto {
	public player: Player;

	public constructor(data: Partial<UpdateGameDto>) {
		Object.assign(this, data);
	}

	public static build(user: AppUser): UpdateGameDto {
		return new UpdateGameDto({
			player: Player.fromUser(user)
		});
	}
}
