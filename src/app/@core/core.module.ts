import { NgModule } from '@angular/core';
import { GameService } from './services/game.service';
import { HandService } from './services/hand.service';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		MaterialModule,
	],
	exports: [
		CommonModule,
		TranslateModule,
		MaterialModule
	],
	providers: [
		GameService,
		HandService
	],
})
export class CoreModule {
}
