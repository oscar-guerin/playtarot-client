import { EventEmitter, Output } from '@angular/core';

export class ConnectButton {
	@Output()
	public connect: EventEmitter<void> = new EventEmitter<void>();
}
