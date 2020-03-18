import { ColorCardValue } from './color-card-value.enum';
import { Suit } from './suit.enum';
import { TrumpCardValue } from './trump-card-value.enum';

export class Card {
	public colorCardValue?: ColorCardValue;
	public trumpCardValue?: TrumpCardValue;
	public suit: Suit;
	public points: string;

	public constructor(data?: Partial<Card>) {
		Object.assign(this, data);
	}

	public fileName(): string {
		switch (this.suit) {
			case Suit.Hearts:
				return `hearts_${this.colorCardValue}.png`;
			case Suit.Spades:
				return `spades_${this.colorCardValue}.png`;
			case Suit.Diamonds:
				return `diamonds_${this.colorCardValue}.png`;
			case Suit.Clubs:
				return `clubs_${this.colorCardValue}.png`;
			case Suit.Trumps:
				return `trumps_${this.trumpCardValue}.png`;
			default:
				return 'back.png';
		}
	}

	public isColorCard(): boolean {
		return !this.isTrump();
	}

	public isTrump(): boolean {
		return this.suit === Suit.Trumps && this.colorCardValue == null;
	}

	public isOudler(): boolean {
		const oudlerValues: TrumpCardValue[] = [TrumpCardValue.Fool, TrumpCardValue.One, TrumpCardValue.TwentyOne];

		return this.isTrump() && oudlerValues.includes(this.trumpCardValue);
	}

	public toString(): string {
		if (this.isTrump()) {
			return `${TrumpCardValue[this.trumpCardValue]} of trumps`;
		} else {
			return `${ColorCardValue[this.colorCardValue]} of ${Suit[this.suit].toLowerCase()}`;
		}
	}
}
