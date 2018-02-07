webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./releases/releases.module": [
		"../../../../../src/app/releases/releases.module.ts",
		"releases.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_db__ = __webpack_require__("../../../../@ngrx/db/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__db__ = __webpack_require__("../../../../../src/app/db.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_containers_app__ = __webpack_require__("../../../../../src/app/core/containers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__routes__["a" /* routes */], { useHash: true }),
                /**
                 * StoreModule.forRoot is imported once in the root module, accepting a reducer
                 * function or object map of reducer functions. If passed an object of
                 * reducers, combineReducers will be run creating your application
                 * meta-reducer. This returns all providers for an @ngrx/store
                 * based application.
                 */
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["j" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__reducers__["c" /* reducers */], { metaReducers: __WEBPACK_IMPORTED_MODULE_13__reducers__["b" /* metaReducers */] }),
                /**
                 * @ngrx/router-store keeps router state up-to-date in the store.
                 */
                __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__["b" /* StoreRouterConnectingModule */].forRoot({
                    /*
                      They stateKey defines the name of the state used by the router-store reducer.
                      This matches the key defined in the map of reducers
                    */
                    stateKey: 'router',
                }),
                /**
                 * Store devtools instrument the store retaining past versions of state
                 * and recalculating new states. This enables powerful time-travel
                 * debugging.
                 *
                 * To use the debugger, install the Redux Devtools extension for either
                 * Chrome or Firefox
                 *
                 * See: https://github.com/zalmoxisus/redux-devtools-extension
                 */
                __WEBPACK_IMPORTED_MODULE_10__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({
                    name: 'Discogs manager with Angular and ngrx',
                    logOnly: __WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].production,
                }),
                /**
                 * EffectsModule.forRoot() is imported once in the root module and
                 * sets up the effects class to be initialized immediately when the
                 * application starts.
                 *
                 * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
                 */
                __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                /**
                 * `provideDB` sets up @ngrx/db with the provided schema and makes the Database
                 * service available.
                 */
                __WEBPACK_IMPORTED_MODULE_8__ngrx_db__["a" /* DBModule */].provideDB(__WEBPACK_IMPORTED_MODULE_14__db__["a" /* schema */]),
                __WEBPACK_IMPORTED_MODULE_11__core_core_module__["a" /* CoreModule */].forRoot(),
            ],
            providers: [
                /**
                 * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
                 * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
                 * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
                 */
                { provide: __WEBPACK_IMPORTED_MODULE_9__ngrx_router_store__["a" /* RouterStateSerializer */], useClass: __WEBPACK_IMPORTED_MODULE_15__shared_utils__["a" /* CustomRouterStateSerializer */] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__core_containers_app__["a" /* AppComponent */]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/actions/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LayoutActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OpenSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseSidenav; });
var LayoutActionTypes;
(function (LayoutActionTypes) {
    LayoutActionTypes["OpenSidenav"] = "[Layout] Open Sidenav";
    LayoutActionTypes["CloseSidenav"] = "[Layout] Close Sidenav";
})(LayoutActionTypes || (LayoutActionTypes = {}));
var OpenSidenav = /** @class */ (function () {
    function OpenSidenav() {
        this.type = LayoutActionTypes.OpenSidenav;
    }
    return OpenSidenav;
}());

var CloseSidenav = /** @class */ (function () {
    function CloseSidenav() {
        this.type = LayoutActionTypes.CloseSidenav;
    }
    return CloseSidenav;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/layout/layout.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container {\r\n    background: rgba(0, 0, 0, 0.03);\r\n  }\r\n\r\n  *, /deep/ * {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/layout/layout.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\r\n\r\n    <ng-content></ng-content>\r\n\r\n  </mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/core/components/layout/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dc-layout',
            template: __webpack_require__("../../../../../src/app/core/components/layout/layout.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/layout/layout.css")]
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/nav-item/nav-item.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".secondary {\r\n    color: rgba(0, 0, 0, 0.54);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/nav-item/nav-item.html":
/***/ (function(module, exports) {

module.exports = "<a mat-list-item [routerLink]=\"routerLink\" (click)=\"navigate.emit()\">\r\n    <mat-icon mat-list-icon>{{ icon }}</mat-icon>\r\n    <span mat-line><ng-content></ng-content></span>\r\n    <span mat-line class=\"secondary\">{{ hint }}</span>\r\n  </a>"

/***/ }),

/***/ "../../../../../src/app/core/components/nav-item/nav-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavItemComponent = /** @class */ (function () {
    function NavItemComponent() {
        this.icon = '';
        this.hint = '';
        this.routerLink = '/';
        this.navigate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "icon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "hint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "routerLink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], NavItemComponent.prototype, "navigate", void 0);
    NavItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dc-nav-item',
            template: __webpack_require__("../../../../../src/app/core/components/nav-item/nav-item.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/nav-item/nav-item.css")]
        })
    ], NavItemComponent);
    return NavItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/sidenav/sidenav.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav {\r\n    width: 300px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/components/sidenav/sidenav.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav [opened]=\"open\">\r\n    <mat-nav-list>\r\n      <ng-content></ng-content>\r\n    </mat-nav-list>\r\n  </mat-sidenav>"

/***/ }),

