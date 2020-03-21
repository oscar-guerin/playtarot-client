import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import UserCredential = firebase.auth.UserCredential;

@Injectable()
export class AuthService {

	public constructor(private readonly afAuth: AngularFireAuth) {
	}

	public signInWithFacebook(): Promise<UserCredential> {
		return this.afAuth.signInWithPopup(
			new firebase.auth.FacebookAuthProvider()
		);
	}

	public signOut(): void {
		this.afAuth.signOut().then();
	}
}
