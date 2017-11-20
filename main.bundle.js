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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__examples_grid_additem_component__ = __webpack_require__("../../../../../src/app/examples/grid-additem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__examples_grid_menu_component__ = __webpack_require__("../../../../../src/app/examples/grid-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_grid_basic_component__ = __webpack_require__("../../../../../src/app/examples/grid-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_grid_clientside_component__ = __webpack_require__("../../../../../src/app/examples/grid-clientside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_grid_editor_component__ = __webpack_require__("../../../../../src/app/examples/grid-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_grid_formatter_component__ = __webpack_require__("../../../../../src/app/examples/grid-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_grid_headerbutton_component__ = __webpack_require__("../../../../../src/app/examples/grid-headerbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_grid_headermenu_component__ = __webpack_require__("../../../../../src/app/examples/grid-headermenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_grid_odata_component__ = __webpack_require__("../../../../../src/app/examples/grid-odata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_grid_graphql_component__ = __webpack_require__("../../../../../src/app/examples/grid-graphql.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_grid_rowselection_component__ = __webpack_require__("../../../../../src/app/examples/grid-rowselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'additem', component: __WEBPACK_IMPORTED_MODULE_0__examples_grid_additem_component__["a" /* GridAddItemComponent */] },
    { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_2__examples_grid_basic_component__["a" /* GridBasicComponent */] },
    { path: 'editor', component: __WEBPACK_IMPORTED_MODULE_4__examples_grid_editor_component__["a" /* GridEditorComponent */] },
    { path: 'formatter', component: __WEBPACK_IMPORTED_MODULE_5__examples_grid_formatter_component__["a" /* GridFormatterComponent */] },
    { path: 'headerbutton', component: __WEBPACK_IMPORTED_MODULE_6__examples_grid_headerbutton_component__["a" /* GridHeaderButtonComponent */] },
    { path: 'headermenu', component: __WEBPACK_IMPORTED_MODULE_7__examples_grid_headermenu_component__["a" /* GridHeaderMenuComponent */] },
    { path: 'gridgraphql', component: __WEBPACK_IMPORTED_MODULE_9__examples_grid_graphql_component__["a" /* GridGraphqlComponent */] },
    { path: 'gridmenu', component: __WEBPACK_IMPORTED_MODULE_1__examples_grid_menu_component__["a" /* GridMenuComponent */] },
    { path: 'clientside', component: __WEBPACK_IMPORTED_MODULE_3__examples_grid_clientside_component__["a" /* GridClientSideComponent */] },
    { path: 'odata', component: __WEBPACK_IMPORTED_MODULE_8__examples_grid_odata_component__["a" /* GridOdataComponent */] },
    { path: 'selection', component: __WEBPACK_IMPORTED_MODULE_10__examples_grid_rowselection_component__["a" /* GridRowSelectionComponent */] },
    { path: '', redirectTo: '/basic', pathMatch: 'full' }
];
var AppRoutingRoutingModule = /** @class */ (function () {
    function AppRoutingRoutingModule() {
    }
    AppRoutingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingRoutingModule);
    return AppRoutingRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#skeleton-navigation-navbar-collapse\">\n      <span class=\"sr-only\">Toggle Navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n    <a class=\"navbar-brand\" href=\"https://github.com/ghiscoding/Angular-Slickgrid\">\n      <i class=\"fa fa-home\"></i>\n      <span>{{title}}</span>\n    </a>\n  </div>\n</nav>\n\n<section class=\"au-animate body-content\">\n  <div class=\"col-sm-3 col-md-2\">\n    <ul class=\"nav nav-pills nav-stacked\">\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/basic']\">1- Basic Grid</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/formatter']\">2- Formatters</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/editor']\">3- Editors</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/clientside']\">4- Client Side Sort/Filter</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/odata']\">5- Backend Server with OData</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/gridgraphql']\">6- Backend Server with GraphQL</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/headerbutton']\">7- Header Button Plugin</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/headermenu']\">8- Header Menu Plugin</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/gridmenu']\">9- Grid Menu (hamburger menu)</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/selection']\">10- Row Selection</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a [routerLink]=\"['/additem']\">11- Add/Update/Highlight Datagrid Item</a>\n      </li>\n    </ul>\n  </div>\n</section>\n<div id=\"demo-container\" class=\"col-sm-9\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".body-content {\n  margin-top: 60px; }\n\n.red {\n  color: red; }\n\n.faded {\n  opacity: 0.2; }\n\n.faded:hover {\n  opacity: 0.5; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__examples_grid_additem_component__ = __webpack_require__("../../../../../src/app/examples/grid-additem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__examples_grid_basic_component__ = __webpack_require__("../../../../../src/app/examples/grid-basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_grid_clientside_component__ = __webpack_require__("../../../../../src/app/examples/grid-clientside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__examples_grid_editor_component__ = __webpack_require__("../../../../../src/app/examples/grid-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__examples_grid_formatter_component__ = __webpack_require__("../../../../../src/app/examples/grid-formatter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__examples_grid_graphql_component__ = __webpack_require__("../../../../../src/app/examples/grid-graphql.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__examples_grid_headermenu_component__ = __webpack_require__("../../../../../src/app/examples/grid-headermenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__examples_grid_headerbutton_component__ = __webpack_require__("../../../../../src/app/examples/grid-headerbutton.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__examples_grid_menu_component__ = __webpack_require__("../../../../../src/app/examples/grid-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_grid_odata_component__ = __webpack_require__("../../../../../src/app/examples/grid-odata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__examples_grid_rowselection_component__ = __webpack_require__("../../../../../src/app/examples/grid-rowselection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_15__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_2__examples_grid_additem_component__["a" /* GridAddItemComponent */],
                __WEBPACK_IMPORTED_MODULE_3__examples_grid_basic_component__["a" /* GridBasicComponent */],
                __WEBPACK_IMPORTED_MODULE_5__examples_grid_editor_component__["a" /* GridEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_4__examples_grid_clientside_component__["a" /* GridClientSideComponent */],
                __WEBPACK_IMPORTED_MODULE_6__examples_grid_formatter_component__["a" /* GridFormatterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__examples_grid_graphql_component__["a" /* GridGraphqlComponent */],
                __WEBPACK_IMPORTED_MODULE_9__examples_grid_headerbutton_component__["a" /* GridHeaderButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_8__examples_grid_headermenu_component__["a" /* GridHeaderMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__examples_grid_menu_component__["a" /* GridMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_12__examples_grid_odata_component__["a" /* GridOdataComponent */],
                __WEBPACK_IMPORTED_MODULE_13__examples_grid_rowselection_component__["a" /* GridRowSelectionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__app_routing_module__["a" /* AppRoutingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular_slickgrid__["a" /* AngularSlickgridModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11_angular_slickgrid__["l" /* GridOdataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-additem.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <h2>{{title}}</h2>\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\n\n    <div class=\"col-sm-12\">\n        <span>\n            <button class=\"btn btn-sm btn-default\" (click)=\"addNewItem()\">Add New Mocked Item</button>\n            <button class=\"btn btn-sm btn-default\" (click)=\"updateSecondItem()\">Update 2nd Row Item with Random Duration</button>\n            <button class=\"btn btn-sm btn-default\" (click)=\"highlighFifthRow()\">Highlight 5th Row</button>\n        </span>\n        <hr/>\n    </div>\n\n    <div class=\"col-sm-12\">\n        <angular-slickgrid gridId=\"grid2\" [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\">\n        </angular-slickgrid>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-additem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridAddItemComponent; });
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


var GridAddItemComponent = /** @class */ (function () {
    function GridAddItemComponent(gridExtraService, resizer) {
        this.gridExtraService = gridExtraService;
        this.resizer = resizer;
        this.title = 'Example 11: Add / Update / Highlight a Datagrid Item';
        this.subTitle = "\n  Add / Update / Hightlight an Item from the Datagrid (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/Add,-Update-or-Highlight-a-Datagrid-Item\" target=\"_blank\">Wiki link</a>).\n  <ul>\n    <li><b>Note:</b> this demo is <b>only</b> on the datagrid (client) side, you still need to deal with the backend yourself</li>\n    <li>Adding an item, will always be showing as the 1st item in the grid because that is the best visual place to add it</li>\n    <li>Add/Update an item requires a valid Slickgrid Selection Model, you have 2 choices to deal with this:</li>\n    <ul><li>You can enable \"enableCheckboxSelector\" or \"enableRowSelection\" to True</li></ul>\n    <li>Click on any of the buttons below to test this out</li>\n    <li>You can change the highlighted color &amp; animation by changing the SASS variables:</li>\n    <ul>\n      <li>\"$row-highlight-background-color\" or \"$row-highlight-fade-animation\"</li>\n      <li>Take a look at the available <a href=\"https://github.com/ghiscoding/Angular-Slickgrid/blob/master/src/app/modules/angular-slickgrid/styles/_variables.scss\" target=\"_blank\">SASS Variables</a></li>\n    </ul>\n  </ul>\n  ";
    }
    GridAddItemComponent.prototype.ngOnInit = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].longText },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].text,
                onCellChange: function (args) {
                    alert('onCellChange directly attached to the column definition');
                    console.log(args);
                }
            },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].integer },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date /*, editor: Editors.date*/ },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].checkmark, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].checkbox }
        ];
        this.gridOptions = {
            asyncEditorLoading: false,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            editable: true,
            enableColumnPicker: true,
            enableCellNavigation: true,
            enableRowSelection: true
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
    GridAddItemComponent.prototype.addNewItem = function () {
        var randomId = Math.floor(Math.random() * (10000 - 1000) + 1000);
        var randomYear = 2000 + Math.floor(Math.random() * 10);
        var randomMonth = Math.floor(Math.random() * 11);
        var randomDay = Math.floor((Math.random() * 29));
        var randomPercent = Math.round(Math.random() * 100);
        var newItem = {
            id: randomId,
            title: 'Task ' + randomId,
            duration: Math.round(Math.random() * 100) + '',
            percentComplete: randomPercent,
            percentCompleteNumber: randomPercent,
            start: new Date(randomYear, randomMonth, randomDay),
            finish: new Date(randomYear, (randomMonth + 2), randomDay),
            effortDriven: true
        };
        this.gridExtraService.addItemToDatagrid(newItem);
    };
    GridAddItemComponent.prototype.highlighFifthRow = function () {
        this.gridExtraService.highlightRow(4, 1500);
    };
    GridAddItemComponent.prototype.updateSecondItem = function () {
        var firstItem = this.gridExtraService.getDataItemByRowNumber(1);
        firstItem.duration = Math.round(Math.random() * 100);
        this.gridExtraService.updateDataGridItem(firstItem);
    };
    GridAddItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-additem.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* GridExtraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* GridExtraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["m" /* ResizerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["m" /* ResizerService */]) === "function" && _b || Object])
    ], GridAddItemComponent);
    return GridAddItemComponent;
    var _a, _b;
}());

