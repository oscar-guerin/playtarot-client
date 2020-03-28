import { Component } from '@angular/core';
import { ConnectButton } from './connect-button';

@Component({
	selector: 'app-facebook-connect',
	template: `
		<button mat-flat-button
				(click)="connect.emit()"
				class="background-facebook-blue white-text">
			<i class="fa fa-facebook-f pr-2"></i>
			{{ 'SHARED.facebookConnect' | translate }}
		</button>
	`,
})
export class FacebookConnectComponent extends ConnectButton {
}
