import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class LocalStorage{

	constructor() {

	}

	getObject(key) {
		try {
			return JSON.parse(localStorage[key]);
		}
		catch (e) {
			return null;
		}
	}

	setObject(key, data) {
		localStorage[key] = JSON.stringify(data);
	}

}