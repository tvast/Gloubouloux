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
// login.component.ts
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("./../user.service");
var bear_service_1 = require("./../bear.service");
var LoginComponent = (function () {
    function LoginComponent(userService, router, bearService) {
        this.userService = userService;
        this.router = router;
        this.bearService = bearService;
        this.bears = [];
        this.islog = [];
    }
    /*  onSubmit(email, password) {
        this.userService.login(email, password).subscribe((result) => {
          if (result) {
            this.router.navigate(['']);
            console.log("salut")
          }
        });
      }*/
    LoginComponent.prototype.onSubmit3 = function (email) {
        var _this = this;
        this.bearService.getAllBears().subscribe(function (bears) { return _this.bears = bears; });
        for (var _i = 0, _a = this.bears; _i < _a.length; _i++) {
            var bear = _a[_i];
            if (bear.description == this.email) {
                this.router.navigate(['wolf']);
                console.log("salut");
            }
            else {
                console.log("salut");
            }
        }
    };
    LoginComponent.prototype.onSubmit2 = function () {
        var _this = this;
        this.bearService.getAllBears().subscribe(function (bears) {
            _this.bears = bears;
            for (var _i = 0, bears_1 = bears; _i < bears_1.length; _i++) {
                var bear = bears_1[_i];
                console.log(bear);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'login',
        templateUrl: "app/login/login.component.html",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.Router,
        bear_service_1.BearService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map