import { NgModule } from '@angular/core';
import { GameService } from './services/game.service';
import { HandService } from './services/hand.service';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { GameHttpRepository } from './repositories/game.http.repository';
import { GameAffectationService } from './services/game-affectation.service';
import { SnackbarService } from './services/snackbar.service';

const SERVICES: any[] = [
	AuthService,
	UserService,
	StorageService,
	SnackbarService,
	GameAffectationService,
	GameService,
	HandService
];

const REPOSITORIES: any[] = [
	GameHttpRepository
];

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
		...SERVICES,
		...REPOSITORIES
	],
})
export class CoreModule {
}
