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
// import {NgIf} from "angular2/common";
var PlaylistService_1 = require("../services/PlaylistService");
var SoundManager_1 = require("../services/SoundManager");
var SongItemCmp = (function () {
    function SongItemCmp(playlistService, soundManager) {
        this.playlistService = playlistService;
        this.soundManager = soundManager;
        this.playingSong = null;
    }
    SongItemCmp.prototype.addSongToPlaylist = function (song) {
        this.playlistService.add(song);
    };
    SongItemCmp.prototype.play = function (song) {
        this.soundManager.play(song);
    };
    SongItemCmp.prototype.delete = function (song) {
        this.playlistService.remove(song);
    };
    SongItemCmp.prototype.getSongImage = function (song) {
        if (song.imageUrl != null) {
            return song.imageUrl;
        }
        return '/images/artist_placeholder.png';
    };
    __decorate([
        core_1.Input('playing-song'), 
        __metadata('design:type', Object)
    ], SongItemCmp.prototype, "playingSong", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SongItemCmp.prototype, "song", void 0);
    __decorate([
        core_1.Input("show-add"), 
        __metadata('design:type', Boolean)
    ], SongItemCmp.prototype, "showAdd", void 0);
    __decorate([
        core_1.Input("show-delete"), 
        __metadata('design:type', Boolean)
    ], SongItemCmp.prototype, "showDelete", void 0);
    __decorate([
        core_1.Input("show-play"), 
        __metadata('design:type', Boolean)
    ], SongItemCmp.prototype, "showPlay", void 0);
    SongItemCmp = __decorate([
        core_1.Component({
            selector: 'song-item',
            template: "\n\t<div class=\"row song-item\">\n\t\t<div class=\"col-xs-3 song-list-avatar-column\">\n\t\t\t<img class=\"playlist-item-image\"\n\t\t\t\t\t[src]=\"getSongImage(song)\"\n\t\t\t\t\t[width]=\"35\"\n\t\t\t\t\t(click)='play(song)'\n\t\t\t\t\ttitle=\"Play\"/>\n\t\t</div>\n\n\t\t<div class=\"col-xs-6 song-list-information-column\">\n\t\t\t\t<div class=\"playlist-item-title\"\n\t\t\t\t\t\t(click)='play(song)'\n\t\t\t\t\t\ttitle=\"Play\">{{song.name}}</div>\n\t\t\t\t<div class=\"playlist-item-artist\">\n\t\t\t\t\t\t{{song.artist}}\n\t\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-xs-3 playlist-item-control-group\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\n\t\t\t\t\t<a href=\"#\"\n\t\t\t\t\t\t\ttitle=\"Play\"\n\t\t\t\t\t\t\tclass=\"song-list-button\"\n\t\t\t\t\t\t\t(click)='play(song)'\n\t\t\t\t\t\t\t*ngIf='showPlay'\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<i class=\"glyphicon icon-play\"></i></a>\n\n\t\t\t\t\t<a href=\"#\"\n\t\t\t\t\t\t\ttitle=\"\"\n\t\t\t\t\t\t\tclass=\"song-list-button\"\n\t\t\t\t\t\t\t(click)='addSongToPlaylist(song)'\n\t\t\t\t\t\t\t*ngIf='showAdd'>\n\t\t\t\t\t\t\t<i class=\"glyphicon icon-add\"></i></a>\n\n\t\t\t\t\t<a href=\"#\"\n\t\t\t\t\t\t\ttitle=\"X\u00F3a kh\u1ECFi playlist\"\n\t\t\t\t\t\t\tclass=\"song-list-button\"\n\t\t\t\t\t\t\t(click)='delete(song)'\n\t\t\t\t\t\t\t*ngIf='showDelete'>\n\t\t\t\t\t\t\t<i class=\"glyphicon icon-remove\"></i></a>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<i class=\"glyphicon icon-sound playing-song-icon\" *ngIf='playingSong != null && song.id == playingSong.id'></i>\n\t\t</div>\n\t</div>\n\n\t",
            styles: ["\n\t\t.song-item{\n\t\t\t\tborder-top:1px solid #cfcfcf;\n\t\t\t\tpadding: 7px 12px 7px 0px;\n\t\t\t\toverflow: hidden;\n\t\t}\n\n\t\t.song-item:hover,\n\t\t.musicchart > .media:hover, .song-item.active{\n\t\t\t\tbackground-color: #EBEBEB;\n\t\t}\n\n\t\t.song-item:first-child{\n\t\t\t\tborder-top:none;\n\t\t}\n\n\t\t.song-list-information-column {\n\t\t\t\tpadding-left: 5px;\n\t\t\t\tpadding-right: 5px;\n\t\t}\n\n\t\t.playlist-item-control-group{\n\t\t\t\tpadding-left: 5px;\n\t\t\t\tpadding-right: 5px;\n\t\t}\n\n\t\t.playlist-item-control-group i{\n\t\t\t\tcolor: #8D8D8D;\n\t\t\t\tfont-size: 16px;\n\t\t}\n\n\t\t.playlist-item-control-group i:hover{\n\t\t\tcolor: #a18d93;\n\t\t}\n\n\t\t.icon-play {\n\t\t\t\tbackground-image: url(/images/icon-play.png);\n\t\t\t\tbackground-size: 20px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t}\n\n\t\t.icon-share {\n\t\t\t\tbackground-image: url(/images/icon-share.png);\n\t\t\t\tbackground-size: 20px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t}\n\n\t\t.icon-sound {\n\t\t\t\tbackground-image: url(/images/sound_click.png);\n\t\t\t\tbackground-size: 20px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 15px;\n\t\t}\n\n\t\t.icon-remove {\n\t\t\t\tbackground-image: url(/images/remove.png);\n\t\t\t\tbackground-size: 20px;\n\t\t\t\twidth: 20px;\n\t\t\t\theight: 20px;\n\t\t}\n\t\t.icon-add {\n\t\t\tbackground-image: url(/images/icon-add.png);\n\t\t\tbackground-size: 20px;\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t}\n\n\t\t.playlist-item-image{\n\t\t\twidth: 60px;\n\t\t\tcursor: pointer;\n\t\t\tborder-radius: 5px;\n\t\t}\n\t\t"],
        }), 
        __metadata('design:paramtypes', [PlaylistService_1.PlaylistService, SoundManager_1.SoundManager])
    ], SongItemCmp);
    return SongItemCmp;
}());
exports.SongItemCmp = SongItemCmp;
//# sourceMappingURL=SongItem.js.map