import { Component } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { GameAffectationService } from '../../@core/services/game-affectation.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public currentUser$: Observable<User>;

	public constructor(private readonly userService: UserService,
					   public readonly queueService: GameAffectationService) {
		this.currentUser$ = this.userService.getCurrentUser();
	}
}
