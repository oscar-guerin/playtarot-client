import { Injectable } from '@angular/core';
import 'firebase/firestore';
import { HttpRepository } from './http.repository';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameRepository extends HttpRepository<any> {

	protected url: string = 'game';

	public constructor(protected http: HttpClient) {
		super(http);
	}
}
