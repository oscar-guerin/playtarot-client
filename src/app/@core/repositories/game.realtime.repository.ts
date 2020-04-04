import { RealtimeRepository } from './api/realtime.repository';
import { CreateGameDto } from '../models/game/create-game.dto';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/database';

@Injectable()
export class GameRealtimeRepository extends RealtimeRepository<CreateGameDto> {
	protected readonly path: string = 'games';

	public constructor(private readonly database: AngularFireDatabase) {
		super();
	}

	public findGames(): Observable<CreateGameDto[]> {
		return this.database.list<CreateGameDto>(this.path).valueChanges();
	}
}
