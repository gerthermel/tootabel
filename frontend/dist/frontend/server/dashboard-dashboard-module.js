exports.ids = ["dashboard-dashboard-module"];
exports.modules = {

/***/ "./src/app/dashboard/company/company.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/company/company.component.ts ***!
  \********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/table.service */ "./src/app/shared/services/table.service.ts");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/permissions.service */ "./src/app/shared/services/permissions.service.ts");










class CompanyComponent {
    constructor(service, table, company, route, cdr, permissions, config) {
        this.service = service;
        this.table = table;
        this.company = company;
        this.route = route;
        this.cdr = cdr;
        this.permissions = permissions;
        this.hasAccess = false;
        this.analytics = false;
        this.quickAdd = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].quickAdd;
        this.quickEdit = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].quickEdit;
        this.objectKeys = Object.keys;
        config.placement = 'top-left';
        config.autoClose = true;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.route.data.subscribe((response) => {
            var data = response.resolver[0];
            setTimeout(() => {
                this.table.generateYears();
                this.table.generateMonths();
                this.table.generateDays();
                setTimeout(() => {
                    let el = document.getElementById('today');
                });
            });
        });
        this.routeSub = this.route.params.subscribe(params => {
            var workerId = this.route.parent.params['_value']['id'];
            var permissions = this.permissions.myPermissions[workerId];
            //this.hasAccess = this.permissions.hasPermission('access_tables', permissions)
            this.analytics = this.permissions.hasPermission('analytics', permissions);
            this.service.selectedCompany = params['id'];
            //this.table.getData();
        });
    }
    convertMonth(number) {
        return parseInt(number);
    }
    filterMonthChange(month) {
        this.table.isTableLoading = true;
        this.table.filterSelectedMonth = month;
        this.table.getData();
    }
    filterYearChange(year) {
        this.table.filterSelectedYear = year;
        this.table.getData();
    }
    returnZero() {
        return 0;
    }
    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
