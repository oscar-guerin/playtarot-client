import { User } from 'firebase';

export class AppUser {
	public uid: string;
	public displayName: string;
	public avatarUrl: string;

	public constructor(data: Partial<AppUser> = {}) {
		Object.assign(this, data);
	}

	public static fromFirestoreUser(firestoreUser: User): AppUser {
		return new AppUser(firestoreUser);
	}
}
