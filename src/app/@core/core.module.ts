import { NgModule } from '@angular/core';
import { GameService } from './services/game.service';
import { HandService } from './services/hand.service';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
	imports: [
		MaterialModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
	],
	exports: [
		CommonModule,
		TranslateModule,
		MaterialModule,
	],
	providers: [
		GameService,
		HandService
	],
})
export class CoreModule {
}