/***/ "../../../../../src/app/core/components/sidenav/sidenav.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.open = false;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "open", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dc-sidenav',
            template: __webpack_require__("../../../../../src/app/core/components/sidenav/sidenav.html"),
            styles: [__webpack_require__("../../../../../src/app/core/components/sidenav/sidenav.css")]
        })
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/components/toolbar/toolbar.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <button mat-icon-button (click)=\"openMenu.emit()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <ng-content></ng-content>\r\n  </mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/core/components/toolbar/toolbar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.openMenu = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "openMenu", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dc-toolbar',
            template: __webpack_require__("../../../../../src/app/core/components/toolbar/toolbar.html")
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/containers/app.html":
/***/ (function(module, exports) {

module.exports = "<dc-layout>\r\n  <dc-sidenav [open]=\"showSidenav$ | async\">\r\n    <!-- <dc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"loggedIn$ | async\" routerLink=\"/\" icon=\"book\" hint=\"View your book collection\">\r\n      My Collection\r\n    </dc-nav-item> -->\r\n    <dc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"loggedIn$ | async\" routerLink=\"/releases/find\" icon=\"search\" hint=\"Find your next book!\">\r\n      Search\r\n    </dc-nav-item>\r\n    <dc-nav-item (navigate)=\"closeSidenav()\" *ngIf=\"!(loggedIn$ | async)\">\r\n      Sign In\r\n    </dc-nav-item>\r\n    <dc-nav-item (navigate)=\"logout()\" *ngIf=\"loggedIn$ | async\">\r\n      Sign Out\r\n    </dc-nav-item>\r\n  </dc-sidenav>\r\n  <dc-toolbar (openMenu)=\"openSidenav()\">\r\n    Search\r\n  </dc-toolbar>\r\n\r\n  <router-outlet></router-outlet>\r\n</dc-layout>"

/***/ }),

/***/ "../../../../../src/app/core/containers/app.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__("../../../../../src/app/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_layout__ = __webpack_require__("../../../../../src/app/core/actions/layout.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import * as fromAuth from '../../auth/reducers';

//import * as Auth from '../../auth/actions/auth';
var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        /**
         * Selectors can be applied with the `select` operator which passes the state
         * tree to the provided selector
         */
        this.showSidenav$ = this.store.pipe(Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["p" /* select */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* getShowSidenav */]));
        //this.loggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));
    }
    AppComponent.prototype.closeSidenav = function () {
        /**
         * All state updates are handled through dispatched actions in 'container'
         * components. This provides a clear, reproducible history of state
         * updates and user interaction through the life of our
         * application.
         */
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_layout__["a" /* CloseSidenav */]());
    };
    AppComponent.prototype.openSidenav = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_layout__["c" /* OpenSidenav */]());
    };
    AppComponent.prototype.logout = function () {
        this.closeSidenav();
        //this.store.dispatch(new Auth.Logout());
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dc-app',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: __webpack_require__("../../../../../src/app/core/containers/app.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/containers/not-found-page.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n    text-align: center;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/containers/not-found-page.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>404: Not Found</mat-card-title>\r\n    <mat-card-content>\r\n      <p>Hey! It looks like this page doesn't exist yet.</p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" routerLink=\"/\">Take Me Home</button>\r\n    </mat-card-actions>\r\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/core/containers/not-found-page.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'bc-not-found-page',
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            template: __webpack_require__("../../../../../src/app/core/containers/not-found-page.html"),
            styles: [__webpack_require__("../../../../../src/app/core/containers/not-found-page.css")]
        })
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_app__ = __webpack_require__("../../../../../src/app/core/containers/app.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__containers_not_found_page__ = __webpack_require__("../../../../../src/app/core/containers/not-found-page.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_layout_layout__ = __webpack_require__("../../../../../src/app/core/components/layout/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_nav_item_nav_item__ = __webpack_require__("../../../../../src/app/core/components/nav-item/nav-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sidenav_sidenav__ = __webpack_require__("../../../../../src/app/core/components/sidenav/sidenav.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_toolbar_toolbar__ = __webpack_require__("../../../../../src/app/core/components/toolbar/toolbar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__material__ = __webpack_require__("../../../../../src/app/material/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_discogs_service__ = __webpack_require__("../../../../../src/app/core/services/discogs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_3__containers_app__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_4__containers_not_found_page__["a" /* NotFoundPageComponent */],
    __WEBPACK_IMPORTED_MODULE_5__components_layout_layout__["a" /* LayoutComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_nav_item_nav_item__["a" /* NavItemComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_sidenav_sidenav__["a" /* SidenavComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_toolbar_toolbar__["a" /* ToolbarComponent */],
];
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule_1 = CoreModule;
    CoreModule.forRoot = function () {
        return {
            ngModule: CoreModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_10__services_discogs_service__["a" /* DiscogsService */]],
        };
    };
    CoreModule = CoreModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_9__material__["a" /* MaterialModule */]],
            declarations: COMPONENTS,
            exports: COMPONENTS,
        })
    ], CoreModule);
    return CoreModule;
    var CoreModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/core/reducers/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShowSidenav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__("../../../../../src/app/core/actions/layout.ts");

