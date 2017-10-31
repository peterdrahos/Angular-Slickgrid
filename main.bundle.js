webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examples_grid_basic_component__ = __webpack_require__("../../../../../src/app/examples/grid-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__examples_grid_clientside_component__ = __webpack_require__("../../../../../src/app/examples/grid-clientside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_grid_editor_component__ = __webpack_require__("../../../../../src/app/examples/grid-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_grid_formatter_component__ = __webpack_require__("../../../../../src/app/examples/grid-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_grid_odata_component__ = __webpack_require__("../../../../../src/app/examples/grid-odata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_grid_graphql_component__ = __webpack_require__("../../../../../src/app/examples/grid-graphql.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_0__examples_grid_basic_component__["a" /* GridBasicComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_2__examples_grid_editor_component__["a" /* GridEditorComponent */] },
    { path: 'formatter', component: __WEBPACK_IMPORTED_MODULE_3__examples_grid_formatter_component__["a" /* GridFormatterComponent */] },
    { path: 'clientside', component: __WEBPACK_IMPORTED_MODULE_1__examples_grid_clientside_component__["a" /* GridClientSideComponent */] },
    { path: 'odata', component: __WEBPACK_IMPORTED_MODULE_4__examples_grid_odata_component__["a" /* GridOdataComponent */] },
    { path: 'gridgraphql', component: __WEBPACK_IMPORTED_MODULE_5__examples_grid_graphql_component__["a" /* GridGraphqlComponent */] },
    { path: '', redirectTo: '/basic', pathMatch: 'full' }
];
var AppRoutingRoutingModule = /** @class */ (function () {
    function AppRoutingRoutingModule() {
    }
    AppRoutingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */]],
        })
    ], AppRoutingRoutingModule);
    return AppRoutingRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n      <span class=\"sr-only\">Toggle Navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"/\">\n      <i class=\"fa fa-home\"></i>\n      <span>{{title}}</span>\n    </a>\n  </div>\n</nav>\n\n<section class=\"au-animate body-content\">\n  <div class=\"col-sm-3 col-md-2\">\n    <ul class=\"nav nav-pills nav-stacked\">\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/basic']\">Basic Grid</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/editor']\">Editors</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/formatter']\">Formatters</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/clientside']\">Client Side Sort/Filter</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/odata']\">Backend Server with OData</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/gridgraphql']\">Backend Server with GraphQL</a>\n      </li>\n    </ul>\n  </div>\n</section>\n<div id=\"demo-container\" class=\"col-sm-9\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-content {\n  margin-top: 60px; }\n\n.red {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular-Slickgrid';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_grid_basic_component__ = __webpack_require__("../../../../../src/app/examples/grid-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_grid_editor_component__ = __webpack_require__("../../../../../src/app/examples/grid-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_grid_formatter_component__ = __webpack_require__("../../../../../src/app/examples/grid-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_grid_clientside_component__ = __webpack_require__("../../../../../src/app/examples/grid-clientside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_grid_graphql_component__ = __webpack_require__("../../../../../src/app/examples/grid-graphql.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_grid_odata_component__ = __webpack_require__("../../../../../src/app/examples/grid-odata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_10__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__examples_grid_basic_component__["a" /* GridBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_3__examples_grid_editor_component__["a" /* GridEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_5__examples_grid_clientside_component__["a" /* GridClientSideComponent */],
                __WEBPACK_IMPORTED_MODULE_4__examples_grid_formatter_component__["a" /* GridFormatterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__examples_grid_graphql_component__["a" /* GridGraphqlComponent */],
                __WEBPACK_IMPORTED_MODULE_7__examples_grid_odata_component__["a" /* GridOdataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0_angular_slickgrid__["a" /* AngularSlickgridModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0_angular_slickgrid__["i" /* GridOdataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-basic.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n  <angular-slickgrid gridId=\"grid1\"\r\n            [columnDefinitions]=\"columnDefinitions\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [dataset]=\"dataset\"\r\n            gridHeight=\"400\"\r\n            gridWidth=\"800\">\r\n  </angular-slickgrid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridBasicComponent = /** @class */ (function () {
    function GridBasicComponent() {
        this.title = 'Basic Grid';
        this.subTitle = 'basic grid with fixed sizes (800 x 400) set by `gridHeight` &amp; `gridWidth`';
    }
    GridBasicComponent.prototype.ngOnInit = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', sortable: true },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true },
            { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
            { id: 'start', name: 'Start', field: 'start' },
            { id: 'finish', name: 'Finish', field: 'finish' },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', sortable: true }
        ];
        this.gridOptions = {
            enableAutoResize: false
        };
        // mock a dataset
        this.dataset = [];
        for (var i = 0; i < 1000; i++) {
            var randomYear = 2000 + Math.floor(Math.random() * 10);
            var randomMonth = Math.floor(Math.random() * 11);
            var randomDay = Math.floor((Math.random() * 29));
            var randomPercent = Math.round(Math.random() * 100);
            this.dataset[i] = {
                id: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 100) + '',
                percentComplete: randomPercent,
                start: randomMonth + "/" + randomDay + "/" + randomYear,
                finish: randomMonth + "/" + randomDay + "/" + randomYear,
                effortDriven: (i % 5 === 0)
            };
        }
    };
    GridBasicComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-basic.component.html")
        })
    ], GridBasicComponent);
    return GridBasicComponent;
}());

