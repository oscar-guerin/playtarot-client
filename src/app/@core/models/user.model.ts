/** @deprecated */
export class User {
	public uid: string;
	public username: string;

	public constructor(data: Partial<User>) {
		Object.assign(this, data);
	}
}
