import { NgModule } from '@angular/core';
import { LeaderboardComponent } from './leaderboard.component';
import { LeaderboardRoutingModule } from './leaderboard-routing.module';
import { CoreModule } from '../@core/core.module';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
	imports: [
		CoreModule,
		LeaderboardRoutingModule,
		SharedModule
	],
	exports: [],
	declarations: [LeaderboardComponent],
	providers: [],
})
export class LeaderboardModule {
}
