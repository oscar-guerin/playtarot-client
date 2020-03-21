import { Injectable } from '@angular/core';
import { QueueRepository } from '../repositories/queue.repository';
import { QueueEntry } from '../models/queue-entry.model';
import { Subject } from 'rxjs';
import { UserService } from './user.service';
import { switchMap, withLatestFrom } from 'rxjs/operators';
import { User } from 'firebase';
import { SnackbarService } from './snackbar.service';

@Injectable()
export class QueueService {

	private joinRequest$: Subject<number> = new Subject<number>();

	public constructor(private readonly queueRepository: QueueRepository,
					   private readonly userService: UserService,
					   private readonly snackbarService: SnackbarService) {
		this.joinRequest$.pipe(
			withLatestFrom(this.userService.getCurrentUser()),
			switchMap(([numberOfPlayers, currentUser]: [number, User]) =>
				this.queueRepository.save(new QueueEntry({
					numberOfPlayers,
					userId: currentUser.uid,
					at: Date.now()
				}))
			)
		).subscribe(() => this.snackbarService.info('queueSuccess'));
	}

	public fivePlayersGameJoinRequest(): void {
		this.joinRequest$.next(5);
	}
}
