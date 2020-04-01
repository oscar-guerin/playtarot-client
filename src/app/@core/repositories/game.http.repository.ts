import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { HttpRepository } from './api/http.repository';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game.model';

@Injectable()
export class GameHttpRepository extends HttpRepository<Game> {

	protected path: string = 'game';

	public constructor(protected http: HttpClient) {
		super(http);
	}
}
