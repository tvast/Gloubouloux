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
var core_1 = require("@angular/core");
var bear_service_1 = require("./../bear.service");
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var AdminComponent = (function () {
    function AdminComponent(bearService, route, location) {
        this.bearService = bearService;
        this.route = route;
        this.location = location;
        this.bears = [];
        this.averageWolf = [];
    }
    // Set a new event in the store with a given ID
    // as key
    AdminComponent.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_2.EventEmitter();
        return this._emitters[ID];
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bearService.getAllBears().subscribe(function (bears) {
            _this.bears = bears;
            _this.totalWolf = _this.bears.length;
        });
    };
    AdminComponent.prototype.destroy = function (bear) {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['bear._id'];
            // Retrieve Pet with Id route param
            _this.bearService.deleteBear(id).subscribe(function (bear) { return _this.bear = bear; });
        });
    };
    return AdminComponent;
}());
AdminComponent._emitters = {};
AdminComponent = __decorate([
    core_1.Component({
        selector: 'Admin component',
        templateUrl: 'app/admin/admin.component.html',
        styleUrls: ['app/css/admin.component.css']
    }),
    __metadata("design:paramtypes", [bear_service_1.BearService,
        router_1.ActivatedRoute,
        common_1.Location])
], AdminComponent);
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map