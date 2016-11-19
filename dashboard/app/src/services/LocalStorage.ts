import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class LocalStorage{

	constructor() {

	}

	getObject(key : any) {
		try {
			return JSON.parse(localStorage[key]);
		}
		catch (e) {
			return null;
		}
	}

	setObject(key :any, data : any) {
		localStorage[key] = JSON.stringify(data);
	}

}