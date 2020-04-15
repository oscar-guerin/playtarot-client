import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { combineLatest, Observable } from 'rxjs';
import { User } from 'firebase';
import { AppUser } from '../models/user.model';
import { map, switchMap } from 'rxjs/operators';
import { UserFirestoreRepository } from '../repositories/user.firestore.repository';
import { ifNotNull } from '@witty-services/rxjs-common';

@Injectable()
export class UserService {

	private readonly user$: Observable<AppUser>;

	public constructor(private readonly afAuth: AngularFireAuth,
					   private readonly userFirestoreRepository: UserFirestoreRepository) {
		const authUser$: Observable<AppUser> = this.afAuth.authState.pipe(
			map((firebaseUser: User) => AppUser.fromFirebaseUser(firebaseUser)),
		);
		const firestoreUser$: Observable<AppUser> = authUser$.pipe(
			ifNotNull(),
			switchMap((user: AppUser) => this.userFirestoreRepository.watchUser(user.uid))
		);

		this.user$ = combineLatest([authUser$, firestoreUser$]).pipe(
			map(([authUser, firestoreUser]: [AppUser, AppUser]) => authUser.merge(firestoreUser)),
		);
	}

	public getCurrentUser(): Observable<AppUser> {
		return this.user$;
	}
}
