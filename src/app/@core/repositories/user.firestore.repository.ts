import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { FirestoreRepository } from './api/firestore.repository';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppUser } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UserFirestoreRepository extends FirestoreRepository<AppUser> {
	t;

	protected readonly path: string = 'users';

	public constructor(private readonly firestore: AngularFirestore) {
		super();
	}

	public watchUser(uid: string): Observable<AppUser> {
		return this.firestore.collection(this.path).doc(uid).valueChanges().pipe(
			map((value: any) => new AppUser(value))
		);
	}
}
