(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\n    margin-top: 100px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <br>\n  <router-outlet></router-outlet>\n\n  <footer>\n      <hr>\n      <p> voltraaBlog &copy; 2018</p>\n    </footer>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Voltraa Blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ckeditor */ "./node_modules/ngx-ckeditor/lib/src/index.js");
/* harmony import */ var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ngx_ckeditor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category.service */ "./src/app/category.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./posts/create-post/create-post.component */ "./src/app/posts/create-post/create-post.component.ts");
/* harmony import */ var _posts_posts_posts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./posts/posts/posts.component */ "./src/app/posts/posts/posts.component.ts");
/* harmony import */ var _categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./categories/categories/categories.component */ "./src/app/categories/categories/categories.component.ts");
/* harmony import */ var _categories_manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./categories/manage-categories/manage-categories.component */ "./src/app/categories/manage-categories/manage-categories.component.ts");
/* harmony import */ var _categories_posts_by_category_posts_by_category_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./categories/posts-by-category/posts-by-category.component */ "./src/app/categories/posts-by-category/posts-by-category.component.ts");
/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./posts/post/post.component */ "./src/app/posts/post/post.component.ts");
/* harmony import */ var _posts_manage_posts_manage_posts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./posts/manage-posts/manage-posts.component */ "./src/app/posts/manage-posts/manage-posts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'posts/create', component: _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_20__["CreatePostComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]] },
    { path: 'posts', component: _posts_posts_posts_component__WEBPACK_IMPORTED_MODULE_21__["PostsComponent"] },
    { path: 'categories', component: _categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_22__["CategoriesComponent"] },
    { path: 'category/:id', component: _categories_posts_by_category_posts_by_category_component__WEBPACK_IMPORTED_MODULE_24__["PostsByCategoryComponent"], pathMatch: 'full' },
    { path: 'post/:id', component: _posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__["PostComponent"], pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _posts_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_20__["CreatePostComponent"],
                _posts_posts_posts_component__WEBPACK_IMPORTED_MODULE_21__["PostsComponent"],
                _categories_categories_categories_component__WEBPACK_IMPORTED_MODULE_22__["CategoriesComponent"],
                _categories_manage_categories_manage_categories_component__WEBPACK_IMPORTED_MODULE_23__["ManageCategoriesComponent"],
                _categories_posts_by_category_posts_by_category_component__WEBPACK_IMPORTED_MODULE_24__["PostsByCategoryComponent"],
                _posts_post_post_component__WEBPACK_IMPORTED_MODULE_25__["PostComponent"],
                _posts_manage_posts_manage_posts_component__WEBPACK_IMPORTED_MODULE_26__["ManagePostsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"].forRoot(),
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"],
                ngx_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
            ],
            providers: [
                _validate_service__WEBPACK_IMPORTED_MODULE_15__["ValidateService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _post_service__WEBPACK_IMPORTED_MODULE_17__["PostService"],
                _category_service__WEBPACK_IMPORTED_MODULE_18__["CategoryService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getUserById = function (_id) {
        return this.http.get('users/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/categories/categories/categories.component.css":
/*!****************************************************************!*\
  !*** ./src/app/categories/categories/categories.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-tag {\r\n  background: #f4f4f4 !important;\r\n  padding: 4px;\r\n  margin: 3px 0;\r\n  display: block;\r\n}"

/***/ }),

/***/ "./src/app/categories/categories/categories.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/categories/categories/categories.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2><strong>Categories</strong></h2>\n<hr><br><br>\n\n<div *ngIf=\"categories\">\n\t\t<div *ngFor=\"let category of categories\" class=\"list-group\">\n\t\t\t<div class=\"list-group-item\">\n\t\t\t\t\t<h3><a [routerLink]=\"['/category', category._id]\">{{category.category_name}}</a></h3>\n\t\t\t\t\t<small class=\"category-tag\">Created on: <em>{{category.created_at}}</em></small>\n\t\t\t\t\t<br>\n\t\t\t</div>\n\t\t</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/categories/categories/categories.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/categories/categories/categories.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(categoryService, router, flashMessage) {
        this.categoryService = categoryService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (categories) {
            _this.categories = categories;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/manage-categories/manage-categories.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/categories/manage-categories/manage-categories.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nthead {\r\n    display: block;\r\n}\r\n\r\ntable {\r\n    width: 100%\r\n}\r\n*/\r\n\r\nbutton{\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn{\r\n    margin-right: 5px;\r\n}\r\n\r\ntbody{\r\n    display: block;\r\n    overflow-y: auto; \r\n}\r\n\r\nthead, tbody tr{\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n.body{\r\n    padding-top:10px;\r\n    padding-left: 10px; \r\n}\r\n\r\n#category{\r\n    padding-top:20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/categories/manage-categories/manage-categories.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/categories/manage-categories/manage-categories.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-header\">\n        <h3 class=\"text-center\">Manage Categories</h3>\n    </div>\n    <div class=\"body\">\n        <div class=\"row\">\n            <div class=\"col-md-5\" id=\"category\">\n                <form #categoryForm=\"ngForm\" (ngSubmit)=\"onCategorySubmit(categoryForm)\">\n                  <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"categoryService.selectedCategory._id\">\n                  <div class=\"form-group\">\n                    <label>Category Name: </label>\n                    <input class=\"form-control\" type=\"text\" name=\"category_name\" #name=\"ngModel\" [(ngModel)]=\"categoryService.selectedCategory.category_name\" placeholder=\"enter category name to be created...\" required>\n                  </div>\n                  <br>\n                  <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!categoryForm.valid\">Submit</button>\n                  <button class=\"btn btn-primary\" type=\"button\" (click)=\"resetForm(categoryForm)\">Reset</button>\n                </form>\n            </div>\n            <div class=\"col-md-7\" >\n                <h4>Categories created by {{user.name}}:</h4>\n                <br>\n                <table class=\"table table-responsive table-hover table-bordered table-sm\">\n                  <thead>\n                    <tr>\n                      <th>Category Name</th>\n                      <th>Manage</th>\n                      <th>Created on</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                  <div *ngIf=\"categoryService.categories\">\n                        <tr *ngFor=\"let category of categoryService.categories\"> \n                          <td>{{category.category_name}}</td>\n                          <td>\n                            <a class=\"btn btn-info\" (click)=\"onUpdate(category)\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                            <a class=\"btn btn-danger\" (click)=\"deleteCategory(category._id, categoryForm)\"><i class=\"fa fa-trash\"></i></a>\n                          </td>\n                          <td>{{category.created_at | slice:0:10}}</td>\n                        </tr>\n                  </div>\n                </tbody>\n                </table>\n            </div>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/categories/manage-categories/manage-categories.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/categories/manage-categories/manage-categories.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ManageCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCategoriesComponent", function() { return ManageCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ManageCategoriesComponent = /** @class */ (function () {
    function ManageCategoriesComponent(categoryService, router, flashMessage, validateService, authService) {
        this.categoryService = categoryService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
        this.authService = authService;
    }
    ManageCategoriesComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.refreshCategoryList();
    };
    ManageCategoriesComponent.prototype.resetForm = function (form) {
        if (form)
            form.reset();
        this.categoryService.selectedCategory = {
            _id: "",
            category_name: "",
            user_id: ""
        };
    };
    ManageCategoriesComponent.prototype.refreshCategoryList = function () {
        var _this = this;
        var userString = localStorage.getItem('user');
        this.user = JSON.parse(userString);
        this.categoryService.getCategoriesByUserId(this.user.id).subscribe(function (res) {
            _this.categoryService.categories = res;
            //console.log(this.categoryService.categories);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ManageCategoriesComponent.prototype.onCategorySubmit = function (form) {
        var _this = this;
        var category = {
            _id: form.value._id,
            category_name: form.value.category_name,
            user_id: this.user.id
        };
        // Required fields
        if (!this.validateService.validateCategory(category)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            //console.log('Please fill in all fields');
            return false;
        }
        if (form.value._id == "") {
            // save category
            this.categoryService.createCategory(category).subscribe(function (data) {
                if (data.success) {
                    _this.resetForm(form);
                    _this.refreshCategoryList();
                    _this.flashMessage.show('Category created successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['categories']);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['dashboard']);
                }
            });
        }
        else {
            // update category
            this.categoryService.updateCategory(category).subscribe(function (data) {
                if (data.success) {
                    _this.resetForm(form);
                    _this.refreshCategoryList();
                    _this.flashMessage.show('Category updated successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['categories']);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['dashboard']);
                }
            });
        }
    };
    ManageCategoriesComponent.prototype.onUpdate = function (category) {
        var _this = this;
        this.categoryService.selectedCategory = category;
        setTimeout(function () {
            _this.trgFocusEl.nativeElement.focus();
        }, 100);
    };
    ManageCategoriesComponent.prototype.deleteCategory = function (_id, form) {
        var _this = this;
        this.categoryService.deleteCategory(_id).subscribe(function (data) {
            /*
            if(data.n == 1){
              for(var i = 0; i < categories.length; i++){
                if(categories[i]._id == id){
                  categories.splice(i, 1);
                }
              }
            }
            */
            if (data.success) {
                _this.resetForm(form);
                _this.refreshCategoryList();
                _this.flashMessage.show('Category deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("name", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManageCategoriesComponent.prototype, "trgFocusEl", void 0);
    ManageCategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-categories',
            template: __webpack_require__(/*! ./manage-categories.component.html */ "./src/app/categories/manage-categories/manage-categories.component.html"),
            styles: [__webpack_require__(/*! ./manage-categories.component.css */ "./src/app/categories/manage-categories/manage-categories.component.css")],
            providers: [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"]]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ManageCategoriesComponent);
    return ManageCategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/posts-by-category/posts-by-category.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/categories/posts-by-category/posts-by-category.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-tag {\r\n    background: #f4f4f4 !important;\r\n    padding: 4px;\r\n    margin: 3px 0;\r\n    display: block;\r\n  }"

/***/ }),

/***/ "./src/app/categories/posts-by-category/posts-by-category.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/categories/posts-by-category/posts-by-category.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary\" [routerLink]=\"['/categories']\"><i class=\"fa fa-arrow-left\"></i>  Go back</a>\n<br><br><br>\n\n<h2><strong>Category: {{category.category_name}}</strong></h2>\n<hr><br><br>\n\n<div *ngIf=\"posts\">\n\t\t<div *ngFor=\"let post of posts\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h3><u>{{post.title}}</u></h3>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3\">\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9\">\n\t\t\t\t\t\t\t\t<small class=\"post-tag\">Created on: <em>{{post.created_at}}</em></small>\n\t\t\t\t\t\t\t\t<!-- <p>{{(post.body | slice:0:6)+'...'}}</p> -->\n\t\t\t\t\t\t\t\t<div [innerHTML]=\"(post.body | slice:0:300)+'...' \"></div>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/post', post._id]\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t</div>\n</div>\n\n<div *ngIf=\"!posts\">\n\t<p>No posts to display</p>\n</div>"

/***/ }),

/***/ "./src/app/categories/posts-by-category/posts-by-category.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/categories/posts-by-category/posts-by-category.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostsByCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsByCategoryComponent", function() { return PostsByCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsByCategoryComponent = /** @class */ (function () {
    function PostsByCategoryComponent(categoryService, postService, authService, route) {
        this.categoryService = categoryService;
        this.postService = postService;
        this.authService = authService;
        this.cat_id = route.snapshot.params['id'];
    }
    PostsByCategoryComponent.prototype.ngOnInit = function () {
        this.getCategoryInfo(this.cat_id);
        this.onPostsByCategory(this.cat_id);
    };
    PostsByCategoryComponent.prototype.getCategoryInfo = function (_id) {
        var _this = this;
        this.categoryService.getCategoryById(_id).subscribe(function (category) {
            _this.category = category;
            //this.user_id = this.category.user_id;
            // console.log(category);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PostsByCategoryComponent.prototype.onPostsByCategory = function (_id) {
        var _this = this;
        this.postService.getPostsByCategory(_id).subscribe(function (posts) {
            _this.posts = posts;
            //console.log(posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PostsByCategoryComponent.prototype.getCategoryUserInfo = function (_id) {
        this.user_id = this.category.user_id;
        //console.log(this.user_id);
        /*
        this.authService.getUserById(_id).subscribe(user => {
          this.user = user;
          console.log(user);
        },
        err => {
          console.log(err);
          return false;
        });
        */
    };
    PostsByCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts-by-category',
            template: __webpack_require__(/*! ./posts-by-category.component.html */ "./src/app/categories/posts-by-category/posts-by-category.component.html"),
            styles: [__webpack_require__(/*! ./posts-by-category.component.css */ "./src/app/categories/posts-by-category/posts-by-category.component.css")]
        }),
        __metadata("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostsByCategoryComponent);
    return PostsByCategoryComponent;
}());



/***/ }),

/***/ "./src/app/category.service.ts":
/*!*************************************!*\
  !*** ./src/app/category.service.ts ***!
  \*************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    CategoryService.prototype.createCategory = function (category) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('categories/create', category, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoryService.prototype.getCategories = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('categories/', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoryService.prototype.getCategoryById = function (id) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('categories/' + id, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoryService.prototype.updateCategory = function (category) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('categories/' + ("/" + category._id), category, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoryService.prototype.deleteCategory = function (_id) {
        return this.http.delete('categories/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoryService.prototype.getCategoriesByUserId = function (_id) {
        return this.http.get('categories/user/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Dashboard</h2>\n<br><br>\n\n<app-manage-categories></app-manage-categories>\n<br><br>\n\n<app-manage-posts></app-manage-posts>\n\n\t\t\n\t\n\t\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var userString = localStorage.getItem('user');
        this.user = JSON.parse(userString);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!authService.loggedIn()\" class=\"jumbotron text-center\">\n\t\t<h4>Welcome to the blog!</h4>\n\t\t<p class=\"lead\"><a [routerLink]=\"['/posts']\">View latest posts</a></p>\n\t\t<hr>\n\t\t<p class=\"lead\">Login to create a new post or Register if not already a member.</p>\n\t\t<div>\n\t\t\t<a class=\"btn btn-info\" [routerLink]=\"['/login']\">Login</a>\n\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n\t\t</div>\n</div>\n\n<div *ngIf=\"authService.loggedIn()\" class=\"jumbotron text-center\">\n\t<h4>Welcome to the blog!</h4>\n\t<p class=\"lead\"><a [routerLink]=\"['/posts']\">View latest posts</a></p>\n\t<hr>\n\t<p class=\"lead\">View latest posts or create a new post.</p>\n\t<div>\n\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/posts']\">Blog</a>\n\t\t<a class=\"btn btn-info\" [routerLink]=\"['/posts/create']\">Create post</a>\n\t</div>\n</div>\n\n<br>\n<div class=\"row\">\n\t\t<div class=\"col-md-4\">\n\t\t\t<h3>Express Backend</h3>\n\t\t\t<p>A rock solid Node.js/Express server using Mongoose to organize models and query the database</p>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<h3>Angular-CLI</h3>\n\t\t\t<p>Angular-CLI to generate components, services and more. Local dev server and easy compilation </p>\n\t\t</div>\n\t\t<div class=\"col-md-4\">\n\t\t\t<h3>JWT Tokens</h3>\n\t\t\t<p>Full featured authentication using JSON web tokens. Login and store user data</p>\n\t\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 offset-md-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h2 class=\"page-header text-center\">Login</h2>\n        </div>\n        <div class=\"card-body\">\n            <form (submit)=\"onLoginSubmit()\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Password</label>\n                  <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                </div>\n                <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Login\">\n              </form>\n        </div>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('You are now logged in', { cssClass: 'alert-success', timeout: 5000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 5000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\nnav{\r\n    font-size: 1.5em !important;\r\n} \r\n*/\r\n\r\n.nav-item a{\r\n    font-size: 1em !important;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">voltraaBlog</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor01\" aria-controls=\"navbarColor01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarColor01\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/posts']\"><i class=\"fa fa-newspaper-o\" aria-hidden=\"true\"></i><strong> Blog</strong></a>\n        </li>\n        <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a class=\"nav-link\" [routerLink]=\"['/categories']\">Categories</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"nav-link\" [routerLink]=\"['/posts/create']\">Create post</a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n          </li>\n\t\t      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n          </li>\n          <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n          </li>\n          <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n          </li>\n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('You are logged out', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PostService.prototype.createPost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('posts/create', post, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPosts = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        //this.authService.loadToken();
        //headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get('posts/', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPost = function (_id) {
        return this.http.get('posts/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPostsByCategory = function (_id) {
        return this.http.get('posts/category/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.getPostsByUserId = function (_id) {
        return this.http.get('posts/user/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.updatePost = function (post) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('posts' + ("/" + post._id), post, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService.prototype.deletePost = function (_id) {
        return this.http.delete('posts/' + _id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/posts/create-post/create-post.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/create-post/create-post.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/posts/create-post/create-post.component.html":
/*!**************************************************************!*\
  !*** ./src/app/posts/create-post/create-post.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Create post</h2>\n<br>\n<form (submit)=\"onPostSubmit()\">\n  <div class=\"form-group\">\n    <label>Title</label>\n    <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" placeholder=\"enter post title...\">\n  </div>\n  <div class=\"form-group\">\n    <label>Body</label>\n    <ck-editor name=\"body\" [(ngModel)]=\"body\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"false\" placeholder=\"enter post body...\"></ck-editor>\n  </div>\n  <div class=\"form-group\">\n    <label>Category</label>\n    <select class=\"form-control\" id=\"category_id\" [(ngModel)]=\"category_id\" name=\"category_id\">\n      <option *ngFor=\"let category of this.categories\" value=\"{{category._id}}\">{{category.category_name}}</option>\n    </select>\n  </div>\n  <br>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n\n<!--\n  <textarea [(ngModel)]=\"body\" name=\"body\" class=\"form-control\"></textarea>\n-->"

/***/ }),

/***/ "./src/app/posts/create-post/create-post.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/create-post/create-post.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(validateService, flashMessage, authService, router, postService, categoryService) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
        this.postService = postService;
        this.categoryService = categoryService;
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.user_id = profile.user._id;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.getCategories();
    };
    CreatePostComponent.prototype.onPostSubmit = function () {
        var _this = this;
        var post = {
            title: this.title,
            body: this.body,
            user_id: this.user_id,
            category_id: this.category_id
        };
        console.log(post);
        // Required fields
        if (!this.validateService.validatePost(post)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            //console.log('Please fill in all fields');
            return false;
        }
        // create post
        this.postService.createPost(post).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Post created successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/posts']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/create']);
            }
        });
    };
    // get categories
    CreatePostComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (catgs) {
            _this.categories = catgs;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    CreatePostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-post',
            template: __webpack_require__(/*! ./create-post.component.html */ "./src/app/posts/create-post/create-post.component.html"),
            styles: [__webpack_require__(/*! ./create-post.component.css */ "./src/app/posts/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
    ], CreatePostComponent);
    return CreatePostComponent;
}());



/***/ }),

/***/ "./src/app/posts/manage-posts/manage-posts.component.css":
/*!***************************************************************!*\
  !*** ./src/app/posts/manage-posts/manage-posts.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\r\n    margin-right: 5px;\r\n}\r\n\r\n.btn{\r\n    margin-right: 5px;\r\n}\r\n\r\ntbody{\r\n    display: block;\r\n    overflow-y: auto; \r\n}\r\n\r\nthead, tbody tr{\r\n    display: table;\r\n    width: 100%;\r\n    table-layout: fixed;\r\n}\r\n\r\n/*\r\nthead{\r\n    width: calc(100% - 1em);\r\n}\r\n*/"

/***/ }),

/***/ "./src/app/posts/manage-posts/manage-posts.component.html":
/*!****************************************************************!*\
  !*** ./src/app/posts/manage-posts/manage-posts.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"text-center\">Manage Posts</h4>\n      </div>\n      <div class=\"card-body\">\n          <form #postForm=\"ngForm\" (ngSubmit)=\"onPostSubmit(postForm)\">\n              <input type=\"hidden\" name=\"_id\" #_id=\"ngModel\" [(ngModel)]=\"postService.selectedPost._id\">\n              <div class=\"form-group\">\n                <label>Title: </label>\n                <input class=\"form-control\" type=\"text\" name=\"title\" #name=\"ngModel\" [(ngModel)]=\"postService.selectedPost.title\" placeholder=\"enter post title...\" required>\n              </div>\n              <div class=\"form-group\">\n                <label>Body: </label>\n                <ck-editor name=\"body\" #name=\"ngModel\" [(ngModel)]=\"postService.selectedPost.body\" skin=\"moono-lisa\" language=\"en\" [fullPage]=\"false\" placeholder=\"enter post body...\" required></ck-editor>\n                <!--\n                <textarea class=\"form-control\" name=\"body\" #name=\"ngModel\" [(ngModel)]=\"postService.selectedPost.body\" placeholder=\"enter post body...\" required></textarea>\n                -->  \n              </div>\n              <div class=\"form-group\">\n                  <label>Category: </label>\n                  <select class=\"form-control\" id=\"category_id\" name=\"category_id\" #name=\"ngModel\" [(ngModel)]=\"postService.selectedPost.category_id\" required> \n                      <option *ngFor=\"let category of this.categories\" value=\"{{category._id}}\">{{category.category_name}}</option>\n                  </select>\n                </div>\n              <br>\n              <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!postForm.valid\">Submit</button>\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"resetForm(postForm)\">Reset</button>\n          </form>\n          <hr><br><br>\n\n          <h5>Posts created by {{user.name}}:</h5>\n          <br>\n          <table class=\"table table-responsive table-hover table-bordered table-sm\">\n            <!---->\n            <thead>\n              <tr>\n                <th>Post Name</th>\n                <th>Manage</th>\n                <th>Created on</th>\n              </tr>\n            </thead>\n            <tbody>\n            <div *ngIf=\"postService.posts\">\n                  <tr *ngFor=\"let post of postService.posts\"> \n                    <td>{{post.title}}</td>\n                    <td>\n                      <a class=\"btn btn-info\" (click)=\"onUpdate(post)\"><i class=\"fa fa-pencil-square-o\"></i></a>\n                      <a class=\"btn btn-danger\" (click)=\"deletePost(post._id, postForm)\"><i class=\"fa fa-trash\"></i></a>\n                    </td>\n                    <td>{{post.created_at | slice:0:10}}</td>\n                  </tr>\n            </div>\n          </tbody>\n          </table>\n          <br><br>\n\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/posts/manage-posts/manage-posts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/posts/manage-posts/manage-posts.component.ts ***!
  \**************************************************************/
/*! exports provided: ManagePostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePostsComponent", function() { return ManagePostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../category.service */ "./src/app/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ManagePostsComponent = /** @class */ (function () {
    function ManagePostsComponent(router, flashMessage, postService, categoryService, validateService, authService) {
        this.router = router;
        this.flashMessage = flashMessage;
        this.postService = postService;
        this.categoryService = categoryService;
        this.validateService = validateService;
        this.authService = authService;
    }
    ManagePostsComponent.prototype.ngOnInit = function () {
        this.getCategories();
        this.resetForm();
        this.refreshPostList();
    };
    ManagePostsComponent.prototype.resetForm = function (form) {
        if (form) {
            form.reset();
        }
        this.postService.selectedPost = {
            _id: "",
            title: "",
            body: "",
            category_id: "",
            user_id: ""
        };
    };
    ManagePostsComponent.prototype.refreshPostList = function () {
        var _this = this;
        var userString = localStorage.getItem('user');
        this.user = JSON.parse(userString);
        this.postService.getPostsByUserId(this.user.id).subscribe(function (res) {
            _this.postService.posts = res;
            //console.log(this.postService.posts);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // get categories
    ManagePostsComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (catgs) {
            _this.categories = catgs;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ManagePostsComponent.prototype.onPostSubmit = function (form) {
        var _this = this;
        var post = {
            _id: form.value._id,
            title: form.value.title,
            body: form.value.body,
            category_id: form.value.category_id,
            user_id: this.user.id
        };
        // Required fields
        if (!this.validateService.validatePost(post)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            //console.log('Please fill in all fields');
            return false;
        }
        if (form.value._id == "") {
            // save category
            this.postService.createPost(post).subscribe(function (data) {
                if (data.success) {
                    _this.resetForm(form);
                    _this.refreshPostList();
                    _this.flashMessage.show('Post created successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['posts']);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['dashboard']);
                }
            });
        }
        else {
            // update category
            this.postService.updatePost(post).subscribe(function (data) {
                if (data.success) {
                    _this.resetForm(form);
                    _this.refreshPostList();
                    _this.flashMessage.show('Post updated successfully', { cssClass: 'alert-success', timeout: 3000 });
                    _this.router.navigate(['posts']);
                }
                else {
                    _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.router.navigate(['dashboard']);
                }
            });
        }
    };
    ManagePostsComponent.prototype.onUpdate = function (post) {
        var _this = this;
        this.postService.selectedPost = post;
        setTimeout(function () {
            _this.trgFocusEl.nativeElement.focus();
        }, 100);
    };
    ManagePostsComponent.prototype.deletePost = function (_id, form) {
        var _this = this;
        this.postService.deletePost(_id).subscribe(function (data) {
            if (data.success) {
                _this.resetForm(form);
                _this.refreshPostList();
                _this.flashMessage.show('Post deleted successfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['dashboard']);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("name", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ManagePostsComponent.prototype, "trgFocusEl", void 0);
    ManagePostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-posts',
            template: __webpack_require__(/*! ./manage-posts.component.html */ "./src/app/posts/manage-posts/manage-posts.component.html"),
            styles: [__webpack_require__(/*! ./manage-posts.component.css */ "./src/app/posts/manage-posts/manage-posts.component.css")],
            providers: [_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], _category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"],
            _category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"],
            _validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ManagePostsComponent);
    return ManagePostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/post/post.component.css":
/*!***********************************************!*\
  !*** ./src/app/posts/post/post.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-tag {\r\n    background: #f4f4f4 !important;\r\n    padding: 4px;\r\n    margin: 3px 0;\r\n    display: block;\r\n  }\r\n\r\n  /*\r\n  @font-face{\r\n    font-family: newscycle;\r\n    src: url('../../../assets/font/NewsCycle-Regular.ttf');\r\n  }\r\n  \r\n  body{\r\n      font-family: newscycle !important;\r\n      font-size: 1em;\r\n  }\r\n  */"

/***/ }),

/***/ "./src/app/posts/post/post.component.html":
/*!************************************************!*\
  !*** ./src/app/posts/post/post.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<a class=\"btn btn-primary\" [routerLink]=\"['/posts']\"><i class=\"fa fa-arrow-left\"></i>  Go back</a>\n<br><br><br>\n\n<div *ngIf=\"post\">\n\t\n\t<div class=\"card\">\n\t\t<div class=\"card-body\">\n\t\t\t<h2 class=\"text-center\"><strong><u>{{post.title}}</u></strong></h2>\n\t\t\t<br>\n\t\t\n\t\t\t\n\t\t\t<div class=\"text-justify\" [innerHTML]=\"post.body\">\n\t\t\t</div>\n\t\t\t<br><br>\n\n\t\t\t<small class=\"post-tag\">Created on: <em>{{post.created_at}}</em></small>\n\t\t</div>\n\t</div>\n\t\t\n</div>\n\n\n<!--\n\t\t<div class=\"list-group-item\">\n          <p>{{post.body}}</p>\n\t\t\t\t\t<small class=\"post-tag\">Created on: <em>{{post.created_at}}</em></small>\n\t\t\t\t\t<br>\n\t\t\t</div>\n\n-->\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/posts/post/post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, authService, route) {
        this.postService = postService;
        this.authService = authService;
        this.post_id = route.snapshot.params['id'];
    }
    PostComponent.prototype.ngOnInit = function () {
        this.getPost(this.post_id);
    };
    PostComponent.prototype.getPost = function (_id) {
        var _this = this;
        this.postService.getPost(_id).subscribe(function (post) {
            _this.post = post;
            //console.log(post);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/posts/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/posts/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts/posts.component.css":
/*!*************************************************!*\
  !*** ./src/app/posts/posts/posts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-tag {\r\n    background: #f4f4f4 !important;\r\n    padding: 4px;\r\n    margin: 3px 0;\r\n    display: block;\r\n  }"

/***/ }),

/***/ "./src/app/posts/posts/posts.component.html":
/*!**************************************************!*\
  !*** ./src/app/posts/posts/posts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2><strong>Latest posts</strong></h2>\n<hr><br><br>\n\n<div *ngIf=\"posts\">\n\t\t<div *ngFor=\"let post of posts\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<h3><u>{{post.title}}</u></h3>\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3\">\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9\">\n\t\t\t\t\t\t\t\t<small class=\"post-tag\">Created on: <em>{{post.created_at}}</em></small>\t\t\t\t\n\t\t\t\t\t\t\t\t<div [innerHTML]=\"(post.body | slice:0:300)+'...' \"></div>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-primary\" [routerLink]=\"['/post', post._id]\">Read More</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<br><br>\n\t\t</div>\n</div>\n\n\n\n<!--\n<div class=\"list-group-item\">\n\t\t\t\t\t<h3><a [routerLink]=\"['/post', post._id]\">{{post.title}}</a></h3>\n\t\t\t\t\t<p>{{(post.body | slice:0:6)+'...'}}</p>\n\t\t\t\t\t<div [innerHTML]=\"post.body\"></div>\n\t\t\t\t\t<small class=\"post-tag\">Created on: <em>{{post.created_at}}</em></small>\n\t\t\t</div>\n\t\t\t<br><br>\n-->\n\n\n\n\n<!--\n\n<div *ngIf=\"posts\">\n\n\t\t\n\t\t<ul *ngFor=\"let post of posts\" class=\"list-group\">\n      <h2 class=\"page-header\">{{post.title}}</h2>\n\t\t\t<li class=\"list-group-item\">{{post.body}}</li>\n\t\t\t<li class=\"list-group-item\">category: {{post.category_id}}</li>\n\t\t</ul>\n\n\n\n</div>\n\n-->"

/***/ }),

/***/ "./src/app/posts/posts/posts.component.ts":
/*!************************************************!*\
  !*** ./src/app/posts/posts/posts.component.ts ***!
  \************************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService, router, flashMessage) {
        this.postService = postService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts().subscribe(function (posts) {
            _this.posts = posts;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts/posts.component.css")]
        }),
        __metadata("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n\t\t\t<h2 class=\"page-header text-center\">User profile</h2>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<ul class=\"list-group\">\n\t\t\t\t<li class=\"list-group-item\">Name: {{user.name}}</li>\n\t\t\t\t<li class=\"list-group-item\">Username: {{user.username}}</li>\n\t\t\t\t<li class=\"list-group-item\">Email: {{user.email}}</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t</div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\n    <div class=\"col-md-4 offset-md-4\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h2 class=\"page-header text-center\">Register</h2>    \n            </div>\n            <div class=\"card-body\">\n                    <form (submit)=\"onRegisterSubmit()\">\n                            <div class=\"form-group\">\n                                <label>Name</label>\n                                <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Username</label>\n                                <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Email</label>\n                                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n                            </div>\n                            <div class=\"form-group\">\n                                <label>Password</label>\n                                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n                            </div>\n                            <input type=\"submit\" class=\"btn btn-primary btn-block\" value=\"Submit\">\n                       </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validate.service */ "./src/app/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
            //console.log('Please fill in all fields');
            return false;
        }
        // validate email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            //console.log('Please use a valid email');
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('You are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/validate.service.ts":
/*!*************************************!*\
  !*** ./src/app/validate.service.ts ***!
  \*************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validatePost = function (post) {
        if (post.title == undefined || post.body == undefined || post.category_id == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateCategory = function (category) {
        if (category.category_name == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Workspace\nodejs\blogapp\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map