//# sourceMappingURL=grid-additem.component.js.map

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
        this.title = 'Example 1: Basic Grid';
        this.subTitle = "\n    Basic Grid with fixed sizes (800 x 400) set by \"gridHeight\" &amp; \"gridWidth\"\n    <ul>\n      <li><a href=\"https://github.com/ghiscoding/angular-slickgrid/wiki/HOWTO---Step-by-Step\" target=\"_blank\">Wiki HOWTO link</a></li>\n    </ul>\n  ";
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
        this.title = 'Example 4: Client Side Sort/Filter';
        this.subTitle = "\n    Sort/Filter on client side only using SlickGrid DataView (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/Sorting\" target=\"_blank\">Wiki link</a>)\n    <br/>\n    <ul class=\"small\">\n      <li>Support multi-sort (by default), hold \"Shift\" key and click on the next column to sort.\n      <li>All column types support the following operators: (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>Example: >100 ... >=2001-01-01 ... >02/28/17</li>\n        <li><b>Note:</b> For filters to work properly (default is string), make sure to provide a FieldType (type is against the dataset, not the Formatter)</li>\n      </ul>\n      <li>Date Filters</li>\n      <ul>\n        <li>FieldType of dateUtc/date (from dataset) can use an extra option of \"filterSearchType\" to let user filter more easily. For example, in the \"UTC Date\" field below, you can type \"&gt;02/28/2017\", also when dealing with UTC you have to take the time difference in consideration.</li>\n      </ul>\n      <li>On String filters, (*) can be used as startsWith (Hello* => matches \"Hello Word\") ... endsWith (*Doe => matches: \"John Doe\")</li>\n    </ul>\n  ";
    }
    GridClientSideComponent.prototype.ngOnInit = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string, minWidth: 100 },
            { id: 'duration', name: 'Duration (days)', field: 'duration', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, minWidth: 100 },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, filterable: true, sortable: true, minWidth: 100 },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date, minWidth: 100 },
            { id: 'usDateShort', name: 'US Date Short', field: 'usDateShort', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateUsShort, minWidth: 100 },
            { id: 'utcDate', name: 'UTC Date', field: 'utcDate', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateTimeIsoAmPm, filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateUtc, filterSearchType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateTimeIso, minWidth: 115 },
            { id: 'utcDate2', name: 'UTC Date (filterSearchType: dateUS)', field: 'utcDate', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateUtc, filterSearchType: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateUs, minWidth: 115 },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', maxWidth: 80, formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].checkmark, minWidth: 100,
                type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].boolean,
                sortable: true,
                filterable: true,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* FormElementType */].select,
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <h2>{{title}}</h2>\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\n\n    <div class=\"col-sm-4\">\n        <label>autoEdit setting</label>\n        <span id=\"radioAutoEdit\">\n            <label class=\"radio-inline control-label\" for=\"radioTrue\">\n                <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioTrue\" checked [value]=\"isAutoEdit\" (change)=\"setAutoEdit(true)\"> ON (single-click)\n            </label>\n            <label class=\"radio-inline control-label\" for=\"radioFalse\">\n                <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioFalse\" [value]=\"isAutoEdit\" (change)=\"setAutoEdit(false)\"> OFF (double-click)\n            </label>\n        </span>\n    </div>\n\n    <div class=\"col-sm-8\">\n        <div class=\"alert alert-info\" *ngIf=\"updatedObject\">\n            <strong>Update Object:</strong> {{updatedObject | json}}\n        </div>\n    </div>\n\n    <div class=\"col-sm-12\">\n        <angular-slickgrid gridId=\"grid2\" (dataviewChanged)=\"dataviewReady($event)\" (gridChanged)=\"gridReady($event)\"\n            [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\">\n        </angular-slickgrid>\n    </div>\n</div>\n"

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
    function GridEditorComponent(gridExtraService, resizer) {
        this.gridExtraService = gridExtraService;
        this.resizer = resizer;
        this.title = 'Example 3: Editors';
        this.subTitle = "\n  Grid with Inline Editors and onCellClick actions (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/Editors\" target=\"_blank\">Wiki link</a>).\n  <ul>\n    <li>When using \"enableCellNavigation: true\", clicking on a cell will automatically make it active &amp; selected.</li>\n    <ul><li>If you don't want this behavior, then you should disable \"enableCellNavigation\"</li></ul>\n    <li>Inline Editors requires \"enableCellNavigation: true\" (not sure why though)</li>\n  </ul>\n  ";
        this.isAutoEdit = true;
    }
    GridEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            {
                id: 'edit', field: 'id',
                formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].editIcon,
                minWidth: 30,
                maxWidth: 30,
                // use onCellClick OR grid.onClick.subscribe which you can see down below
                onCellClick: function (args) {
                    console.log(args);
                    alert("Editing: " + args.dataContext.title);
                    _this.gridExtraService.highlightRow(args.row, 1500);
                    _this.gridExtraService.setSelectedRow(args.row);
                }
            },
            {
                id: 'delete', field: 'id',
                formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].deleteIcon,
                minWidth: 30,
                maxWidth: 30,
                // use onCellClick OR grid.onClick.subscribe which you can see down below
                onCellClick: function (args) {
                    console.log(args);
                    alert("Deleting: " + args.dataContext.title);
                }
            },
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].longText },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].text,
                onCellChange: function (args) {
                    alert('onCellChange directly attached to the column definition');
                    console.log(args);
                }
            },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].integer },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date /*, editor: Editors.date*/ },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].checkmark, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, editor: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["d" /* Editors */].checkbox }
        ];
        this.gridOptions = {
            asyncEditorLoading: false,
            autoEdit: this.isAutoEdit,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            editable: true,
            enableColumnPicker: true,
            enableCellNavigation: true
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
        // You could also subscribe to grid.onClick
        // Note that if you had already setup "onCellClick" in the column definition, you cannot use grid.onClick
        grid.onClick.subscribe(function (e, args) {
            var column = __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["k" /* GridExtraUtils */].getColumnDefinitionAndData(args);
            console.log('onClick', args, column);
            if (column.columnDef.id === 'edit') {
                alert('open a modal window to edit: ' + column.dataContext.title);
                // highlight the row, to customize the color, you can change the SASS variable $row-highlight-background-color
                _this.gridExtraService.highlightRow(args.row, 1500);
                // you could also select the row, when using "enableCellNavigation: true", it automatically selects the row
                // this.gridExtraService.setSelectedRow(args.row);
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* GridExtraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* GridExtraService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["m" /* ResizerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["m" /* ResizerService */]) === "function" && _b || Object])
    ], GridEditorComponent);
    return GridEditorComponent;
    var _a, _b;
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
        this.title = 'Example 2: Grid with Formatters';
        this.subTitle = "\n  Grid with Custom and/or included Slickgrid Formatters (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/Formatters\" target=\"_blank\">Wiki link</a>).\n  ";
    }
    GridFormatterComponent.prototype.ngOnInit = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string, minWidth: 100 },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, minWidth: 100 },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, sortable: true, minWidth: 100 },
            { id: 'percent2', name: '% Complete', field: 'percentComplete2', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].progressBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, sortable: true, minWidth: 100 },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateIso, minWidth: 100 },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date, minWidth: 100 },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: myCustomCheckboxFormatter, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, sortable: true, minWidth: 100 }
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
            template: __webpack_require__("../../../../../src/app/examples/grid-formatter.component.html")
        })
    ], GridFormatterComponent);
    return GridFormatterComponent;
}());

