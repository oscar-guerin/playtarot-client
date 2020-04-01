import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export abstract class HttpRepository<T> {

	protected abstract readonly path: string;

	protected constructor(protected readonly http: HttpClient) {
	}

	public findAll(): Observable<T[]> {
		return this.http.get<T[]>(this.resourceUrl());
	}

	public save(body: T): Observable<any> {
		return this.http.post(this.resourceUrl(), body);
	}

	private resourceUrl(): string {
		return `${environment.api.url}/${this.path}`;
	}
}
