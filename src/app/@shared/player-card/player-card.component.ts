import { Component, Input } from '@angular/core';
import { Player } from '../../@core/models/player.model';

@Component({
	selector: 'app-player',
	templateUrl: './player-card.component.html',
})
export class PlayerCardComponent {

	@Input() public player: Player;
}
