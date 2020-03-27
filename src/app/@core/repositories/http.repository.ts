import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export abstract class HttpRepository<T> {

	protected abstract url: string;

	private readonly options: { headers: HttpHeaders } = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
		})
	};

	protected constructor(protected readonly http: HttpClient) {
	}

	public findAll(): Observable<T[]> {
		return this.http.get<T[]>(this.resourceUrl(), this.options);
	}

	private resourceUrl(): string {
		return `${environment.api.url}/${this.url}`;
	}
}
