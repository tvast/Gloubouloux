import {Component} from '@angular/core';
// import {NgIf} from 'angular2/common';
import {SoundManager} from '../services/SoundManager';
import {Events} from '../interfaces/Events';

@Component({
	selector: 'volume',
	template: `
		<a id="btnToggleVolume" href='#' (click)='toggleMute()'>
			<img src='/images/sound.png' [class.hide]='isMute'/>
			<img src='/images/mute.png' [class.hide]='!isMute'/>
		</a>
	`,
	styles: [`

		#btnToggleVolume {
				width:20px;
		}
		#btnToggleVolume img{
				width:20px;
				padding-top:15px;
		}

		#btnToggleVolume i{
				margin-top:13px;
				color:#c7b4ab;
		}
	`],
})
export class VolumeCmp {

	private isMute : any = false;

	constructor(private soundManager: SoundManager) {
		this.soundManager.on(Events.Volume, (isMute) => {
			this.isMute = isMute;
		});
	}

	toggleMute() {
		this.soundManager.toggleMute();
	}

}