CompanyComponent.ɵfac = function CompanyComponent_Factory(t) { return new (t || CompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"])); };
CompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompanyComponent, selectors: [["app-company"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])], decls: 1, vars: 0, template: function CompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LnNjc3MifQ== */"] });
CompanyComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyComponent, factory: CompanyComponent.ɵfac, providedIn: 'root' // just before your class
 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-company',
                templateUrl: './company.component.html',
                styleUrls: ['./company.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]]
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root' // just before your class
            }]
    }], function () { return [{ type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"] }, { type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/dashboard/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_guards_company_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/guards/company-resolver.service */ "./src/app/shared/guards/company-resolver.service.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");
/* harmony import */ var _shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/guards/permissions.guard */ "./src/app/shared/guards/permissions.guard.ts");











const routes = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        canActivate: [_shared_guards_permissions_guard__WEBPACK_IMPORTED_MODULE_8__["PermissionsGuard"]],
        children: [
            {
                path: 'sisene',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            },
            {
                path: 'kasutaja/seaded',
                component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'firma/:id',
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                resolve: [_shared_guards_company_resolver_service__WEBPACK_IMPORTED_MODULE_6__["CompanyResolver"]],
                loadChildren: () => __webpack_require__.e(/*! import() | company-company-module */ "company-company-module").then(__webpack_require__.bind(null, /*! ./company/company.module */ "./src/app/dashboard/company/company.module.ts")).then(m => m.CompanyModule)
            },
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                resolve: {},
            },
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/dashboard/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/dashboard/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _left_menu_my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./left-menu/my-companies/my-companies.component */ "./src/app/dashboard/left-menu/my-companies/my-companies.component.ts");
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./left-menu/left-menu.component */ "./src/app/dashboard/left-menu/left-menu.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company/company.component */ "./src/app/dashboard/company/company.component.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/dashboard/settings/settings.component.ts");














class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ngx_autosize__WEBPACK_IMPORTED_MODULE_10__["AutosizeModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
        _left_menu_my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_7__["MyCompaniesComponent"],
        _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_8__["LeftMenuComponent"],
        _company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        ngx_autosize__WEBPACK_IMPORTED_MODULE_10__["AutosizeModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                    _left_menu_my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_7__["MyCompaniesComponent"],
                    _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_8__["LeftMenuComponent"],
                    _company_company_component__WEBPACK_IMPORTED_MODULE_9__["CompanyComponent"], _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    ngx_autosize__WEBPACK_IMPORTED_MODULE_10__["AutosizeModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserTransferStateModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/table.service */ "./src/app/shared/services/table.service.ts");
/* harmony import */ var src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/permissions.service */ "./src/app/shared/services/permissions.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../left-menu/left-menu.component */ "./src/app/dashboard/left-menu/left-menu.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../login/login.component */ "./src/app/dashboard/login/login.component.ts");
















const _c0 = function () { return ["fas", "circle-notch"]; };
function DashboardComponent_div_0_ng_template_1_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 67);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("spin", true);
} }
function DashboardComponent_div_0_ng_template_1_ng_template_42_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_ng_template_42_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r25.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/firma/", item_r23.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r23.name);
} }
function DashboardComponent_div_0_ng_template_1_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_ng_template_1_ng_template_42_li_1_Template, 2, 2, "li", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.company.myCompanies);
} }
function DashboardComponent_div_0_ng_template_1_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("selected", item_r27 == ctx_r8.table.selectedDay && ctx_r8.table.selectedMonth == ctx_r8.table.currentMonth && ctx_r8.table.selectedYear == ctx_r8.table.currentYear ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r27, " ");
} }
function DashboardComponent_div_0_ng_template_1_option_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("value", item_r29)("selected", item_r29 == ctx_r9.table.selectedMonth ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.table.months[item_r29], " ");
} }
function DashboardComponent_div_0_ng_template_1_option_87_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 70, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_ng_template_1_option_87_Template_option_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.year = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", item_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r10.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("selected", item_r31 == ctx_r10.table.selectedYear ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r31);
} }
const _c1 = function () { return ["fas", "chevron-right"]; };
function DashboardComponent_div_0_ng_template_1_div_115_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 73);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function DashboardComponent_div_0_ng_template_1_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_0_ng_template_1_div_115_fa_icon_4_Template, 1, 2, "fa-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("ngbTooltip", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 5, item_r35.value["startDate"], "d. MMM"), " -  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, item_r35.value["endDate"], "d. MMM"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r35.value["currentWeek"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" N\u00E4dal ", item_r35.key, ": ", item_r35.value["hours"], " ");
} }
function DashboardComponent_div_0_ng_template_1_div_128_fa_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 73);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function DashboardComponent_div_0_ng_template_1_div_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_0_ng_template_1_div_128_fa_icon_4_Template, 1, 2, "fa-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("ngbTooltip", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 5, item_r37.value["startDate"], "d. MMM"), " -  ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 8, item_r37.value["endDate"], "d. MMM"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r37.value["currentWeek"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" N\u00E4dal ", item_r37.key, ": ", item_r37.value["hours"], " ");
} }
function DashboardComponent_div_0_ng_template_1_fa_icon_170_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 67);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("spin", true);
} }
function DashboardComponent_div_0_ng_template_1_span_171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lisa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["fas", "bars"]; };
const _c3 = function () { return ["fas", "user"]; };
const _c4 = function () { return ["fas", "times"]; };
const _c5 = function () { return ["far", "plus-square"]; };
function DashboardComponent_div_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-left-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.company.openSidebar("mainMenu"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seaded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.auth.signOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "V\u00E4lju");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Tunnilehed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DashboardComponent_div_0_ng_template_1_ng_template_41_Template, 1, 3, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DashboardComponent_div_0_ng_template_1_ng_template_42_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.company.openSidebar("newCompanyModal", true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Lisa Firma ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Tunnilehed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_57_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " asd ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Uus Sissekanne");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "form", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Kuup\u00E4ev");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_ng_template_1_Template_select_ngModelChange_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.table.dayChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, DashboardComponent_div_0_ng_template_1_option_81_Template, 2, 2, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_0_ng_template_1_Template_select_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.table.monthChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, DashboardComponent_div_0_ng_template_1_option_84_Template, 2, 3, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, DashboardComponent_div_0_ng_template_1_option_87_Template, 3, 4, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "T\u00F6\u00F6maa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 50, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u00DClesanded/M\u00E4rkused");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "textarea", 52, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Tunnid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 53, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_button_click_103_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](74); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.table.createNewEntry(_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Lisa Tunnid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_113_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, DashboardComponent_div_0_ng_template_1_div_115_Template, 6, 11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_126_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](128, DashboardComponent_div_0_ng_template_1_div_128_Template, 6, 11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](129, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Uus Firma");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "fa-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_fa_icon_click_139_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r51.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Firma Lisamine");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "form", null, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Firma Nimi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "input", 60, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_button_click_153_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](147); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.company.createCompany(_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Lisa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Lisa T\u00F6\u00F6line");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "form", null, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "E-mail v\u00F5i Kood");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "input", 62, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_button_click_169_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](163); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.company.addWorker(_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](170, DashboardComponent_div_0_ng_template_1_fa_icon_170_Template, 1, 3, "fa-icon", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, DashboardComponent_div_0_ng_template_1_span_171_Template, 2, 0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_div_0_ng_template_1_Template_div_click_173_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.company.closeSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.table.months[ctx_r1.table.selectedMonth], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.company.companyData["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.company.userData[ctx_r1.service.selectedUser]["titlename"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideMain", ctx_r1.company.slidePanel.mainMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.company.myCompaniesLoading)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideRight", ctx_r1.company.slidePanel.userMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideRight", ctx_r1.company.slidePanel.newEntry);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedDay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.table.daysArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedMonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.table.monthArray);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.table.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideUp", ctx_r1.company.slidePanel.newFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](116, 35, ctx_r1.table.hours.week));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tunde kokku: ", ctx_r1.table.totalHours, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideRight", ctx_r1.company.slidePanel.overviewMenu);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](129, 37, ctx_r1.table.hours.week));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tunde kokku: ", ctx_r1.table.totalHours, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideCompany", ctx_r1.company.slidePanel.newCompanyModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](47, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideLeft", ctx_r1.company.slidePanel.createCompany);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideLeft", ctx_r1.company.slidePanel.addWorker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.company.addWorkerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.company.addWorkerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.company.addWorkerLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@backDrop", ctx_r1.company.backDrop);
} }
function DashboardComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login");
} }
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_ng_template_1_Template, 174, 48, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardComponent_div_0_ng_template_2_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.auth.isAuthenticated)("ngIfElse", _r2);
} }
class DashboardComponent {
    constructor(auth, service, company, table, permissions, route, platformId) {
        this.auth = auth;
        this.service = service;
        this.company = company;
        this.table = table;
        this.permissions = permissions;
        this.route = route;
        this.platformId = platformId;
        this.companyName = 'Tompest Rakennus Oy';
        this.userName = '/ Gerth Ermel';
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(platformId);
    }
    ngOnInit() {
    }
    returnZero() {
        return 0;
    }
    ngAfterViewInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 1, vars: 1, consts: [["style", "height:100%", 4, "ngIf"], [2, "height", "100%"], [3, "ngIf", "ngIfElse"], ["isNotAuth", ""], [1, "container-fluid", 2, "height", "100%"], [1, "row", 2, "height", "100%"], [1, "col-lg-2", "menu", "p-0"], [1, "col-lg-10", "body", "d-flex"], [1, "top"], [1, "row"], [1, "col-2", "d-lg-none", "text-center", "align-self-center"], [3, "icon", "click"], [1, "col", "col-lg-10", "text-center", "align-self-center"], [1, "d-lg-none"], [1, "d-none", "d-lg-block", "text-left", "pl-3"], [1, "col-2", "col-lg-2", "text-center", "align-self-center"], [1, "d-flex", "justify-content-end", "pr-3"], ["ngbDropdown", "", 1, "flex", "mr-lg-3"], ["ngbDropdownToggle", "", 3, "icon"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", "routerLink", "kasutaja/seaded"], [1, "dropdown-divider"], ["ngbDropdownItem", "", 3, "click"], [1, "bottom"], [1, "mainMenuMobile", "d-lg-none"], [1, "menuWrap"], [1, "top", "p-3"], [1, "col-10", "align-self-center"], [1, "col-2", "align-self-center", "text-end"], [1, "middle"], [1, "companies", "d-flex"], ["menuContent", ""], [1, "bottom", "p-3"], [1, "newCompany", "align-self-center", 3, "click"], [1, "mr-2", 3, "icon"], [1, "addEntryModal"], [1, "wrap", "p-4"], [1, "align-self-center"], ["d", "ngForm"], [1, "form-group"], ["for", "name"], [1, "row", "g-3"], [1, "col-3", "pr-1"], ["name", "selectedDay", 1, "form-control", "pl-1", "pr-1", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [1, "col-5", "pl-1", "pr-1"], ["name", "selectedMonth", 1, "form-control", "pl-1", "pr-1", 3, "ngModel", "ngModelChange"], [1, "col-4", "pl-1"], ["aria-label", "", 1, "form-control", "pl-1", "pr-1"], ["ngDefaultControl", "", "name", "year", 3, "ngModel", "value", "ngModelChange", 4, "ngFor", "ngForOf"], ["ngModel", "", "name", "object", "type", "text", "placeholder", "", "ngbAutofocus", "", "required", "", 1, "form-control"], ["name", "ngModel"], ["ngModel", "", "name", "notes", "type", "text", "placeholder", "", "ngbAutofocus", "", "required", "", 1, "form-control"], ["ngModel", "", "name", "hours", "type", "text", "placeholder", "", "ngbAutofocus", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "newFilter", "d-lg-none"], [1, "overviewMenu"], [1, "newCompanyModal", "d-lg-none"], [1, "addCopmanyModal"], ["f", "ngForm"], ["ngModel", "", "name", "name", "type", "text", "placeholder", "", "ngbAutofocus", "", "required", "", 1, "form-control"], ["workerForm", "ngForm"], ["ngModel", "", "name", "code", "type", "text", "autofill", "false", "placeholder", "", "ngbAutofocus", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], ["class", "align-self-center text-center w-100", 3, "icon", "spin", 4, "ngIf"], [4, "ngIf"], ["id", "backDrop", 3, "click"], [1, "align-self-center", "text-center", "w-100", 3, "icon", "spin"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "routerLink", "click"], ["ngDefaultControl", "", "name", "year", 3, "ngModel", "value", "ngModelChange"], ["placement", "right", 3, "ngbTooltip"], [3, "icon", 4, "ngIf"], [3, "icon"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBrowser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _left_menu_left_menu_component__WEBPACK_IMPORTED_MODULE_9__["LeftMenuComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbTooltip"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: [".menu[_ngcontent-%COMP%] {\n  height: 100vh;\n  background-color: #3a3a3a;\n  color: #bfbfbf;\n}\n\n.body[_ngcontent-%COMP%] {\n  background-color: #f3f4f5;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 0px;\n  height: 100%;\n  overflow: hidden;\n  \n}\n\n.body[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.body[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-of-type(1) {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  background-color: white;\n  box-shadow: 0px 0px 11px 4px #eaeaea;\n}\n\n.overviewMenu[_ngcontent-%COMP%] {\n  padding: 15px;\n  z-index: 3;\n  width: 400px;\n  height: 100vh;\n  \n  background-color: white;\n  position: absolute;\n  right: -400px;\n  top: 0px;\n  box-shadow: -20px 0px 20px 0px #0000000d;\n}\n\n.overviewMenu[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.addEntryModal[_ngcontent-%COMP%] {\n  z-index: 3;\n  width: 400px;\n  height: 100vh;\n  \n  background-color: white;\n  position: absolute;\n  right: -400px;\n  top: 0px;\n  box-shadow: -20px 0px 20px 0px #0000000d;\n}\n\n.addEntryModal[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.addCopmanyModal[_ngcontent-%COMP%] {\n  z-index: 2;\n  width: 400px;\n  height: 100vh;\n  \n  background-color: white;\n  position: absolute;\n  left: 317px;\n  top: 0px;\n  box-shadow: 19px 0px 20px 0px #0000000d;\n}\n\n.addCopmanyModal[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n#backDrop[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100%;\n  background-color: whitesmoke;\n  position: absolute;\n  z-index: 1;\n  opacity: 0;\n  left: 0;\n  top: 0;\n  display: none;\n}\n\n@media (max-width: 991px) {\n  .body[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n\n  .bottom[_ngcontent-%COMP%] {\n    overflow: hidden;\n    \n    height: 100%;\n  }\n\n  .mainWrap[_ngcontent-%COMP%] {\n    height: 100%;\n    min-height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  .mainWrap[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .mainWrap[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%], .mainWrap[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n    border: solid thin red;\n  }\n  .mainWrap[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n    min-height: 55px;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n  .mainWrap[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n    flex: 1;\n    overflow: scroll;\n    max-height: -webkit-fill-available;\n  }\n  .mainWrap[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n    min-height: 55px;\n  }\n\n  .overviewMenu[_ngcontent-%COMP%] {\n    box-shadow: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC9DOlxceGFtcHBcXGh0ZG9jc1xcd2ViXFx0b290YWJlbFxcZnJvbnRlbmQvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FMVTtBQ0laOztBREdBO0VBQ0UseUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQU1GOzs7Ozs7Ozs7Ozs7Ozs7OztHQUFBO0FDWUE7O0FEaEJFO0VBQ0UsWUFBQTtBQ2tCSjs7QURHRTtFQUVFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0FDRko7O0FET0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtBQ0pGOztBREtFO0VBQ0UsYUFBQTtBQ0hKOztBRE1BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSx3Q0FBQTtBQ0hGOztBRElFO0VBQ0UsYUFBQTtBQ0ZKOztBRE1BO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSx1Q0FBQTtBQ0hGOztBRElFO0VBQ0UsYUFBQTtBQ0ZKOztBRE1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7QUNIRjs7QURLQTtFQUNFO0lBQ0UsWUFBQTtFQ0ZGOztFREtBO0lBQ0UsZ0JBQUE7SUFDQSw0QkFBQTtJQUNBLFlBQUE7RUNGRjs7RURJQTtJQUNFLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQ0RGO0VERUU7SUFDRSxzQkFBQTtFQ0FKO0VERUU7SUFDRSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNBSjtFREVFO0lBQ0UsT0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0NBQUE7RUNBSjtFREVFO0lBQ0UsZ0JBQUE7RUNBSjs7RURHQTtJQUNFLGdCQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1lbnUtY29sb3I6I2JmYmZiZjtcclxuXHJcbi5tZW51e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU4LCA1OCwgNTgpO1xyXG4gIGNvbG9yOiRtZW51LWNvbG9yO1xyXG59XHJcbi5ib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2YzZjRmNTtcclxuICB6LWluZGV4OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOjBweDtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAuYm90dG9te1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgfVxyXG5cclxuLypcclxuXHJcbiAgLnRvcHtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gIH1cclxuICAubWlkZGxle1xyXG4gICAgXHJcbiAgfVxyXG4gIC5ib3R0b217XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6Y2FsYyggMTAwdmggLSA3N3B4KTtcclxuICAgIC5ib2R5V3JhcHtcclxuICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4qL1xyXG4gIC5yb3c6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAvL2JvcmRlci1ib3R0b206c29saWQgMnB4ICNlYWVhZWE7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206MTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggNHB4ICNlYWVhZWE7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm92ZXJ2aWV3TWVudXtcclxuICBwYWRkaW5nOjE1cHg7XHJcbiAgei1pbmRleDogMztcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICAvKiBib3JkZXI6IHNvbGlkIHRoaW4gcmVkOyAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogLTQwMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGJveC1zaGFkb3c6IC0yMHB4IDBweCAyMHB4IDBweCAjMDAwMDAwMGQ7XHJcbiAgLndyYXB7XHJcbiAgICBoZWlnaHQ6MTAwdmg7XHJcbiAgfVxyXG59XHJcbi5hZGRFbnRyeU1vZGFse1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgLyogYm9yZGVyOiBzb2xpZCB0aGluIHJlZDsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IC00MDBweDtcclxuICB0b3A6IDBweDtcclxuICBib3gtc2hhZG93OiAtMjBweCAwcHggMjBweCAwcHggIzAwMDAwMDBkO1xyXG4gIC53cmFwe1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZENvcG1hbnlNb2RhbHtcclxuICB6LWluZGV4OiAyO1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIGJvcmRlcjogc29saWQgdGhpbiByZWQ7ICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMxN3B4O1xyXG4gIHRvcDogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDE5cHggMHB4IDIwcHggMHB4ICMwMDAwMDAwZDtcclxuICAud3JhcHtcclxuICAgIGhlaWdodDoxMDB2aDtcclxuICB9XHJcbn1cclxuXHJcbiNiYWNrRHJvcHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgb3BhY2l0eTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuQG1lZGlhICggbWF4LXdpZHRoIDogOTkxcHgpIHsvL29ubHkgZm9yIGhhbmRoZWxkXHJcbiAgLmJvZHl7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICB9XHJcblxyXG4gIC5ib3R0b217XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLm1haW5XcmFwe1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLnRvcCwubWlkZGxlLC5ib3R0b217XHJcbiAgICAgIGJvcmRlcjpzb2xpZCB0aGluIHJlZDtcclxuICAgIH1cclxuICAgIC50b3B7XHJcbiAgICAgIG1pbi1oZWlnaHQ6NTVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICAgIH1cclxuICAgIC5taWRkbGV7XHJcbiAgICAgIGZsZXg6MTtcclxuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgbWF4LWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcclxuICAgIH1cclxuICAgIC5ib3R0b217XHJcbiAgICAgIG1pbi1oZWlnaHQ6NTVweFxyXG4gICAgfVxyXG4gIH1cclxuICAub3ZlcnZpZXdNZW51e1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIubWVudSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTNhM2E7XG4gIGNvbG9yOiAjYmZiZmJmO1xufVxuXG4uYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2Y0ZjU7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKlxuXG4gICAgLnRvcHtcbiAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xuICAgICAgcGFkZGluZy1yaWdodDoxNXB4O1xuICAgIH1cbiAgICAubWlkZGxle1xuXG4gICAgfVxuICAgIC5ib3R0b217XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBoZWlnaHQ6Y2FsYyggMTAwdmggLSA3N3B4KTtcbiAgICAgIC5ib2R5V3JhcHtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICB9XG4gICAgfVxuICAqL1xufVxuLmJvZHkgLmJvdHRvbSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ib2R5IC5yb3c6bnRoLW9mLXR5cGUoMSkge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggNHB4ICNlYWVhZWE7XG59XG5cbi5vdmVydmlld01lbnUge1xuICBwYWRkaW5nOiAxNXB4O1xuICB6LWluZGV4OiAzO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIC8qIGJvcmRlcjogc29saWQgdGhpbiByZWQ7ICovXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNDAwcHg7XG4gIHRvcDogMHB4O1xuICBib3gtc2hhZG93OiAtMjBweCAwcHggMjBweCAwcHggIzAwMDAwMDBkO1xufVxuLm92ZXJ2aWV3TWVudSAud3JhcCB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5hZGRFbnRyeU1vZGFsIHtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICAvKiBib3JkZXI6IHNvbGlkIHRoaW4gcmVkOyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTQwMHB4O1xuICB0b3A6IDBweDtcbiAgYm94LXNoYWRvdzogLTIwcHggMHB4IDIwcHggMHB4ICMwMDAwMDAwZDtcbn1cbi5hZGRFbnRyeU1vZGFsIC53cmFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmFkZENvcG1hbnlNb2RhbCB7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogYm9yZGVyOiBzb2xpZCB0aGluIHJlZDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzE3cHg7XG4gIHRvcDogMHB4O1xuICBib3gtc2hhZG93OiAxOXB4IDBweCAyMHB4IDBweCAjMDAwMDAwMGQ7XG59XG4uYWRkQ29wbWFueU1vZGFsIC53cmFwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI2JhY2tEcm9wIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgb3BhY2l0eTogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5ib3R0b20ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAubWFpbldyYXAge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAubWFpbldyYXAgLnRvcCwgLm1haW5XcmFwIC5taWRkbGUsIC5tYWluV3JhcCAuYm90dG9tIHtcbiAgICBib3JkZXI6IHNvbGlkIHRoaW4gcmVkO1xuICB9XG4gIC5tYWluV3JhcCAudG9wIHtcbiAgICBtaW4taGVpZ2h0OiA1NXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5tYWluV3JhcCAubWlkZGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgbWF4LWhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgfVxuICAubWFpbldyYXAgLmJvdHRvbSB7XG4gICAgbWluLWhlaWdodDogNTVweDtcbiAgfVxuXG4gIC5vdmVydmlld01lbnUge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('backDrop', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'display': 'none',
                    'opacity': '0',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'display': 'block',
                    'opacity': '0.7',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideLeft', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'left': '-83px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'left': '317px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideMain', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'left': '-100vw',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'left': '0vw',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideRight', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'right': '-400px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'right': '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideCompany', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'right': '-100vw',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'right': '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'bottom': '-100vh',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    'bottom': '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('backDrop', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'display': 'none',
                            'opacity': '0',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'display': 'block',
                            'opacity': '0.7',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideLeft', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'left': '-83px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'left': '317px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideMain', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'left': '-100vw',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'left': '0vw',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideRight', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'right': '-400px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'right': '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideCompany', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'right': '-100vw',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'right': '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideUp', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'bottom': '-100vh',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            'bottom': '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150)),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(150))
                    ]),
                ]
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }, { type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }, { type: src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_6__["TableService"] }, { type: src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





const _c0 = function () { return ["fas", "circle-notch"]; };
function HomeComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("spin", true);
} }
function HomeComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " one ");
} }
function HomeComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " mroe than one ");
} }
function HomeComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_template_1_ng_template_0_Template, 1, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_ng_template_1_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.company.myCompanies.length == 1)("ngIfElse", _r4);
} }
class HomeComponent {
    constructor(company) {
        this.company = company;
    }
    ngOnInit() {
        setTimeout(() => {
            this.company.companyData.title = 'Töölaud';
            this.company.companyData.id = '';
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[3, "ngIf", "ngIfElse"], ["loaded", ""], [1, "text-center", "p-5"], [1, "align-self-center", "text-center", "w-100", 3, "icon", "spin"], ["more", ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HomeComponent_ng_template_0_Template, 2, 3, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.myCompaniesLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/left-menu/left-menu.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/left-menu/left-menu.component.ts ***!
  \************************************************************/
/*! exports provided: LeftMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftMenuComponent", function() { return LeftMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-companies/my-companies.component */ "./src/app/dashboard/left-menu/my-companies/my-companies.component.ts");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/alert.service */ "./src/app/shared/services/alert.service.ts");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");











const _c0 = function () { return ["far", "plus-square"]; };
class LeftMenuComponent {
    constructor(service, http, alert, company) {
        this.service = service;
        this.http = http;
        this.alert = alert;
        this.company = company;
    }
    ngOnInit() {
        this.companyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    closeAccordion() {
        this.MyCompaniesComponent.accord.collapseAll();
    }
}
LeftMenuComponent.ɵfac = function LeftMenuComponent_Factory(t) { return new (t || LeftMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"])); };
LeftMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeftMenuComponent, selectors: [["app-left-menu"]], viewQuery: function LeftMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_2__["MyCompaniesComponent"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.MyCompaniesComponent = _t.first);
    } }, decls: 10, vars: 2, consts: [[1, "menuWrap"], [1, "top", "p-3"], ["routerLink", "/", 1, "text-center"], [1, "middle"], [1, "bottom", "p-3"], [1, "newCompany", "align-self-center", 3, "click"], [1, "mr-2", 3, "icon"]], template: function LeftMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Tunnilehed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-my-companies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeftMenuComponent_Template_button_click_7_listener() { return ctx.company.openSidebar("createCompany"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lisa Firma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_2__["MyCompaniesComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"]], styles: [".menuWrap[_ngcontent-%COMP%] {\n  z-index: 3;\n  position: relative;\n  background-color: #3a3a3a;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.menuWrap[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  height: 88px;\n}\n.menuWrap[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 15px;\n}\n.menuWrap[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n.menuWrap[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  flex: 0 1 76px;\n}\n.menuWrap[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .newCompany[_ngcontent-%COMP%] {\n  color: #bfbfbf;\n  border: solid 2px #bfbfbf;\n  background-color: transparent;\n  width: 100%;\n  text-align: center;\n  border-radius: 25px;\n  font-size: 20px;\n  font-weight: 400;\n  padding: 5px 10px 5px 10px;\n  text-transform: uppercase;\n}\napp-my-companies[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZnQtbWVudS9DOlxceGFtcHBcXGh0ZG9jc1xcd2ViXFx0b290YWJlbFxcZnJvbnRlbmQvc3JjXFxhcHBcXGRhc2hib2FyZFxcbGVmdC1tZW51XFxsZWZ0LW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9sZWZ0LW1lbnUvbGVmdC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQUY7QURDRTtFQUNFLFlBQUE7QUNDSjtBREFJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDRU47QURDRTtFQUNFLGNBQUE7QUNDSjtBRENFO0VBQ0UsY0FBQTtBQ0NKO0FEQUk7RUFDRSxjQXJCTTtFQXNCTix5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDRU47QURJQTtFQUNFLFdBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9sZWZ0LW1lbnUvbGVmdC1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1lbnUtY29sb3I6I2JmYmZiZjtcclxuLm1lbnVXcmFwe1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1OCwgNTgsIDU4KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgLnRvcHtcclxuICAgIGhlaWdodDo4OHB4O1xyXG4gICAgLmxvZ297XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzoxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWlkZGxle1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG4gIC5ib3R0b217XHJcbiAgICBmbGV4OiAwIDEgNzZweDtcclxuICAgIC5uZXdDb21wYW55e1xyXG4gICAgICBjb2xvcjogJG1lbnUtY29sb3I7XHJcbiAgICAgIGJvcmRlcjpzb2xpZCAycHggJG1lbnUtY29sb3I7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgZm9udC1zaXplOjIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgcGFkZGluZzo1cHggMTBweCA1cHggMTBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuYXBwLW15LWNvbXBhbmllc3tcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG5cclxuIiwiLm1lbnVXcmFwIHtcbiAgei1pbmRleDogMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2EzYTNhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudVdyYXAgLnRvcCB7XG4gIGhlaWdodDogODhweDtcbn1cbi5tZW51V3JhcCAudG9wIC5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLm1lbnVXcmFwIC5taWRkbGUge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi5tZW51V3JhcCAuYm90dG9tIHtcbiAgZmxleDogMCAxIDc2cHg7XG59XG4ubWVudVdyYXAgLmJvdHRvbSAubmV3Q29tcGFueSB7XG4gIGNvbG9yOiAjYmZiZmJmO1xuICBib3JkZXI6IHNvbGlkIDJweCAjYmZiZmJmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuYXBwLW15LWNvbXBhbmllcyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-left-menu',
                templateUrl: './left-menu.component.html',
                styleUrls: ['./left-menu.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: src_app_shared_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }, { type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] }]; }, { MyCompaniesComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_my_companies_my_companies_component__WEBPACK_IMPORTED_MODULE_2__["MyCompaniesComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/left-menu/my-companies/my-companies.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/left-menu/my-companies/my-companies.component.ts ***!
  \****************************************************************************/
/*! exports provided: MyCompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCompaniesComponent", function() { return MyCompaniesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/permissions.service */ "./src/app/shared/services/permissions.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");











const _c0 = ["accord"];
const _c1 = function () { return ["fas", "circle-notch"]; };
function MyCompaniesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "fa-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c1))("spin", true);
} }
const _c2 = function () { return ["fas", "chevron-right"]; };
const _c3 = function () { return ["fas", "chevron-down"]; };
function MyCompaniesComponent_ng_template_2_ngb_panel_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCompaniesComponent_ng_template_2_ngb_panel_2_ng_template_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return item_r5.see_workers ? ctx_r10.selectCompany(item_r5.id) : false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyCompaniesComponent_ng_template_2_ngb_panel_2_ng_template_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return item_r5.see_workers ? ctx_r13.selectCompany(item_r5.id) : false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const opened_r9 = ctx.opened;
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("collapsed", !opened_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", opened_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !opened_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/firma/", item_r5.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r5.see_workers, " ", item_r5.name, "");
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_li_4_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r20.firstname, " ", item_r20.lastname, "");
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_li_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Kasutaja ", i_r21, "");
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "svg", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_li_4_span_3_Template, 2, 2, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_li_4_ng_template_4_Template, 2, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "/firma/", item_r20.company_id, "/", item_r20.user_id, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r20.firstname)("ngIfElse", _r23);
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_div_1_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", null, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_li_4_Template, 6, 4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r16.company.gettingWorkers)("ngIfElse", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r16.company.companyWorkers);
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MyCompaniesComponent_ng_template_2_ngb_panel_2_2_ng_template_0_Template, 5, 3, "ng-template", 17);
} }
function MyCompaniesComponent_ng_template_2_ngb_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyCompaniesComponent_ng_template_2_ngb_panel_2_ng_template_1_Template, 10, 11, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyCompaniesComponent_ng_template_2_ngb_panel_2_2_Template, 1, 0, undefined, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "static-" + item_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("class", item_r5.id == ctx_r4.company.companyData.id ? "active" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r5.see_workers);
} }
function MyCompaniesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-accordion", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyCompaniesComponent_ng_template_2_ngb_panel_2_Template, 3, 3, "ngb-panel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.company.myCompanies);
} }
class MyCompaniesComponent {
    constructor(company, dropdown, permissions, http, route) {
        this.company = company;
        this.dropdown = dropdown;
        this.permissions = permissions;
        this.http = http;
        this.route = route;
        this.demo = false;
        this.companies = [];
        this.workersMenu = {
            workers1: 'show'
        };
        dropdown.placement = 'bottom-right';
    }
    ngOnInit() {
        this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tootable/company/my-companies', { withCredentials: true }).subscribe((res) => {
            var data = res['data'];
            for (let row of data) {
                row['see_workers'] = this.permissions.hasPermission('see_workers', row['value']);
                this.companies.push(row);
            }
            this.company.myCompanies = this.companies;
            this.company.myCompaniesLoading = false;
        }, (error) => {
        });
    }
    selectCompany(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var isOpen = this.accord.isExpanded('static-' + id);
            if (isOpen) {
                var workers = yield this.company.getWorkers(id);
            }
        });
    }
}
MyCompaniesComponent.ɵfac = function MyCompaniesComponent_Factory(t) { return new (t || MyCompaniesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
MyCompaniesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyCompaniesComponent, selectors: [["app-my-companies"]], viewQuery: function MyCompaniesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.accord = _t.first);
    } }, decls: 4, vars: 2, consts: [[1, "companies", "d-flex"], [4, "ngIf", "ngIfElse"], ["menuContent", ""], [1, "align-self-center", "text-center", "w-100", 3, "icon", "spin"], [3, "closeOthers"], ["accord", "ngbAccordion"], ["routerLinkActive", "active", 3, "id", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "id"], ["ngbPanelHeader", ""], [4, "ngIf"], [1, "custom-header", "justify-content-between"], [1, "pl-2", "pr-2"], [1, "left"], ["ngbPanelToggle", "", 1, "company", 3, "hidden", "click"], [1, "ml-2", "mr-3", 3, "icon"], [3, "routerLink"], [1, "right"], ["ngbPanelContent", ""], [1, "workers"], ["class", "w100 text-center", 4, "ngIf", "ngIfElse"], ["workersList", ""], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "w100", "text-center"], ["role", "img", "aria-hidden", "true", "focusable", "false", "data-prefix", "fas", "data-icon", "circle-notch", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-circle-notch", "fa-w-16", "fa-spin"], ["fill", "currentColor", "d", "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-person-fill"], ["d", "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], ["class", "ml-1", 4, "ngIf", "ngIfElse"], ["anon", ""], [1, "ml-1"]], template: function MyCompaniesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MyCompaniesComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MyCompaniesComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.company.myCompaniesLoading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanel"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelToggle"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPanelContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"]], styles: ["button.company[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 42px;\n  text-align: center;\n  color: #bfbfbf;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  padding: 0px;\n  width: 100%;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  \n  position: relative;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 20px;\n  padding: 10px 15px 10px 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .workers[_ngcontent-%COMP%] {\n  font-size: 12px;\n  height: 0px;\n  overflow: hidden;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .workers[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\nul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #636363;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #4e4e4e;\n}\n\nul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #636363;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  min-width: 30px;\n  display: inline-block;\n  text-align: center;\n  margin-right: 5px;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  width: 100%;\n  cursor: pointer;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: right;\n  display: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\nul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .right[_ngcontent-%COMP%] {\n  display: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2xlZnQtbWVudS9teS1jb21wYW5pZXMvQzpcXHhhbXBwXFxodGRvY3NcXHdlYlxcdG9vdGFiZWxcXGZyb250ZW5kL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGxlZnQtbWVudVxcbXktY29tcGFuaWVzXFxteS1jb21wYW5pZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9sZWZ0LW1lbnUvbXktY29tcGFuaWVzL215LWNvbXBhbmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBUFU7QUNNWjs7QURHQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURDRTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURDSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ047O0FEQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ047O0FEQU07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFUjs7QURDSTtFQUNFLHlCQUFBO0FDQ047O0FEQ0k7RUFDRSx5QkF0Q1M7QUN1Q2Y7O0FERUk7RUFDRSx5QkFBQTtBQ0FOOztBREVJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0FOOztBREVJO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOOztBREVJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBTjs7QURFSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNBTjs7QURDTTtFQUNFLGVBQUE7QUNDUjs7QURBUTtFQUNFLFlBQUE7QUNFVjs7QURDTTtFQUNFLGFBQUE7QUNDUjs7QURJRTs7RUFHRSxnQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2xlZnQtbWVudS9teS1jb21wYW5pZXMvbXktY29tcGFuaWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1lbnUtY29sb3I6I2JmYmZiZjtcclxuJGFjdGl2ZS1jb2xvcjogIzRlNGU0ZTtcclxuYnV0dG9uLmNvbXBhbnl7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkbWVudS1jb2xvcjtcclxufVxyXG51bHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpe1xyXG4gICAgLy9wYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgLypkaXNwbGF5OmZsZXg7Ki9cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jb21wYW55e1xyXG4gICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOjVweDtcclxuICAgIH1cclxuICAgIC53b3JrZXJze1xyXG4gICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgaGVpZ2h0OjBweDtcclxuICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICBsaXtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICBwYWRkaW5nOjVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuYWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MzYzNjM7XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRhY3RpdmUtY29sb3I7XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgICYuYWN0aXZle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM2MzYzNjM7XHJcbiAgICB9XHJcbiAgICBidXR0b257XHJcbiAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbntcclxuICAgICAgbWluLXdpZHRoOiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5sZWZ0e1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5yaWdodHtcclxuICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIGZhLWljb257XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIGxpLmFjdGl2ZSAucmlnaHQsXHJcbiAgbGk6aG92ZXIgLnJpZ2h0XHJcbiAge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICB9XHJcbn0iLCJidXR0b24uY29tcGFueSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDQycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiZmJmYmY7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxudWwgbGkge1xuICAvKmRpc3BsYXk6ZmxleDsqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG51bCBsaSAuY29tcGFueSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbnVsIGxpIC53b3JrZXJzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBoZWlnaHQ6IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbnVsIGxpIC53b3JrZXJzIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbnVsIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MzYzNjM7XG59XG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XG59XG51bCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM2MzYzO1xufVxudWwgbGkgYnV0dG9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxudWwgbGkgLmljb24ge1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbnVsIGxpIC5sZWZ0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbnVsIGxpIC5yaWdodCB7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbnVsIGxpIC5yaWdodCBmYS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxudWwgbGkgLnJpZ2h0IGZhLWljb246aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG59XG51bCBsaSAucmlnaHQgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxudWwgbGkuYWN0aXZlIC5yaWdodCxcbnVsIGxpOmhvdmVyIC5yaWdodCB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyCompaniesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-my-companies',
                templateUrl: './my-companies.component.html',
                styleUrls: ['./my-companies.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownConfig"] }, { type: src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, { accord: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['accord']
        }] }); })();


