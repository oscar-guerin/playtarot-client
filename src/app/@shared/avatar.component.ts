import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-avatar',
	template: `
		<img [src]="url"
			 alt="User avatar"
			 height="35"
			 width="35">
	`,
	styles: [`
		img {
			border-radius: 50%;
		}
	`]
})

export class AvatarComponent {
	@Input()
	public url: string;
}
