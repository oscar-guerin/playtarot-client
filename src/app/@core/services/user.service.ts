import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AppUser } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

	private readonly user$: Observable<AppUser>;

	public constructor(private afAuth: AngularFireAuth) {
		this.user$ = this.afAuth.authState.pipe(
			map((firebaseUser: User) => AppUser.fromFirebaseUser(firebaseUser)),
		);
	}

	public getCurrentUser(): Observable<AppUser> {
		return this.user$;
	}
}
