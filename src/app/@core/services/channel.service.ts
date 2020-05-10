import { Injectable } from '@angular/core';
import { ChannelRealtimeRepository } from '../repositories/channel.realtime.repository';
import { IEvent } from '../models/game/events/event.interface';
import { Observable } from 'rxjs';

@Injectable()
export class ChannelService {

	public constructor(private readonly channelRealtimeRepository: ChannelRealtimeRepository) {
	}

	public getEvents(gameId: string): Observable<IEvent[]> {
		return this.channelRealtimeRepository.watchChannel(gameId);
	}
}
