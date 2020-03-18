import { Component, DoCheck, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Hand } from '../../@core/models/hand.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Card } from '../../@core/models/cards/card.model';

@Component({
	selector: 'app-hand',
	animations: [
		trigger('onload', [
			state('unloaded', style({
				left: '0px',
				top: '0px'
			})),
			state('loaded', style({
				left: '{{ offset }}px',
			}), {params: {offset: '100'}}),
			transition('unloaded => loaded', [
				animate('0.4s')
			])
		])
	],
	templateUrl: './hand.component.html',
	styleUrls: ['./hand.component.scss']
})
export class HandComponent implements OnInit, OnChanges, DoCheck {

	public load: boolean;
	public spacePerCard: number;
	@Input() public hand: Hand;
	@Output() public played: EventEmitter<Card> = new EventEmitter<Card>();

	public constructor() {
		this.load = false;
	}

	public ngOnInit(): void {
		this.computeSpacePerCard(window.innerWidth);
	}

	public ngOnChanges(changes: SimpleChanges): void {
		this.load = false;
		setTimeout(() => this.load = true, 200);
	}

	public ngDoCheck(): void {
		this.computeSpacePerCard(window.innerWidth);
	}

	@HostListener('window:resize', [])
	public onResize(): void {
		this.computeSpacePerCard(window.innerWidth);
	}

	public play(card: Card): void {
		this.played.emit(card);
	}

	private computeSpacePerCard(windowSize: number): void {
		const cardWidth: number = 130;
		const windowWidthProportion: number = 0.7;
		if (this.hand && this.hand.length > 0) {
			this.spacePerCard = ((windowSize * windowWidthProportion) - cardWidth) / (this.hand.length - 1);
		} else {
			this.spacePerCard = 0;
		}
	}

}
