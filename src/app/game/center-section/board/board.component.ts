import { Component, Input } from '@angular/core';
import { Card } from '../../../@core/models/game/card.model';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.scss']
})
export class BoardComponent {

	@Input() public northWestCard: Card;
	@Input() public northEastCard: Card;
	@Input() public eastCard: Card;
	@Input() public southCard: Card;
	@Input() public westCard: Card;

	public constructor() {
	}

}