//# sourceMappingURL=grid-formatter.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-graphql.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n  <h2>{{title}}</h2>\r\n  <div class=\"subtitle row\" [innerHTML]=\"subTitle\"></div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div [class]=\"status.class\" role=\"alert\">\r\n        <strong>Status: </strong> {{status.text}}\r\n        <span [hidden]=\"!processing\">\r\n          <i class=\"fa fa-refresh fa-spin fa-lg fa-fw\"></i>\r\n        </span>\r\n      </div>\r\n      <div class=\"form-inline\">\r\n        <label class=\"control-label\" for=\"radioWithCursor\">With Cursor</label> :\r\n        <span id=\"radioWithCursor\">\r\n          <label class=\"radio-inline control-label\" for=\"radioTrue\">\r\n            <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioTrue\" value=\"true\" (change)=\"onWithCursorChange(true)\">\r\n            True\r\n          </label>\r\n          <label class=\"radio-inline control-label\" for=\"radioFalse\">\r\n            <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioFalse\" checked value=\"false\" (change)=\"onWithCursorChange(false)\">\r\n            False\r\n          </label>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"alert alert-info\">\r\n        <strong>GraphQL Query:</strong>\r\n        <div [innerHTML]=\"graphqlQuery\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <angular-slickgrid gridId=\"grid4\"\r\n            [columnDefinitions]=\"columnDefinitions\"\r\n            [gridOptions]=\"gridOptions\"\r\n            [dataset]=\"dataset\"\r\n            gridHeight=\"250\"\r\n            gridWidth=\"800\">\r\n  </angular-slickgrid>\r\n</div>\r\n\r\n"

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
        this.title = 'Example 6: Grid connected to Backend Server with GraphQL';
        this.subTitle = "\n    Sorting/Paging connected to a Backend GraphQL Service (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/GraphQL\" target=\"_blank\">Wiki link</a>).\n    <br/>\n    <ul class=\"small\">\n      <li><span class=\"red\">(*) NO DATA SHOWING</span> - just change Filters &amp; Pages and look at the \"GraphQL Query\" changing :)</li>\n      <li>Only \"Name\" field is sortable for the demo (because we use JSON files), however \"multiColumnSort: true\" is also supported</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: \"abc*\" => startsWith \"abc\") / endsWith (ex.: \"*xyz\" => endsWith \"xyz\")</li>\n        <li>The other operators can be used on column type number for example: \">=100\" (bigger or equal than 100)</li>\n      </ul>\n    </ul>\n  ";
        this.dataset = [];
        this.graphqlQuery = '';
        this.processing = false;
        this.status = { text: '', class: '' };
        this.isWithCursor = false;
    }
    GridGraphqlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'name', name: 'Name', field: 'name', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string, minWidth: 100 },
            { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: true, minWidth: 100,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* FormElementType */].select,
                    selectOptions: [{ value: '', label: '' }, { value: 'male', label: 'male' }, { value: 'female', label: 'female' }]
                }
            },
            { id: 'company', name: 'Company', field: 'company', minWidth: 100 }
        ];
        this.gridOptions = {
            enableAutoResize: false,
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["i" /* GraphqlService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["i" /* GraphqlService */]) === "function" && _b || Object])
    ], GridGraphqlComponent);
    return GridGraphqlComponent;
    var _a, _b;
}());

