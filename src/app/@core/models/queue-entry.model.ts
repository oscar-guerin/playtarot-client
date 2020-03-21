export class QueueEntry {

	public userId: string;
	public numberOfPlayers: number;
	public at: any;

	public constructor(data: Partial<QueueEntry>) {
		Object.assign(this, data);
	}
}
