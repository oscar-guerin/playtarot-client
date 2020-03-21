import { Injectable } from '@angular/core';

export enum StorageKey {
	AUTH_TOKEN = 'playtarot.io.auth'
}

@Injectable()
export class StorageService {

	public get(key: StorageKey): string {
		return localStorage.getItem(key);
	}

	public set(key: StorageKey, value: string): void {
		localStorage.setItem(key, value);
	}

	public remove(key: StorageKey): void {
		localStorage.removeItem(key);
	}
}