//# sourceMappingURL=grid-graphql.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-headerbutton.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n    <div class=\"col-sm-12\">\r\n        <angular-slickgrid gridId=\"grid2\" (dataviewChanged)=\"dataviewReady($event)\" (gridChanged)=\"gridReady($event)\"\r\n            [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\">\r\n        </angular-slickgrid>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-headerbutton.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHeaderButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// create a custom Formatter to highlight negative values in red
var columnsWithHighlightingById = {};
var highlightingFormatter = function (row, cell, value, columnDef, dataContext) {
    if (columnsWithHighlightingById[columnDef.id] && value < 0) {
        return "<div style=\"color:red; font-weight:bold;\">" + value + "</div>";
    }
    else {
        return value;
    }
};
var GridHeaderButtonComponent = /** @class */ (function () {
    function GridHeaderButtonComponent() {
        this.title = 'Example 7: Header Button Plugin';
        this.subTitle = "\n    This example demonstrates using the <b>Slick.Plugins.HeaderButtons</b> plugin to easily add buttons to colum headers.\n    These buttons can be specified directly in the column definition, and are very easy to configure and use.\n    (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/SlickGrid-Plugins\" target=\"_blank\">Wiki link</a>)\n    <ul>\n      <li>Resize the 1st column to see all icon/command</li>\n      <li>Mouse hover the 2nd column to see it's icon/command</li>\n      <li>For all the other columns, click on top-right red circle icon to enable highlight of negative numbers.</li>\n    </ul>\n  ";
    }
    GridHeaderButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [];
        this.gridOptions = {
            enableAutoResize: true,
            enableHeaderButton: true,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableFiltering: false,
            enableCellNavigation: true,
            headerButton: {
                onCommand: function (e, args) {
                    var column = args.column;
                    var button = args.button;
                    var command = args.command;
                    if (command === 'toggle-highlight') {
                        if (button.cssClass === 'fa fa-circle red') {
                            delete columnsWithHighlightingById[column.id];
                            button.cssClass = 'fa fa-circle-o red faded';
                            button.tooltip = 'Highlight negative numbers.';
                        }
                        else {
                            columnsWithHighlightingById[column.id] = true;
                            button.cssClass = 'fa fa-circle red';
                            button.tooltip = 'Remove highlight.';
                        }
                        _this.gridObj.invalidate();
                    }
                }
            }
        };
        this.getData();
    };
    GridHeaderButtonComponent.prototype.getData = function () {
        // Set up some test columns.
        for (var i = 0; i < 9; i++) {
            this.columnDefinitions.push({
                id: i,
                name: 'Column' + (i + 1),
                field: i + '',
                width: 100,
                sortable: true,
                formatter: highlightingFormatter,
                header: {
                    buttons: [
                        {
                            cssClass: 'fa fa-circle-o red faded',
                            command: 'toggle-highlight',
                            tooltip: 'Highlight negative numbers.'
                        }
                    ]
                }
            });
        }
        // Set multiple buttons on the first column to demonstrate overflow.
        this.columnDefinitions[0].name = 'Resize me!';
        this.columnDefinitions[0].header = {
            buttons: [
                {
                    cssClass: 'fa fa-tag',
                    handler: function (e) {
                        alert('Tag');
                    }
                },
                {
                    cssClass: 'fa fa-comment',
                    handler: function (e) {
                        alert('Comment');
                    }
                },
                {
                    cssClass: 'fa fa-info-circle',
                    handler: function (e) {
                        alert('Info');
                    }
                },
                {
                    cssClass: 'fa fa-question-circle',
                    handler: function (e) {
                        alert('Help');
                    }
                }
            ]
        };
        // Set a button on the second column to demonstrate hover.
        this.columnDefinitions[1].name = 'Hover me!';
        this.columnDefinitions[1].header = {
            buttons: [
                {
                    cssClass: 'fa fa-question-circle',
                    showOnHover: true,
                    tooltip: 'This button only appears on hover.',
                    handler: function (e) {
                        alert('Help');
                    }
                }
            ]
        };
        // mock a dataset
        var mockDataset = [];
        for (var i = 0; i < 100; i++) {
            var d = (mockDataset[i] = {});
            d['id'] = i;
            for (var j = 0; j < this.columnDefinitions.length; j++) {
                d[j] = Math.round(Math.random() * 10) - 5;
            }
        }
        this.dataset = mockDataset;
    };
    GridHeaderButtonComponent.prototype.gridReady = function (grid) {
        this.gridObj = grid;
    };
    GridHeaderButtonComponent.prototype.dataviewReady = function (dataview) {
        this.dataviewObj = dataview;
    };
    GridHeaderButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-headerbutton.component.html")
        })
    ], GridHeaderButtonComponent);
    return GridHeaderButtonComponent;
}());

