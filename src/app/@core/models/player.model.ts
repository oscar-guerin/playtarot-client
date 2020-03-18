import { User } from './user.model';
import { PlayerDeal } from './player-deal.model';

export class Player {
	public user: User;
	public playerDeal: PlayerDeal;
	public position: number;

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
