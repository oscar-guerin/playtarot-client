import { NgModule } from '@angular/core';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { FacebookConnectComponent } from './facebook-connect/facebook-connect.component';

const EXPORTABLE_COMPONENTS: any[] = [
	FacebookConnectComponent
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
