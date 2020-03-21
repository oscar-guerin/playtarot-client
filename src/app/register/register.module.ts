import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { CoreModule } from '../@core/core.module';
import { SharedModule } from '../@shared/shared.module';

@NgModule({
	imports: [
		CoreModule,
		RegisterRoutingModule,
		SharedModule
	],
	exports: [],
	declarations: [RegisterComponent],
	providers: [],
})
export class RegisterModule {
}
