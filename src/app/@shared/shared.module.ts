import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';

const EXPORTABLE_COMPONENTS: any[] = [
	ToolbarComponent
];

@NgModule({
	declarations: [
		...EXPORTABLE_COMPONENTS
	],
	exports: [
		EXPORTABLE_COMPONENTS
	],
	imports: [
		CoreModule,
		RouterModule
	]
})
export class SharedModule {
}
