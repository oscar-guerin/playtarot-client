import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

/** @deprecated */
export abstract class HttpRepository {

	protected abstract readonly path: string;

	protected constructor(protected readonly http: HttpClient) {
	}

	protected resourceUrl(): string {
		return `${environment.api.url}/${this.path}`;
	}
}
