import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	template: `
		<app-toolbar></app-toolbar>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent {

	public constructor(translate: TranslateService) {
		translate.setDefaultLang('fr');
		translate.use('fr');
	}
}
