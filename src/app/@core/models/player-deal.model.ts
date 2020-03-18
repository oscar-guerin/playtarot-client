import { Hand } from './hand.model';

export class PlayerDeal {
	public playerCards: Hand;
	public dog: Hand;

	public constructor(data: Partial<PlayerDeal>) {
		Object.assign(this, data);
	}
}
