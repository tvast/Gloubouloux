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
var SoundManager_1 = require('../services/SoundManager');
var ControlsCmp = (function () {
    function ControlsCmp(soundManager) {
        this.soundManager = soundManager;
    }
    ControlsCmp.prototype.togglePlayPause = function () {
        this.soundManager.togglePlayPause();
    };
    ControlsCmp.prototype.next = function () {
        this.soundManager.next();
    };
    ControlsCmp.prototype.previous = function () {
        this.soundManager.previous();
    };
    __decorate([
        core_1.Input("is-playing"), 
        __metadata('design:type', Boolean)
    ], ControlsCmp.prototype, "isPlaying", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ControlsCmp.prototype, "song", void 0);
    ControlsCmp = __decorate([
        core_1.Component({
            selector: 'controls',
            template: "\n\t\t<a href='#' id=\"btnPrevious\" title=\"\" (click)='previous()'>\n\t\t\t\t<img src='/images/prev.png'/>\n\t\t</a>\n\t\t<a href='#' id=\"btnPlayPause\" (click)='togglePlayPause()'>\n\t\t\t\t<img src='/images/play.png' [class.hide]='isPlaying'/>\n\t\t\t\t<img src='/images/pause.png' [class.hide]='!isPlaying'/>\n\t\t</a>\n\t\t<a href='#' id=\"btnNextSong\" (click)='next()'>\n\t\t\t\t<img src='/images/next.png'/>\n\t\t</a>\n\t",
            styles: [
                "#btnPrevious{\n\t\t\t\tmargin-right: 2px;\n\t\t}\n\t\t#btnPrevious img {\n\t\t\t\twidth:30px;\n\t\t\t\theight:30px;\n\t\t\t\tmargin-top:4px;\n\t\t}\n\n\t\t#btnPlayPause{\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tmargin-right: 2px;\n\t\t}\n\n\t\t#btnPlayPause img{\n\t\t\t\twidth:40px;\n\t\t\t\theight:40px;\n\t\t}\n\n\t\t#btnNextSong{\n\t\t\t\tposition: relative;\n\t\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t#btnNextSong img{\n\t\t\t\tmargin-top: 4px;\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 30px;\n\t\t}\n"
            ],
        }), 
        __metadata('design:paramtypes', [SoundManager_1.SoundManager])
    ], ControlsCmp);
    return ControlsCmp;
}());
exports.ControlsCmp = ControlsCmp;
//# sourceMappingURL=Controls.js.map