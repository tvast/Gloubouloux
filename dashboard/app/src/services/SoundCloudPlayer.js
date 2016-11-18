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
var Events_ts_1 = require("../interfaces/Events.ts");
var SoundCloudPlayer = (function () {
    function SoundCloudPlayer() {
        this.subscribers = {};
    }
    SoundCloudPlayer.prototype.initialize = function (song, callback) {
        var _this = this;
        this.song = song;
        try {
            if (typeof (this.scPlayer) == 'object')
                this.scPlayer.pause();
            this.scPlayer = null;
            SC.stream('/tracks/' + this.song.idFromProvider.toString())
                .then(function (player) {
                _this.scPlayer = player;
                _this.subscribers = {};
                callback(null);
            });
        }
        catch (e) {
            callback(e);
        }
    };
    SoundCloudPlayer.prototype.play = function () {
        this.scPlayer.play();
        this.isPlaying = true;
    };
    SoundCloudPlayer.prototype.pause = function () {
        this.scPlayer.pause();
        this.isPlaying = false;
    };
    SoundCloudPlayer.prototype.seek = function (time) {
        this.scPlayer.seek(time);
    };
    SoundCloudPlayer.prototype.currentTime = function () {
        return this.scPlayer.currentTime();
    };
    SoundCloudPlayer.prototype.setVolume = function (value) {
        this.scPlayer.setVolume(value);
    };
    SoundCloudPlayer.prototype.getVolume = function () {
        return this.scPlayer.getVolume();
    };
    SoundCloudPlayer.prototype.on = function (event, handler) {
        if (!this.subscribers[event])
            this.subscribers[event] = [];
        this.subscribers[event].push(handler);
    };
    SoundCloudPlayer.prototype.publish = function (events) {
        if (events != null) {
            if (typeof (events.length) != "undefined" && events.length > 0) {
            }
            else {
            }
        }
    };
    SoundCloudPlayer.prototype.subscribeSoundCloudPlayerEvent = function () {
        var _this = this;
        this.scPlayer.on('play', function () { return _this.publish(Events_ts_1.Events.Play); });
        this.scPlayer.on('play-start', function () { return _this.publish(Events_ts_1.Events.PlayStart); });
        this.scPlayer.on('play-resume', function () { return _this.publish(Events_ts_1.Events.PlayResume); });
        this.scPlayer.on('pause', function () { return _this.publish(Events_ts_1.Events.Pause); });
        this.scPlayer.on('finish', function () { return _this.publish(Events_ts_1.Events.Finish); });
        this.scPlayer.on('seek', function () { return _this.publish(Events_ts_1.Events.Seek); });
        this.scPlayer.on('seeked', function () { return _this.publish(Events_ts_1.Events.Seeked); });
        this.scPlayer.on('time', function () { return _this.publish(Events_ts_1.Events.Time); });
        this.scPlayer.on('audio_error', function () { return _this.publish(Events_ts_1.Events.AudioError); });
        this.scPlayer.on('no_streams', function () { return _this.publish(Events_ts_1.Events.NoStreams); });
    };
    SoundCloudPlayer = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SoundCloudPlayer);
    return SoundCloudPlayer;
}());
exports.SoundCloudPlayer = SoundCloudPlayer;
//# sourceMappingURL=SoundCloudPlayer.js.map