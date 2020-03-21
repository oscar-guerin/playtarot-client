import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const EXPORTABLE_COMPONENTS: any[] = [
	MatToolbarModule,
	MatIconModule,
	MatButtonModule,
	MatMenuModule,
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
