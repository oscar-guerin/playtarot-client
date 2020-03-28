import { Component } from '@angular/core';
import { AuthService } from '../@core/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
})
export class RegisterComponent {

	public constructor(private readonly authService: AuthService) {
	}

	public signInWithFacebook(): void {
		this.authService.signInWithFacebook();
	}

	public signInWithTwitter(): void {
		this.authService.signInWithTwitter();
	}
}
