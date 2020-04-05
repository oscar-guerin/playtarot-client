import { CreateGameDto } from '../dto/create-game.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { Game } from '../models/game/game.model';
import { FirestoreRepository } from './api/firestore.repository';
import { AngularFirestore } from '@angular/fire/firestore';
import { GameStatus } from '../models/game/game-status.enum';
import { map } from 'rxjs/operators';
import { head } from 'lodash';
import { DocumentReference } from '../dto/document-reference';

@Injectable()
export class GameFirestoreRepository extends FirestoreRepository<CreateGameDto> {
	protected readonly path: string = 'games';

	public constructor(private readonly firestore: AngularFirestore) {
		super();
	}

	public watchGameByReference(gameReference: DocumentReference): Observable<Game> {
		return this.firestore.collection(this.path).doc<Game>(gameReference.id).valueChanges();
	}

	public findWaitingGameReference(): Observable<DocumentReference> {
		return this.firestore.collection<Game>(this.path, (ref: firebase.firestore.CollectionReference) =>
			ref.where('status', '==', GameStatus.WAITING_FOR_PLAYERS).limit(1)
		).get().pipe(
			map((changes: firebase.firestore.QuerySnapshot) =>
				changes.docs.map((doc: firebase.firestore.QueryDocumentSnapshot) => new DocumentReference(doc.id, this.path))
			),
			map(head)
		);
	}
}
