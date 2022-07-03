(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/dashboard/company/company-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/company/company-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CompanyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutingModule", function() { return CompanyRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/company/dashboard/dashboard.component.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company.component */ "./src/app/dashboard/company/company.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/dashboard/company/index/index.component.ts");
/* harmony import */ var src_app_shared_guards_user_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/guards/user-resolver.service */ "./src/app/shared/guards/user-resolver.service.ts");








const routes = [
    {
        path: '',
        component: _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"],
        children: [
            {
                path: '',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
            },
            {
                path: ':id',
                resolve: [src_app_shared_guards_user_resolver_service__WEBPACK_IMPORTED_MODULE_5__["UserResolver"]],
                component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"],
            },
            {
                path: 'seaded',
                loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/dashboard/company/settings/settings.module.ts")).then(m => m.SettingsModule)
            },
        ]
    }
];
class CompanyRoutingModule {
}
CompanyRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyRoutingModule });
CompanyRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyRoutingModule_Factory(t) { return new (t || CompanyRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/company/company.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dashboard/company/company.module.ts ***!
  \*****************************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-routing.module */ "./src/app/dashboard/company/company-routing.module.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.component */ "./src/app/dashboard/company/index/index.component.ts");
/* harmony import */ var src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/modules/shared.module */ "./src/app/shared/modules/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/company/dashboard/dashboard.component.ts");







class CompanyModule {
}
CompanyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompanyModule });
CompanyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompanyModule_Factory(t) { return new (t || CompanyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
            src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompanyModule, { declarations: [_index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
        src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompanyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _index_index_component__WEBPACK_IMPORTED_MODULE_3__["IndexComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _company_routing_module__WEBPACK_IMPORTED_MODULE_2__["CompanyRoutingModule"],
                    src_app_shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/company/dashboard/dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/company/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../company.component */ "./src/app/dashboard/company/company.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Analytics - has access\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " No access to analytics\n");
} }
class DashboardComponent {
    constructor(route, company, parent) {
        this.route = route;
        this.company = company;
        this.parent = parent;
    }
    ngOnInit() {
        var id = this.route.params['_value'].id;
        this.company.companyData.id = id;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["users", ""]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parent.analytics)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9jb21wYW55L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_2__["CompanyService"] }, { type: _company_component__WEBPACK_IMPORTED_MODULE_3__["CompanyComponent"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/company/index/index.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/company/index/index.component.ts ***!
  \************************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/table.service */ "./src/app/shared/services/table.service.ts");
/* harmony import */ var src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/permissions.service */ "./src/app/shared/services/permissions.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function IndexComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", item_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", item_r4.value["checked"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.key, " ");
} }
const _c0 = function () { return ["far", "trash-alt"]; };
function IndexComponent_ng_container_42_tr_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_tr_1_ng_template_1_Template_span_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_tr_1_ng_template_1_Template_span_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_tr_1_ng_template_1_Template_span_keyup_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_container_42_tr_1_ng_template_1_Template_fa_icon_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.table.deleteEntry(item_r6.value[ctx_r17.objectKeys(item_r6.value)[0]].id, item_r6.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const i_r7 = ctx_r19.index;
    const item_r6 = ctx_r19.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "object")("contenteditable", ctx_r11.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.value[ctx_r11.objectKeys(item_r6.value)[0]].object);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "hours")("contenteditable", ctx_r11.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.value[ctx_r11.objectKeys(item_r6.value)[0]].hours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "notes")("contenteditable", ctx_r11.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r6.value[ctx_r11.objectKeys(item_r6.value)[0]].notes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
} }
function IndexComponent_ng_container_42_tr_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function IndexComponent_ng_container_42_tr_1_ng_template_2_Template_span_focusout_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.table.focusOut($event); })("keyup", function IndexComponent_ng_container_42_tr_1_ng_template_2_Template_span_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.table.timeOut($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function IndexComponent_ng_container_42_tr_1_ng_template_2_Template_span_focusout_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r23.table.focusOut($event); })("keyup", function IndexComponent_ng_container_42_tr_1_ng_template_2_Template_span_keyup_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r24.table.timeOut($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function IndexComponent_ng_container_42_tr_1_ng_template_2_Template_span_focusout_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.table.focusOut($event); })("keyup", function IndexComponent_ng_container_42_tr_1_ng_template_2_Template_span_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.table.timeOut($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "td", 55);
} if (rf & 2) {
    const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "object");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "object")("contenteditable", ctx_r12.quickAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "hours")("contenteditable", ctx_r12.quickAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "notes")("contenteditable", ctx_r12.quickAdd);
} }
function IndexComponent_ng_container_42_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndexComponent_ng_container_42_tr_1_ng_template_1_Template, 13, 12, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndexComponent_ng_container_42_tr_1_ng_template_2_Template, 9, 10, "ng-template", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r7 = ctx_r28.index;
    const item_r6 = ctx_r28.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("date", ctx_r8.table.selectedYear + "-" + (ctx_r8.table.selectedMonth + 1) + "-" + (i_r7 + 1))("day", i_r7 + 1)("itemId", ctx_r8.objectKeys(item_r6.value)[0] ? ctx_r8.objectKeys(item_r6.value)[0] : 0)("id", item_r6.key == ctx_r8.table.currentDate ? "today" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.objectKeys(item_r6.value).length == 1 && ctx_r8.objectKeys(item_r6.value) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.objectKeys(item_r6.value).length == 1 && ctx_r8.objectKeys(item_r6.value) == 0);
} }
function IndexComponent_ng_container_42_ng_template_2_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_ng_template_2_ng_container_13_Template_span_keyup_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_ng_template_2_ng_container_13_Template_span_keyup_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_ng_container_42_ng_template_2_ng_container_13_Template_fa_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const row_r30 = ctx.$implicit; const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.table.deleteEntry(row_r30.value.id, item_r6.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("itemId", row_r30.value.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "object")("contenteditable", ctx_r29.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.value.object, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "hours")("contenteditable", ctx_r29.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.value.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r30.value.notes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
} }
function IndexComponent_ng_container_42_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_ng_template_2_Template_span_keyup_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function IndexComponent_ng_container_42_ng_template_2_Template_span_keyup_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.table.edit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, IndexComponent_ng_container_42_ng_template_2_ng_container_13_Template, 12, 10, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "keyvalue");
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const item_r6 = ctx_r39.$implicit;
    const i_r7 = ctx_r39.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", item_r6.key == ctx_r10.table.currentDay ? "today" : null)("itemId", item_r6.value[ctx_r10.objectKeys(item_r6.value)[0]].id)("id", item_r6.key == ctx_r10.table.currentDate ? "today" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx_r10.objectKeys(item_r6.value).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r7 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "object")("contenteditable", ctx_r10.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.value[ctx_r10.objectKeys(item_r6.value)[0]].object, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("property", "hours")("contenteditable", ctx_r10.quickEdit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.value[ctx_r10.objectKeys(item_r6.value)[0]].hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6.value[ctx_r10.objectKeys(item_r6.value)[0]].notes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 17, item_r6.value, ctx_r10.returnZero), 1));
} }
function IndexComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IndexComponent_ng_container_42_tr_1_Template, 3, 6, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, IndexComponent_ng_container_42_ng_template_2_Template, 16, 21, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.objectKeys(item_r6.value).length < 2)("ngIfElse", _r9);
} }
function IndexComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_button_64_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.filterMonthChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r3.convertMonth(item_r40.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", item_r40.key == ctx_r3.table.filterSelectedMonth ? "currentMonth" : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r40.value, " ");
} }
const _c1 = function () { return ["fas", "chevron-left"]; };
const _c2 = function () { return ["fas", "chevron-right"]; };
const _c3 = function () { return ["far", "clock"]; };
const _c4 = function () { return ["fas", "chart-bar"]; };
const _c5 = function () { return ["fas", "envelope-open-text"]; };
const _c6 = function () { return ["fas", "ellipsis-v"]; };
const _c7 = function () { return ["fas", "check-double"]; };
const _c8 = function () { return ["fas", "chevron-up"]; };
const _c9 = function () { return ["far", "calendar-check"]; };
class IndexComponent {
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
    }
    ngOnInit() {
        this.route.data.subscribe((response) => {
            var data = response.resolver[0];
        });
        this.routeSub = this.route.params.subscribe(params => {
            this.service.selectedUser = params['id'];
            setTimeout(() => {
                this.table.generateYears();
                this.table.generateMonths();
                this.table.generateDays();
                setTimeout(() => {
                    let el = document.getElementById('today');
                });
            });
            this.table.getData();
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
IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"])); };
IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]])], decls: 72, vars: 40, consts: [[1, "top", "d-none", "d-lg-block"], [1, "float-left"], [1, "monthSelector", 3, "icon", "click"], [1, "btn", "btn-blue", "addHours", 3, "click"], [1, "mr-2", 3, "icon"], [1, "btn", "btn-light", "mr-2", "float-right", "text-center", 3, "click"], [1, "btn", "btn-light", "mr-2", "float-right", "text-center"], [1, "middle", "scroll-1"], [1, "table", "table-bordered"], ["scope", "col text-center d-sm-block"], [1, "ml-2", 3, "icon"], ["scope", "col text-center", "ngbDropdown", "", "placement", "bottom-left", "container", "body"], ["ngbDropdownToggle", ""], ["ngbDropdownMenu", "", "aria-labelledby", "objects"], [1, "pl-3", "pr-3"], [1, "dropdown-divider"], ["class", "form-check", 4, "ngFor", "ngForOf"], [1, "text-center"], [1, "btn", "btn-sm", "btn-success", 3, "click"], ["scope", "col text-center"], ["scope", "col text-center", "id", "absorbing-column"], ["scope", "col text-center", 2, "width", "50px"], [4, "ngFor", "ngForOf"], ["id", "loadingTables", 4, "ngIf"], [1, "bottom", "d-flex", "d-lg-none"], [1, "wrap"], [1, "left", "d-lg-none", "align-self-center"], [1, "btn", "btn-primary", 3, "click"], [3, "icon"], [1, "middle", "text-center", "align-self-center"], [1, "d-none", "d-lg-block"], [1, "d-lg-none"], [1, "btn-group", "w-100"], ["type", "button", 1, "btn"], [3, "icon", "click"], ["ngbDropdown", "", "role", "group", "container", "body", 1, "btn-group", "month", "w-100"], ["ngbDropdownToggle", "", 1, "btn"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], ["ngbDropdownItem", "", "name", "filterMonth", 3, "value", "click", 4, "ngFor", "ngForOf"], [1, "right", "text-right", "d-lg-none", "align-self-center"], [1, "btn", "btn-success", 3, "click"], [1, "row", "d-none", "pr-3", "pl-3", "pt-1", "pb-1", "text-center", "align-self-center"], [1, "form-check"], ["type", "checkbox", "id", "dropdownCheck", 1, "form-check-input", 3, "name", "checked"], ["for", "dropdownCheck", 1, "form-check-label"], [4, "ngIf", "ngIfElse"], ["multi", ""], [3, "ngIf"], [1, "let", "days", "text-center", "align-middle"], [1, "object"], ["type", "text", 1, "object", 3, "keyup"], [1, "hours", "text-center"], ["type", "text", 1, "hours", 3, "keyup"], [1, "notes"], ["rows", "1", "autosize", "", 1, "notes", 3, "keyup"], [1, "options"], ["type", "text", 1, "object", 3, "focusout", "keyup"], ["type", "text", 1, "hours", 3, "focusout", "keyup"], ["rows", "1", 1, "notes", 3, "focusout", "keyup"], ["id", "loadingTables"], ["icon", "circle-notch", "spin", "true"], ["ngbDropdownItem", "", "name", "filterMonth", 3, "value", "click"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_fa_icon_click_2_listener() { return ctx.table.prevMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_fa_icon_click_4_listener() { return ctx.table.nextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_div_click_5_listener() { return ctx.company.openSidebar("newEntry"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lisa Sissekanne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_div_click_8_listener() { return ctx.company.openSidebar("overviewMenu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00DClevaade ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Jaga ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " P\u00E4ev ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " T\u00F6\u00F6maa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, IndexComponent_div_29_Template, 4, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_33_listener() { return ctx.table.filterObjects(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Salvesta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Tunnid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00DClesanded/M\u00E4rkused");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, IndexComponent_ng_container_42_Template, 4, 2, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, IndexComponent_div_44_Template, 2, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_48_listener() { return ctx.company.openSidebar("newFilter"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "fa-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Tunde Kokku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "fa-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_fa_icon_click_59_listener() { return ctx.table.prevMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, IndexComponent_button_64_Template, 2, 3, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "fa-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_fa_icon_click_67_listener() { return ctx.table.nextMonth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_69_listener() { return ctx.company.openSidebar("newEntry"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "fa-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.table.months[ctx.table.selectedMonth], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 19, ctx.table.tyymaad, ctx.returnZero));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](43, 22, ctx.table.hours["data"], ctx.returnZero));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.table.isTableLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.table.totalHours, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.table.months[ctx.table.filterSelectedMonth]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](65, 25, ctx.table.months, ctx.returnZero));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c9));
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownItem"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n\n.top[_ngcontent-%COMP%], .middle[_ngcontent-%COMP%], .bottom[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.top[_ngcontent-%COMP%] {\n  height: 68px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  padding-left: 15px;\n  padding-right: 15px;\n  position: relative;\n}\n\n.top[_ngcontent-%COMP%]   .shadow-bottom[_ngcontent-%COMP%] {\n  box-shadow: 1px 0px 20px 0px #d6d6d6;\n  position: absolute;\n  bottom: 0px;\n}\n\n.top[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.top[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%] {\n  float: left;\n  width: auto;\n}\n\n.top[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   label.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 5px 0px 0px 5px;\n}\n\n.top[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: solid 1px #cdd3d9;\n  border-left: none;\n  padding-left: 15px;\n  padding-right: 40px;\n  border-radius: 0px 5px 5px 0px;\n  color: #6f6f6f;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%);\n  background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;\n  background-size: 5px 5px, 5px 5px, 1px 1.5em;\n  background-repeat: no-repeat;\n}\n\n.top[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   select.first[_ngcontent-%COMP%] {\n  border-right: none;\n  border-radius: 0px;\n}\n\n.top[_ngcontent-%COMP%]   .addHours[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.middle[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: 100%;\n  overflow-y: scroll;\n  padding-right: 30px;\n  margin-right: 15px;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  background-color: white;\n  margin-left: 15px;\n  box-shadow: 1px 0px 20px 0px #d6d6d6;\n  position: relative;\n  border-collapse: separate;\n  border-spacing: 0px;\n  border: none;\n  margin-bottom: 50px;\n  table-layout: auto;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   #absorbing-column[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.middle[_ngcontent-%COMP%]   table.table-bordered[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr#today[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  background-color: white;\n  color: #777777;\n  font-weight: normal;\n  font-size: 13px;\n  \n  border-left: none !important;\n  border-right: none !important;\n  border-top: none !important;\n  border-bottom: 1px solid #eeeeef;\n  text-align: center;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-bottom: none;\n  border-right: none;\n  border-color: #eeeeef !important;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.hours[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input.object[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border: none;\n  vertical-align: sub;\n  outline: none;\n  height: 100%;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  vertical-align: sub;\n  resize: none;\n  width: 100%;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%] {\n  border-top: none;\n}\n\n.middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid #dee2e6;\n}\n\n.bottom[_ngcontent-%COMP%] {\n  height: 77px;\n  position: relative;\n  border-top: 1px solid #bfbfbf;\n  width: 100%;\n  \n  align-self: center;\n  display: none;\n  padding-right: 15px;\n  padding-left: 15px;\n  flex: 1;\n}\n\n.bottom[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n\n.bottom[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.bottom[_ngcontent-%COMP%]   .shadow[_ngcontent-%COMP%] {\n  border: solid thin red;\n  height: 0px;\n  width: 100%;\n  position: absolute;\n  top: -1px;\n}\n\n.bottom[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  height: initial;\n  flex-grow: 100;\n}\n\n.bottom[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  outline: none;\n  box-shadow: none;\n}\n\n.bottom[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  display: none;\n}\n\nfa-icon.monthSelector[_ngcontent-%COMP%] {\n  font-size: 15px;\n  vertical-align: middle;\n  color: grey;\n}\n\nfa-icon.monthSelector[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #212529;\n}\n\n#currentMonth[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n\n.scroll-1[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n  height: 5px;\n  cursor: pointer;\n}\n\n.scroll-1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #ddd;\n  margin-top: 0px;\n}\n\n.scroll-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #adadad;\n  cursor: pointer;\n}\n\n.scroll-1[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece:end {\n  background: transparent;\n  margin-bottom: 15px;\n}\n\n.scroll-1[_ngcontent-%COMP%]::-webkit-scrollbar-track-piece:start {\n  background: transparent;\n}\n\n#loadingTables[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  opacity: 0.8;\n  text-align: center;\n}\n\n#loadingTables[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n@media (max-width: 991px) {\n  .middle.scroll-1[_ngcontent-%COMP%] {\n    background-color: white;\n  }\n\n  .middle[_ngcontent-%COMP%] {\n    padding-right: 0px;\n  }\n  .middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    margin-left: 0px;\n    margin-bottom: 0px;\n  }\n  .middle[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    font-size: 11px;\n    white-space: initial;\n    vertical-align: middle;\n  }\n\n  .scroll-1[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    margin-top: 44px;\n  }\n\n  .bottom[_ngcontent-%COMP%] {\n    flex: none;\n    height: 55px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBhbnkvaW5kZXgvQzpcXHhhbXBwXFxodGRvY3NcXHdlYlxcdG9vdGFiZWxcXGZyb250ZW5kL3NyY1xcYXBwXFxkYXNoYm9hcmRcXGNvbXBhbnlcXGluZGV4XFxpbmRleC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZGFzaGJvYXJkL2NvbXBhbnkvaW5kZXgvaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREFFO0VBQ0Usb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7QUNFSjs7QURDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQUk7RUFDRSw4QkFBQTtBQ0VOOztBREFJO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFFQSx3QkFBQTtFQUNBLHFCQUFBO0VBRUEsdUhBQ0E7RUFFRixtSEFDRTtFQUdGLDRDQUNFO0VBR0YsNEJBQUE7QUNSSjs7QURVSTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNSTjs7QURXRTtFQUNFLFlBQUE7QUNUSjs7QURhQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDVkY7O0FEV0U7RUFDRSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFVJO0VBQ0UsV0FBQTtBQ1JOOztBRFdJO0VBQ0UsWUFBQTtBQ1ROOztBRFdJO0VBQ0UsaUJBQUE7QUNUTjs7QURXSTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBOzs7O0dBQUE7RUFLQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDVk47O0FEV007RUFDRSxhQUFBO0FDVFI7O0FEV007RUFDRSxhQUFBO0FDVFI7O0FEWUk7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDVk47O0FEYU07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNYUjs7QURhTTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtBQ1hSOztBRGNNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNaUjs7QURlTTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNiUjs7QURpQk07RUFDRSxnQkFBQTtBQ2ZSOztBRGtCSTs7RUFFRSw4QkFBQTtBQ2hCTjs7QURxQkE7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDbkJGOztBRHFCRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FDbkJKOztBRHFCRTtFQUNFLHNCQUFBO0FDbkJKOztBRHFCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNuQko7O0FEc0JFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ3BCSjs7QURxQkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNuQk47O0FEdUJNO0VBQ0UsYUFBQTtBQ3JCUjs7QUQwQkE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDdkJGOztBRHdCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDdEJKOztBRHlCQTtFQUNFLGdCQUFBO0FDdEJGOztBRHlCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ3RCRjs7QUR5QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDdEJGOztBRHlCQTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsdUJBQUE7QUN0QkY7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDckJGOztBRHNCRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ3BCSjs7QUR1QkE7RUFHRTtJQUNFLHVCQUFBO0VDdEJGOztFRHdCQTtJQUNFLGtCQUFBO0VDckJGO0VEc0JFO0lBQ0UsZ0JBQUE7SUFDQSxrQkFBQTtFQ3BCSjtFRHdCSTtJQUNFLGVBQUE7SUFDQSxvQkFBQTtJQUNBLHNCQUFBO0VDdEJOOztFRDBCQTtJQUNFLGdCQUFBO0VDdkJGOztFRHlCQTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDdEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvY29tcGFueS9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRib3JkZXItY29sb3I6ICNlZWVlZWY7XHJcbjpob3N0e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4udG9wLC5taWRkbGUsLmJvdHRvbXtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udG9we1xyXG4gIC8vZmxleDogMCAxIDc2cHg7XHJcbiAgaGVpZ2h0OjY4cHg7XHJcbiAgcGFkZGluZy10b3A6MTVweDtcclxuICBwYWRkaW5nLWJvdHRvbToxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6MTVweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAuc2hhZG93LWJvdHRvbXtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMjBweCAwcHggI2Q2ZDZkNjtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgYm90dG9tOjBweDtcclxuICB9XHJcbiAgYnV0dG9ue1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIC8vbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgfVxyXG4gIC5pbnB1dC1ncm91cHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGxhYmVsLmlucHV0LWdyb3VwLXRleHR7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6NXB4IDBweCAwcHggNXB4O1xyXG4gICAgfVxyXG4gICAgc2VsZWN0e1xyXG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2RkM2Q5O1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggNXB4IDVweCAwcHg7XHJcbiAgICAgIGNvbG9yOiAjNmY2ZjZmO1xyXG5cclxuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcblxyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOlxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246XHJcbiAgICAgIGNhbGMoMTAwJSAtIDIwcHgpIGNhbGMoMWVtICsgMnB4KSxcclxuICAgICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICBjYWxjKDEwMCUgLSAyLjVlbSkgMC41ZW07XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6XHJcbiAgICAgIDVweCA1cHgsXHJcbiAgICAgIDVweCA1cHgsXHJcbiAgICAgIDFweCAxLjVlbTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QuZmlyc3R7XHJcbiAgICAgIGJvcmRlci1yaWdodDpub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZGRIb3Vyc3tcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuLm1pZGRsZXtcclxuICBtYXJnaW46MHB4O1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHRhYmxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggMjBweCAwcHggI2Q2ZDZkNjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcbiAgICBib3JkZXItc3BhY2luZzogMHB4O1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgdGFibGUtbGF5b3V0OiBhdXRvO1xyXG4gICAgI2Fic29yYmluZy1jb2x1bW4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLnRhYmxlLWJvcmRlcmVke1xyXG4gICAgICBib3JkZXI6bm9uZTtcclxuICAgIH1cclxuICAgIHRyI3RvZGF5e1xyXG4gICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgfVxyXG4gICAgdGh7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbG9yOiM3Nzc3Nzc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgIFxyXG4gICAgICAvKlxyXG4gICAgICBib3JkZXItcmlnaHQ6ICBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6ICAxcHggc29saWQgI2RlZTJlNjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogIDFweCBzb2xpZCAjZGVlMmU2O1xyXG4gICAgICAqL1xyXG4gICAgICBib3JkZXItbGVmdDogIG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItdG9wOiAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAgMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICB9XHJcbiAgICAgIGZhLWljb257XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0ZHtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgcGFkZGluZzozcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICBub25lO1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICBub25lO1xyXG4gICAgICBib3JkZXItY29sb3I6JGJvcmRlci1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0LmhvdXJze1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0Lm9iamVjdHtcclxuICAgICAgICB3aWR0aDpmaXQtY29udGVudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQsdGV4dGFyZWF7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdHI6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgdGR7XHJcbiAgICAgICAgYm9yZGVyLXRvcDpub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aDpmaXJzdC1jaGlsZCxcclxuICAgIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWxlZnQ6ICAxcHggc29saWQgI2RlZTJlNjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b217XHJcbiAgLy9mbGV4OiAwIDEgNzZweDtcclxuICBoZWlnaHQ6NzdweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiZmJmYmY7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogYWxpZ24tc2VsZjogY2VudGVyOyAqL1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBub25lOyAvL2ZsZXhcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBmbGV4OjE7XHJcblxyXG4gIC53cmFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgLnNoYWRvd3tcclxuICAgIGJvcmRlcjpzb2xpZCB0aGluIHJlZDtcclxuICAgIGhlaWdodDowcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6LTFweDtcclxuICB9XHJcblxyXG4gIC5taWRkbGV7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBoZWlnaHQ6aW5pdGlhbDtcclxuICAgIGZsZXgtZ3JvdzogMTAwO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb250aHtcclxuICAgICAgYnV0dG9uOjphZnRlcntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuZmEtaWNvbi5tb250aFNlbGVjdG9ye1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiBncmV5O1xyXG4gICY6aG92ZXJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGNvbG9yOiMyMTI1MjlcclxuICB9XHJcbn1cclxuI2N1cnJlbnRNb250aHtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uc2Nyb2xsLTE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uc2Nyb2xsLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLnNjcm9sbC0xOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogI2FkYWRhZDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLnNjcm9sbC0xOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZTplbmQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IFxyXG59XHJcblxyXG4uc2Nyb2xsLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlOnN0YXJ0IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4jbG9hZGluZ1RhYmxlc3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGZhLWljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKCBtYXgtd2lkdGggOiA5OTFweCkgey8vb25seSBmb3IgaGFuZGhlbGRcclxuICA6aG9zdHtcclxuICB9XHJcbiAgLm1pZGRsZS5zY3JvbGwtMXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgfVxyXG4gIC5taWRkbGV7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjBweDtcclxuICAgIHRhYmxle1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MHB4O1xyXG4gICAgICAubm90ZXN7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgdGR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOmluaXRpYWw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuc2Nyb2xsLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIG1hcmdpbi10b3A6NDRweDtcclxuICB9XHJcbiAgLmJvdHRvbXtcclxuICAgIGZsZXg6bm9uZTtcclxuICAgIGhlaWdodDo1NXB4O1xyXG4gIH1cclxufVxyXG5cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLCAubWlkZGxlLCAuYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b3Age1xuICBoZWlnaHQ6IDY4cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4udG9wIC5zaGFkb3ctYm90dG9tIHtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAyMHB4IDBweCAjZDZkNmQ2O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xufVxuLnRvcCBidXR0b24ge1xuICBmbG9hdDogbGVmdDtcbn1cbi50b3AgLmlucHV0LWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuLnRvcCAuaW5wdXQtZ3JvdXAgbGFiZWwuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbn1cbi50b3AgLmlucHV0LWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjZGQzZDk7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA1cHggNXB4IDBweDtcbiAgY29sb3I6ICM2ZjZmNmY7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLCBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDIuNWVtKSAwLjVlbTtcbiAgYmFja2dyb3VuZC1zaXplOiA1cHggNXB4LCA1cHggNXB4LCAxcHggMS41ZW07XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4udG9wIC5pbnB1dC1ncm91cCBzZWxlY3QuZmlyc3Qge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi50b3AgLmFkZEhvdXJzIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubWlkZGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4ubWlkZGxlIHRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBib3gtc2hhZG93OiAxcHggMHB4IDIwcHggMHB4ICNkNmQ2ZDY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB0YWJsZS1sYXlvdXQ6IGF1dG87XG59XG4ubWlkZGxlIHRhYmxlICNhYnNvcmJpbmctY29sdW1uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWlkZGxlIHRhYmxlLnRhYmxlLWJvcmRlcmVkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm1pZGRsZSB0YWJsZSB0ciN0b2RheSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1pZGRsZSB0YWJsZSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNzc3Nzc3O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIC8qXG4gIGJvcmRlci1yaWdodDogIG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogIDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAgMXB4IHNvbGlkICNkZWUyZTY7XG4gICovXG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWlkZGxlIHRhYmxlIHRoIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5taWRkbGUgdGFibGUgdGggZmEtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWlkZGxlIHRhYmxlIHRkIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgcGFkZGluZzogM3B4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjZWVlZWVmICFpbXBvcnRhbnQ7XG59XG4ubWlkZGxlIHRhYmxlIHRkIGlucHV0LmhvdXJzIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5taWRkbGUgdGFibGUgdGQgaW5wdXQub2JqZWN0IHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xufVxuLm1pZGRsZSB0YWJsZSB0ZCBpbnB1dCwgLm1pZGRsZSB0YWJsZSB0ZCB0ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1pZGRsZSB0YWJsZSB0ZCB0ZXh0YXJlYSB7XG4gIHZlcnRpY2FsLWFsaWduOiBzdWI7XG4gIHJlc2l6ZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWlkZGxlIHRhYmxlIHRyOm50aC1jaGlsZCgyKSB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG4ubWlkZGxlIHRhYmxlIHRoOmZpcnN0LWNoaWxkLFxuLm1pZGRsZSB0YWJsZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbn1cblxuLmJvdHRvbSB7XG4gIGhlaWdodDogNzdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2JmYmZiZjtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGFsaWduLXNlbGY6IGNlbnRlcjsgKi9cbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGZsZXg6IDE7XG59XG4uYm90dG9tIC53cmFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYm90dG9tIC5yb3cge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmJvdHRvbSAuc2hhZG93IHtcbiAgYm9yZGVyOiBzb2xpZCB0aGluIHJlZDtcbiAgaGVpZ2h0OiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFweDtcbn1cbi5ib3R0b20gLm1pZGRsZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGhlaWdodDogaW5pdGlhbDtcbiAgZmxleC1ncm93OiAxMDA7XG59XG4uYm90dG9tIC5taWRkbGUgYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5ib3R0b20gLm1pZGRsZSAubW9udGggYnV0dG9uOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmZhLWljb24ubW9udGhTZWxlY3RvciB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGdyZXk7XG59XG5mYS1pY29uLm1vbnRoU2VsZWN0b3I6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG4jY3VycmVudE1vbnRoIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnNjcm9sbC0xOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY3JvbGwtMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5zY3JvbGwtMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjYWRhZGFkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zY3JvbGwtMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2U6ZW5kIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5zY3JvbGwtMTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2U6c3RhcnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuI2xvYWRpbmdUYWJsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsb2FkaW5nVGFibGVzIGZhLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1pZGRsZS5zY3JvbGwtMSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cblxuICAubWlkZGxlIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLm1pZGRsZSB0YWJsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLm1pZGRsZSB0YWJsZSB0ZCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cblxuICAuc2Nyb2xsLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xuICB9XG5cbiAgLmJvdHRvbSB7XG4gICAgZmxleDogbm9uZTtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gIH1cbn0iXX0= */"] });
IndexComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: IndexComponent, factory: IndexComponent.ɵfac, providedIn: 'root' // just before your class
 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: './index.component.html',
                styleUrls: ['./index.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"]]
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root' // just before your class
            }]
    }], function () { return [{ type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"] }, { type: src_app_shared_services_company_service__WEBPACK_IMPORTED_MODULE_5__["CompanyService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: src_app_shared_services_permissions_service__WEBPACK_IMPORTED_MODULE_7__["PermissionsService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDropdownConfig"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/guards/user-resolver.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/guards/user-resolver.service.ts ***!
  \********************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
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












class UserResolver {
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
            var userId = route.params['id'];
            this.service.selectedUser = userId;
            if (this.company.userData[userId]) {
                return this.company.userData[userId];
            }
            else {
                return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + `/tootable/user/${route.params['id']}`, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                    var data = data['data'];
                    var name = '';
                    if (data.firstname || data.lastname) {
                        var name = `/ ${data.firstname} ${data.lastname}`;
                    }
                    else {
                        var name = `/ Kasutaja${data.user_code}`;
                    }
                    data['titlename'] = name;
                    this.company.userData[userId] = data;
                }, (error) => {
                }) //end map
                ); //enbd pipe
            }
        } //endif
    } //end of resolve
} //end of class
UserResolver.ɵfac = function UserResolver_Factory(t) { return new (t || UserResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"])); };
UserResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserResolver, factory: UserResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] }, { type: _services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"] }, { type: _services_permissions_service__WEBPACK_IMPORTED_MODULE_9__["PermissionsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map