import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable()
export class AuthService {

	public constructor(private readonly afAuth: AngularFireAuth) {
	}

	public signInWithFacebook(): void {
		from(this.afAuth.signInWithPopup(
			new firebase.auth.FacebookAuthProvider()
		));
	}

	public signInWithTwitter(): void {
		from(this.afAuth.signInWithPopup(
			new firebase.auth.TwitterAuthProvider()
		));
	}

	public getAuthToken(): Observable<string> {
		return this.afAuth.idToken;
	}

	public signOut(): void {
		this.afAuth.signOut().then();
	}
}