/***/ }),

/***/ "./src/app/dashboard/settings/settings.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/settings/settings.component.ts ***!
  \**********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class SettingsComponent {
    constructor(auth, http) {
        this.auth = auth;
        this.http = http;
    }
    ngOnInit() {
        console.log(this.auth.userData.userData);
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.userData.userData.firstname),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.userData.userData.lastname),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.auth.userData.userData.email),
        });
    }
    save() {
        this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/tootable/user/settings/save', { form: this.settingsForm.value }, { withCredentials: true }).subscribe((res) => {
            this.auth.userData.firstname = this.settingsForm.value.firstname;
            this.auth.userData.lastname = this.settingsForm.value.lastname;
            this.auth.userData.email = this.settingsForm.value.email;
        }, (err) => {
        });
        console.log(this.settingsForm.value);
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], decls: 24, vars: 2, consts: [[1, "container-fluid", "mt-3"], [1, "row", "mb-3", "pl-3"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-3"], ["for", "", 1, "col-sm-1"], [1, "col-sm-2"], ["formControlName", "firstname", "type", "text", 1, "form-control", 3, "value"], ["formControlName", "lastname", "type", "text", 1, "form-control"], [1, "col-sm-4"], ["formControlName", "email", "type", "text", 1, "form-control"], [1, "col-sm-4", "offset-1"], ["type", "submit", 1, "btn", "btn-primary"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kontoseaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SettingsComponent_Template_form_ngSubmit_4_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eesnimi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Perekonnanimi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "E-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Salvesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.settingsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.auth.userData.firstname);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app.service */ "./src/app/shared/services/app.service.ts");






