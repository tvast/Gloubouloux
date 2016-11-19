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
// import {NgIf} from 'angular2/common';
var TimeInfoCmp = (function () {
    function TimeInfoCmp() {
    }
    ;
    TimeInfoCmp.prototype.formatTime = function (time) {
        if (!this.song || !this.currentTime || !this.totalTime) {
            return '00:00';
        }
        time = time / 1000;
        var minutes = Math.floor(time / 60);
        var seconds = Math.floor(time - minutes * 60);
        var minStr = minutes > 9 ? minutes.toString() : '0' + minutes.toString();
        var secStr = seconds > 9 ? seconds.toString() : '0' + seconds.toString();
        return minStr + ':' + secStr;
    };
    __decorate([
        core_1.Input('time'), 
        __metadata('design:type', Object)
    ], TimeInfoCmp.prototype, "currentTime", void 0);
    __decorate([
        core_1.Input('total-time'), 
        __metadata('design:type', Object)
    ], TimeInfoCmp.prototype, "totalTime", void 0);
    __decorate([
        core_1.Input('song'), 
        __metadata('design:type', Object)
    ], TimeInfoCmp.prototype, "song", void 0);
    TimeInfoCmp = __decorate([
        core_1.Component({
            selector: 'time-info',
            template: "\n\t\t<div class='time-info pull-right'>\n\t\t\t{{ formatTime(currentTime) }} / {{ formatTime(totalTime) }}\n\t\t</div>\n\t",
        }), 
        __metadata('design:paramtypes', [])
    ], TimeInfoCmp);
    return TimeInfoCmp;
}());
exports.TimeInfoCmp = TimeInfoCmp;
//# sourceMappingURL=TimeInfo.js.map