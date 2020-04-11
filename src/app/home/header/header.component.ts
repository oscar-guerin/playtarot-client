import { Component } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import { Observable } from 'rxjs';
import { AppUser } from '../../@core/models/user.model';
import { GameService } from '../../@core/services/game.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public currentUser$: Observable<AppUser>;

	public constructor(private readonly userService: UserService,
					   public readonly gameService: GameService) {
		this.currentUser$ = this.userService.getCurrentUser();
	}

	public startGame(slots: number): void {
		this.gameService.quickGame(slots);
	}
}
