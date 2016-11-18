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
var core_2 = require('angular2/core');
var HorizontalDraggable = (function () {
    function HorizontalDraggable(element) {
        var _this = this;
        this.element = element;
        this.position = new core_1.EventEmitter();
        this.mouseup = new core_1.EventEmitter();
        this.mousedown = new core_1.EventEmitter();
        this.mousemove = new core_1.EventEmitter();
        this.element.nativeElement.style.position = 'relative';
        this.element.nativeElement.style.cursor = 'pointer';
        this.mousedrag = this.mousedown
            .map(function (event) {
            event.preventDefault();
            return {
                left: event.clientX - _this.element.nativeElement.getBoundingClientRect().left,
                right: event.clientY - _this.element.nativeElement.getBoundingClientRect().top
            };
        })
            .flatMap(function (imageOffset) { return _this.mousemove.map(function (pos) { return ({
            top: pos.clientY - imageOffset.top,
            left: pos.clientX - imageOffset.left
        }); }); })
            .takeUntil(this.mouseup);
    }
    HorizontalDraggable.prototype.onMouseup = function (event) {
        this.mouseup.next(event);
    };
    HorizontalDraggable.prototype.onMousedown = function (event) {
        this.mousedown.next(event);
    };
    HorizontalDraggable.prototype.onMousemove = function (event) {
        this.mousemove.next(event);
    };
    HorizontalDraggable.prototype.onInit = function () {
        var _this = this;
        this.mousedrag.subscribe({
            next: function (pos) {
                _this.element.nativeElement.style.left = pos.left + 'px';
            }
        });
    };
    __decorate([
        core_1.Output('position'), 
        __metadata('design:type', Object)
    ], HorizontalDraggable.prototype, "position", void 0);
    __decorate([
        core_1.HostListener('mouseup', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HorizontalDraggable.prototype, "onMouseup", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HorizontalDraggable.prototype, "onMousedown", null);
    __decorate([
        core_1.HostListener('mousemove', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], HorizontalDraggable.prototype, "onMousemove", null);
    HorizontalDraggable = __decorate([
        core_1.Directive({
            selector: 'horizontal-draggable'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_2.ElementRef !== 'undefined' && core_2.ElementRef) === 'function' && _a) || Object])
    ], HorizontalDraggable);
    return HorizontalDraggable;
    var _a;
}());
exports.HorizontalDraggable = HorizontalDraggable;
//# sourceMappingURL=HorizontalDraggable.js.map