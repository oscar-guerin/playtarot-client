import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { HttpRepository } from './api/http.repository';
import { HttpClient } from '@angular/common/http';
import { CreateGameDto } from '../dto/create-game.dto';
import { Observable } from 'rxjs';
import { UpdateGameDto } from '../dto/update-game.dto';
import { DocumentReference } from '../dto/document-reference';

@Injectable()
export class GameHttpRepository extends HttpRepository {

	protected path: string = 'game';

	public constructor(protected http: HttpClient) {
		super(http);
	}

	public create(createGameDto: CreateGameDto): Observable<DocumentReference> {
		return this.http.post<DocumentReference>(this.resourceUrl(), createGameDto);
	}

	public update(gameReference: DocumentReference, updateGameDto: UpdateGameDto): Observable<void> {
		return this.http.put<void>(`${this.resourceUrl()}/${gameReference.id}`, updateGameDto);
	}
}
