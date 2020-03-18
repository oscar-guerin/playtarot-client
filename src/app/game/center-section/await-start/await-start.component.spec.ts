import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitStartComponent } from './await-start.component';

describe('AwaitStartComponent', () => {
	let component: AwaitStartComponent;
	let fixture: ComponentFixture<AwaitStartComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AwaitStartComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AwaitStartComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