//# sourceMappingURL=grid-basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-clientside.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n    <angular-slickgrid gridId=\"grid2\"\r\n              [columnDefinitions]=\"columnDefinitions\"\r\n              [gridOptions]=\"gridOptions\"\r\n              [dataset]=\"dataset\">\r\n    </angular-slickgrid>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-clientside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridClientSideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var GridClientSideComponent = /** @class */ (function () {
    function GridClientSideComponent() {
        this.title = 'Client Side Sort/Filter';
        this.subTitle = "\n  Sort/Filter on client side only using SlickGrid DataView\n  <br/>\n  <ul class=\"small\">\n    <li>Support multi-sort (by default), hold \"Shift\" key and click on the next column to sort.\n    <li>All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)\n    <ul>\n      <li>Example: >100 ... >=2001-01-01 ... >02/28/17</li>\n      <li><b>Note:</b> For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not the Formatter)</li>\n    </ul>\n    <li>Date Filters</li>\n    <ul>\n      <li>FieldType of dateUtc/date (from dataset) can use an extra option of \"filterSearchType\" to let user filter more easily. For example, in the \"UTC Date\" field below, you can type \"&gt;02/28/2017\", also when dealing with UTC you have to take the time difference in consideration.</li>\n    </ul>\n    <li>On String filters, (*) can be used as startsWith (Hello* => matches \"Hello Word\") ... endsWith (*Doe => matches: \"John Doe\")</li>\n  </ul>\n";
    }
    GridClientSideComponent.prototype.ngOnInit = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].string },
            { id: 'duration', name: 'Duration (days)', field: 'duration', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, filterable: true, sortable: true },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].dateIso, filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].date },
            { id: 'usDateShort', name: 'US Date Short', field: 'usDateShort', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].dateUsShort },
            { id: 'utcDate', name: 'UTC Date', field: 'utcDate', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].dateTimeIsoAmPm, filterable: true, sortable: true, minWidth: 115, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].dateUtc, filterSearchType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].dateTimeIso },
            { id: 'utcDate2', name: 'UTC Date (filterSearchType: dateUS)', field: 'utcDate', filterable: true, sortable: true, minWidth: 115, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].dateUtc, filterSearchType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].dateUs },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', maxWidth: 80, formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].checkmark,
                type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].boolean,
                sortable: true,
                filterable: true,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FormElementType */].select,
                    selectOptions: [{ value: '', label: '' }, { value: true, label: 'true' }, { value: false, label: 'false' }]
                }
            }
        ];
        this.gridOptions = {
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableFiltering: true,
            enableCellNavigation: true
        };
        // mock a dataset
        this.dataset = [];
        for (var i = 0; i < 1000; i++) {
            var randomYear = randomBetween(2000, 2025);
            var randomYearShort = randomBetween(10, 25);
            var randomMonth = randomBetween(1, 12);
            var randomMonthStr = (randomMonth < 10) ? "0" + randomMonth : randomMonth;
            var randomDay = randomBetween(10, 28);
            var randomPercent = randomBetween(0, 100);
            var randomHour = randomBetween(10, 23);
            var randomTime = randomBetween(10, 59);
            this.dataset[i] = {
                id: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 100) + '',
                percentComplete: randomPercent,
                percentCompleteNumber: randomPercent,
                start: new Date(randomYear, randomMonth, randomDay),
                usDateShort: randomMonth + "/" + randomDay + "/" + randomYearShort,
                utcDate: randomYear + "-" + randomMonthStr + "-" + randomDay + "T" + randomHour + ":" + randomTime + ":" + randomTime + "Z",
                effortDriven: (i % 3 === 0)
            };
        }
    };
    GridClientSideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-clientside.component.html")
        })
    ], GridClientSideComponent);
    return GridClientSideComponent;
}());

