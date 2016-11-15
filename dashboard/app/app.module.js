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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var form_component_1 = require('./form.component');
var app_routing_module_1 = require('./app-routing.module');
// import { InMemoryDataService }  from './in-memory-data.service';
var app_component_1 = require('./app.component');
var bear_component_1 = require('./bear.component');
var home_component_1 = require('./home.component');
var bear_detail_component_1 = require('./bear-detail.component');
var landingpage_component_1 = require('./landingpage.component');
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroService }          from './hero.service';
var bear_service_1 = require('./bear.service');
// import { HeroSearchComponent }  from './hero-search.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                // InMemoryWebApiModule.forRoot(InMemoryDataService),
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                bear_component_1.BearComponent,
                form_component_1.FormComponent,
                home_component_1.HomeComponent,
                bear_detail_component_1.BearDetailComponent,
                landingpage_component_1.LandingPageComponent
            ],
            providers: [bear_service_1.BearService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map