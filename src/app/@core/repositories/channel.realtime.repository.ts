import { Injectable } from '@angular/core';
import { IEvent } from '../models/game/events/event.interface';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { EventType } from '../interceptors/event-type.enum';
import { BidEvent } from '../models/game/events/bid.event';
import { map } from 'rxjs/operators';

@Injectable()
export class ChannelRealtimeRepository {

	private readonly path: string = 'channels';

	public constructor(private readonly realtimeDatabase: AngularFireDatabase) {
	}

	public watchChannel(id: string): Observable<IEvent[]> {
		return this.realtimeDatabase.list(`${this.path}/${id}`).valueChanges().pipe(
			map((events: IEvent[]) => events.map(this.serializeToEvent))
		);
	}

	private serializeToEvent(data: IEvent): IEvent { // TODO move or rework method
		switch (data.event) {
			case EventType.BID:
				return new BidEvent(data);
		}
	}
}
