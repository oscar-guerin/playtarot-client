import { NgModule } from '@angular/core';
import { CoreModule } from '../@core/core.module';
import { RouterModule } from '@angular/router';
import { FacebookConnectComponent } from './connect/facebook-connect.component';
import { TwitterConnectComponent } from './connect/twitter-connect.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { AvatarComponent } from './avatar.component';

const EXPORTABLE_COMPONENTS: any[] = [
	FacebookConnectComponent,
	TwitterConnectComponent,
	PlayerCardComponent,
	AvatarComponent
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
