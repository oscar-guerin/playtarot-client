export class Game {
	public slots: number;
	public players: string[];

	public constructor(data: Partial<Game>) {
		Object.assign(this, data);
	}
}
