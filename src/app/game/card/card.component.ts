import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Card } from '../../@core/models/game/card.model';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html'
})
export class CardComponent implements OnChanges {

	@Input() public card: Card;
	public path: string;

	public constructor() {
	}

	public ngOnChanges(changes: SimpleChanges): void {
		this.path = this.getCardPath();
	}

	public getCardPath(): string {
		if (this.card) {
			return `./assets/cards/${this.card.fileName()}`;
		} else {
			return './assets/cards/back.png';
		}
	}
}
