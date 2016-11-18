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
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var SearchFactory_ts_1 = require('./services/SearchFactory.ts');
var PlaylistService_ts_1 = require('./services/PlaylistService.ts');
var SoundCloudSearch_ts_1 = require('./services/SoundCloudSearch.ts');
var SoundCloudPlayer_ts_1 = require('./services/SoundCloudPlayer.ts');
var SoundManagerSoundPlayer_ts_1 = require('./services/SoundManagerSoundPlayer.ts');
var SoundManager_ts_1 = require('./services/SoundManager.ts');
var Player_ts_1 = require('./player/Player.ts');
var TabList_ts_1 = require('./tabList/TabList.ts');
var LocalStorage_ts_1 = require('./services/LocalStorage.ts');
require('rxjs/Rx');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n\t<div class='app'>\n\t\t<player></player>\n\t\t<tablist></tablist>\n\t</div>\n\t",
            styles: [
                "\n\t\t.app {\n\t\t\twidth: 320px;\n\t\t}\n\n\t\t"
            ],
            directives: [TabList_ts_1.TabListCmp, Player_ts_1.PlayerCmp],
            providers: [
                http_1.HTTP_PROVIDERS,
                SoundCloudSearch_ts_1.SoundCloudSearch,
                SearchFactory_ts_1.SearchFactory,
                PlaylistService_ts_1.PlaylistService,
                SoundCloudPlayer_ts_1.SoundCloudPlayer,
                SoundManagerSoundPlayer_ts_1.SoundManagerSoundPlayer,
                SoundManager_ts_1.SoundManager,
                LocalStorage_ts_1.LocalStorage
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
browser_1.bootstrap(AppCmp);
//# sourceMappingURL=app.js.map