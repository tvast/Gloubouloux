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
var bear_1 = require('./bear');
var bear_service_1 = require('./bear.service');
var router_1 = require('@angular/router');
var FormComponent = (function () {
    function FormComponent(router, bearService) {
        this.router = router;
        this.bearService = bearService;
        this.bears = [];
        this.active = true;
        this.bear = new bear_1.Bear();
        this.submitted = false;
    }
    FormComponent.prototype.onSubmit = function () { this.submitted = true; };
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.saveBear = function () {
        var commentOperation;
        this.bearService.addBear(this.bear).subscribe();
    };
    FormComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'bear-form',
            templateUrl: 'app/form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, bear_service_1.BearService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map