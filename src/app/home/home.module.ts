import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../@shared/shared.module';
import { CoreModule } from '../@core/core.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	declarations: [
		HomeComponent,
		HeaderComponent
	],
	imports: [
		CoreModule,
		SharedModule,
		HomeRoutingModule
	]
})
export class HomeModule {
}
