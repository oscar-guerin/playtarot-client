import { AppUser } from './user.model';

export class Player {
	public userUid: string;
	public userAvatarUrl: string;
	public userDisplayName: string;

	public constructor(data: Partial<Player>) {
		Object.assign(this, data);
	}

	public static fromUser(user: AppUser): Player {
		return new Player({
			userUid: user.uid,
			userDisplayName: user.displayName,
			userAvatarUrl: user.avatarUrl
		});
	}

	public merge(data: Partial<Player>): Player {
		return Object.assign(this, {
			...this,
			...data
		});
	}
}
