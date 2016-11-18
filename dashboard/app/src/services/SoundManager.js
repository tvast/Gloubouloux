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
var core_1 = require('angular2/core');
var SoundCloudPlayer_ts_1 = require('./SoundCloudPlayer.ts');
var Events_ts_1 = require('../interfaces/Events.ts');
var SoundManagerSoundPlayer_ts_1 = require('./SoundManagerSoundPlayer.ts');
var PlaylistService_ts_1 = require('./PlaylistService.ts');
var SoundManager = (function () {
    function SoundManager(soundCloudPlayer, soundManagerSoundPlayer, playlistService) {
        this.soundCloudPlayer = soundCloudPlayer;
        this.soundManagerSoundPlayer = soundManagerSoundPlayer;
        this.playlistService = playlistService;
        this.subscribers = {};
        this.isPlaying = false;
        this.isMute = false;
    }
    SoundManager.prototype.getSoundPlayer = function (song) {
        return this.soundManagerSoundPlayer;
    };
    SoundManager.prototype.play = function (song) {
        var _this = this;
        this.playlistService.add(song); //Auto add song to playlist
        this.playlistService.setIndexBySong(song);
        this.currentSong = song;
        if (!this.soundPlayer) {
            this.soundPlayer = this.getSoundPlayer(song);
            this.subscribSoundPlayerEvent(this.soundPlayer);
        }
        this.soundPlayer.initialize(song, function (e) {
            if (!e) {
                _this.soundPlayer.play();
                _this.publish(Events_ts_1.Events.ChangeSong, song);
                _this.isPlaying = true;
            }
            else {
                alert(e.message);
            }
        });
    };
    SoundManager.prototype.togglePlayPause = function () {
        if (this.currentSong != null) {
            if (!this.isPlaying) {
                this.soundPlayer.play();
            }
            else {
                this.soundPlayer.pause();
            }
        }
        else {
            var song = this.playlistService.first();
            this.play(song);
        }
    };
    SoundManager.prototype.next = function () {
        var song = this.playlistService.next();
        if (song)
            this.play(song);
    };
    SoundManager.prototype.previous = function () {
        var song = this.playlistService.previous();
        if (song) {
            this.play(song);
        }
    };
    SoundManager.prototype.seek = function (time) {
        if (this.soundPlayer && this.currentSong) {
            this.soundPlayer.seek(time);
        }
    };
    SoundManager.prototype.toggleMute = function () {
        if (this.currentSong) {
            if (this.isMute) {
                this.soundPlayer.setVolume(100);
                this.isMute = false;
                this.publish(Events_ts_1.Events.Volume, false);
            }
            else {
                this.soundPlayer.setVolume(0);
                this.isMute = true;
                this.publish(Events_ts_1.Events.Volume, true);
            }
        }
    };
    SoundManager.prototype.getTotalTime = function () {
        if (this.soundPlayer && this.currentSong) {
            return this.soundPlayer.totalTime();
        }
        return null;
    };
    SoundManager.prototype.on = function (event, handler) {
        if (!this.subscribers[event])
            this.subscribers[event] = [];
        this.subscribers[event].push(handler);
    };
    SoundManager.prototype.publish = function (event, data) {
        console.log('Publish event:', event, data);
        if (this.subscribers[event]) {
            this.subscribers[event].forEach(function (handler) {
                handler(data);
            });
        }
    };
    SoundManager.prototype.getCurrentSong = function () {
        return this.currentSong;
    };
    SoundManager.prototype.onSongFinish = function () {
        var nextSong = this.playlistService.next();
        if (nextSong) {
            this.play(nextSong);
        }
        else {
            this.publish(Events_ts_1.Events.Finish, null);
        }
    };
    SoundManager.prototype.subscribSoundPlayerEvent = function (soundPlayer) {
        var _this = this;
        soundPlayer.on(Events_ts_1.Events.Play, function () {
            _this.publish(Events_ts_1.Events.Play, null);
            _this.isPlaying = true;
        });
        soundPlayer.on(Events_ts_1.Events.PlayStart, function () {
            _this.publish(Events_ts_1.Events.PlayStart, null);
            _this.isPlaying = true;
        });
        soundPlayer.on(Events_ts_1.Events.PlayResume, function () {
            _this.publish(Events_ts_1.Events.PlayResume, null);
            _this.isPlaying = true;
        });
        soundPlayer.on(Events_ts_1.Events.Pause, function () {
            _this.publish(Events_ts_1.Events.Pause, null);
            _this.isPlaying = false;
        });
        soundPlayer.on(Events_ts_1.Events.Finish, function () {
            _this.publish(Events_ts_1.Events.Finish, null);
            _this.isPlaying = false;
            _this.onSongFinish();
        });
        soundPlayer.on(Events_ts_1.Events.Seek, function () { return _this.publish(Events_ts_1.Events.Seek, null); });
        soundPlayer.on(Events_ts_1.Events.Seeked, function () { return _this.publish(Events_ts_1.Events.Seeked, null); });
        soundPlayer.on(Events_ts_1.Events.Time, function (time) {
            _this.publish(Events_ts_1.Events.Time, time);
        });
        soundPlayer.on(Events_ts_1.Events.AudioError, function () {
            _this.publish(Events_ts_1.Events.AudioError, null);
            _this.isPlaying = false;
        });
        soundPlayer.on(Events_ts_1.Events.NoStreams, function () { return _this.publish(Events_ts_1.Events.NoStreams, null); });
    };
    SoundManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [SoundCloudPlayer_ts_1.SoundCloudPlayer, SoundManagerSoundPlayer_ts_1.SoundManagerSoundPlayer, PlaylistService_ts_1.PlaylistService])
    ], SoundManager);
    return SoundManager;
}());
exports.SoundManager = SoundManager;
//# sourceMappingURL=SoundManager.js.map