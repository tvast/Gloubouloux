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
// import {NgFor} from 'angular2/common';
var PlaylistService_1 = require('../../services/PlaylistService');
var SongItem_1 = require('../SongItem');
var SearchResultCmp = (function () {
    function SearchResultCmp(playlistService) {
        this.showAdd = true;
        this.playlistService = playlistService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], SearchResultCmp.prototype, "result", void 0);
    SearchResultCmp = __decorate([
        core_1.Component({
            selector: 'search-result',
            template: "\n\n\t<div class=\"tab-pane\" id=\"searchResult\">\n\t\t<div class=\"search media-list\" data-type=\"search\">\n\t\t\t<song-item *ngFor=\"#song of result\" [song]=\"song\" [show-add]=\"true\" [show-play]=\"true\"></song-item>\n\t\t</div>\n\n\t\t<div id='search-help' *ngIf='result == null || result.length == 0'>\n\t\t\t<img src='/images/arrow.jpg'/>\n\t\t\t<p>Search your music on SoundCloud</p>\n\t\t</div>\n\n\t</div>\n\t",
            styles: ["\n\t#searchResult{\n\t\tmargin: 0 5px 0 7px;\n\t}\n\n\t#search-help{\n\t\t\topacity: 0.8\n\t}\n\t#search-help img{\n\t\t\tmargin-left:40px;\n\t\t\tmargin-bottom: 15px;\n\t}\n\n\t#search-help p{\n\t\t\ttext-align: center;\n\t}\n\t"],
            directives: [NgFor, SongItem_1.SongItemCmp]
        }), 
        __metadata('design:paramtypes', [PlaylistService_1.PlaylistService])
    ], SearchResultCmp);
    return SearchResultCmp;
}());
exports.SearchResultCmp = SearchResultCmp;
//# sourceMappingURL=SearchResult.js.map