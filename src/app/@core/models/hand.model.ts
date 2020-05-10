import { Card } from './game/card.model';
import { fill } from 'lodash';

export class Hand extends Array<Card> {

	public constructor(items: Array<Card>) {
		const cards: Array<Card> = items.map((card: Card) => new Card(card));
		super(...cards);
	}

	public static createHidden(length: number): Hand {
		return new Hand(fill(Array(length), new Card()));
	}
}
