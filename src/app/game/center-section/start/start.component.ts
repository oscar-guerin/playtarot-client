import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-start',
	templateUrl: './start.component.html',
	styleUrls: ['./start.component.scss']
})
export class StartComponent {

	@Output() public gameStart: EventEmitter<void> = new EventEmitter<void>();

	public emitGameStart(): void {
		this.gameStart.emit();
	}
}
