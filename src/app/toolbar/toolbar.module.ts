import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CoreModule } from '../@core/core.module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ConnectComponent } from './connect/connect.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
	imports: [
		CoreModule,
		RouterModule
	],
	exports: [ToolbarComponent],
	declarations: [
		ToolbarComponent,
		UserMenuComponent,
		ConnectComponent,
		TabsComponent
	],
	providers: [],
})
export class ToolbarModule {
}