//# sourceMappingURL=grid-headerbutton.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-headermenu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n    <div class=\"col-sm-12\">\r\n        <angular-slickgrid gridId=\"grid2\" (dataviewChanged)=\"dataviewReady($event)\" (gridChanged)=\"gridReady($event)\"\r\n            [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\">\r\n        </angular-slickgrid>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-headermenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridHeaderMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__ = __webpack_require__("../../../../angular-slickgrid/angular-slickgrid/angular-slickgrid.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// create a custom Formatter to highlight negative values in red
var columnsWithHighlightingById = {};
var highlightingFormatter = function (row, cell, value, columnDef, dataContext) {
    if (columnsWithHighlightingById[columnDef.id] && value < 0) {
        return "<div style=\"color:red; font-weight:bold;\">" + value + "</div>";
    }
    else {
        return value;
    }
};
var GridHeaderMenuComponent = /** @class */ (function () {
    function GridHeaderMenuComponent(controlService) {
        this.controlService = controlService;
        this.title = 'Example 8: Header Menu Plugin';
        this.subTitle = "\n    This example demonstrates using the <b>Slick.Plugins.HeaderMenu</b> plugin to easily add menus to colum headers.<br/>\n    These menus can be specified directly in the column definition, and are very easy to configure and use.\n    (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/SlickGrid-Plugins\" target=\"_blank\">Wiki link</a>)\n    <ul>\n      <li>Hover over any column header to see an arrow showing up on the right</li>\n      <li>Try Sorting (multi-sort) the 2 columns \"Duration\" and \"% Complete\" (the other ones are disabled)</li>\n      <li>Try hiding any columns (you use the \"Column Picker\" plugin by doing a right+click on the header to show the column back)</li>\n    </ul>\n  ";
    }
    GridHeaderMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title' },
            { id: 'duration', name: 'Duration', field: 'duration', sortable: true },
            { id: '%', name: '% Complete', field: 'percentComplete', sortable: true },
            { id: 'start', name: 'Start', field: 'start' },
            { id: 'finish', name: 'Finish', field: 'finish' },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven' }
        ];
        for (var i = 0; i < this.columnDefinitions.length; i++) {
            this.columnDefinitions[i].header = {
                menu: {
                    items: [
                        {
                            iconCssClass: 'fa fa-sort-asc',
                            title: 'Sort Ascending',
                            disabled: !this.columnDefinitions[i].sortable,
                            command: 'sort-asc'
                        },
                        {
                            iconCssClass: 'fa fa-sort-desc',
                            title: 'Sort Descending',
                            disabled: !this.columnDefinitions[i].sortable,
                            command: 'sort-desc'
                        },
                        {
                            title: 'Hide Column',
                            command: 'hide'
                        },
                        {
                            iconCssClass: 'fa fa-question-circle',
                            title: 'Help',
                            command: 'help'
                        }
                    ]
                }
            };
        }
        this.visibleColumns = this.columnDefinitions;
        this.gridOptions = {
            enableAutoResize: true,
            enableHeaderMenu: true,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableFiltering: false,
            enableCellNavigation: true,
            headerMenu: {
                onCommand: function (e, args) {
                    if (args.command === 'hide') {
                        _this.controlService.hideColumn(args.column);
                        _this.controlService.autoResizeColumns();
                    }
                    else if (args.command === 'sort-asc' || args.command === 'sort-desc') {
                        // get previously sorted columns
                        // getSortColumns() only returns sortAsc & columnId, we want the entire column definition
                        var oldSortColumns = _this.gridObj.getSortColumns();
                        var cols = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](oldSortColumns, function (col) {
                            // get the column definition but only keep column which are not equal to our current column
                            if (col.columnId !== args.column.id) {
                                return { sortCol: _this.columnDefinitions[_this.gridObj.getColumnIndex(col.columnId)], sortAsc: col.sortAsc };
                            }
                        });
                        // add to the column array, the column sorted by the header menu
                        var isSortedAsc = (args.command === 'sort-asc');
                        cols.push({ sortAsc: isSortedAsc, sortCol: args.column });
                        // update the this.gridObj sortColumns array which will at the same add the visual sort icon(s) on the UI
                        var newSortColumns = __WEBPACK_IMPORTED_MODULE_2_jquery__["map"](cols, function (col) {
                            return { columnId: col.sortCol.id, sortAsc: col.sortAsc };
                        });
                        _this.gridObj.setSortColumns(newSortColumns);
                        _this.executeSort(cols);
                    }
                    else {
                        alert('Command: ' + args.command);
                    }
                }
            }
        };
        this.getData();
    };
    GridHeaderMenuComponent.prototype.getData = function () {
        // Set up some test columns.
        var mockDataset = [];
        for (var i = 0; i < 500; i++) {
            mockDataset[i] = {
                id: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 25) + ' days',
                percentComplete: Math.round(Math.random() * 100),
                start: '01/01/2009',
                finish: '01/05/2009',
                effortDriven: (i % 5 === 0)
            };
        }
        this.dataset = mockDataset;
    };
    GridHeaderMenuComponent.prototype.gridReady = function (grid) {
        this.gridObj = grid;
    };
    GridHeaderMenuComponent.prototype.dataviewReady = function (dataview) {
        this.dataviewObj = dataview;
    };
    GridHeaderMenuComponent.prototype.executeSort = function (cols) {
        this.dataviewObj.sort(function (dataRow1, dataRow2) {
            for (var i = 0, l = cols.length; i < l; i++) {
                var field = cols[i].sortCol.field;
                var sign = cols[i].sortAsc ? 1 : -1;
                var value1 = dataRow1[field];
                var value2 = dataRow2[field];
                var result = (value1 === value2 ? 0 : (value1 > value2 ? 1 : -1)) * sign;
                if (result !== 0) {
                    return result;
                }
            }
            return 0;
        });
        this.gridObj.invalidate();
        this.gridObj.render();
    };
    GridHeaderMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-headermenu.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* ControlAndPluginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["c" /* ControlAndPluginService */]) === "function" && _a || Object])
    ], GridHeaderMenuComponent);
    return GridHeaderMenuComponent;
    var _a;
}());