//# sourceMappingURL=grid-clientside.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <h2>{{title}}</h2>\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\n\n    <div class=\"col-sm-4\">\n        <label>autoEdit setting</label>\n        <br/>\n        <span id=\"radioAutoEdit\">\n            <label class=\"radio-inline control-label\" for=\"radioTrue\">\n                <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioTrue\" checked [value]=\"isAutoEdit\" (change)=\"setAutoEdit(true)\"> ON (single-click)\n            </label>\n            <label class=\"radio-inline control-label\" for=\"radioFalse\">\n                <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioFalse\" [value]=\"isAutoEdit\" (change)=\"setAutoEdit(false)\"> OFF (double-click)\n            </label>\n        </span>\n    </div>\n\n    <div class=\"col-sm-8\">\n        <div class=\"alert alert-info\" *ngIf=\"updatedObject\">\n            <strong>Update Object:</strong> {{updatedObject | json}}\n        </div>\n    </div>\n\n    <div class=\"col-sm-12\">\n        <angular-slickgrid gridId=\"grid2\" (dataviewChanged)=\"dataviewReady($event)\" (gridChanged)=\"gridReady($event)\"\n            [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\">\n        </angular-slickgrid>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridEditorComponent = /** @class */ (function () {
    function GridEditorComponent(resizer) {
        this.resizer = resizer;
        this.title = 'Example 4: Editors';
        this.subTitle = "inline editors (not yet implement) and onCellClick editor (execute an action, e.g: open a modal window)";
        this.isAutoEdit = true;
    }
    GridEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'edit', field: 'id',
                formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].editIcon,
                maxWidth: 30,
                onCellClick: function (args) {
                    console.log(args);
                    console.log(_this);
                }
            },
            {
                id: 'delete', field: 'id',
                formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].deleteIcon,
                maxWidth: 30,
                onCellClick: function (args) {
                    console.log(args);
                    console.log(_this);
                }
            },
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].string, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* Editors */].longText },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* Editors */].text },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* Editors */].integer },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].date },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].date },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].checkmark, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* Editors */].checkbox }
        ];
        this.gridOptions = {
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            editable: true,
            enableColumnPicker: true,
            enableCellNavigation: true,
            asyncEditorLoading: false,
            autoEdit: this.isAutoEdit
        };
        // mock a dataset
        var mockedDataset = [];
        for (var i = 0; i < 1000; i++) {
            var randomYear = 2000 + Math.floor(Math.random() * 10);
            var randomMonth = Math.floor(Math.random() * 11);
            var randomDay = Math.floor((Math.random() * 29));
            var randomPercent = Math.round(Math.random() * 100);
            mockedDataset[i] = {
                id: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 100) + '',
                percentComplete: randomPercent,
                percentCompleteNumber: randomPercent,
                start: new Date(randomYear, randomMonth, randomDay),
                finish: new Date(randomYear, (randomMonth + 1), randomDay),
                effortDriven: (i % 5 === 0)
            };
        }
        this.dataset = mockedDataset;
    };
    GridEditorComponent.prototype.gridReady = function (grid) {
        var _this = this;
        this.gridObj = grid;
        grid.onCellChange.subscribe(function (e, args) {
            console.log('onCellChange', args);
            _this.updatedObject = args.item;
            _this.resizer.resizeGrid(_this.gridObj, _this.gridOptions, 10);
        });
        grid.onClick.subscribe(function (e, args) {
            var column = __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* GridExtraUtils */].getColumnDefinitionAndData(args);
            console.log('onClick', args, column);
            if (column.columnDef.id === 'edit') {
                alert('open a modal window to edit: ' + column.dataContext.title);
            }
            else if (column.columnDef.id === 'delete') {
                if (confirm('Are you sure?')) {
                    _this.dataviewObj.deleteItem(column.dataContext.id);
                    _this.dataviewObj.refresh();
                }
            }
        });
    };
    GridEditorComponent.prototype.dataviewReady = function (dataview) {
        this.dataviewObj = dataview;
    };
    GridEditorComponent.prototype.setAutoEdit = function (isAutoEdit) {
        this.isAutoEdit = isAutoEdit;
        this.gridObj.setOptions({ autoEdit: isAutoEdit }); // change the grid option dynamically
        return true;
    };
    GridEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-editor.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* ResizerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* ResizerService */]) === "function" && _a || Object])
    ], GridEditorComponent);
    return GridEditorComponent;
    var _a;
}());

