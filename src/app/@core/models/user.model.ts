import { User } from 'firebase';

export class AppUser {
	public uid: string;
	public displayName: string;
	public avatarUrl: string;
	public currentGameId: number;

	public constructor(data: Partial<AppUser> = {}) {
		Object.assign(this, data);
	}

	public static fromFirebaseUser(firebaseUser: User): AppUser {
		return firebaseUser ? new AppUser({
			uid: firebaseUser.uid,
			displayName: firebaseUser.displayName,
			avatarUrl: firebaseUser.photoURL
		}) : null;
	}

	public merge(user: Partial<AppUser>): AppUser {
		Object.assign(this, user);

		return this;
	}
}
