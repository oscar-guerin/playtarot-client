import { Component } from '@angular/core';
import { UserService } from '../../@core/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { QueueService } from '../../@core/services/queue.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	public currentUser$: Observable<User>;

	public constructor(private readonly userService: UserService,
					   public readonly queueService: QueueService) {
		this.currentUser$ = this.userService.getCurrentUser();
	}
}
