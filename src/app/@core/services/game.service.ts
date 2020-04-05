import { Injectable } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { AppUser } from '../models/user.model';
import { GameHttpRepository } from '../repositories/game.http.repository';
import { GameFirestoreRepository } from '../repositories/game.firestore.repository';
import { UserService } from './user.service';
import { Game } from '../models/game/game.model';
import { first, switchMap, switchMapTo } from 'rxjs/operators';
import { ifNotNull, ifNull } from '@witty-services/rxjs-common';
import { CreateGameDto } from '../dto/create-game.dto';
import { UpdateGameDto } from '../dto/update-game.dto';
import { DocumentReference } from '../dto/document-reference';

@Injectable()
export class GameService {

	private currentUser: AppUser;

	public constructor(private readonly gameHttpRepository: GameHttpRepository,
					   private readonly gameFirestoreRepository: GameFirestoreRepository,
					   private readonly userService: UserService) {
		this.userService.getCurrentUser().subscribe((user: AppUser) => this.currentUser = user);
	}

	public quickGame(slots: number): Observable<Game> {
		const foundGameReference$: Observable<DocumentReference> = this.gameFirestoreRepository.findWaitingGameReference().pipe(
			first()
		);

		const joinFoundGame$: Observable<Game> = foundGameReference$.pipe(
			ifNotNull(),
			switchMap((gameId: DocumentReference) => this.joinGame(gameId))
		);

		const createGame$: Observable<Game> = foundGameReference$.pipe(
			ifNull(),
			switchMapTo(this.createGame(slots))
		);

		return merge(joinFoundGame$, createGame$);
	}

	private createGame(slots: number): Observable<Game> {
		return this.gameHttpRepository.create(CreateGameDto.build(this.currentUser, slots)).pipe(
			switchMap((gameReference: DocumentReference) => this.gameFirestoreRepository.watchGameByReference(gameReference))
		);
	}

	private joinGame(gameReference: DocumentReference): Observable<Game> {
		return this.gameHttpRepository.update(gameReference, UpdateGameDto.build(this.currentUser)).pipe(
			switchMapTo(this.gameFirestoreRepository.watchGameByReference(gameReference))
		);
	}
}
