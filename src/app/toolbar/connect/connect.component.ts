import { Component } from '@angular/core';

@Component({
	selector: 'app-connect',
	template: `
		<button mat-flat-button
				routerLink="/register">
			{{ 'TOOLBAR.register' | translate }}
		</button>
	`,
})
export class ConnectComponent {

	public constructor() {
	}
}