//# sourceMappingURL=grid-editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-formatter.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n    <angular-slickgrid gridId=\"grid2\"\r\n              [columnDefinitions]=\"columnDefinitions\"\r\n              [gridOptions]=\"gridOptions\"\r\n              [dataset]=\"dataset\">\r\n    </angular-slickgrid>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-formatter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridFormatterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// create my custom Formatter with the Formatter type
var myCustomCheckboxFormatter = function (row, cell, value, columnDef, dataContext) {
    return value ? "<i class=\"fa fa-fire\" aria-hidden=\"true\"></i>" : '<i class="fa fa-snowflake-o" aria-hidden="true"></i>';
};
var GridFormatterComponent = /** @class */ (function () {
    function GridFormatterComponent() {
        this.title = 'Grid with Formatters';
        this.subTitle = 'grid auto-resize, multi-column sort and custom/SlickGrid Formatters';
    }
    GridFormatterComponent.prototype.ngOnInit = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].string },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, sortable: true },
            { id: 'percent2', name: '% Complete', field: 'percentComplete2', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].progressBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, sortable: true },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].dateIso },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].date },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: myCustomCheckboxFormatter, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].number, sortable: true }
        ];
        this.gridOptions = {
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableCellNavigation: false
        };
        // mock a dataset
        this.dataset = [];
        for (var i = 0; i < 5; i++) {
            var randomYear = 2000 + Math.floor(Math.random() * 10);
            var randomMonth = Math.floor(Math.random() * 11);
            var randomDay = Math.floor((Math.random() * 29));
            var randomPercent = Math.round(Math.random() * 100);
            this.dataset[i] = {
                id: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 100) + '',
                percentComplete: randomPercent,
                percentComplete2: randomPercent,
                percentCompleteNumber: randomPercent,
                start: new Date(randomYear, randomMonth, randomDay),
                finish: new Date(randomYear, (randomMonth + 1), randomDay),
                effortDriven: (i % 5 === 0)
            };
        }
    };
    GridFormatterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-formatter.component.html")
        })
    ], GridFormatterComponent);
    return GridFormatterComponent;
}());

