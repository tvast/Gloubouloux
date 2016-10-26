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
var http_1 = require('@angular/http');
// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
require('rxjs/add/operator/toPromise');
var BearService = (function () {
    function BearService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.bearUrl = 'http://localhost:8080/api/bears'; // URL to web api
    }
    BearService.prototype.getBears = function () {
        return this.http.get(this.bearUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    BearService.prototype.getBear = function (id) {
        return this.getBears()
            .then(function (bears) { return bears.find(function (bear) { return bear.id === id; }); });
    };
    BearService.prototype.delete = function (id) {
        var url = this.bearUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    BearService.prototype.create = function (name) {
        return this.http
            .post(this.bearUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    BearService.prototype.update = function (bear) {
        var url = this.bearUrl + "/" + bear.id;
        return this.http
            .put(url, JSON.stringify(bear), { headers: this.headers })
            .toPromise()
            .then(function () { return bear; })
            .catch(this.handleError);
    };
    BearService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    BearService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BearService);
    return BearService;
}());
exports.BearService = BearService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=bear.service.js.map