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
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
var bear_component_1 = require('./bear.component');
var form_component_1 = require('./form.component');
var bear_detail_component_1 = require('./bear-detail.component');
var landingpage_component_1 = require('./landingpage.component');
var admin_component_1 = require('./admin.component');
var login_component_1 = require('./login.component');
var routes = [
    { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
    { path: 'wolf', component: bear_component_1.BearComponent },
    { path: '9icke$17', component: admin_component_1.AdminComponent },
    { path: 'landingpage', component: landingpage_component_1.LandingPageComponent },
    { path: 'inscription', component: form_component_1.FormComponent },
    { path: 'update/:id', component: form_component_1.FormComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'bear/:id', component: bear_detail_component_1.BearDetailComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map