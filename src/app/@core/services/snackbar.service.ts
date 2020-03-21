import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class SnackbarService {

	public constructor(private snackbar: MatSnackBar,
					   private translateService: TranslateService) {
	}

	public info(messageKey: string): void {
		this.translateService.get(`SNACKBAR.${messageKey}`).subscribe(
			(message: string) => this.snackbar.open(message)
		);
	}
}
