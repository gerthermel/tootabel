(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/login/login.component */ "./src/app/dashboard/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");






const routes = [
    { path: 'registreeri', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'sisene', component: _dashboard_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) },
    { path: '**', redirectTo: 'error/404', data: { title: '404' } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["app-signup[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  border: solid thin red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHhhbXBwXFxodGRvY3NcXHdlYlxcdG9vdGFiZWxcXGZyb250ZW5kL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLGlDQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtc2lnbnVwe1xyXG4gICAgLndyYXB7XHJcblxyXG4gICAgICBib3JkZXI6c29saWQgdGhpbiByZWQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9IiwiYXBwLXNpZ251cCAud3JhcCB7XG4gIGJvcmRlcjogc29saWQgdGhpbiByZWQgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _germel_media_registration_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @germel-media/registration-lib */ "./node_modules/@germel-media/registration-lib/__ivy_ngcc__/fesm2015/germel-media-registration-lib.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _germel_media_registration_lib__WEBPACK_IMPORTED_MODULE_8__["GermelRegistration"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["alertModalContent"],
        _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _germel_media_registration_lib__WEBPACK_IMPORTED_MODULE_8__["GermelRegistration"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["alertModalContent"],
                    _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _germel_media_registration_lib__WEBPACK_IMPORTED_MODULE_8__["GermelRegistration"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserTransferStateModule"]
                ],
                providers: [],
                entryComponents: [_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["alertModalContent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class LoginComponent {
    constructor(auth, service) {
        this.auth = auth;
        this.service = service;
    }
    ngOnInit() {
        this.signInForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            alias: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    onSubmit() {
        var alias = this.signInForm.get('alias').value;
        var password = this.signInForm.get('password').value;
        this.auth.signIn(alias, password).subscribe((res) => {
            this.auth.isAuthenticated = true;
        });
        //this.modalRef.close();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 15, vars: 1, consts: [[1, "login-wrap"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "alias"], ["formControlName", "alias", "type", "text", "placeholder", "", "ngbAutofocus", "", "required", "", 1, "form-control"], ["for", "password"], ["formControlName", "password", "type", "password", "placeholder", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-iceblue", "btn-block"], ["routerLink", "/registreeri", "title", "Work in progress", 1, "dropdown-item", "text-center"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Kasutaja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Parool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sisene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Registreeri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".login-wrap[_ngcontent-%COMP%] {\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: calc( (100vh - 400px) / 2);\n  background-color: white;\n  border-radius: 13px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 1rem;\n  position: relative;\n  background: linear-gradient(45deg, #5affc0, #03e8f8);\n  padding: 7px;\n  color: white;\n}\n.login-wrap[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  background: white;\n  padding: 2rem;\n  color: initial;\n  border-radius: 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xvZ2luL0M6XFx4YW1wcFxcaHRkb2NzXFx3ZWJcXHRvb3RhYmVsXFxmcm9udGVuZC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXdyYXB7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIG1hcmdpbi10b3A6Y2FsYyggKDEwMHZoIC0gNDAwcHgpIC8gMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2IoOTAsIDI1NSwgMTkyKSwgcmdiKDMsIDIzMiwgMjQ4KSk7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGZvcm17XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBjb2xvcjppbml0aWFsO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIH1cclxufVxyXG4iLCIubG9naW4td3JhcCB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogY2FsYyggKDEwMHZoIC0gNDAwcHgpIC8gMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxM3B4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICBwYWRkaW5nOiAxcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzVhZmZjMCwgIzAzZThmOCk7XG4gIHBhZGRpbmc6IDdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxvZ2luLXdyYXAgZm9ybSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAycmVtO1xuICBjb2xvcjogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/company-resolver.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/guards/company-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: CompanyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyResolver", function() { return CompanyResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/table.service */ "./src/app/shared/services/table.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/permissions.service */ "./src/app/shared/services/permissions.service.ts");












class CompanyResolver {
    constructor(table, platformId, http, route, service, company, permissions) {
        this.table = table;
        this.platformId = platformId;
        this.http = http;
        this.route = route;
        this.service = service;
        this.company = company;
        this.permissions = permissions;
    }
    resolve(route, state) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            //this.table.generateCalendarArray()
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + `/tootable/company/${route.params['id']}`, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                this.company.companyData = data['companyData'][0];
            }, (error) => {
            }) //end map
            ); //enbd pipe
        } //endif
    } //end of resolve
} //end of class
CompanyResolver.ɵfac = function CompanyResolver_Factory(t) { return new (t || CompanyResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"])); };
CompanyResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyResolver, factory: CompanyResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] }, { type: _services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"] }, { type: _services_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _guards_company_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../guards/company-resolver.service */ "./src/app/shared/guards/company-resolver.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");













class SharedModule {
    constructor(library) {
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["fab"]);
    }
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"])); }, providers: [
        _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _guards_company_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CompanyResolver"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        ], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]], exports: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ],
                providers: [
                    _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
                    _guards_company_resolver_service__WEBPACK_IMPORTED_MODULE_9__["CompanyResolver"],
                ],
                exports: [
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
                ],
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconLibrary"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/alert.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/alert.service.ts ***!
  \**************************************************/
/*! exports provided: alertModalContent, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertModalContent", function() { return alertModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");




const _c0 = function () { return ["fas", "check"]; };
class alertModalContent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.isError = false;
        this.isAlert = false;
        this.isSuccess = false;
    }
}
alertModalContent.ɵfac = function alertModalContent_Factory(t) { return new (t || alertModalContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
alertModalContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: alertModalContent, selectors: [["ngbd-modal-content"]], inputs: { msg: "msg", title: "title" }, decls: 9, vars: 4, consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], [3, "icon"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", 3, "click"]], template: function alertModalContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function alertModalContent_Template_button_click_7_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.msg, " ");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["\n\t.modal-backdrop.show{\n\t\topacity:0.5 !important;\n\t}\n\t.custom-alert-modal {\n\t\tcolor: #666666;\n\t}\n\t\n\t.custom-alert-modal  {\n\t\tborder: none;\n\t}\n\t.custom-alert-modal .modal-footer button {\n\t\tbackground-color: white;\n\t\tcolor: white;\n\t\tborder: none;\n\t\tborder-radius: 68px;\n\t\tmin-width: 200px;\n\t\tfont-weight: 700;\n\t}\n\t\n\t.custom-alert-modal .modal-header {\n\t\tfont-size: 30px;\n\t\tfont-weight: bold;\n\t}\n\t\n\t.custom-alert-modal  .modal-footer {\n\t\tcolor: white;\n\t}\n\t\n\t\n\t.custom-alert-modal .modal-header,\n\t.custom-alert-modal .modal-body,\n\t.custom-alert-modal .modal-footer\n\t\t{\n\t\ttext-align: center;\n\t\tdisplay: block;\n\t\tborder: none;\n\t}\n\t\n\t.error_modal  .modal-header,\n\t.error_modal  .modal-footer button\n\t\t{\n\t\tcolor: #ff6060;\n\t}\n\t\n\t.error_modal  .modal-footer button {\n\t\tborder: solid 2px #ff5f5f !important;\n\t}\n\t\n\t.success_modal  .modal-header,\n\t.success_modal  .modal-footer button\n\t{\n\t\tcolor: #3db879;\n\t}\n\t\n\t.success_modal  .modal-footer button {\n\t\tborder: solid 2px #3db879;\n\t}\n\t\n\t.neutral_modal  .modal-header,\n\t.neutral_modal  .modal-footer button\n\t\t{\n\t\tcolor: #b75051;\n\t}\n\t\n\t.neutral_modal  .modal-footer button {\n\t\tborder: solid 2px #b75051;\n\t}\n\n\t.fade,\n\t.btn{\n\t\ttransition: none;\n\t}\n\t"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](alertModalContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                template: `
		<div class="modal-header">
			<h4 class="modal-title" id="modal-basic-title">
				<fa-icon [icon]="['fas', 'check']" ></fa-icon>
				{{title}}
			</h4>
		</div>
		<div class="modal-body">
			{{msg}}
		</div>
		<div class="modal-footer">
			<button type="button" class="btn" data-dismiss="modal" (click)="activeModal.close('Close click')">Close</button>
		</div>
	`,
                styles: [`
	.modal-backdrop.show{
		opacity:0.5 !important;
	}
	.custom-alert-modal {
		color: #666666;
	}
	
	.custom-alert-modal  {
		border: none;
	}
	.custom-alert-modal .modal-footer button {
		background-color: white;
		color: white;
		border: none;
		border-radius: 68px;
		min-width: 200px;
		font-weight: 700;
	}
	
	.custom-alert-modal .modal-header {
		font-size: 30px;
		font-weight: bold;
	}
	
	.custom-alert-modal  .modal-footer {
		color: white;
	}
	
	
	.custom-alert-modal .modal-header,
	.custom-alert-modal .modal-body,
	.custom-alert-modal .modal-footer
		{
		text-align: center;
		display: block;
		border: none;
	}
	
	.error_modal  .modal-header,
	.error_modal  .modal-footer button
		{
		color: #ff6060;
	}
	
	.error_modal  .modal-footer button {
		border: solid 2px #ff5f5f !important;
	}
	
	.success_modal  .modal-header,
	.success_modal  .modal-footer button
	{
		color: #3db879;
	}
	
	.success_modal  .modal-footer button {
		border: solid 2px #3db879;
	}
	
	.neutral_modal  .modal-header,
	.neutral_modal  .modal-footer button
		{
		color: #b75051;
	}
	
	.neutral_modal  .modal-footer button {
		border: solid 2px #b75051;
	}

	.fade,
	.btn{
		transition: none;
	}
	`],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { msg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class AlertService {
    constructor(modalService) {
        this.modalService = modalService;
        this.modalComp = alertModalContent;
    }
    success(msg) {
        const modalRef = this.modalService.open(this.modalComp, { windowClass: 'custom-alert-modal success_modal' });
        modalRef.componentInstance.msg = msg;
        modalRef.componentInstance.title = 'Success';
        modalRef.componentInstance.isSuccess = true;
    }
    error(msg) {
        const modalRef = this.modalService.open(this.modalComp, { windowClass: 'custom-alert-modal error_modal' });
        modalRef.componentInstance.msg = msg;
        modalRef.componentInstance.title = 'Oops...';
        modalRef.componentInstance.isError = true;
    }
    alert(msg) {
        const modalRef = this.modalService.open(this.modalComp, { windowClass: 'custom-alert-modal neutral_modal' });
        modalRef.componentInstance.msg = msg;
        modalRef.componentInstance.title = 'Notification';
        modalRef.componentInstance.isAlert = true;
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/app.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/app.service.ts ***!
  \************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppService {
    constructor() {
        this.mainLoading = false;
        this.startLoaing = true;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

//import { AlertService } from './alert.service';




class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = true;
        this.isAuthenticated = 'loading';
        this.userData = {};
    }
    checkAuth() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/auth/isAuth', { withCredentials: true });
    }
    getAuth() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/auth', { withCredentials: true });
    }
    isAuth() {
        return this.isAuthenticated;
    }
    signIn(alias, password) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/auth', { alias: alias, password: password }, { withCredentials: true });
    }
    signInQuick(alias, password) {
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/backend/page/sign-in', { alias: alias, password: password }, { withCredentials: true }).subscribe((data) => {
            this.isAuthenticated = true;
            this.userData = data;
            localStorage.setItem('authData', JSON.stringify({ isAuth: true, userData: data }));
            this.authChanged.emit(data);
            //window.location.reload();
        }, (error) => {
            //this.alert.error(error.error.message)
        });
    }
    signOut() {
        console.log('sign out');
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/auth/sign-out', { withCredentials: true }).subscribe((data) => {
            this.isAuthenticated = false;
            this.userData = {};
        }, (error) => {
            //this.alert.error(error.error.message)
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/company.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/services/alert.service.ts");





class CompanyService {
    constructor(http, alert) {
        this.http = http;
        this.alert = alert;
        this.demo2 = true;
        this.myCompaniesLoading = true;
        this.companyLoading = true;
        this.addWorkerLoading = false;
        this.gettingWorkers = true;
        this.companyWorkers = [];
        this.companyId = 0;
        this.companyData = {
            id: '',
            title: '',
        };
        this.userData = {};
        this.slidePanel = {
            createCompany: 'hide',
            newEntry: 'hide',
            mainMenu: 'hide',
            newFilter: 'hide',
            newCompanyModal: 'hide',
            overviewMenu: 'hide',
            userMenu: 'hide',
            addWorker: 'hide',
        };
        this.backDrop = 'out';
        this.activePanel = [];
        this.openMenus = {
            createCompany: false,
            newEntry: false,
        };
        this.myCompanies = [];
        this.companyPermissions = {};
    }
    hide() {
        console.log(this.myCompaniesLoading);
        this.myCompaniesLoading = false;
    }
    setBackdrop(state) {
        this.backDrop = state;
    }
    loadMenu() {
        setTimeout(() => {
            this.myCompaniesLoading = false;
        }, 2000);
    }
    openSidebar(panel, ignore) {
        if (panel != this.activePanel && !ignore) {
            this.slidePanel[this.activePanel[this.activePanel.length - 1]] = 'hide';
        }
        if (this.slidePanel[panel] == 'show') {
            this.setBackdrop('hide');
            this.slidePanel[panel] = 'hide';
            this.activePanel.push(panel);
        }
        else {
            this.setBackdrop('show');
            this.slidePanel[panel] = 'show';
            this.activePanel.push(panel);
        }
    }
    openAddWorkerPanel() {
        this.openSidebar('addWorker');
    }
    setCompanyId(id) {
        this.companyId = id;
    }
    addWorker(f) {
        var companyId = this.companyData.id;
        var code = f.value.code;
        this.addWorkerLoading = true;
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/company/add-worker', { code: code, cid: this.companyId }, { withCredentials: true }).subscribe((res) => {
            //this.myCompanies.push(res['returnData'])
            console.log(res['data']);
            this.closeSidebar();
            this.addWorkerLoading = false;
        }, (error) => {
            this.addWorkerLoading = false;
            this.alert.error(error.error.message);
        });
    }
    getWorkers(id) {
        var companyId = companyId;
        return new Promise(resolve => {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/company/' + id + '/get-workers', { withCredentials: true }).subscribe((res) => {
                this.gettingWorkers = false;
                this.companyWorkers = res['workers'];
            }, (error) => {
                this.gettingWorkers = false;
                this.alert.error(error.error.message);
            });
        });
    }
    closeSidebar(name) {
        this.setBackdrop('hide');
        if (name) {
            //console.log(name)
        }
        else {
            console.log(this.activePanel);
            this.slidePanel[this.activePanel[this.activePanel.length - 1]] = 'hide';
            this.activePanel.splice(-1);
            //console.log(this.activePanel)
        }
    }
    getMyCompanies() {
        if (this.myCompanies.length == 0) {
            this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/company/my-companies', { withCredentials: true }).subscribe((res) => {
                var data = res;
                for (let company of data) {
                    this.myCompanies.push(company);
                }
                this.myCompaniesLoading = false;
            }, (error) => {
                this.alert.error(error.error.message);
            });
        }
    }
    createCompany(companyForm) {
        var name = companyForm.value['name'];
        this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/company/create', { form: companyForm.value }, { withCredentials: true }).subscribe((res) => {
            this.myCompanies.push(res['returnData']);
            this.closeSidebar();
        }, (error) => {
            this.alert.error(error.error.message);
        });
    }
    removeCompany(id) {
        var companyId = this.myCompanies[id].id;
        this.myCompanies.splice(id, 1);
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + '/tootable/company/' + companyId, { withCredentials: true }).subscribe((res) => {
        }, (error) => {
            this.alert.error(error.error.message);
        });
    }
}
CompanyService.ɵfac = function CompanyService_Factory(t) { return new (t || CompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
CompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyService, factory: CompanyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/permissions.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/permissions.service.ts ***!
  \********************************************************/
/*! exports provided: PermissionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsService", function() { return PermissionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/services/alert.service.ts");

//import { AlertService } from './alert.service';






/**
   mod_perm: 1, //modify group permissions
   mod_user_perm:2, //change user permissons group
   add_worker: 3,
   edit_worker_settings: 4,
   see_worker_table: 5,
   edit_worker_table: 6,
   remove_worker: 7,
 */
class PermissionsService {
    constructor(http, router, company, alert) {
        this.http = http;
        this.router = router;
        this.company = company;
        this.alert = alert;
        this.companyPermissions = {};
        this.myPermissions = {};
        this.locs = {};
        this.defaults = {};
    }
    getPermissions() {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + `/tootable/permissions/${this.company.companyData.id}`, { withCredentials: true });
    }
    getAllPermissions() {
        /**
         * Loads authicated/loggedin users all permission
         * Loads perm locations
         * Loads perm defaults
         */
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + `/tootable/permissions/all`, { withCredentials: true });
    }
    loadPermissions() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + `/tootable/permissions/`, { withCredentials: true }).subscribe((res) => {
            this.locs = res['locations'];
            this.defaults = res['defaults'];
        });
    }
    hasPermission(name, code) {
        if (!code) {
            console.error(code);
            return false;
        }
        var location = this.permissionLocation(name);
        var code = code.toString();
        var char = code.charAt(location);
        if (char == '1') {
            return true;
        }
        else {
            return false;
        }
    }
    permissionLocation(name) {
        if (Object.keys(this.locs).length == 0) {
            this.alert.error('Error: Permissions Locs not loaded');
            return;
        }
        var location = this.locs[name] - 1;
        return location;
    }
}
PermissionsService.ɵfac = function PermissionsService_Factory(t) { return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
PermissionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionsService, factory: PermissionsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/table.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/table.service.ts ***!
  \**************************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company.service */ "./src/app/shared/services/company.service.ts");








