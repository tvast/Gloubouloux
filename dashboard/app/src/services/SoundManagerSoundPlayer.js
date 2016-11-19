"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Events_1 = require('../interfaces/Events');
var SoundManagerSoundPlayer = (function () {
    function SoundManagerSoundPlayer() {
        this.subscribers = {};
    }
    SoundManagerSoundPlayer.prototype.initialize = function (song, callback) {
        var _this = this;
        if (this.lastSong) {
            soundManager.unload(this.lastSong.idFromProvider);
            soundManager.destroySound(this.lastSong.idFromProvider);
        }
        var soundObject = soundManager.getSoundById(song.id);
        if (!soundObject) {
            soundObject = soundManager.createSound({
                url: song.streamUrl + '?client_id=' + soundCloudClientId,
                id: song.idFromProvider,
                volume: 100,
                onbufferchange: function () { return _this.publish(Events_1.Events.BufferingStart, null); },
                ondataerror: function () { return _this.publish(Events_1.Events.AudioError, null); },
                onfinish: function () { return _this.publish(Events_1.Events.Finish, null); },
                onload: function () { return _this.publish(Events_1.Events.BufferingStart, null); },
                onpause: function () { return _this.publish(Events_1.Events.Pause, null); },
                onplay: function () { return _this.publish(Events_1.Events.Play, null); },
                onresume: function () { return _this.publish(Events_1.Events.PlayResume, null); },
                onstop: function () { return _this.publish(Events_1.Events.Finish, null); },
                whileplaying: function () {
                    var time = _this.currentTime();
                    _this.publish(Events_1.Events.Time, time);
                },
            });
            if (!soundObject) {
                return callback(new Error('Error while create sound'), null);
            }
            this.lastSong = song;
        }
        soundObject.play();
        this.soundObject = soundObject;
        return callback(null, song);
    };
    SoundManagerSoundPlayer.prototype.play = function () {
        if (this.soundObject) {
            this.soundObject.resume();
        }
    };
    SoundManagerSoundPlayer.prototype.pause = function () {
        if (this.soundObject) {
            this.soundObject.pause();
        }
    };
    SoundManagerSoundPlayer.prototype.seek = function (percent) {
        if (this.soundObject) {
            var time = this.soundObject.duration * percent / 100;
            this.soundObject.setPosition(time);
        }
    };
    SoundManagerSoundPlayer.prototype.currentTime = function () {
        if (!this.soundObject)
            return;
        return this.soundObject.position;
    };
    SoundManagerSoundPlayer.prototype.totalTime = function () {
        if (!this.soundObject)
            return;
        return this.soundObject.duration;
    };
    SoundManagerSoundPlayer.prototype.setVolume = function (value) {
        if (!this.soundObject)
            return;
        this.soundObject.setVolume(value);
    };
    SoundManagerSoundPlayer.prototype.getVolume = function () {
        if (!this.soundObject)
            return;
        return this.soundObject.volume;
    };
    SoundManagerSoundPlayer.prototype.on = function (event, handler) {
        if (!this.subscribers[event])
            this.subscribers[event] = [];
        this.subscribers[event].push(handler);
    };
    SoundManagerSoundPlayer.prototype.publish = function (event, data) {
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(function (handler) {
                handler(data);
            });
        }
    };
    SoundManagerSoundPlayer.prototype.subscribeSoundCloudPlayerEvent = function () {
        if (!this.soundObject)
            return;
        //Do nothing because events are declared at createSoundOption
    };
    SoundManagerSoundPlayer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SoundManagerSoundPlayer);
    return SoundManagerSoundPlayer;
}());
exports.SoundManagerSoundPlayer = SoundManagerSoundPlayer;
//# sourceMappingURL=SoundManagerSoundPlayer.js.map