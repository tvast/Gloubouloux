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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
require("rxjs/Rx");
var Rx_1 = require("rxjs/Rx");
var BearService = (function () {
    function BearService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.bearUrl = 'http://localhost:8081/api/bears'; // URL to web api
    }
    // constructor(private jsonp: Jsonp) { }
    BearService.prototype.ngOnInit = function () {
    };
    BearService.prototype.getBears = function () {
        // return Observable<Check[]>
        return this.http.get(this.bearUrl)
            .map(function (response) { return response.json(); });
    };
    BearService.prototype.getAllBears = function () {
        // ...using get request
        return this.http.get(this.bearUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    // Add a new comment
    BearService.prototype.addBear = function (body) {
        var bodyString = JSON.stringify(body); // Stringify payload
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new http_1.RequestOptions({ headers: headers }); // Create a request option
        return this.http.post(this.bearUrl, body, options) // ...using post request
            .map(function (res) { return res.json(); }) // ...and calling .json() on the response to return data
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); }); //...errors if any
    };
    BearService.prototype.findBearById = function (id) {
        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        var endPoint = 'get';
        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatinatng
        var params = new http_1.URLSearchParams();
        // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
        params.set('id', id);
        // params.set('format', 'json');
        // params.set('callback', 'JSONP_CALLBACK');
        console.log(id);
        // Return response
        return this.http
            .get(this.bearUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    BearService.prototype.deleteBear = function (id) {
        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        var endPoint = 'get';
        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatinatng
        var params = new http_1.URLSearchParams();
        // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
        params.set('id', id);
        // params.set('format', 'json');
        // params.set('callback', 'JSONP_CALLBACK');
        console.log(id);
        // Return response
        return this.http
            .delete(this.bearUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    BearService.prototype.updateBear = function (id) {
        // End point for list of pets:
        // http://api.petfinder.com/pet.find?key=[API_KEY]&animal=[ANIMAL]&format=json&location=texas
        var endPoint = 'get';
        // URLSearchParams makes it easier to set query parameters and construct URL
        // rather than manually concatinatng
        var params = new http_1.URLSearchParams();
        // params.set('key', '555f8155d42d5c9be4705beaf4cce089');
        params.set('id', id);
        // params.set('format', 'json');
        // params.set('callback', 'JSONP_CALLBACK');
        console.log(id);
        // Return response
        return this.http
            .delete(this.bearUrl + '/' + id)
            .map(function (res) { return res.json(); });
    };
    return BearService;
}());
BearService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BearService);
exports.BearService = BearService;
//# sourceMappingURL=bear.service.js.map