import { Component } from '@angular/core';
import { UserService } from '../@core/services/user.service';
import { Observable } from 'rxjs';
import { AppUser } from '../@core/models/user.model';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {

	public currentUser$: Observable<AppUser>;

	public constructor(private readonly userService: UserService) {
		this.currentUser$ = this.userService.getCurrentUser();
	}
}
