import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';

@Injectable()
export class UserService {

	private readonly user$: Observable<User>;

	public constructor(private afAuth: AngularFireAuth) {
		this.user$ = this.afAuth.authState;
	}

	public getCurrentUser(): Observable<User> {
		return this.user$;
	}
}
