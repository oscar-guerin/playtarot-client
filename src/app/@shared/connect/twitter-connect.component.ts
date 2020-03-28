import { Component } from '@angular/core';
import { ConnectButton } from './connect-button';

@Component({
	selector: 'app-twitter-connect',
	template: `
		<button mat-flat-button
				(click)="connect.emit()"
				class="background-twitter-blue white-text">
			<i class="fa fa-twitter pr-2"></i>
			{{ 'SHARED.twitterConnect' | translate }}
		</button>
	`,
})
export class TwitterConnectComponent extends ConnectButton {
}
