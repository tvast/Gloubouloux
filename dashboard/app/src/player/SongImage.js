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
var SongImageCmp = (function () {
    function SongImageCmp() {
        this.DefaultImageUrl = "/images/artist_placeholder.png";
    }
    SongImageCmp.prototype.getImageUrl = function () {
        if (this.song && this.song.imageUrl) {
            return this.song.imageUrl;
        }
        return this.DefaultImageUrl;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SongImageCmp.prototype, "song", void 0);
    SongImageCmp = __decorate([
        core_1.Component({
            selector: 'song-image',
            template: "\n\t\t<img class='artist-image'\n\t\t\t\t\t[width]=\"81\"\n\t\t\t\t\t[height]=\"81\"\n\t\t\t\t\t[src]='getImageUrl()'/>\n\t",
            styles: ["\n\t.artist-image{\n\t\tborder-radius: 100px;\n\t\tbox-sizing:border-box;\n\t\tborder: 5px solid #dedede;\n\t\twidth:100%;\n\t}\n\t"],
        }), 
        __metadata('design:paramtypes', [])
    ], SongImageCmp);
    return SongImageCmp;
}());
exports.SongImageCmp = SongImageCmp;
//# sourceMappingURL=SongImage.js.map