class AuthGuard {
    constructor(router, platformId, auth, service, app) {
        this.router = router;
        this.platformId = platformId;
        this.auth = auth;
        this.service = service;
        this.app = app;
    }
    canActivate(next, state) {
        return this.auth.getAuth().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
            if (!data) {
                this.auth.isAuthenticated = false;
                return true;
            }
            else {
                this.auth.isAuthenticated = true;
                this.auth.userData = data;
                return true;
            }
        }, (error) => {
            this.auth.isAuthenticated = false;
            return false;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }, { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/permissions.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/guards/permissions.guard.ts ***!
  \****************************************************/
/*! exports provided: PermissionsGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsGuard", function() { return PermissionsGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _services_permissions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/permissions.service */ "./src/app/shared/services/permissions.service.ts");







class PermissionsGuard {
    constructor(router, platformId, auth, service, app, permissions) {
        this.router = router;
        this.platformId = platformId;
        this.auth = auth;
        this.service = service;
        this.app = app;
        this.permissions = permissions;
    }
    canActivate(childRoute, state) {
        return this.permissions.getAllPermissions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => {
            this.permissions.myPermissions = res['data'];
            this.permissions.locs = res['perm']['locations'];
            this.permissions.defaults = res['perm']['defaults'];
            return true;
        }));
    } //end
}
PermissionsGuard.ɵfac = function PermissionsGuard_Factory(t) { return new (t || PermissionsGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_permissions_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"])); };
PermissionsGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PermissionsGuard, factory: PermissionsGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }, { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] }, { type: _services_permissions_service__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"] }]; }, null); })();


/***/ })

};;
//# sourceMappingURL=dashboard-dashboard-module.js.map