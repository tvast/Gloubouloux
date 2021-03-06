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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var form_component_1 = require("./login/form.component");
var app_routing_module_1 = require("./app-routing.module");
var angular2_masonry_1 = require("angular2-masonry");
//component
var app_component_1 = require("./app.component");
var bear_component_1 = require("./liste/bear.component");
var home_component_1 = require("./home/home.component");
var bear_detail_component_1 = require("./detail/bear-detail.component");
var visucanvas_component_1 = require("./visualizer/visucanvas.component");
var landingpage_component_1 = require("./home/landingpage.component");
var admin_component_1 = require("./admin/admin.component");
var login_component_1 = require("./login/login.component");
var greenvisualizer_component_1 = require("./visualizer/greenvisualizer.component");
//service
var bear_service_1 = require("./bear.service");
var user_service_1 = require("./user.service");
var logged_in_guard_1 = require("./logged-in.guard");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            angular2_masonry_1.MasonryModule
        ],
        declarations: [
            app_component_1.AppComponent,
            bear_component_1.BearComponent,
            form_component_1.FormComponent,
            home_component_1.HomeComponent,
            bear_detail_component_1.BearDetailComponent,
            landingpage_component_1.LandingPageComponent,
            visucanvas_component_1.visucanvasComponent,
            admin_component_1.AdminComponent,
            login_component_1.LoginComponent,
            greenvisualizer_component_1.visucanvasGreenComponent
        ],
        providers: [bear_service_1.BearService, user_service_1.UserService, logged_in_guard_1.LoggedInGuard],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map