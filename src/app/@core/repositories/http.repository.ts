import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class HttpRepository<T> {

	protected abstract url: string;

	protected constructor(protected readonly http: HttpClient) {
	}

	public findAll(): Observable<T[]> {
		return this.http.get<T[]>(this.resourceUrl());
	}

	private resourceUrl(): string {
		return `${environment.api.url}/${this.url}`;
	}
}
