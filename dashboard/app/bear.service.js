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
require('rxjs/add/operator/map');
require('rxjs/Rx');
var BearService = (function () {
    function BearService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.bearUrl = 'http://localhost:8080/api/bears'; // URL to web api
    }
    // getBears(): Promise<Bear[]> {
    //   return this.http.get(this.bearUrl)
    //              .toPromise()
    //              .then(response => response.json().data as Bear[])
    //              .catch(this.handleError);
    // }
    BearService.prototype.getBears2 = function () {
        // return Observable<Check[]>
        return this.http.get(this.bearUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    //
    // getBear(id: number): Promise<Bear> {
    //   return this.getBears()
    //              .then(bears => bears.find(bear => bear.id === id));
    // }
    //
    // delete(id: number): Promise<void> {
    //   const url = `${this.bearUrl}/${id}`;
    //   return this.http.delete(url, {headers: this.headers})
    //     .toPromise()
    //     .then(() => null)
    //     .catch(this.handleError);
    // }
    //
    // create(name: string): Promise<Bear> {
    //   return this.http
    //     .post(this.bearUrl, JSON.stringify({name: name}), {headers: this.headers})
    //     .toPromise()
    //     .then(res => res.json().data)
    //     .catch(this.handleError);
    // }
    //
    // update(bear: Bear): Promise<Bear> {
    //   const url = `${this.bearUrl}/${bear.id}`;
    //   return this.http
    //     .put(url, JSON.stringify(bear), {headers: this.headers})
    //     .toPromise()
    //     .then(() => bear)
    //     .catch(this.handleError);
    // }
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