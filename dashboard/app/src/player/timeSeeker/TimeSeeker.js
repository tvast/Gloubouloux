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
var SoundManager_1 = require('../../services/SoundManager');
var TimeSeekerCmp = (function () {
    function TimeSeekerCmp(soundManager, element) {
        this.soundManager = soundManager;
        this.element = element;
    }
    TimeSeekerCmp.prototype.calculatePositionByTime = function () {
        var percent = this.time * 100 / this.duration;
        var pos = percent * this.getTimeSliderWidth() / 100;
        return pos;
    };
    TimeSeekerCmp.prototype.ngOnInit = function () {
        var offset = this.element.nativeElement.getBoundingClientRect();
        var width = this.element.nativeElement.style.width;
        var height = this.element.nativeElement.style.height;
    };
    TimeSeekerCmp.prototype.changePlaybackTime = function ($event) {
        var time = this.calculateTimePercentOnClick($event);
        this.soundManager.seek(time);
    };
    TimeSeekerCmp.prototype.calculateTimePercentOnClick = function ($event) {
        var parentX = this.getTimeSliderWidth();
        var percent = $event.x * 100 / parentX;
        return percent;
    };
    TimeSeekerCmp.prototype.getTimeSliderWidth = function () {
        return parseInt(this.element.nativeElement.children[0].clientWidth);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], TimeSeekerCmp.prototype, "time", void 0);
    __decorate([
        core_1.Input('total-time'), 
        __metadata('design:type', Number)
    ], TimeSeekerCmp.prototype, "duration", void 0);
    TimeSeekerCmp = __decorate([
        core_1.Component({
            selector: 'time-seeker',
            template: "\n\t\t<div id=\"timeSlider\" (click)='changePlaybackTime($event)'>\n\t\t\t\t<span id='sliderHandler' tabindex=\"0\" [style.left]=\"calculatePositionByTime()\" [style.top]=\"sliderHandlerPositionY\"></span>\n\t\t</div>\n\t",
            styles: ["\n\t\t#sliderHandler {\n\t\t\tposition: absolute;\n\t\t}\n\n\t\t#timeSlider{\n\t\t\tposition: relative;\n\t\t}\n\n\t\t#timeSlider{\n\t\t\tposition: relative;\n\t\t\theight:8px;\n\t\t\tbackground-color:#cfcfcf;\n\t\t\tbackground-image:none;\n\t\t\tborder:none;\n\t\t\twidth: 307px;\n\t\t\tfloat: right;\n\t\t\tborder-radius: 4px;\n\t\t\tcursor: pointer !important;\n\t\t}\n\n\t\t#sliderHandler{\n\t\t\tposition: absolute;\n\t\t\tborder-radius: 100px;\n\t\t\tbackground-image: none !important;\n\t\t\tbackground-color: #fff !important;\n\t\t\tborder:1px solid #ff8b00 !important;\n\t\t\ttop:-4px !important;\n\t\t\twidth:15px !important;\n\t\t\theight:15px !important;\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [SoundManager_1.SoundManager, core_1.ElementRef])
    ], TimeSeekerCmp);
    return TimeSeekerCmp;
}());
exports.TimeSeekerCmp = TimeSeekerCmp;
//# sourceMappingURL=TimeSeeker.js.map