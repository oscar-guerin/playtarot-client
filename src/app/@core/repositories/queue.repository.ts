import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { QueueEntry } from '../models/queue-entry.model';
import { from, Observable } from 'rxjs';
import 'firebase/firestore';

@Injectable()
export class QueueRepository {

	public constructor(private angularFirestore: AngularFirestore) {
	}

	public save(queueEntry: QueueEntry): Observable<any> {
		return from(this.angularFirestore.collection<QueueEntry>('queue').add({...queueEntry}));
	}
}
