import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CoreModule } from '../@core/core.module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ConnectComponent } from './connect/connect.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		CoreModule,
		RouterModule
	],
	exports: [ToolbarComponent],
	declarations: [ToolbarComponent, UserMenuComponent, ConnectComponent],
	providers: [],
})
export class ToolbarModule {
}