//# sourceMappingURL=grid-headermenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container\">\r\n    <h2>{{title}}</h2>\r\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\r\n\r\n    <div class=\"col-sm-12\">\r\n        <angular-slickgrid gridId=\"grid2\" (dataviewChanged)=\"dataviewReady($event)\" (gridChanged)=\"gridReady($event)\"\r\n            [columnDefinitions]=\"columnDefinitions\" [gridOptions]=\"gridOptions\" [dataset]=\"dataset\">\r\n        </angular-slickgrid>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridMenuComponent; });
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


// create a custom Formatter to highlight negative values in red
var columnsWithHighlightingById = {};
var highlightingFormatter = function (row, cell, value, columnDef, dataContext) {
    if (columnsWithHighlightingById[columnDef.id] && value < 0) {
        return "<div style=\"color:red; font-weight:bold;\">" + value + "</div>";
    }
    else {
        return value;
    }
};
var GridMenuComponent = /** @class */ (function () {
    function GridMenuComponent(filterService) {
        this.filterService = filterService;
        this.title = 'Example 9: Grid Menu Control';
        this.subTitle = "\n    This example demonstrates using the <b>Slick.Controls.GridMenu</b> plugin to easily add a Grid Menu (aka hamburger menu) on the top right corner of the grid.\n    (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/Grid-Menu\" target=\"_blank\">Wiki link</a>)\n    <br/>\n    <ul>\n      <li>The Grid Menu uses the following icon by default \"fa-bars\"&nbsp;&nbsp;<span class=\"fa fa-bars\"></span>&nbsp;&nbsp;(which looks like a hamburger, hence the name)</li>\n      <ul><li>Another icon which you could use is \"fa-ellipsis-v\"&nbsp;&nbsp;<span class=\"fa fa-ellipsis-v\"></span>&nbsp;&nbsp;(which is shown in this example)</li></ul>\n      <li>By default the Grid Menu shows all columns which you can show/hide</li>\n      <li>You can configure multiple \"commands\" to show up in the Grid Menu and use the \"onGridMenuCommand()\" callback</li>\n      <li>Doing a \"right+click\" over any column header will also provide a way to show/hide a column (via the Column Picker Plugin)</li>\n    </ul>\n  ";
    }
    GridMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', filterable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string },
            { id: 'duration', name: 'Duration', field: 'duration', sortable: true, filterable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string },
            { id: '%', name: '% Complete', field: 'percentComplete', sortable: true, filterable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number },
            { id: 'start', name: 'Start', field: 'start', filterable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string },
            { id: 'finish', name: 'Finish', field: 'finish', filterable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string },
            {
                id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', maxWidth: 80, formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].checkmark,
                type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].boolean,
                minWidth: 100,
                sortable: true,
                filterable: true,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* FormElementType */].select,
                    selectOptions: [{ value: '', label: '' }, { value: true, label: 'true' }, { value: false, label: 'false' }]
                }
            }
        ];
        this.visibleColumns = this.columnDefinitions;
        this.gridOptions = {
            enableAutoResize: true,
            enableGridMenu: true,
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableFiltering: true,
            enableCellNavigation: true,
            gridMenu: {
                customTitle: 'Custom Commands',
                columnTitle: 'Columns',
                iconCssClass: 'fa fa-ellipsis-v',
                menuWidth: 17,
                resizeOnShowHeaderRow: true,
                customItems: [
                    {
                        iconCssClass: 'fa fa-filter text-danger',
                        title: 'Clear All Filters',
                        disabled: false,
                        command: 'clear-filter'
                    },
                    {
                        iconCssClass: 'fa fa-random',
                        title: 'Toggle Filter Row',
                        disabled: false,
                        command: 'toggle-filter'
                    },
                    {
                        iconCssClass: 'fa fa-random',
                        title: 'Toggle Top Panel',
                        disabled: false,
                        command: 'toggle-toppanel'
                    },
                    {
                        iconCssClass: 'fa fa-question-circle',
                        title: 'Help',
                        disabled: false,
                        command: 'help'
                    },
                    {
                        title: 'Disabled command',
                        disabled: true,
                        command: 'disabled-command'
                    }
                ],
                onCommand: function (e, args) {
                    if (args.command === 'toggle-filter') {
                        _this.gridObj.setHeaderRowVisibility(!_this.gridObj.getOptions().showHeaderRow);
                    }
                    else if (args.command === 'toggle-toppanel') {
                        _this.gridObj.setTopPanelVisibility(!_this.gridObj.getOptions().showTopPanel);
                    }
                    else if (args.command === 'clear-filter') {
                        _this.filterService.clearFilters();
                    }
                    else {
                        alert('Command: ' + args.command);
                    }
                }
            },
        };
        this.getData();
    };
    GridMenuComponent.prototype.getData = function () {
        // Set up some test columns.
        var mockDataset = [];
        for (var i = 0; i < 500; i++) {
            mockDataset[i] = {
                id: i,
                title: 'Task ' + i,
                duration: Math.round(Math.random() * 25) + ' days',
                percentComplete: Math.round(Math.random() * 100),
                start: '01/01/2009',
                finish: '01/05/2009',
                effortDriven: (i % 5 === 0)
            };
        }
        this.dataset = mockDataset;
    };
    GridMenuComponent.prototype.gridReady = function (grid) {
        this.gridObj = grid;
    };
    GridMenuComponent.prototype.dataviewReady = function (dataview) {
        this.dataviewObj = dataview;
    };
    GridMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-menu.component.html")
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* FilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["f" /* FilterService */]) === "function" && _a || Object])
    ], GridMenuComponent);
    return GridMenuComponent;
    var _a;
}());

