export class Player {
	public userUid: string;
	public userAvatarUrl: string;
	public userDisplayName: string;

	public constructor(data: Partial<Player>) {
		Object.assign(this, data);
	}

	public merge(data: Partial<Player>): Player {
		return Object.assign(this, {
			...this,
			...data
		});
	}
}
