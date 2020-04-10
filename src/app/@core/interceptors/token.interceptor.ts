import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, merge, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ifNotNull } from '@witty-services/rxjs-common';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	public constructor(private readonly authService: AuthService) {
	}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token$: Observable<string> = this.authService.getAuthToken();

		const requestWithToken$: Observable<HttpEvent<any>> = token$.pipe(
			ifNotNull(),
			switchMap((token: string) => next.handle(req.clone({
				headers: req.headers.set('Authorization', `Bearer ${token}`)
			})))
		);

		// TODO throw no token error
		const noTokenError$: Observable<HttpEvent<any>> = EMPTY;

		return merge(requestWithToken$, noTokenError$);
	}
}
