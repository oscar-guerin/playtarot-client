import { NgModule } from '@angular/core';
import { GameComponent } from './game.component';
import { CardComponent } from './card/card.component';
import { HandComponent } from './hand/hand.component';
import { BoardComponent } from './center-section/board/board.component';
import { SharedModule } from '../@shared/shared.module';
import { StartComponent } from './center-section/start/start.component';
import { AwaitStartComponent } from './center-section/await-start/await-start.component';
import { BetsComponent } from './center-section/bets/bets.component';
import { PlayerComponent } from './player/player.component';
import { CoreModule } from '../@core/core.module';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
	declarations: [
		GameComponent,
		CardComponent,
		HandComponent,
		BoardComponent,
		StartComponent,
		AwaitStartComponent,
		BetsComponent,
		PlayerComponent
	],
	imports: [
		CoreModule,
		SharedModule,
		GameRoutingModule
	]
})
export class GameModule {
}