class TableService {
    constructor(service, http, alert, company, rendererFactory) {
        this.service = service;
        this.http = http;
        this.alert = alert;
        this.company = company;
        this.rendererFactory = rendererFactory;
        this.isLoading = true;
        this.now = new Date();
        this.daysArray = new Array();
        this.isTableLoading = false;
        this.currentDay = this.now.getDate();
        this.currentMonth = this.now.getMonth();
        this.currentYear = this.now.getFullYear();
        this.daysInMonth = this.getDaysInMonth(1, 2012);
        this.currentDate = `${this.currentYear}-${this.currentMonth + 1}-${this.currentDay}`;
        this.daysInCurrentMonth = new Array(new Date(this.now.getFullYear(), this.now.getMonth(), 0).getDate());
        this.monthArray = new Array();
        this.months = {
            0: 'Jaanuar',
            1: 'Veebruar',
            2: 'Märts',
            3: 'Aprill',
            4: 'Mai',
            5: 'Juuni',
            6: 'Juuli',
            7: 'August',
            8: 'September',
            9: 'Oktoober',
            10: 'November',
            11: 'Detsember',
        };
        this.years = new Array();
        this.selectedDay = this.currentDay;
        this.selectedMonth = this.currentMonth;
        this.selectedYear = this.currentYear;
        this.filterSelectedMonth = this.currentMonth;
        this.filterSelectedYear = this.currentYear;
        this.hours = {};
        this.totalHours = 0;
        this.entryStatus = {};
        this.entryQueue = {}; //queue of items that needs to be added, because first time is being inserted.
        this.saveHistory = {};
    }
    getData() {
        var date = new Date();
        var date2 = new Date('2021-01-01');
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + `/tootable/table/${this.service.selectedUser}/hours/${this.filterSelectedMonth}/${this.filterSelectedYear}`, { withCredentials: true }).subscribe((res) => {
            this.hours = res['data'];
            console.log(res['data']['data']);
            this.isTableLoading = false;
            this.totalHours = res['hours'];
            this.tyymaad = res['tyymaad'];
            this.getWeeksInMonth();
        }, (error) => {
        });
    }
    filterObjects() {
    }
    getDaysInMonth(month, year) {
        return new Date(year, month + 1, 0).getDate();
    }
    getDays() {
        return new Date(this.selectedYear, this.filterSelectedMonth + 1, 0).getDate();
    }
    ;
    generateYears() {
        for (let i = this.currentYear - 5; i <= this.currentYear; i++) {
            this.years.push(i);
        }
    }
    generateMonths() {
        this.monthArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
    generateDays() {
        var days = this.getDaysInMonth(this.selectedMonth, this.selectedYear);
        this.daysArray = [];
        for (let i = 1; i <= days; i++) {
            this.daysArray.push(i);
            //this.hours[this.selectedYear][this.selectedMonth][i] = {};
        }
    }
    dayChange(value) {
        this.selectedDay = parseInt(value);
    }
    monthChange(value) {
        this.selectedDay = 1;
        var key = value;
        var month = this.months[value];
        this.selectedMonth = parseInt(value);
        this.generateDays();
    }
    createNewEntry(f) {
        var formData = new FormData();
        var date = `${this.selectedYear}-${this.selectedMonth + 1}-${this.selectedDay}`;
        formData.append('company_id', this.service.selectedCompany);
        formData.append('date', date);
        formData.append('month', `${this.selectedMonth + 1}`);
        formData.append('year', `${this.selectedYear}`);
        formData.append('day', `${this.selectedDay}`);
        formData.append('notes', f.value['notes']);
        formData.append('hours', f.value['hours']);
        formData.append('object', f.value['object']);
        //form['company_id'] = this.service.selectedCompany;
        //form['date'] = date;
        //form['month'] = this.selectedMonth+1;
        //form['year'] = this.selectedYear;
        //form['day'] = this.selectedDay;
        this.insertNew(formData).subscribe((res) => {
            delete this.hours['data'][date][0];
            this.addHours(res);
        }, (error) => {
            this.alert.error(error.error.message);
        });
        this.company.closeSidebar();
    }
    ;
    addHours(res) {
        let data = res['data'];
        let date = data['date'];
        if (!this.hours['data'][date][data['id']]) {
            this.hours['data'][date][data['id']] = data;
        }
        else {
            Object.assign(this.hours['data'][date][data['id']], data);
        }
    }
    generateCalendarArray() {
        for (let y = this.currentYear - 10; y <= this.currentYear + 10; y++) {
            this.hours[y] = {};
            for (let m = 0; m <= 12; m++) {
                this.hours[y][m] = {};
                var days = this.getDaysInMonth(m, y);
                for (let d = 1; d <= days; d++) {
                    this.hours[y][m][d] = {};
                }
            }
        }
    }
    getHours() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + `/tootable/table/${this.service.selectedCompany}/hours`, { withCredentials: true });
    }
    prevMonth() {
        this.isTableLoading = true;
        if (this.filterSelectedMonth > 0) {
            this.filterSelectedMonth = this.filterSelectedMonth - 1;
            this.selectedMonth = this.filterSelectedMonth;
            this.getData();
        }
    }
    nextMonth() {
        this.isTableLoading = true;
        if (this.filterSelectedMonth < 11) {
            this.filterSelectedMonth = this.filterSelectedMonth + 1;
            this.selectedMonth = this.filterSelectedMonth;
            this.getData();
        }
    }
    checkRowSatus(date) {
        if (this.entryStatus[date]) {
            return this.entryStatus[date]['loading'];
            /*
            if( this.entryStatus[date] ){
              var key = Object.keys(this.entryStatus[date])[0];
              return this.entryStatus[date][key]['loading'];
            }else{
              return false;
            }
            */
        }
        else {
            return false;
        }
    }
    setRowStatus(date, status) {
        if (!this.entryStatus[date]) {
            this.entryStatus[date] = {};
        }
        this.entryStatus[date] = { 'loading': status, };
    }
    insertIntoQueue(date, data) {
        if (!this.entryQueue[date]) {
            this.entryQueue[date] = {};
        }
        this.entryQueue[date][data.propertyName] = data;
    }
    setSaveHistory(date, property, value) {
        if (!this.saveHistory[date]) {
            this.saveHistory[date] = {};
        }
        if (!this.saveHistory[date][property]) {
            this.saveHistory[date][property] = {};
        }
        this.saveHistory[date][property] = { 'value': value };
    }
    getSaveHistory(date, property, value) {
        if (this.saveHistory[date] !== undefined && this.saveHistory[date][property] !== undefined && this.saveHistory[date][property]['value'] == value) {
            return true;
        }
        else {
            return false;
        }
    }
    timeOut(event) {
        clearTimeout(this.updateBuffer);
        this.updateBuffer = setTimeout(() => {
            this.quickNew(event);
        }, 800);
    }
    focusOut(event) {
        var row = event.target.parentElement.parentElement;
        var date = row.getAttribute('date');
        var propertyName = event.target.getAttribute('property');
        var value = event.target.innerText;
        clearTimeout(this.updateBuffer);
        if (!this.getSaveHistory(date, propertyName, value)) {
            this.quickNew(event);
        }
    }
    getRowInputs(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let data = {};
                var inputList = event.target.parentElement.parentNode.children;
                for (let key in inputList) {
                    var propertyName = inputList[key].getAttribute('property');
                    if (propertyName) {
                        var value = inputList[key].innerText;
                        data[propertyName] = value;
                    }
                }
                resolve(data);
            });
        });
    }
    quickNew(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].quickAdd) {
                return;
            }
            var rowInputs = this.getRowInputs(event);
            var row = event.target.parentElement.parentElement;
            var date = row.getAttribute('date');
            var propertyName = event.target.getAttribute('property');
            var value = event.target.innerText;
            //We save so that later we can check if we need to run insertion again or not
            this.setSaveHistory(date, propertyName, value);
            var formData = new FormData();
            formData.append('company_id', this.service.selectedCompany);
            formData.append('date', date);
            formData.append(`${propertyName}`, value);
            if (row.getAttribute('itemId') == 0) { //if row has been inserted once before then there is id present
                if (this.checkRowSatus(date)) {
                    //we need to edit when first insert of row is done and id has been set so we add these into queue
                    this.insertIntoQueue(date, { 'company_id': this.service.selectedCompany, 'date': date, 'propertyName': propertyName, 'value': value, 'loading': true, });
                }
                else {
                    this.setRowStatus(date, true); //we set row into loading so that we can check it
                    this.insertNew(formData).subscribe((res) => {
                        var id = res['data']['id'];
                        //we get other td values and merge them
                        Object.assign(this.hours['data'][date][0], res['data']);
                        delete this.hours['data'][date][0];
                        this.addHours(res); //once they merged we insert into main object variable
                        row.setAttribute('itemId', id);
                        this.setRowStatus(date, false);
                        if (this.entryQueue[date]) {
                            for (let key in this.entryQueue[date]) {
                                let item = this.entryQueue[date][key];
                                let object = {
                                    'id': id,
                                    'property': item.propertyName,
                                    'value': item.value
                                };
                                Object.assign(this.hours['data'][date][id], { [item.propertyName]: item.value });
                                this.editQuick(object);
                                this.entryQueue[date].splice(key, 1);
                            }
                        }
                    }, (error) => {
                        this.alert.error(error.error.message);
                    });
                }
            }
            else {
                console.log('needs to edit');
            }
        });
    }
    insertNew(form) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tootable/table/new-entry', form, { withCredentials: true });
    }
    editQuick(object) {
        var formData = new FormData();
        formData.append('id', object.id);
        formData.append('property', object.property);
        formData.append('value', object.value);
        this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tootable/table/edit-entry', formData, { withCredentials: true }).subscribe((res) => {
            //this.addHours(res); 
        });
    }
    edit(event) {
        var itemId = event.currentTarget.parentElement.parentElement.getAttribute('itemId');
        clearTimeout(this.updateBuffer);
        this.updateBuffer = setTimeout(() => {
            var value = event.target.innerText;
            var propertyName = event.target.getAttribute('property');
            var formData = new FormData();
            formData.append('id', itemId);
            formData.append('property', propertyName);
            formData.append('value', value);
            this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tootable/table/edit-entry', formData, { withCredentials: true }).subscribe();
        }, 800);
    }
    getWeeksInMonth() {
        const year = this.selectedYear;
        const month = this.selectedMonth;
        const weeks = [], firstDate = new Date(year, month, 1), lastDate = new Date(year, month + 1, 0), numDays = lastDate.getDate();
        let dayOfWeekCounter = firstDate.getDay();
        for (let date = 1; date <= numDays; date++) {
            if (dayOfWeekCounter === 0 || weeks.length === 0) {
                weeks.push([]);
            }
            weeks[weeks.length - 1].push(date);
            dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
        }
        this.weeksInMonth = weeks
            .filter((w) => !!w.length)
            .map((w) => ({
            start: w[0],
            end: w[w.length - 1],
            dates: w,
        }));
    }
    deleteEntry(id, date) {
        var itemId = id;
        this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + `/tootable/table/entry/${id}`, { withCredentials: true }).subscribe((res) => {
            delete this.hours['data'][date][id];
        }, (error) => {
            this.alert.error(error.error.message);
        });
    }
    convertToDate(string) {
        return new Date(string);
    }
}
TableService.ɵfac = function TableService_Factory(t) { return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"])); };
TableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TableService, factory: TableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: _company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["RendererFactory2"] }]; }, { selectedDay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedMonth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedYear: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _germel_media_registration_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @germel-media/registration-lib */ "./node_modules/@germel-media/registration-lib/__ivy_ngcc__/fesm2015/germel-media-registration-lib.js");




class SignupComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 1, vars: 3, consts: [[3, "validationApi", "redirect", "redirectUrl"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "germel-registration", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("validationApi", "http://localhost:8080/tootable/create-account/")("redirect", true)("redirectUrl", "/");
    } }, directives: [_germel_media_registration_lib__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]], styles: ["[_nghost-%COMP%]     .wrap {\n  padding: 7px !important;\n  width: 400px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: calc( (100vh - 400px) / 2);\n  background-color: white;\n  border-radius: 13px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  padding: 1rem;\n  position: relative;\n  background: linear-gradient(45deg, #5affc0, #03e8f8);\n  padding: 7px;\n  color: white;\n}\n[_nghost-%COMP%]     .wrap form {\n  padding: 15px !important;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 9px;\n}\n[_nghost-%COMP%]     .wrap form .row {\n  width: 100%;\n  margin-left: 0px !important;\n  margin-right: 0px !important;\n}\n[_nghost-%COMP%]     .wrap form #submit {\n  color: #222222 !important;\n  background: linear-gradient(45deg, #5affc0, #03e8f8) !important;\n}\n[_nghost-%COMP%]     .wrap form #submit:hover {\n  background: linear-gradient(45deg, #03e8f8, #5affc0) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL0M6XFx4YW1wcFxcaHRkb2NzXFx3ZWJcXHRvb3RhYmVsXFxmcm9udGVuZC9zcmNcXGFwcFxcc2lnbnVwXFxzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQUo7QURDSTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ047QURBTTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDRVI7QURBTTtFQUNFLHlCQUFBO0VBQ0EsK0RBQUE7QUNFUjtBRERRO0VBQ0UsK0RBQUE7QUNHViIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXB7XHJcbiAgLndyYXB7XHJcbiAgICBwYWRkaW5nOiA3cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gICAgbWFyZ2luLXRvcDpjYWxjKCAoMTAwdmggLSA0MDBweCkgLyAyKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYig5MCwgMjU1LCAxOTIpLCByZ2IoMywgMjMyLCAyNDgpKTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgZm9ybXtcclxuICAgICAgcGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgLnJvd3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICNzdWJtaXR7XHJcbiAgICAgICAgY29sb3I6IzIyMjIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiKDkwLCAyNTUsIDE5MiksIHJnYigzLCAyMzIsIDI0OCkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIHJnYigzLCAyMzIsIDI0OCksIHJnYig5MCwgMjU1LCAxOTIpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSIsIjpob3N0IDo6bmctZGVlcCAud3JhcCB7XG4gIHBhZGRpbmc6IDdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IGNhbGMoICgxMDB2aCAtIDQwMHB4KSAvIDIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgcGFkZGluZzogMXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICM1YWZmYzAsICMwM2U4ZjgpO1xuICBwYWRkaW5nOiA3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAud3JhcCBmb3JtIHtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC53cmFwIGZvcm0gLnJvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLndyYXAgZm9ybSAjc3VibWl0IHtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNWFmZmMwLCAjMDNlOGY4KSAhaW1wb3J0YW50O1xufVxuOmhvc3QgOjpuZy1kZWVwIC53cmFwIGZvcm0gI3N1Ym1pdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAzZThmOCwgIzVhZmZjMCkgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:8080',
    quickAdd: false,
    quickEdit: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\web\tootabel\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map