//# sourceMappingURL=grid-menu.component.js.map

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
var sampleDataRoot = 'assets/data';
var GridOdataComponent = /** @class */ (function () {
    function GridOdataComponent(http, odataService) {
        this.http = http;
        this.odataService = odataService;
        this.title = 'Example 5: Grid connected to Backend Server with OData';
        this.subTitle = "\n    Sorting/Paging connected to a Backend OData Service (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/OData\" target=\"_blank\">Wiki link</a>).\n    <br/>\n    <ul class=\"small\">\n      <li>Only \"Name\" field is sortable for the demo (because we use JSON files), however \"multiColumnSort: true\" is also supported</li>\n      <li>String column also support operator (>, >=, <, <=, <>, !=, =, ==, *)\n      <ul>\n        <li>The (*) can be used as startsWith (ex.: \"abc*\" => startsWith \"abc\") / endsWith (ex.: \"*xyz\" => endsWith \"xyz\")</li>\n        <li>The other operators can be used on column type number for example: \">=100\" (bigger or equal than 100)</li>\n      </ul>\n      <li>OData Service could be replaced by other Service type in the future (GraphQL or whichever you provide)</li>\n    </ul>\n  ";
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
            { id: 'name', name: 'Name', field: 'name', filterable: true, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string, minWidth: 100 },
            { id: 'gender', name: 'Gender', field: 'gender', filterable: true, sortable: true, minWidth: 100,
                filter: {
                    searchTerm: '',
                    type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["g" /* FormElementType */].select,
                    selectOptions: [{ value: '', label: '' }, { value: 'male', label: 'male' }, { value: 'female', label: 'female' }]
                }
            },
            { id: 'company', name: 'Company', field: 'company', minWidth: 100 }
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
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["l" /* GridOdataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["l" /* GridOdataService */]) === "function" && _b || Object])
    ], GridOdataComponent);
    return GridOdataComponent;
    var _a, _b;
}());

