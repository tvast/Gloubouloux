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
var visucanvasComponent = (function () {
    function visucanvasComponent() {
    }
    // title = 'Tour of Heroes';
    visucanvasComponent.prototype.ngOnInit = function () {
    };
    visucanvasComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'visu',
            templateUrl: "app/visucanvas.component.html",
            styleUrls: ['app/visucanvas.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], visucanvasComponent);
    return visucanvasComponent;
}());
exports.visucanvasComponent = visucanvasComponent;
//# sourceMappingURL=visucanvas.component.js.map