//# sourceMappingURL=grid-formatter.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-graphql.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n  <h2>{{title}}</h2>\r\n  <div class=\"subtitle row\" [innerHTML]=\"subTitle\"></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div [class]=\"status.class\" role=\"alert\">\r\n        <strong>Status: </strong> {{status.text}}\r\n        <span [hidden]=\"!processing\">\r\n          <i class=\"fa fa-refresh fa-spin fa-lg fa-fw\"></i>\r\n        </span>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"control-label\" for=\"radioWithCursor\">With Cursor</label> :\r\n        <span id=\"radioWithCursor\">\r\n          <label class=\"radio-inline control-label\" for=\"radioTrue\">\r\n            <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioTrue\" value=\"true\" (change)=\"onWithCursorChange(true)\">\r\n            True\r\n          </label>\r\n          <label class=\"radio-inline control-label\" for=\"radioFalse\">\r\n            <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioFalse\" checked value=\"false\" (change)=\"onWithCursorChange(false)\">\r\n            False\r\n          </label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"alert alert-info\">\r\n        <strong>GraphQL Query:</strong>\r\n        <div [innerHTML]=\"graphqlQuery\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <angular-slickgrid gridId=\"grid4\"\r\n            [columnDefinitions]=\"columnDefinitions\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [dataset]=\"dataset\">\r\n  </angular-slickgrid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-graphql.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridGraphqlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var defaultPageSize = 20;
var sampleDataRoot = '/assets/data';
var GridGraphqlComponent = /** @class */ (function () {
    function GridGraphqlComponent(http, graphqlService) {
        this.http = http;
        this.graphqlService = graphqlService;
        this.title = 'Grid connected to Backend Server with GraphQL';
        this.subTitle = "\n  Sorting/Paging connected to a Backend GraphQL Service.\n  <br/>\n  <ul class=\"small\">\n    <li><span class=\"red\">(*) NO DATA SHOWING</span> - change filter &amp; page and look at the \"GraphQL Query\" changing</li>\n    <li>Only \"Name\" field is sortable for the demo (because we use JSON files), however \"multiColumnSort: true\" is also supported</li>\n    <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n    <ul>\n      <li>The (*) can be used as startsWith (ex.: \"abc*\" => startsWith \"abc\") / endsWith (ex.: \"*xyz\" => endsWith \"xyz\")</li>\n      <li>The other operators can be used on column type number for example: \">=100\" (bigger or equal than 100)</li>\n    </ul>\n  </ul>\n";
        this.dataset = [];
        this.graphqlQuery = '';
        this.processing = false;
        this.status = { text: '', class: '' };
        this.isWithCursor = false;
    }
    GridGraphqlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'name', name: 'Name', field: 'name', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].string },
            { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: true,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FormElementType */].select,
                    selectOptions: [{ value: '', label: '' }, { value: 'male', label: 'male' }, { value: 'female', label: 'female' }]
                }
            },
            { id: 'company', name: 'Company', field: 'company' }
        ];
        this.gridOptions = {
            enableAutoResize: true,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableFiltering: true,
            enableCellNavigation: true,
            enablePagination: true,
            pagination: {
                pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
                pageSize: defaultPageSize,
                totalItems: 0
            },
            onBackendEventApi: {
                onInit: function (query) { return _this.getCustomerApiCall(query); },
                preProcess: function () { return _this.displaySpinner(true); },
                process: function (query) { return _this.getCustomerApiCall(query); },
                postProcess: function (response) {
                    _this.displaySpinner(false);
                    _this.getCustomerCallback(response);
                },
                filterTypingDebounce: 700,
                service: this.graphqlService
            }
        };
        var paginationOption = this.getPaginationOption(this.isWithCursor);
        this.graphqlService.initOptions(paginationOption);
    };
    GridGraphqlComponent.prototype.displaySpinner = function (isProcessing) {
        this.processing = isProcessing;
        this.status = (isProcessing)
            ? { text: 'processing...', class: 'alert alert-danger' }
            : { text: 'done', class: 'alert alert-success' };
    };
    GridGraphqlComponent.prototype.filterChange = function () {
        console.log('filter change');
    };
    GridGraphqlComponent.prototype.filterChangeAfter = function () {
        console.log('after filter change');
        this.displaySpinner(false);
    };
    GridGraphqlComponent.prototype.onWithCursorChange = function (isWithCursor) {
        this.isWithCursor = isWithCursor;
        var paginationOption = this.getPaginationOption(isWithCursor);
        this.graphqlService.initOptions(paginationOption);
        this.graphqlQuery = this.graphqlService.buildQuery();
    };
    GridGraphqlComponent.prototype.getPaginationOption = function (isWithCursor) {
        var paginationOption;
        var columnIds = Array.isArray(this.columnDefinitions) ? this.columnDefinitions.map(function (column) { return column.field; }) : [];
        // Slickgrid also requires the "id" field
        columnIds.push('id');
        if (isWithCursor) {
            // with cursor, paginationOptions can be: { first, last, after, before }
            paginationOption = {
                datasetName: 'users',
                dataFilters: columnIds,
                isWithCursor: true,
                paginationOptions: {
                    first: defaultPageSize
                }
            };
        }
        else {
            // without cursor, paginationOptions can be: { first, last, offset }
            paginationOption = {
                datasetName: 'users',
                dataFilters: columnIds,
                isWithCursor: false,
                paginationOptions: {
                    first: defaultPageSize,
                    offset: 0
                }
            };
        }
        return paginationOption;
    };
    GridGraphqlComponent.prototype.getCustomerCallback = function (data) {
        this.displaySpinner(false);
        this.dataset = data['items'];
        this.graphqlQuery = data['query'];
        // totalItems property needs to be filled for pagination to work correctly
        this.gridOptions.pagination.totalItems = data['totalRecordCount'];
    };
    GridGraphqlComponent.prototype.getCustomerApiCall = function (query) {
        var _this = this;
        // in your case, you will call your WebAPI function (wich needs to return a Promise)
        // for the demo purpose, we will call a mock WebAPI function
        return new Promise(function (resolve, reject) {
            _this.graphqlQuery = _this.graphqlService.buildQuery();
            setTimeout(function () {
                resolve({ items: [], totalRecordCount: 100, query: query });
            }, 500);
        });
        // return this.getCustomerDataApiMock(query);
    };
    /** This function is only here to mock a WebAPI call (since we are using a JSON file for the demo)
     *  in your case the getCustomer() should be a WebAPI function returning a Promise
     */
    GridGraphqlComponent.prototype.getCustomerDataApiMock = function (query) {
        var _this = this;
        // the mock is returning a Promise, just like a WebAPI typically does
        return new Promise(function (resolve, reject) {
            var queryParams = query.toLowerCase().split('&');
            var top;
            var skip = 0;
            var orderBy = '';
            var countTotalItems = 100;
            var columnFilters = {};
            for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                var param = queryParams_1[_i];
                if (param.includes('$top=')) {
                    top = +(param.substring('$top='.length));
                }
                if (param.includes('$skip=')) {
                    skip = +(param.substring('$skip='.length));
                }
                if (param.includes('$orderby=')) {
                    orderBy = param.substring('$orderby='.length);
                }
                if (param.includes('$filter=')) {
                    var filterBy = param.substring('$filter='.length);
                    if (filterBy.includes('substringof')) {
                        var filterMatch = filterBy.match(/substringof\('(.*?)',([a-zA-Z ]*)/);
                        var fieldName = filterMatch[2].trim();
                        columnFilters[fieldName] = {
                            type: 'substring',
                            term: filterMatch[1].trim()
                        };
                    }
                    if (filterBy.includes('eq')) {
                        var filterMatch = filterBy.match(/([a-zA-Z ]*) eq '(.*?)'/);
                        var fieldName = filterMatch[1].trim();
                        columnFilters[fieldName] = {
                            type: 'equal',
                            term: filterMatch[2].trim()
                        };
                    }
                    if (filterBy.includes('startswith')) {
                        var filterMatch = filterBy.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/);
                        var fieldName = filterMatch[1].trim();
                        columnFilters[fieldName] = {
                            type: 'starts',
                            term: filterMatch[2].trim()
                        };
                    }
                    if (filterBy.includes('endswith')) {
                        var filterMatch = filterBy.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/);
                        var fieldName = filterMatch[1].trim();
                        columnFilters[fieldName] = {
                            type: 'ends',
                            term: filterMatch[2].trim()
                        };
                    }
                }
            }
            var sort = orderBy.includes('asc')
                ? 'ASC'
                : orderBy.includes('desc')
                    ? 'DESC'
                    : '';
            var url;
            switch (sort) {
                case 'ASC':
                    url = sampleDataRoot + "/customers_100_ASC.json";
                    break;
                case 'DESC':
                    url = sampleDataRoot + "/customers_100_DESC.json";
                    break;
                default:
                    url = sampleDataRoot + "/customers_100.json";
                    break;
            }
            _this.http.get(url).subscribe(function (data) {
                var dataArray = data;
                // Read the result field from the JSON response.
                var firstRow = skip;
                var filteredData = dataArray;
                if (columnFilters) {
                    var _loop_1 = function (columnId) {
                        if (columnFilters.hasOwnProperty(columnId)) {
                            filteredData = filteredData.filter(function (column) {
                                var filterType = columnFilters[columnId].type;
                                var searchTerm = columnFilters[columnId].term;
                                switch (filterType) {
                                    case 'equal': return column[columnId] === searchTerm;
                                    case 'ends': return column[columnId].toLowerCase().endsWith(searchTerm);
                                    case 'starts': return column[columnId].toLowerCase().startsWith(searchTerm);
                                    case 'substring': return column[columnId].toLowerCase().includes(searchTerm);
                                }
                            });
                        }
                    };
                    for (var columnId in columnFilters) {
                        _loop_1(columnId);
                    }
                    countTotalItems = filteredData.length;
                }
                var updatedData = filteredData.slice(firstRow, firstRow + top);
                setTimeout(function () {
                    resolve({ items: updatedData, totalRecordCount: countTotalItems, query: query });
                }, 500);
            });
        });
    };
    GridGraphqlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-graphql.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* GraphqlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* GraphqlService */]) === "function" && _b || Object])
    ], GridGraphqlComponent);
    return GridGraphqlComponent;
    var _a, _b;
}());

