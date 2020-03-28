import { NgModule } from '@angular/core';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { FacebookConnectComponent } from './connect/facebook-connect.component';
import { TwitterConnectComponent } from './connect/twitter-connect.component';

const EXPORTABLE_COMPONENTS: any[] = [
	FacebookConnectComponent,
	TwitterConnectComponent
];

@NgModule({
	declarations: [
		...EXPORTABLE_COMPONENTS,
	],
	exports: [
		...EXPORTABLE_COMPONENTS,
	],
	imports: [
		CoreModule,
		RouterModule
	]
})
export class SharedModule {
}
