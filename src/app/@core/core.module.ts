import { NgModule } from '@angular/core';
import { GameService } from './services/game.service';
import { HandService } from './services/hand.service';
import { MaterialModule } from '../@material/material.module';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { GameHttpRepository } from './repositories/game.http.repository';
import { SnackbarService } from './services/snackbar.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GameFirestoreRepository } from './repositories/game.firestore.repository';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';

const SERVICES: any[] = [
	AuthService,
	UserService,
	StorageService,
	SnackbarService,
	GameService,
	HandService
];

const REPOSITORIES: any[] = [
	GameHttpRepository,
	GameFirestoreRepository
];

const INTERCEPTORS: any[] = [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: TokenInterceptor,
		multi: true
	}
];

@NgModule({
	imports: [
		MaterialModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireAuthModule,
		AngularFirestoreModule,
		AngularFireDatabaseModule
	],
	exports: [
		CommonModule,
		TranslateModule,
		MaterialModule,
	],
	providers: [
		...SERVICES,
		...REPOSITORIES,
		...INTERCEPTORS
	],
})
export class CoreModule {
}
