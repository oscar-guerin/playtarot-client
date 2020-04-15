import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class ObservableDestroy implements OnDestroy {

	protected onDestroy$: Subject<void> = new Subject<void>();

	public ngOnDestroy(): void {
		this.onDestroy$.next();
	}
}
