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
var router_1 = require('@angular/router');
var bear_service_1 = require('./bear.service');
var BearComponent = (function () {
    function BearComponent(router, bearService) {
        this.router = router;
        this.bearService = bearService;
        this.bears = [];
    }
    BearComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bearService.getBears().subscribe(function (bears) { return _this.bears = bears; });
        this.loadBears();
    };
    BearComponent.prototype.loadBears = function () {
        this.bearService.getBears().subscribe(function (bears) {
            console.log(bears);
        });
    };
    BearComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: 'app/bear.component.html',
        }), 
        __metadata('design:paramtypes', [router_1.Router, bear_service_1.BearService])
    ], BearComponent);
    return BearComponent;
}());
exports.BearComponent = BearComponent;
//# sourceMappingURL=bear.component.js.map