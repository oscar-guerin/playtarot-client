import { Component, Input } from '@angular/core';
import { AuthService } from '../../@core/services/auth.service';
import { AppUser } from '../../@core/models/user.model';

@Component({
	selector: 'app-user-menu',
	templateUrl: 'user-menu.component.html',
	styleUrls: ['user-menu.component.scss']
})
export class UserMenuComponent {

	@Input()
	public user: AppUser;

	public constructor(public authService: AuthService) {
	}
}
