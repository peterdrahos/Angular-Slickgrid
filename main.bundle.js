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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__examples_grid_backend_component__ = __webpack_require__("../../../../../src/app/examples/grid-backend.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_grid_clientside_component__ = __webpack_require__("../../../../../src/app/examples/grid-clientside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_grid_formatter_component__ = __webpack_require__("../../../../../src/app/examples/grid-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_grid_graphql_component__ = __webpack_require__("../../../../../src/app/examples/grid-graphql.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_grid_odata_component__ = __webpack_require__("../../../../../src/app/examples/grid-odata.component.ts");
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
    { path: 'formatter', component: __WEBPACK_IMPORTED_MODULE_3__examples_grid_formatter_component__["a" /* GridFormatterComponent */] },
    { path: 'clientside', component: __WEBPACK_IMPORTED_MODULE_2__examples_grid_clientside_component__["a" /* GridClientSideComponent */] },
    { path: 'backend', component: __WEBPACK_IMPORTED_MODULE_1__examples_grid_backend_component__["a" /* GridBackendComponent */] },
    { path: 'odata', component: __WEBPACK_IMPORTED_MODULE_5__examples_grid_odata_component__["a" /* GridOdataComponent */] },
    { path: 'graphql', component: __WEBPACK_IMPORTED_MODULE_4__examples_grid_graphql_component__["a" /* GridGraphqlComponent */] },
    { path: '', redirectTo: '/formatter', pathMatch: 'full' }
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

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n  <div class=\"navbar-header\">\r\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\r\n      <span class=\"sr-only\">Toggle Navigation</span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n      <span class=\"icon-bar\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"/\">\r\n      <i class=\"fa fa-home\"></i>\r\n      <span>{{title}}</span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n<section class=\"au-animate body-content\">\r\n  <div class=\"col-sm-3 col-md-2\">\r\n    <ul class=\"nav nav-pills nav-stacked\">\r\n      <li routerLinkActive=\"active\">\r\n        <a [routerLink]=\"['/basic']\">Basic Grid</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a [routerLink]=\"['/formatter']\">Formatter</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a [routerLink]=\"['/clientside']\">Client Side Sort/Filter</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a [routerLink]=\"['/backend']\">Backend Server</a>\r\n      </li>\r\n      <li routerLinkActive=\"active\">\r\n        <a [routerLink]=\"['/odata']\">Backend Server with OData</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</section>\r\n<div id=\"demo-container\" class=\"col-sm-9\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-content {\n  margin-top: 60px; }\n", ""]);

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
        this.title = 'SlickGrid Demo';
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_grid_formatter_component__ = __webpack_require__("../../../../../src/app/examples/grid-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_grid_clientside_component__ = __webpack_require__("../../../../../src/app/examples/grid-clientside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_grid_backend_component__ = __webpack_require__("../../../../../src/app/examples/grid-backend.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_4__examples_grid_clientside_component__["a" /* GridClientSideComponent */],
                __WEBPACK_IMPORTED_MODULE_3__examples_grid_formatter_component__["a" /* GridFormatterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__examples_grid_backend_component__["a" /* GridBackendComponent */],
                __WEBPACK_IMPORTED_MODULE_6__examples_grid_graphql_component__["a" /* GridGraphqlComponent */],
                __WEBPACK_IMPORTED_MODULE_7__examples_grid_odata_component__["a" /* GridOdataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0_angular_slickgrid__["a" /* AngularSlickgridModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_0_angular_slickgrid__["g" /* GridOdataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-backend.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n  <h2>{{title}}</h2>\r\n  <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n  <div class=\"col-sm-4\">\r\n    <div [class]=\"status.class\" role=\"alert\">\r\n      <strong>Status: </strong> {{status.text}}\r\n      <span [hidden]=\"!processing\">\r\n        <i class=\"fa fa-refresh fa-spin fa-lg fa-fw\"></i>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <angular-slickgrid gridId=\"grid3\"\r\n            [columnDefinitions]=\"columnDefinitions\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [dataset]=\"dataset\">\r\n  </angular-slickgrid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-backend.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/examples/grid-backend.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridBackendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
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
var sampleDataRoot = 'assets/data';
var GridBackendComponent = /** @class */ (function () {
    function GridBackendComponent(http) {
        this.http = http;
        this.title = 'Grid connected to Backend Server';
        this.subTitle = 'Sorting/Paging connected to a Backend Service (the demo only has "Name" field sortable)';
        this.processing = false;
        this.status = { text: '', class: '' };
        this.paginationOptions = {
            pageNumber: 1,
            pageSize: defaultPageSize,
            sort: null
        };
    }
    GridBackendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'name', name: 'Name', field: 'name', sortable: true },
            { id: 'gender', name: 'Gender', field: 'gender' },
            { id: 'company', name: 'Company', field: 'company' }
        ];
        this.gridOptions = {
            enableAutoResize: true,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableCellNavigation: true,
            enablePagination: true,
            pagination: {
                pageSizes: [10, 15, 20, 25, 30, 40, 50, 75, 100],
                pageSize: defaultPageSize,
                totalItems: 0
            },
            onPaginationChanged: function (event, args) {
                console.log("onPagination changed, page: " + args.newPage + " with size of " + args.pageSize);
                _this.paginationOptions.pageNumber = args.newPage;
                _this.paginationOptions.pageSize = args.pageSize;
                _this.getCustomerData();
            },
            onSortChanged: function (event, args) {
                var sortColumns = (args.multiColumnSort) ? args.sortCols : new Array({ sortCol: args.sortCol, sortAsc: args.sortAsc });
                if (sortColumns.length === 0) {
                    _this.paginationOptions.sort = null;
                }
                else {
                    _this.paginationOptions.sort = sortColumns[0].sortAsc ? 'ASC' : 'DESC';
                }
                _this.getCustomerData();
            }
        };
        // get the data from backend
        this.getCustomerData();
    };
    GridBackendComponent.prototype.getCustomerData = function () {
        var _this = this;
        var url;
        switch (this.paginationOptions.sort) {
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
        this.processing = true;
        this.status = {
            text: 'loading...',
            class: 'alert alert-danger'
        };
        this.http.get(url).subscribe(function (data) {
            var dataArray = data;
            // Read the result field from the JSON response.
            var firstRow = (_this.paginationOptions.pageNumber - 1) * _this.paginationOptions.pageSize;
            var updatedData = dataArray.slice(firstRow, firstRow + _this.paginationOptions.pageSize);
            setTimeout(function () {
                _this.dataset = updatedData;
                _this.gridOptions.pagination.totalItems = 100; // this is required for pagination to work
                _this.processing = false;
                _this.status = {
                    text: 'done',
                    class: 'alert alert-success'
                };
            }, 500);
        });
    };
    GridBackendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-backend.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/grid-backend.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], GridBackendComponent);
    return GridBackendComponent;
    var _a;
}());

