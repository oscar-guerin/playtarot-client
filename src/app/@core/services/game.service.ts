import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from '../models/user.model';
import { GameHttpRepository } from '../repositories/game.http.repository';
import { GameFirestoreRepository } from '../repositories/game.firestore.repository';
import { UserService } from './user.service';
import { Game } from '../models/game/game';
import { first, switchMap, switchMapTo } from 'rxjs/operators';
import { ifNotNull, ifNull } from '@witty-services/rxjs-common';
import { CreateGameDto } from '../dto/create-game.dto';
import { UpdateGameDto } from '../dto/update-game.dto';
import { DocumentReference } from '../dto/document-reference';

@Injectable()
export class GameService {

	private readonly currentUser$: Observable<AppUser>;
	private readonly currentGame$: Observable<Game>;

	public constructor(private readonly gameHttpRepository: GameHttpRepository,
					   private readonly gameFirestoreRepository: GameFirestoreRepository,
					   private readonly userService: UserService) {
		this.currentUser$ = this.userService.getCurrentUser();
		this.currentGame$ = this.currentUser$.pipe(
			switchMap((currentUser: AppUser) => this.gameFirestoreRepository.watchGameById(currentUser.currentGameId))
		);
	}

	public quickGame(slots: number): void {
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

		// this.currentGame$ = merge(joinFoundGame$, createGame$); // TODO update user in firestore
	}

	public getCurrentGame(): Observable<Game> {
		return this.currentGame$;
	}

	private createGame(slots: number): Observable<Game> {
		return this.currentUser$.pipe(
			switchMap((currentUser: AppUser) => this.gameHttpRepository.create(CreateGameDto.build(currentUser, slots)).pipe(
				switchMap((gameReference: DocumentReference) => this.gameFirestoreRepository.watchGameById(gameReference.id))
			))
		);
	}

	private joinGame(gameReference: DocumentReference): Observable<Game> { //  TODO remove document ref
		return this.currentUser$.pipe(
			switchMap((currentUser: AppUser) => this.gameHttpRepository.update(gameReference, UpdateGameDto.build(currentUser)).pipe(
				switchMapTo(this.gameFirestoreRepository.watchGameById(gameReference.id))
			))
		);
	}
}
