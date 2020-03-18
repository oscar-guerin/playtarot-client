export class User {
	public username: string;

	public constructor(data: Partial<User>) {
		Object.assign(this, data);
	}
}
