import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import 'firebase/firestore';
import { Game } from '../models/game.model';
import { from, Observable } from 'rxjs';

@Injectable()
export class GameRepository {

	public constructor(private angularFirestore: AngularFirestore) {
	}

	public find() {
		this.angularFirestore.collection<Game>('games').
	}

	public save(game: Game): Observable<DocumentReference> {
		return from(this.angularFirestore.collection<Game>('games').add({...game}));
	}
}