//# sourceMappingURL=grid-backend.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-basic.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n  <angular-slickgrid gridId=\"grid1\"\r\n            [columnDefinitions]=\"columnDefinitions\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [dataset]=\"dataset\"\r\n            gridHeight=\"400\"\r\n            gridWidth=\"800\">\r\n  </angular-slickgrid>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-basic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
            var randomDay = Math.floor((Math.random() * 28));
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
            template: __webpack_require__("../../../../../src/app/examples/grid-basic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/grid-basic.component.scss")]
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

/***/ "../../../../../src/app/examples/grid-clientside.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
            { id: 'title', name: 'Title', field: 'title', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].string },
            { id: 'duration', name: 'Duration (days)', field: 'duration', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].number },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].number, filterable: true, sortable: true },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].dateIso, filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].date },
            { id: 'usDateShort', name: 'US Date Short', field: 'usDateShort', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].dateUsShort },
            { id: 'utcDate', name: 'UTC Date', field: 'utcDate', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].dateTimeIsoAmPm, filterable: true, sortable: true, minWidth: 115, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].dateUtc, filterSearchType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].dateTimeIso },
            { id: 'utcDate2', name: 'UTC Date (filterSearchType: dateUS)', field: 'utcDate', filterable: true, sortable: true, minWidth: 118, formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].dateUs, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].dateUtc, filterSearchType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].dateUs },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', maxWidth: 80, formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].checkmark,
                type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].boolean,
                sortable: true,
                filterable: true,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FormElementType */].select,
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
            template: __webpack_require__("../../../../../src/app/examples/grid-clientside.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/grid-clientside.component.scss")]
        })
    ], GridClientSideComponent);
    return GridClientSideComponent;
}());

//# sourceMappingURL=grid-clientside.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-formatter.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n    <angular-slickgrid gridId=\"grid2\"\r\n              [columnDefinitions]=\"columnDefinitions\"\r\n              [gridOptions]=\"gridOptions\"\r\n              [dataset]=\"dataset\">\r\n    </angular-slickgrid>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-formatter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].string },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].number },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].number, sortable: true },
            { id: 'percent2', name: '% Complete', field: 'percentComplete2', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].progressBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].number, sortable: true },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].dateIso },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].date },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: myCustomCheckboxFormatter, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].number, sortable: true }
        ];
        this.gridOptions = {
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableCellNavigation: true
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
            template: __webpack_require__("../../../../../src/app/examples/grid-formatter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/grid-formatter.component.scss")]
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

