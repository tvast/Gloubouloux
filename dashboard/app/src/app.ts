import {Component} from '@angular/core';
// import {bootstrap} from 'angular2/platform/browser';

import { HttpModule, Http }    from '@angular/http';

import {SearchFactory} from './services/SearchFactory';
import {PlaylistService} from './services/PlaylistService';
import {SoundCloudSearch} from './services/SoundCloudSearch';
import {SoundCloudPlayer} from './services/SoundCloudPlayer';
import {SoundManagerSoundPlayer} from './services/SoundManagerSoundPlayer';
import {SoundManager} from './services/SoundManager';
import {PlayerCmp} from './player/Player';
import {TabListCmp} from './tabList/TabList';
import {LocalStorage} from './services/LocalStorage';
import 'rxjs/Rx';

@Component({
  selector: 'app',
  template: `
	<div class='app'>
		<player></player>
		<tablist></tablist>
	</div>
	`,
	styles: [
		`
		.app {
			width: 320px;
		}

		`
	],
	// providers: [
	// 	Http,
	// 	SoundCloudSearch,
	// 	SearchFactory,
	// 	PlaylistService,
	// 	SoundCloudPlayer,
	// 	SoundManagerSoundPlayer,
	// 	SoundManager,
	// 	LocalStorage
	// ]
})
export class AppCmp {

}

// bootstrap(AppCmp);