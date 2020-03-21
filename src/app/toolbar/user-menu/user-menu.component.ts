import { Component, Input } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../../@core/services/auth.service';

@Component({
	selector: 'app-user-menu',
	templateUrl: 'user-menu.component.html',
	styleUrls: ['user-menu.component.scss']
})
export class UserMenuComponent {

	@Input()
	public user: User;

	public constructor(public authService: AuthService) {
	}
}
