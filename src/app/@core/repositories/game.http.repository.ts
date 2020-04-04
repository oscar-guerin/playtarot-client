import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { HttpRepository } from './api/http.repository';
import { HttpClient } from '@angular/common/http';
import { CreateGameDto } from '../models/game/create-game.dto';

@Injectable()
export class GameHttpRepository extends HttpRepository<CreateGameDto> {

	protected path: string = 'game';

	public constructor(protected http: HttpClient) {
		super(http);
	}
}
