import { CreateGameDto } from '../dto/create-game.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Game } from '../models/game/game';
import { FirestoreRepository } from './api/firestore.repository';
import { AngularFirestore } from '@angular/fire/firestore';
import { GameProgressionStatus } from '../enumerations/game-progression-status.enum';
import { map } from 'rxjs/operators';
import { head } from 'lodash';
import { DocumentReference } from '../dto/document-reference';

@Injectable()
export class GameFirestoreRepository extends FirestoreRepository<CreateGameDto> { // FIXME model issue
	protected readonly path: string = 'games';

	public constructor(private readonly firestore: AngularFirestore) {
		super();
	}

	public watchGameById(gameId: string): Observable<Game> {
		return this.firestore.collection(this.path).doc<Game>(gameId).valueChanges();
	}

	public findWaitingGameReference(): Observable<DocumentReference> {
		return this.firestore.collection<Game>(this.path, (ref: firebase.firestore.CollectionReference) =>
			ref.where('status', '==', GameProgressionStatus.WAITING_FOR_PLAYERS).limit(1)
		).get().pipe(
			map((changes: firebase.firestore.QuerySnapshot) =>
				changes.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => new DocumentReference(doc.id, this.path))
			),
			map(head)
		);
	}
}