/***/ "../../../../../src/app/examples/grid-graphql.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
var sampleDataRoot = 'assets/data';
var GridGraphqlComponent = /** @class */ (function () {
    function GridGraphqlComponent(http, graphqlService) {
        this.http = http;
        this.graphqlService = graphqlService;
        this.title = 'Grid connected to Backend Server with GraphQL';
        this.subTitle = "\n    Sorting/Paging connected to a Backend GraphQL Service.\n    <br/>\n    <ul class=\"small\">\n      <li>Only \"Name\" field is sortable for the demo (because we use JSON files), however \"multiColumnSort: true\" is also supported</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: \"abc*\" => startsWith \"abc\") / endsWith (ex.: \"*xyz\" => endsWith \"xyz\")</li>\n        <li>The other operators can be used on column type number for example: \">=100\" (bigger or equal than 100)</li>\n      </ul>\n    </ul>\n  ";
        this.dataset = [];
        this.graphqlQuery = '';
        this.processing = false;
        this.status = { text: '', class: '' };
        this.isWithCursor = false;
    }
    GridGraphqlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'name', name: 'Name', field: 'name', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].string },
            { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: false,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FormElementType */].select,
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
            onFilterChanged: function (event, args) {
                _this.displaySpinner(true);
                var query = _this.graphqlService.onFilterChanged(event, args);
                // this.getCustomerApiCall(query).then((data) => this.getCustomerCallback(data));
            },
            onPaginationChanged: function (event, args) {
                _this.displaySpinner(true);
                var query = _this.graphqlService.onPaginationChanged(event, args);
                _this.getCustomerApiCall(query).then(function (data) { return _this.getCustomerCallback(data); });
            },
            onSortChanged: function (event, args) {
                _this.displaySpinner(true);
                var query = _this.graphqlService.onSortChanged(event, args);
                // this.getCustomerApiCall(query).then((data) => this.getCustomerCallback(data));
            }
        };
        var paginationOption = this.getPaginationOption(this.isWithCursor);
        this.graphqlService.initOptions(paginationOption);
        // get the data from backend on page load
        this.displaySpinner(true);
        this.getCustomerApiCall(this.graphqlService.buildQuery()).then(function (data) { return _this.getCustomerCallback(data); });
    };
    GridGraphqlComponent.prototype.displaySpinner = function (isProcessing) {
        this.processing = isProcessing;
        this.status = (isProcessing)
            ? { text: 'processing...', class: 'alert alert-danger' }
            : { text: 'done', class: 'alert alert-success' };
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
            resolve({ items: [], totalRecordCount: 100, query: query });
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
            template: __webpack_require__("../../../../../src/app/examples/grid-graphql.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/grid-graphql.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* GraphqlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* GraphqlService */]) === "function" && _b || Object])
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

/***/ "../../../../../src/app/examples/grid-odata.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slick-viewport {\n  opacity: 0.9; }\n\n.slick-headerrow {\n  overflow: unset !important; }\n\n.slick-headerrow-column, .slick-headerrow-columns {\n  overflow: unset; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
var sampleDataRoot = 'assets/data';
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
            { id: 'name', name: 'Name', field: 'name', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* FieldType */].string },
            { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: false,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* FormElementType */].select,
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
            onFilterChanged: function (event, args) {
                _this.displaySpinner(true);
                var query = _this.odataService.onFilterChanged(event, args);
                _this.getCustomerApiCall(query).then(function (data) { return _this.getCustomerCallback(data); });
            },
            onPaginationChanged: function (event, args) {
                _this.displaySpinner(true);
                var query = _this.odataService.onPaginationChanged(event, args);
                _this.getCustomerApiCall(query).then(function (data) { return _this.getCustomerCallback(data); });
            },
            onSortChanged: function (event, args) {
                _this.displaySpinner(true);
                var query = _this.odataService.onSortChanged(event, args);
                _this.getCustomerApiCall(query).then(function (data) { return _this.getCustomerCallback(data); });
            }
        };
        // get the data from backend on page load
        this.displaySpinner(true);
        this.getCustomerApiCall(this.odataService.buildQuery()).then(function (data) { return _this.getCustomerCallback(data); });
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
            template: __webpack_require__("../../../../../src/app/examples/grid-odata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/examples/grid-odata.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* GridOdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* GridOdataService */]) === "function" && _b || Object])
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