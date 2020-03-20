import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

const EXPORTABLE_COMPONENTS: any[] = [
	MatToolbarModule,
	MatButtonModule,
	MatCardModule
];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		...EXPORTABLE_COMPONENTS
	],
	exports: [
		...EXPORTABLE_COMPONENTS
	]
})
export class MaterialModule {
}
