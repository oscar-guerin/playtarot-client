import { Component } from '@angular/core';
import { UserService } from '../@core/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Component({
	selector: 'app-toolbar',
	templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {

	public currentUser$: Observable<User>;

	public constructor(private readonly userService: UserService) {
		this.currentUser$ = this.userService.getCurrentUser();
	}
}
