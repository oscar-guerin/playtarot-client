import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CoreModule } from '../@core/core.module';

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
		CoreModule
	]
})
export class SharedModule {
}
