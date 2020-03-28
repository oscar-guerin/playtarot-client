import { Injectable } from '@angular/core';
import { GameRepository } from '../repositories/game.repository';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import { SnackbarService } from './snackbar.service';
import { Game } from '../models/game.model';

@Injectable()
export class GameAffectationService {

	private joinRequest$: Subject<number> = new Subject<number>();

	public constructor(private readonly gameRepository: GameRepository,
					   private readonly userService: UserService,
					   private readonly snackbarService: SnackbarService) {
		// this.joinRequest$.pipe(
		// 	withLatestFrom(this.userService.getCurrentUser()),
		// 	switchMap(([numberOfPlayers, currentUser]: [number, User]) =>
		// 		this.gameRepository.save()
		// 	)
		// ).subscribe(() => this.snackbarService.info('queueSuccess'));
	}

	public quickGame(): void {
		this.gameRepository.save(new Game({
			slots: 1112
		})).subscribe();
	}
}
