import { Component } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import { Observable } from 'rxjs';
import { AppUser } from '../../@core/models/user.model';
import { GameRepository } from '../../@core/repositories/game.repository';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public currentUser$: Observable<AppUser>;

	public constructor(private readonly userService: UserService,
					   public readonly gameRepository: GameRepository) {
		this.gameRepository.findAll().subscribe(
			(data: any) => console.log(data)
		);
		this.currentUser$ = this.userService.getCurrentUser();
	}
}