//# sourceMappingURL=grid-odata.component.js.map

/***/ }),

/***/ "../../../../../src/app/examples/grid-rowselection.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container\">\n    <h2>{{title}}</h2>\n    <div class=\"subtitle\" [innerHTML]=\"subTitle\"></div>\n\n    <div class=\"row\">\n        <div class=\"col-sm-4\">\n          <div class=\"form-inline\">\n            <label class=\"control-label\" for=\"radioWithCursor\">Multi-Select / Single</label>\n            <span id=\"radioWithCursor\">\n              <label class=\"radio-inline control-label\" for=\"radioTrue\">\n                <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioTrue\" checked [value]=\"isMultiSelect\" (change)=\"onChooseMultiSelectType(true)\">\n                Multi-Select\n              </label>\n              <label class=\"radio-inline control-label\" for=\"radioFalse\">\n                <input type=\"radio\" name=\"inlineRadioOptions\" id=\"radioFalse\" [value]=\"isMultiSelect\" (change)=\"onChooseMultiSelectType(false)\">\n                Single\n              </label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-sm-8\">\n          <div class=\"alert alert-info\">\n            <strong>Selected Row(s):</strong>\n            <div [innerHTML]=\"selectedObjects\"></div>\n          </div>\n        </div>\n      </div>\n\n    <angular-slickgrid gridId=\"grid1\"\n                (dataviewChanged)=\"dataviewReady($event)\" (gridChanged)=\"gridReady($event)\"\n              [columnDefinitions]=\"columnDefinitions\"\n              [gridOptions]=\"gridOptions\"\n              [dataset]=\"dataset\">\n    </angular-slickgrid>\n    <br/>\n    <hr/>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/examples/grid-rowselection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridRowSelectionComponent; });
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


var GridRowSelectionComponent = /** @class */ (function () {
    function GridRowSelectionComponent(gridExtraService) {
        this.gridExtraService = gridExtraService;
        this.title = 'Example 10: Grid with Row Selection';
        this.subTitle = "\n    Row selection, single or multi-select (<a href=\"https://github.com/ghiscoding/Angular-Slickgrid/wiki/Row-Selection\" target=\"_blank\">Wiki link</a>).\n  ";
        this.isMultiSelect = true;
    }
    GridRowSelectionComponent.prototype.ngOnInit = function () {
        this.prepareGrid();
    };
    GridRowSelectionComponent.prototype.prepareGrid = function () {
        this.columnDefinitions = [
            { id: 'title', name: 'Title', field: 'title', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].string },
            { id: 'duration', name: 'Duration (days)', field: 'duration', sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number },
            { id: 'complete', name: '% Complete', field: 'percentComplete', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].percentCompleteBar, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, sortable: true },
            { id: 'start', name: 'Start', field: 'start', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].dateIso },
            { id: 'finish', name: 'Finish', field: 'finish', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].dateIso, sortable: true, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].date },
            { id: 'effort-driven', name: 'Effort Driven', field: 'effortDriven', formatter: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["h" /* Formatters */].checkmark, type: __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["e" /* FieldType */].number, sortable: true }
        ];
        this.gridOptions = {
            autoResize: {
                containerId: 'demo-container',
                sidePadding: 15
            },
            enableAutoResize: true,
            enableCellNavigation: false,
            enableCheckboxSelector: true
        };
        this.dataset = this.prepareData();
    };
    GridRowSelectionComponent.prototype.prepareData = function () {
        // mock a dataset
        var mockDataset = [];
        for (var i = 0; i < 500; i++) {
            var randomYear = 2000 + Math.floor(Math.random() * 10);
            var randomMonth = Math.floor(Math.random() * 11);
            var randomDay = Math.floor((Math.random() * 29));
            var randomPercent = Math.round(Math.random() * 100);
            mockDataset[i] = {
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
        return mockDataset;
    };
    GridRowSelectionComponent.prototype.gridReady = function (grid) {
        var _this = this;
        this.gridObj = grid;
        grid.onSelectedRowsChanged.subscribe(function (e, args) {
            if (Array.isArray(args.rows)) {
                _this.selectedObjects = args.rows.map(function (idx) {
                    var item = grid.getDataItem(idx);
                    return item.title || '';
                });
            }
        });
    };
    GridRowSelectionComponent.prototype.dataviewReady = function (dataview) {
        this.dataviewObj = dataview;
    };
    GridRowSelectionComponent.prototype.onChooseMultiSelectType = function (isMultiSelect) {
        this.isMultiSelect = isMultiSelect;
        this.gridObj.setOptions({
            enableCellNavigation: !isMultiSelect,
            enableCheckboxSelector: isMultiSelect
        }); // change the grid option dynamically
        this.gridExtraService.setSelectedRows([]);
        return true;
    };
    GridRowSelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            template: __webpack_require__("../../../../../src/app/examples/grid-rowselection.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* GridExtraService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular_slickgrid__["j" /* GridExtraService */]) === "function" && _a || Object])
    ], GridRowSelectionComponent);
    return GridRowSelectionComponent;
    var _a;
}());

//# sourceMappingURL=grid-rowselection.component.js.map

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