var initialState = {
    showSidenav: false,
};
var actionDict = {};
function _closeSideNav() {
    return { showSidenav: false };
}
function _openSidenav() {
    return { showSidenav: true };
}
actionDict[__WEBPACK_IMPORTED_MODULE_0__actions_layout__["b" /* LayoutActionTypes */].CloseSidenav] = _closeSideNav;
actionDict[__WEBPACK_IMPORTED_MODULE_0__actions_layout__["b" /* LayoutActionTypes */].OpenSidenav] = _openSidenav;
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["b" /* LayoutActionTypes */].CloseSidenav:
            return { showSidenav: false };
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["b" /* LayoutActionTypes */].OpenSidenav:
            return { showSidenav: true };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };


/***/ }),

/***/ "../../../../../src/app/core/services/discogs.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscogsService = /** @class */ (function () {
    function DiscogsService(http) {
        this.http = http;
        this.API_PATH = 'https://api.discogs.com/';
        this.token = 'NrdbzBDFRADMleQMMXQSulkaAAEOROdYNRMHAYsG';
    }
    DiscogsService.prototype.search = function (q) {
        return this.http
            .get(this.API_PATH + '/database/search?q=' + q + '&token=' + this.token)
            .pipe(function (result) { return result; });
    };
    DiscogsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DiscogsService);
    return DiscogsService;
}());



/***/ }),

/***/ "../../../../../src/app/db.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return schema; });
/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
var schema = {
    version: 1,
    name: 'discogs_app',
    stores: {
        releases: {
            autoIncrement: true,
            primaryKey: 'id',
        },
    },
};


/***/ }),

/***/ "../../../../../src/app/material/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__material_module__["a"]; });



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatProgressSpinnerModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatProgressSpinnerModule */],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export logger */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metaReducers; });
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getShowSidenav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/@ngrx/router-store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_reducers_layout__ = __webpack_require__("../../../../../src/app/core/reducers/layout.ts");



/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
var reducers = {
    layout: __WEBPACK_IMPORTED_MODULE_4__core_reducers_layout__["b" /* reducer */],
    router: __WEBPACK_IMPORTED_MODULE_2__ngrx_router_store__["c" /* routerReducer */],
};
// console.log all actions
function logger(reducer) {
    return function (state, action) {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production
    ? [logger, __WEBPACK_IMPORTED_MODULE_3_ngrx_store_freeze__["storeFreeze"]]
    : [];
/**
 * Layout Reducers
 */
var getLayoutState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["n" /* createFeatureSelector */])('layout');
var getShowSidenav = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["o" /* createSelector */])(getLayoutState, __WEBPACK_IMPORTED_MODULE_4__core_reducers_layout__["a" /* getShowSidenav */]);


/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_containers_not_found_page__ = __webpack_require__("../../../../../src/app/core/containers/not-found-page.ts");
//import { AuthGuard } from './auth/services/auth-guard.service';

var routes = [
    { path: '', redirectTo: '/releases', pathMatch: 'full' },
    {
        path: 'releases',
        loadChildren: './releases/releases.module#ReleasesModule'
        //canActivate: [AuthGuard],
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__core_containers_not_found_page__["a" /* NotFoundPageComponent */] },
];


/***/ }),

/***/ "../../../../../src/app/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomRouterStateSerializer; });
var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomRouterStateSerializer;
}());



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


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map