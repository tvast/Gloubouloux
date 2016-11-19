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
var LocalStorage_1 = require('./LocalStorage');
var Rx = require('rxjs/Rx');
console.log('change to rxjs');
var PlaylistService = (function () {
    function PlaylistService(localStorageService) {
        this.localStorageService = localStorageService;
        this.currentSongIndex = -1;
        this.$dataObservable = null;
        this._data = this.localStorageService.getObject('playlist_data');
        if (null == this._data) {
            this._data = [];
        }
        this.$source = this._createDataObservable();
    }
    PlaylistService.prototype.add = function (song) {
        var index = this._data.indexOf(song);
        if (index < 0) {
            this._data.push(song);
            this.syncWithLocalStorage();
            this.publishChanges();
        }
    };
    PlaylistService.prototype.first = function () {
        if (this._data.length == 0)
            return null;
        this.currentSongIndex = 0;
        return this._data[0];
    };
    PlaylistService.prototype.next = function () {
        if (this._data.length == 0)
            return null;
        if (this.currentSongIndex < this._data.length - 1) {
            this.currentSongIndex++;
        }
        else {
            this.currentSongIndex = 0;
        }
        return this._data[this.currentSongIndex];
    };
    PlaylistService.prototype.previous = function () {
        if (this._data.length == 0)
            return null;
        if (this.currentSongIndex > 0) {
            this.currentSongIndex--;
        }
        else {
            this.currentSongIndex = this._data.length - 1;
        }
        return this._data[this.currentSongIndex];
    };
    PlaylistService.prototype.remove = function (song) {
        var index = this._data.indexOf(song);
        this._data.splice(index, 1);
        this.syncWithLocalStorage();
        this.publishChanges();
    };
    PlaylistService.prototype.setIndexBySong = function (song) {
        var index = this._data.indexOf(song);
        if (index > -1) {
            this.currentSongIndex = index;
        }
    };
    PlaylistService.prototype.getAll = function () {
        return this.$source;
    };
    PlaylistService.prototype._createDataObservable = function () {
        var _this = this;
        return Rx.Observable.create(function (observer) { return _this.$dataObservable = observer; }).share();
    };
    PlaylistService.prototype.publishChanges = function () {
        this.$dataObservable.next(this._data);
    };
    PlaylistService.prototype.syncWithLocalStorage = function () {
        this.localStorageService.setObject('playlist_data', this._data);
    };
    PlaylistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [LocalStorage_1.LocalStorage])
    ], PlaylistService);
    return PlaylistService;
}());
exports.PlaylistService = PlaylistService;
//# sourceMappingURL=PlaylistService.js.map