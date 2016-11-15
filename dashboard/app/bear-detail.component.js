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
var core_2 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var bear_service_1 = require('./bear.service');
var BearDetailComponent = (function () {
    function BearDetailComponent(bearService, route, location) {
        this.bearService = bearService;
        this.route = route;
        this.location = location;
        this.bears = [];
    }
    // Set a new event in the store with a given ID
    // as key
    BearDetailComponent.get = function (ID) {
        if (!this._emitters[ID])
            this._emitters[ID] = new core_2.EventEmitter();
        return this._emitters[ID];
    };
    BearDetailComponent.prototype.ngOnInit = function () {
        // this.bearService.getAllBears()
    };
    BearDetailComponent.prototype.loadBear = function (ID) {
        var _this = this;
        var _emitters = {};
        // let ID: string = '123gaga';
        this.bearService.getBears().subscribe(function (bears) { return _this.bears = bears; });
        if (!_emitters[ID])
            _emitters[ID] = new core_2.EventEmitter();
        return _emitters[ID];
    };
    BearDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    BearDetailComponent._emitters = {};
    BearDetailComponent = __decorate([
        core_1.Component({
            // moduleId: module.id,
            selector: 'bear-detail',
            templateUrl: 'app/bear-detail.component.html',
            styleUrls: ['style.css']
        }), 
        __metadata('design:paramtypes', [bear_service_1.BearService, router_1.ActivatedRoute, common_1.Location])
    ], BearDetailComponent);
    return BearDetailComponent;
}());
exports.BearDetailComponent = BearDetailComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license*/
//# sourceMappingURL=bear-detail.component.js.map