//# sourceMappingURL=grid-graphql.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-odata.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n  <h2>{{title}}</h2>\r\n  <div class=\"subtitle row\" [innerHTML]=\"subTitle\"></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div [class]=\"status.class\" role=\"alert\">\r\n        <strong>Status: </strong> {{status.text}}\r\n        <span [hidden]=\"!processing\">\r\n          <i class=\"fa fa-refresh fa-spin fa-lg fa-fw\"></i>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"alert alert-info\">\r\n        <strong>OData Query:</strong> {{odataQuery}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <angular-slickgrid gridId=\"grid4\"\r\n            [columnDefinitions]=\"columnDefinitions\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [dataset]=\"dataset\">\r\n  </angular-slickgrid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-odata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridOdataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var defaultPageSize = 20;
var sampleDataRoot = '/assets/data';
var GridOdataComponent = /** @class */ (function () {
    function GridOdataComponent(http, odataService) {
        this.http = http;
        this.odataService = odataService;
        this.title = 'Grid connected to Backend Server with OData';
        this.subTitle = "\n    Sorting/Paging connected to a Backend OData Service.\n    <br/>\n    <ul class=\"small\">\n      <li>Only \"Name\" field is sortable for the demo (because we use JSON files), however \"multiColumnSort: true\" is also supported</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: \"abc*\" => startsWith \"abc\") / endsWith (ex.: \"*xyz\" => endsWith \"xyz\")</li>\n        <li>The other operators can be used on column type number for example: \">=100\" (bigger or equal than 100)</li>\n      </ul>\n      <li>OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)</li>\n    </ul>\n  ";
        this.dataset = [];
        this.odataQuery = '';
        this.processing = false;
        this.status = { text: '', class: '' };
        this.odataService.initOptions({
            caseType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["b" /* CaseType */].pascalCase,
            top: defaultPageSize
        });
    }
    GridOdataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'name', name: 'Name', field: 'name', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FieldType */].string },
            { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: true,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FormElementType */].select,
                    selectOptions: [{ value: '', label: '' }, { value: 'male', label: 'male' }, { value: 'female', label: 'female' }]
                }
            },
            { id: 'company', name: 'Company', field: 'company' }
        ];
        this.gridOptions = {
            enableAutoResize: true,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableFiltering: true,
            enableCellNavigation: true,
            enablePagination: true,
            pagination: {
                pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
                pageSize: defaultPageSize,
                totalItems: 0
            },
            onBackendEventApi: {
                onInit: function (query) { return _this.getCustomerApiCall(query); },
                preProcess: function () { return _this.displaySpinner(true); },
                process: function (query) { return _this.getCustomerApiCall(query); },
                postProcess: function (response) {
                    console.log(response);
                    _this.displaySpinner(false);
                    _this.getCustomerCallback(response);
                },
                filterTypingDebounce: 700,
                service: this.odataService
            }
        };
    };
    GridOdataComponent.prototype.displaySpinner = function (isProcessing) {
        this.processing = isProcessing;
        this.status = (isProcessing)
            ? { text: 'processing...', class: 'alert alert-danger' }
            : { text: 'done', class: 'alert alert-success' };
    };
    GridOdataComponent.prototype.getCustomerCallback = function (data) {
        this.displaySpinner(false);
        this.dataset = data['items'];
        this.odataQuery = data['query'];
        // totalItems property needs to be filled for pagination to work correctly
        this.gridOptions.pagination.totalItems = data['totalRecordCount'];
    };
    GridOdataComponent.prototype.getCustomerApiCall = function (query) {
        // in your case, you will call your WebAPI function (wich needs to return a Promise)
        // for the demo purpose, we will call a mock WebAPI function
        return this.getCustomerDataApiMock(query);
    };
    /** This function is only here to mock a WebAPI call (since we are using a JSON file for the demo)
     *  in your case the getCustomer() should be a WebAPI function returning a Promise
     */
    GridOdataComponent.prototype.getCustomerDataApiMock = function (query) {
        var _this = this;
        // the mock is returning a Promise, just like a WebAPI typically does
        return new Promise(function (resolve, reject) {
            var queryParams = query.toLowerCase().split('&');
            var top;
            var skip = 0;
            var orderBy = '';
            var countTotalItems = 100;
            var columnFilters = {};
            for (var _i = 0, queryParams_1 = queryParams; _i < queryParams_1.length; _i++) {
                var param = queryParams_1[_i];
                if (param.includes('$top=')) {
                    top = +(param.substring('$top='.length));
                }
                if (param.includes('$skip=')) {
                    skip = +(param.substring('$skip='.length));
                }
                if (param.includes('$orderby=')) {
                    orderBy = param.substring('$orderby='.length);
                }
                if (param.includes('$filter=')) {
                    var filterBy = param.substring('$filter='.length);
                    if (filterBy.includes('substringof')) {
                        var filterMatch = filterBy.match(/substringof\('(.*?)',([a-zA-Z ]*)/);
                        var fieldName = filterMatch[2].trim();
                        columnFilters[fieldName] = {
                            type: 'substring',
                            term: filterMatch[1].trim()
                        };
                    }
                    if (filterBy.includes('eq')) {
                        var filterMatch = filterBy.match(/([a-zA-Z ]*) eq '(.*?)'/);
                        var fieldName = filterMatch[1].trim();
                        columnFilters[fieldName] = {
                            type: 'equal',
                            term: filterMatch[2].trim()
                        };
                    }
                    if (filterBy.includes('startswith')) {
                        var filterMatch = filterBy.match(/startswith\(([a-zA-Z ]*),\s?'(.*?)'/);
                        var fieldName = filterMatch[1].trim();
                        columnFilters[fieldName] = {
                            type: 'starts',
                            term: filterMatch[2].trim()
                        };
                    }
                    if (filterBy.includes('endswith')) {
                        var filterMatch = filterBy.match(/endswith\(([a-zA-Z ]*),\s?'(.*?)'/);
                        var fieldName = filterMatch[1].trim();
                        columnFilters[fieldName] = {
                            type: 'ends',
                            term: filterMatch[2].trim()
                        };
                    }
                }
            }
            var sort = orderBy.includes('asc')
                ? 'ASC'
                : orderBy.includes('desc')
                    ? 'DESC'
                    : '';
            var url;
            switch (sort) {
                case 'ASC':
                    url = sampleDataRoot + "/customers_100_ASC.json";
                    break;
                case 'DESC':
                    url = sampleDataRoot + "/customers_100_DESC.json";
                    break;
                default:
                    url = sampleDataRoot + "/customers_100.json";
                    break;
            }
            _this.http.get(url).subscribe(function (data) {
                var dataArray = data;
                // Read the result field from the JSON response.
                var firstRow = skip;
                var filteredData = dataArray;
                if (columnFilters) {
                    var _loop_1 = function (columnId) {
                        if (columnFilters.hasOwnProperty(columnId)) {
                            filteredData = filteredData.filter(function (column) {
                                var filterType = columnFilters[columnId].type;
                                var searchTerm = columnFilters[columnId].term;
                                switch (filterType) {
                                    case 'equal': return column[columnId] === searchTerm;
                                    case 'ends': return column[columnId].toLowerCase().endsWith(searchTerm);
                                    case 'starts': return column[columnId].toLowerCase().startsWith(searchTerm);
                                    case 'substring': return column[columnId].toLowerCase().includes(searchTerm);
                                }
                            });
                        }
                    };
                    for (var columnId in columnFilters) {
                        _loop_1(columnId);
                    }
                    countTotalItems = filteredData.length;
                }
                var updatedData = filteredData.slice(firstRow, firstRow + top);
                setTimeout(function () {
                    resolve({ items: updatedData, totalRecordCount: countTotalItems, query: query });
                }, 500);
            });
        });
    };
    GridOdataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-odata.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["i" /* GridOdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["i" /* GridOdataService */]) === "function" && _b || Object])
    ], GridOdataComponent);
    return GridOdataComponent;
    var _a, _b;
}());

//# sourceMappingURL=grid-odata.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map