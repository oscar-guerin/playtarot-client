import { Component } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import { Observable } from 'rxjs';
import { AppUser } from '../../@core/models/user.model';
import { GameAffectationService } from '../../@core/services/game-affectation.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public currentUser$: Observable<AppUser>;

	public constructor(private readonly userService: UserService,
					   public readonly gameAffectationService: GameAffectationService) {
		this.currentUser$ = this.userService.getCurrentUser();
	}
}
