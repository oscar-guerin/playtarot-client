import { NgModule } from '@angular/core';
import { ToolbarComponent } from './toolbar.component';
import { CoreModule } from '../@core/core.module';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ConnectComponent } from './connect/connect.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
	imports: [
		CoreModule,
		RouterModule,
		SharedModule
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
