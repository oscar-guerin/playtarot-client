import { Component, Input } from '@angular/core';
import { Player } from '../../@core/models/player.model';

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

	@Input() public player: Player;
}
