import {Injectable} from '@angular/core';
import {ISearch} from '../interfaces/ISearch';
import {SoundCloudSearch} from './SoundCloudSearch';

@Injectable()
export class SearchFactory {
	constructor(private soundCloudSearch: SoundCloudSearch) {

	}

	public getSearchClient(provider) : ISearch {
		if (provider == 1) {
			return this.soundCloudSearch;
		}
		return null;
	}

}