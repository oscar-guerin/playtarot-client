import { Component, EventEmitter, Output } from '@angular/core';

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
export class FacebookConnectComponent {
	@Output()
	public connect: EventEmitter<void> = new EventEmitter<void>();
}
