import { Component } from '@angular/core';
import { AuthService } from '../@core/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './leaderboard.component.html',
})
export class LeaderboardComponent {

	public constructor(private readonly authService: AuthService) {
	}

	public signInWithFacebook(): void {
		this.authService.signInWithFacebook();
	}

	public signInWithTwitter(): void {
		this.authService.signInWithTwitter();
	}
}
