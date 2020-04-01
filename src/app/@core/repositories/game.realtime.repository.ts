import { RealtimeRepository } from './api/realtime.repository';
import { Game } from '../models/game.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';

@Injectable()
export class GameRealtimeRepository extends RealtimeRepository<Game> {
	protected readonly path: string = 'games';

	public constructor(private readonly database: AngularFireDatabase) {
		super();
	}

	public findGames(): Observable<Game[]> {
		return this.database.list<Game>(this.path).valueChanges();
	}
}
