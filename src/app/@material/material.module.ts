import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

const EXPORTABLE_COMPONENTS: any[] = [
	MatTabsModule,
	MatIconModule,
	MatButtonModule,
	MatMenuModule,
	MatSnackBarModule,
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
