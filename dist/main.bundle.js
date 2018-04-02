webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sortable_directive__ = __webpack_require__("../../../../../src/app/sortable.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_list_order_by_pipe_pipe__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_26__sortable_directive__["a" /* SortableDirective */],
                __WEBPACK_IMPORTED_MODULE_27__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_widget_widget_list_order_by_pipe_pipe__["a" /* OrderByPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_22_ngx_quill_editor__["a" /* QuillEditorModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_6__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_7__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_30__services_flickr_service_client__["a" /* FlickrService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__ = __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__ = __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__ = __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__ = __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__ = __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__ = __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_text_widget_text_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_html_widget_html_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__ = __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");



















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/header', component: __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/image', component: __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/youtube', component: __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/html', component: __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_edit_widget_html_widget_html_component__["a" /* WidgetHtmlComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new/text', component: __WEBPACK_IMPORTED_MODULE_13__components_widget_widget_edit_widget_text_widget_text_component__["a" /* WidgetTextComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid/flickr', component: __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__["a" /* FlickrImageSearchComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n            </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n            <a (click)=\"updatePage()\" class=\"icon-padding text-black\">\n              <span class=\"glyphicon glyphicon-ok\"></span>\n            </a>\n        </div>\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\"./\">\n            Edit Page\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n    <div class=\"form-group\">\n        <label for=\"page-name\">Name</label>\n        <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"page-title\">Title</label>\n        <input [(ngModel)]=\"page.title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n    <div class=\"form-group\">\n      <button (click)=\"deletePage()\" class=\"btn btn-danger form-control\" type=\"button\">Delete</button>\n    </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a routerLink=\"../../../..\" class=\"icon-padding\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, route) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.page = new __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__["a" /* Page */]('', '', '');
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            return _this.pageService.findPageById(_this.pageId).subscribe(function (page) {
                _this.page = page;
            });
        });
    };
    PageEditComponent.prototype.updatePage = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.pageService.updatePage(_this.page).subscribe(function (data) {
                alert(_this.page.name + ' saved successfully');
                _this.route.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            });
        });
    };
    PageEditComponent.prototype.deletePage = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.pageService.deletePage(_this.pageId).subscribe(function (data) {
                _this.route.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
            });
        });
    };
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n\n    <div class=\"navbar-text pull-left\">\n      <a routerLink=\"../..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n      </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n      <a routerLink=\"./new\" class=\"icon-padding text-black\">\n          <span class=\"glyphicon glyphicon-plus\">\n          </span>\n      </a>\n    </div>\n    <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n      Pages\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <ul class=\"list-group list-group-borderless\">\n    <li class=\"list-group-item list-item-borderless\" *ngFor = \"let page of pages\">\n       <a routerLink=\"./{{page._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n       <a routerLink=\"./{{page._id}}/widget\">{{page.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a routerLink=\"../../..\" class=\"icon-padding\">\n        <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.websiteId = params['wid'];
            return _this.pageService.findAllPagesForWebsite(_this.websiteId).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n            </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n            <a (click)=\"createPage()\" class=\"icon-padding text-black\">\n          <span class=\"glyphicon glyphicon-ok\">\n          </span>\n            </a>\n        </div>\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n            New Page\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n  </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a routerLink=\"../../../..\" class=\"icon-padding\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_page_service_client__ = __webpack_require__("../../../../../src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__ = __webpack_require__("../../../../../src/app/models/page.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.page = new __WEBPACK_IMPORTED_MODULE_3__models_page_model_client__["a" /* Page */]('', _this.websiteId, '');
        });
    };
    PageNewComponent.prototype.createPage = function () {
        var _this = this;
        this.pageService.createPage(this.websiteId, this.page).subscribe(function (data) {
            alert(_this.page.name + ' has been created!');
            _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page']);
        });
    };
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Login</h1>\n\n  <form (ngSubmit) = \"login()\" #f=\"ngForm\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      <span>Invalid username or password!</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\"\n             ngModel required #username=\"ngModel\"/>\n       <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n               Please enter username!\n       </span>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\"\n             ngModel required #password=\"ngModel\"/>\n      <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n              Please enter password!\n      </span>\n    </div>\n\n    <button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"!f.valid\">Login</button>\n    <button class=\"btn btn-success btn-block\" type=\"button\" routerLink=\"/register\">Register</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.errorFlag = false;
        this.userService.findUserByCredentials(this.username, this.password)
            .subscribe(function (user) {
            if (user) {
                _this.router.navigate(['/user', user._id]);
            }
            else {
                _this.errorFlag = true;
            }
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.username = null;
        this.password = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar blue-navbar navbar-fiexed-top\">\n  <div class=\"container-fluid\">\n    <a class=\"text-white navbar-brand text-bold\">\n      Profile\n    </a>\n    <a (click)=\"updateUser()\" class=\"navbar-text pull-right text-white icon-padding\">\n      <span class=\"glyphicon glyphicon-ok\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input [(ngModel)]=\"user.username\" placeholder=\"jannunzi\" id=\"username\" type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Email address</label>\n    <input [(ngModel)]=\"user.email\" placeholder=\"jannunzi@gmail.com\" id=\"email\" type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>First Name</label>\n    <input [(ngModel)]=\"user.firstName\" placeholder=\"Jose\" id=\"firstName\" type=\"text\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>Last Name</label>\n    <input [(ngModel)]=\"user.lastName\" placeholder=\"Annunziato\" id=\"lastName\" type=\"text\" class=\"form-control\">\n  </div>\n  <button class=\"btn btn-success btn-block\" type=\"button\" routerLink=\"/user/{{user._id}}/website\">Websites</button>\n  <button class=\"btn btn-primary btn-block\" type=\"button\" routerLink=\"/login\">Logout</button>\n  <button (click)=\"deleteUser()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n</div>\n\n<nav class=\"navbar blue-navbar navbar-fixed-bottom\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/user/{{user._id}}\" class=\"navbar-link navbar-text pull-right text-white icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService, activatedRoute, route) {
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_user_model_client__["a" /* User */]('', '', '', '', '');
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.userService.findUserById(_this.userId).subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.updateUser(_this.user).subscribe();
        });
        alert(this.user.username + ' save successfully');
    };
    ProfileComponent.prototype.deleteUser = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.userService.deleteUser(_this.userId).subscribe(function (data) {
                _this.route.navigate(['/login']);
            });
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form (ngSubmit) = \"register()\" #f=\"ngForm\">\n    <div *ngIf=\"errorFlag\"\n         class=\"alert alert-danger\">\n      <span>Password mis-matching!</span>\n    </div>\n    <div class=\"form-group\">\n      <label>Username</label>\n      <input placeholder=\"username\" name=\"username\" type=\"text\" class=\"form-control\"\n             ngModel required #username=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Password</label>\n      <input placeholder=\"password\" name=\"password\" type=\"password\" class=\"form-control\"\n             ngModel required #password=\"ngModel\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Verify Password</label>\n      <input placeholder=\"verify password\" name=\"verify\" type=\"password\" class=\"form-control\"\n             ngModel required #password=\"ngModel\"/>\n    </div>\n    <button class=\"btn btn-primary btn-block\" type=\"submit\">Register</button>\n    <button class=\"btn btn-danger btn-block\" type=\"button\" routerLink=\"/login\">Cancel</button>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service_client__ = __webpack_require__("../../../../../src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__ = __webpack_require__("../../../../../src/app/models/user.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var userName = this.registerForm.value.username;
        var password = this.registerForm.value.password;
        var verify = this.registerForm.value.verify;
        if (password !== verify) {
            this.errorFlag = true;
        }
        else {
            this.errorFlag = false;
            this.user = new __WEBPACK_IMPORTED_MODULE_4__models_user_model_client__["a" /* User */](userName, password, '', '', '');
            this.userService.createUser(this.user).subscribe(function (user) {
                alert(_this.user.username + ' has been created!');
                _this.router.navigate(['/user', user._id]);
            });
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top blue-navbar\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-1 col-sm-4\">\r\n      <div class=\"container-fluid row\">\r\n        <div class=\"col-xs-2\">\r\n          <p class=\"navbar-text pull-left\">\r\n            <a routerLink=\"../\" class=\"text-white\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n            </a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-xs-10 hidden-xs\">\r\n          <a class=\"text-white navbar-brand text-bold\" routerLink=\"./\">\r\n            Websites\r\n          </a>\r\n          <a routerLink=\"../new\" class=\"navbar-text pull-right text-white icon-padding\">\r\n            <span class=\"glyphicon glyphicon-plus\"></span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xs-11 col-sm-8\">\r\n      <div class=\"container-fluid\">\r\n        <a class=\"text-white navbar-brand text-bold\" routerLink=\"./\">\r\n          Edit Websites\r\n        </a>\r\n        <a (click)=\"updateWeb()\" class=\"navbar-text pull-right text-white icon-padding\">\r\n          <span class=\"glyphicon glyphicon-ok\"></span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n </div>\r\n</nav>\r\n\r\n<div class=\"contain-fluid container-padding\">\r\n  <div class=\"col-xs-4 hidden-xs\">\r\n    <ul class=\"list-group list-group-borderless\">\r\n      <li class=\"list-group-item list-item-borderless\" *ngFor = \"let website of websites\">\r\n        <a routerLink=\"../{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\r\n        <a routerLink=\"../{{website._id}}/page\">{{website.name}}</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 group-padding column-border\">\r\n      <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input [(ngModel)]=\"website.name\" placeholder=\"Blogger\" type=\"text\" class=\"form-control\"id=\"name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea [(ngModel)]=\"website.description\" rows=\"5\" type=\"text\" class=\"form-control\" id=\"description\"\r\n                   placeholder=\"Blog is a blog-publishing service that allows multi-user blogs with time-stamped entries\">\r\n        </textarea>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <button (click)=\"deleteWeb()\" class=\"btn btn-danger form-control\" type=\"button\">Delete</button>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<nav class=\"navbar navbar-fixed-bottom blue-navbar\">\r\n  <div class=\"container-fuild\">\r\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right text-white icon-padding\">\r\n      <span class=\"glyphicon glyphicon-user\"></span>\r\n    </a>\r\n  </div>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, route) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.route = route;
        this.website = new __WEBPACK_IMPORTED_MODULE_2__models_website_model_client__["a" /* Website */]('', '', '');
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.websiteService.findWebsitesForUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
        this.activatedRoute.params.subscribe(function (params) {
            _this.webId = params['wid'];
            return _this.websiteService.findWebsiteById(_this.webId).subscribe(function (website) {
                _this.website = website;
            });
        });
    };
    WebsiteEditComponent.prototype.updateWeb = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.websiteService.updateWebsite(_this.website).subscribe(function (data) {
                alert(_this.website.name + ' saved successfully');
                _this.route.navigate(['/user', _this.userId, 'website']);
            });
        });
    };
    WebsiteEditComponent.prototype.deleteWeb = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.websiteService.deleteWebsite(_this.webId).subscribe(function (data) {
                _this.route.navigate(['/user', _this.userId, 'website']);
            });
        });
    };
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar blue-navbar navbar-fiexed-top\">\n  <div class=\"container-fluid\">\n    <p class=\"navbar-text pull-left\">\n      <a routerLink=\"../\" class=\"text-white\">\n        <span class=\"glyphicon glyphicon-chevron-left text-white\"></span>\n      </a>\n    </p>\n    <a class=\"text-white navbar-brand text-bold\" routerLink=\"./\">\n      Websites\n    </a>\n    <a routerLink=\"./new\" class=\"navbar-text pull-right text-white icon-padding\">\n      <span class=\"glyphicon glyphicon-plus\"></span>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n  <ul class=\"list-group list-group-borderless\">\n    <li class=\"list-group-item list-item-borderless\" *ngFor = \"let website of websites\">\n      <a routerLink=\"./{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n      <a routerLink=\"./{{website._id}}/page\">{{website.name}}</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom blue-navbar\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"..\" class=\"navbar-text pull-right text-white icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            return _this.websiteService.findWebsitesForUser(_this.userId).subscribe(function (websites) {
                console.log(websites);
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top blue-navbar\">\n  <div class=\"row\">\n    <div class=\"col-xs-1 col-sm-4\">\n      <div class=\"container-fluid row\">\n        <div class=\"col-xs-2\">\n          <p class=\"navbar-text pull-left\">\n            <a routerLink=\"../\" class=\"text-white\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n          </p>\n        </div>\n        <div class=\"col-xs-10 hidden-xs\">\n          <a class=\"text-white navbar-brand text-bold\" routerLink=\"./\">\n            Websites\n          </a>\n          <a routerLink=\".\" class=\"navbar-text pull-right text-white icon-padding\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xs-11 col-sm-8\">\n      <div class=\"container-fluid\">\n        <a class=\"text-white navbar-brand text-bold\" routerLink=\"./\">\n          New Websites\n        </a>\n        <a (click)=\"createWeb()\" class=\"navbar-text pull-right text-white icon-padding\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n      </div>\n    </div>\n </div>\n</nav>\n\n<div class=\"contain-fluid container-padding\">\n  <div class=\"col-xs-4 hidden-xs\">\n    <ul class=\"list-group list-group-borderless\">\n      <li class=\"list-group-item list-item-borderless\" *ngFor = \"let website of websites\">\n        <a routerLink=\"../{{website._id}}\"><span class=\"glyphicon glyphicon-cog pull-right\"></span></a>\n        <a routerLink=\"../{{website._id}}/page\">{{website.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-xs-12 col-sm-8 col-md-8 col-lg-8 group-padding column-border\">\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input [(ngModel)]=\"website.name\" placeholder=\"Blogger\" type=\"text\" class=\"form-control\"id=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label>Description</label>\n      <textarea [(ngModel)]=\"website.description\" rows=\"5\" type=\"text\" class=\"form-control\" id=\"description\"\n                 placeholder=\"Blog is a blog-publishing service that allows multi-user blogs with time-stamped entries\">\n      </textarea>\n    </div>\n  </div>\n</div>\n\n<nav class=\"navbar navbar-fixed-bottom blue-navbar\">\n  <div class=\"container-fuild\">\n    <a routerLink=\"../..\" class=\"navbar-link navbar-text pull-right text-white icon-padding\">\n      <span class=\"glyphicon glyphicon-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__ = __webpack_require__("../../../../../src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__ = __webpack_require__("../../../../../src/app/models/website.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(activatedRoute, websiteService, router) {
        this.activatedRoute = activatedRoute;
        this.websiteService = websiteService;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.website = new __WEBPACK_IMPORTED_MODULE_3__models_website_model_client__["a" /* Website */]('', _this.userId, '');
            return _this.websiteService.findWebsitesForUser(_this.userId).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.createWeb = function () {
        var _this = this;
        this.websiteService.createWebsite(this.userId, this.website).subscribe(function (data) {
            alert(_this.website.name + ' has been created!');
            _this.router.navigate(['user', _this.userId, 'website']);
        });
    };
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"../\" class=\"text-black icon-padding\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n        </div>\n\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n            Choose Widget\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n    <ul class=\"list-group list-group-borderless\">\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\"./header\">Header</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\".\">Label</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\"./html\">HTML</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\"./text\">Text Input</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\".\">Link</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\".\">Button</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\"./image\">Image</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\"./youtube\">YouTube</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\".\">Data Table</a>\n          </li>\n          <li class=\"list-group-item list-item-borderless\">\n              <a routerLink=\".\">Repeater</a>\n          </li>\n    </ul>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a routerLink=\"../../../../..\" class=\"icon-padding\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
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

var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () { };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n <div *ngSwitchCase=\"'HEADING'\">\n   <app-widget-header></app-widget-header>\n </div>\n\n <div *ngSwitchCase=\"'IMAGE'\">\n   <app-widget-image></app-widget-image>\n </div>\n\n <div *ngSwitchCase=\"'YOUTUBE'\">\n   <app-widget-youtube></app-widget-youtube>\n </div>\n\n  <div *ngSwitchCase=\"'TEXT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n  <div *ngSwitchCase=\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activatedRoute, widgetService) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', '', '', 3, '', '', '', 1, '', false);
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.widgetId = params['wgid'];
            return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n        <a routerLink=\"..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n        <a (click)=\"updateHeader()\" class=\"icon-padding text-black\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n    </div>\n    <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n        Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n    <div class=\"form-group\">\n        <label for=\"heading-name\">Name</label>\n        <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"heading-text\">Text</label>\n        <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"US Senate Reaches Compromise on Emergency\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"heading-size\">Size</label>\n        <input [(ngModel)]=\"widget.size\" type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n    <div class=\"from-group\">\n       <button (click)=\"deleteHeader()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n    </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a [routerLink]=\"['/user',userId]\" class=\"icon-padding\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'HEADING', this.pageId, 3, '', '', '', 1, '', false);
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId !== undefined) {
                return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    WidgetHeaderComponent.prototype.updateHeader = function () {
        var _this = this;
        if (this.widgetId === undefined) {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                alert(_this.widget.name + ' saved successfully');
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.activatedRoute.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget).subscribe(function (data) {
                    alert(_this.widget.name + ' saved successfully');
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                });
            });
        }
    };
    WidgetHeaderComponent.prototype.deleteHeader = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widgetId).subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
    };
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n        <a routerLink=\"..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n        <a (click)=\"updateHtml()\" class=\"icon-padding text-black\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n    </div>\n    <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n        Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n    <div class=\"form-group\">\n        <label for=\"text-name\">Name</label>\n        <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"text-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"html-editor\">HTML</label>\n      <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    </div>\n    <div class=\"from-group\">\n       <button (click)=\"deleteHtml()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n    </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a [routerLink]=\"['/user',userId]\" class=\"icon-padding\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHtmlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', 'HTML', this.pageId, 3, '', '', '', 1, '', false);
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId !== undefined) {
                return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    WidgetHtmlComponent.prototype.updateHtml = function () {
        var _this = this;
        if (this.widgetId === undefined) {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                alert(_this.widget.name + ' saved successfully');
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.activatedRoute.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget).subscribe(function (data) {
                    alert(_this.widget.name + ' saved successfully');
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                });
            });
        }
    };
    WidgetHtmlComponent.prototype.deleteHtml = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widgetId).subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
    };
    WidgetHtmlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-html',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"..\" class=\"text-black icon-padding\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n        </div>\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n            Search Flickr\n        </a>\n    </div>\n</nav>\n\n<div class = \"container container-padding\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n        <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n            <span class=\"glyphicon glyphicon-search\"></span>\n        </a>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\" class=\"col-xs-4\">\n      <img   (click)=\"selectPhoto(pic)\" width=\"100%\"\n              [src] = \"['https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' + pic.id + '_' + pic.secret + '_s.jpg']\"/>\n              <!--[src] = \"https://farm\" + photo.farm + \".staticflickr.com/\" + photo.server + \"/\" + photo.id + \"_\" + photo.secret + \"_\" + \"s.jpg\"/>-->\n      <p></p>\n    </div>\n  </div>\n\n</div>\n\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a routerLink=\"/user/{{userId}}\" class=\"icon-padding\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrImageSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__ = __webpack_require__("../../../../../src/app/services/flickr.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(flickrService, widgetService, router, activatedRoute) {
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.widget = new __WEBPACK_IMPORTED_MODULE_4__models_widget_model_client__["a" /* Widget */]('', 'IMAGE', '', 3, '', '', '', 1, '', false);
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // fetch userId, pageId and websiteId from url
        this.activatedRoute.params.subscribe(function (params) {
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.pageId = params['pid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId !== undefined) {
                return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService.searchPhotos(this.searchText).subscribe(function (data) {
            var val = data._body;
            val = val.replace('jsonFlickrApi(', '');
            val = val.substring(0, val.length - 1);
            val = JSON.parse(val);
            _this.photos = val.photos;
        });
        // .then(function (response) {
        //   let dat = response.data.replace('jsonFlickrApi(', '');
        //   dat = dat.substring(0, dat.length - 1);
        //   dat = JSON.parse(dat);
        //   this.photos = dat.photos;
        // });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.updateWidget(_this.widget).subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
        // .then(function (response) {
        //   const result = response.data;
        //   if(result){
        //     this.router.url('/user/' + this.userId + '/website/' + this.websiteId + '/page/' + this.pageId + '/widget/' + this.widgetId);
        //   }else{
        //     const error = 'failed!';
        //   }
        // });
    };
    FlickrImageSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_flickr_service_client__["a" /* FlickrService */], __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"..\" class=\"text-black icon-padding\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n            <a (click)=\"updateImage()\" class=\"icon-padding text-black\">\n              <span class=\"glyphicon glyphicon-ok\"></span>\n            </a>\n        </div>\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n            Widgets Edit\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n  <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"https://news.northeastern.edu/wp-content/uploads/2016/10/ILP-01-800x0-c-default.jpg\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"exampleInputFile\">Upload</label>\n    <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n      <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n      <input  name=\"widgetId\" value=\"{{widgetId}}\"   style=\"display: none\"/>\n      <input  name=\"websiteId\" value=\"{{websiteId}}\"   style=\"display: none\"/>\n      <input  name=\"pageId\" value=\"{{pageId}}\"   style=\"display: none\"/>\n      <input  name=\"userId\" value=\"{{userId}}\"   style=\"display: none\"/>\n      <button type=\"submit\" class=\"btn btn-block btn-success\">Upload Image</button>\n    </form>\n  </div>\n\n  <button class=\"btn btn-primary btn-block \" [routerLink]=\"['/user/'+ userId + '/website/'+ websiteId +'/page/'+ pageId\n                                                  + '/widget/' + widgetId +'/flickr']\" >Choose From Flickr</button>\n  <button class=\"btn btn-danger  btn-block\" (click)=\"deleteImage()\">Delete</button>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a [routerLink]=\"['/user',userId]\" class=\"icon-padding\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new __WEBPACK_IMPORTED_MODULE_1__models_widget_model_client__["a" /* Widget */]('', 'IMAGE', '', 3, '', '', '', 1, '', false);
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId !== undefined) {
                return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
            else {
                return _this.widgetService.createWidget(_this.pageId, _this.widget).subscribe(function (widget) {
                    _this.widget = widget;
                    _this.widgetId = widget._id;
                    console.log(_this.widgetId);
                });
            }
        });
    };
    WidgetImageComponent.prototype.updateImage = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.updateWidget(_this.widget).subscribe(function (data) {
                alert(_this.widget.name + ' saved successfully');
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
    };
    WidgetImageComponent.prototype.deleteImage = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widgetId).subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
    };
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container-fluid row\">\n    <div class=\"navbar-text pull-left\">\n        <a routerLink=\"..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n        </a>\n    </div>\n    <div class=\"navbar-text pull-right\">\n        <a (click)=\"updateText()\" class=\"icon-padding text-black\">\n          <span class=\"glyphicon glyphicon-ok\"></span>\n        </a>\n    </div>\n    <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n        Widgets Edit\n    </a>\n  </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n    <div class=\"form-group\">\n        <label for=\"text-name\">Name</label>\n        <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"text-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"text-text\">Text</label>\n        <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"text-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"text-size\">Rows</label>\n        <input [(ngModel)]=\"widget.rows\" type=\"number\" class=\"form-control\" id=\"text-rows\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" id=\"placeholder\" class=\"form-control\" required>\n    </div>\n\n    <p></p>\n    <div class=\"input-group\">\n      <input type=\"text\"\n             readonly\n             value=\"Formatted\"\n             class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n          <input [(ngModel)]=\"widget.formatted\" type=\"checkbox\"/>\n      </span>\n    </div>\n    <p></p>\n\n    <div class=\"from-group\">\n       <button (click)=\"deleteText()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n    </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n    <div class=\"pull-right navbar-text\">\n      <a [routerLink]=\"['/user',userId]\" class=\"icon-padding\">\n          <span class=\"glyphicon glyphicon-user\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new __WEBPACK_IMPORTED_MODULE_2__models_widget_model_client__["a" /* Widget */]('', 'TEXT', this.pageId, 3, '', '', '', 1, '', false);
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId !== undefined) {
                return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    WidgetTextComponent.prototype.updateText = function () {
        var _this = this;
        if (this.widgetId === undefined) {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.activatedRoute.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget).subscribe(function (data) {
                    alert(_this.widget.name + ' saved successfully');
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                });
            });
        }
    };
    WidgetTextComponent.prototype.deleteText = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widgetId).subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
    };
    WidgetTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-text',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"..\" class=\"text-black icon-padding\">\n          <span class=\"glyphicon glyphicon-chevron-left\">\n          </span>\n            </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n            <a (click)=\"updateYoutube()\" class=\"icon-padding text-black\">\n              <span class=\"glyphicon glyphicon-ok\"></span>\n            </a>\n        </div>\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n            Widgets Edit\n        </a>\n    </div>\n</nav>\n\n<div class=\"container-fluid container-padding\">\n    <div class=\"form-group\">\n        <label for=\"youtube-name\">Name</label>\n        <input [(ngModel)]=\"widget.name\" type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"youtube-text\">Text</label>\n        <input [(ngModel)]=\"widget.text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"youtube-URL\">URL</label>\n        <input [(ngModel)]=\"widget.url\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"https://youtu.be/HBMG2xz_Leg\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"youtube-width\">Width</label>\n        <input [(ngModel)]=\"widget.width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <button (click)=\"deleteYoutube()\" class=\"btn btn-danger btn-block\" type=\"button\">Delete</button>\n    </div>\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n    <div class=\"container-fluid row\">\n        <div class=\"pull-right navbar-text\">\n            <a [routerLink]=\"['/user',userId]\" class=\"icon-padding\">\n                <span class=\"glyphicon glyphicon-user\"></span>\n            </a>\n        </div>\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__ = __webpack_require__("../../../../../src/app/models/widget.model.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(activatedRoute, widgetService, router) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.router = router;
        this.widget = new __WEBPACK_IMPORTED_MODULE_3__models_widget_model_client__["a" /* Widget */]('', 'YOUTUBE', this.pageId, 3, '', '', '', 1, '', false);
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            _this.userId = params['uid'];
            _this.websiteId = params['wid'];
            _this.widgetId = params['wgid'];
            if (_this.widgetId !== undefined) {
                return _this.widgetService.findWidgetById(_this.widgetId).subscribe(function (widget) {
                    _this.widget = widget;
                });
            }
        });
    };
    WidgetYoutubeComponent.prototype.updateYoutube = function () {
        var _this = this;
        if (this.widgetId === undefined) {
            this.widgetService.createWidget(this.pageId, this.widget).subscribe(function (widget) {
                _this.widget = widget;
                alert(_this.widget.name + ' saved successfully');
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        }
        else {
            this.activatedRoute.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget).subscribe(function (data) {
                    alert(_this.widget.name + ' saved successfully');
                    _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
                });
            });
        }
    };
    WidgetYoutubeComponent.prototype.deleteYoutube = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widgetId).subscribe(function (data) {
                _this.router.navigate(['/user', _this.userId, 'website', _this.websiteId, 'page', _this.pageId, 'widget']);
            });
        });
    };
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/order-by-pipe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".youtube-widget {\r\n  position: relative;\r\n  padding-bottom: 56.25%; /* 16:9 */\r\n  height: 0;\r\n}\r\n.youtube-widget iframe {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container-fluid row\">\n        <div class=\"navbar-text pull-left\">\n            <a routerLink=\"../..\" class=\"text-black icon-padding\">\n            <span class=\"glyphicon glyphicon-chevron-left\"></span>\n            </a>\n        </div>\n        <div class=\"navbar-text pull-right\">\n            <a routerLink=\"./new\" class=\"icon-padding text-black\">\n            <span class=\"glyphicon glyphicon-plus\"></span>\n            </a>\n        </div>\n        <a class=\"navbar-brand text-white text-bold\" routerLink=\".\">\n            Widgets\n        </a>\n    </div>\n</nav>\n\n<div class=\"container container-padding\" appSortable (newIndexes)=\"reorderItems($event)\">\n  <div *ngFor=\"let widget of widgets | orderBy\" [ngSwitch]=\"widget.widgetType\">\n\n    <div *ngSwitchCase=\"'HEADING'\">\n      <a class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"1\">{{widget.text}}</h1>\n        <h2 *ngSwitchCase=\"2\">{{widget.text}}</h2>\n        <h3 *ngSwitchCase=\"3\">{{widget.text}}</h3>\n        <h4 *ngSwitchCase=\"4\">{{widget.text}}</h4>\n        <h5 *ngSwitchCase=\"5\">{{widget.text}}</h5>\n        <h6 *ngSwitchCase=\"6\">{{widget.text}}</h6>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'IMAGE'\">\n      <a class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n      <img class=\"img-responsive img-rounded widget-images\"\n           src={{widget.url}} width=\"widget.width\">\n    </div>\n\n    <div *ngSwitchCase=\"'TEXT'\">\n      <a class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n      <div *ngIf=\"widget.formatted\">\n        <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n      </div>\n      <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\"\n             placeholder=\"{{widget.placeholder}}\" [(ngModel)]=\"widget.text\"  class=\"form-control\"/>\n      <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\"\n                rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\"\n                class=\"form-control\" [(ngModel)]=\"widget.text\"></textarea>\n    </div>\n\n    <div *ngSwitchCase=\"'HTML'\">\n      <a class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n      <div [innerHTML]=\"widget.text\"></div>\n    </div>\n\n\n    <div *ngSwitchCase=\"'YOUTUBE'\" class=\"youtube-widget\">\n      <a class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n      </a>\n      <a routerLink=\"{{widget._id}}\" class=\"pull-right white-background\">\n        <span class=\"glyphicon glyphicon-cog pull-right\"></span>\n      </a>\n      <div class=\"embed-responsive embed-responsive-16by9\">\n        <iframe width=\"420\" height=\"315\" [src]=getURL(widget.url) frameborder=\"0\" allowfullscreen></iframe>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar navbar-default navbar-fixed-bottom\">\n  <div class=\"container-fluid row\">\n      <div class=\"pull-right navbar-text\">\n          <a routerLink=\"../../../../..\" class=\"icon-padding\">\n              <span class=\"glyphicon glyphicon-user\"></span>\n          </a>\n      </div>\n      <div class=\"pull-left navbar-text\">\n          <a routerLink=\".\" class=\"icon-padding\">\n              <span class=\"glyphicon glyphicon-play\"></span>\n          </a>\n          <a routerLink=\".\" class=\"icon-padding\">\n              <span class=\"glyphicon glyphicon-eye-open\"></span>\n          </a>\n      </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("../../../../../src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activatedRoute, widgetService, domSanitizer) {
        this.activatedRoute = activatedRoute;
        this.widgetService = widgetService;
        this.domSanitizer = domSanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.pageId = params['pid'];
            return _this.widgetService.findAllWidgetsForPage(_this.pageId).subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.getURL = function (url) {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url.toString());
    };
    WidgetListComponent.prototype.reorderItems = function (indexes) {
        // console.log('start: ' + indexes.startIndex);
        // console.log('stop: ' + indexes.endIndex);
        this.widgetService.reorderWidgets(this.pageId, indexes.startIndex, indexes.endIndex).subscribe();
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/page.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(name, websiteId, description) {
        this.name = name;
        this.websiteId = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, firstName, lastName, email) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/models/website.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(name, developerId, description) {
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "../../../../../src/app/models/widget.model.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(name, type, pageId, size, text, width, url, rows, placeholder, fomatted) {
        this.name = name;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.width = width;
        this.text = text;
        this.url = url;
        this.rows = rows;
        this.placeholder = placeholder;
        this.formatted = false;
    }
    return Widget;
}());



/***/ }),

/***/ "../../../../../src/app/services/flickr.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlickrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlickrService = /** @class */ (function () {
    function FlickrService(_http) {
        this._http = _http;
        this.key = '90ea0df0685933f65ea96fab852a3023';
        this.secret = '59b7fb7ceb0a467b';
        this.urlBase = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.urlBase
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this._http.get(url);
    };
    FlickrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])() // needed as we're injecting Http service into this service
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "../../../../../src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page).map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findAllPagesForWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.updatePage = function (newPage) {
        var url = this.baseUrl + '/api/page/' + newPage._id;
        return this.http.put(url, newPage).map(function (response) {
            return response.json();
        });
    };
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    UserService.prototype.createUser = function (user) {
        var url = this.baseUrl + '/api/user/';
        return this.http.post(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.updateUser = function (user) {
        var url = this.baseUrl + '/api/user/' + user._id;
        return this.http.put(url, user).map(function (response) {
            return response.json();
        });
    };
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsitesForUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.updateWebsite = function (newWebsite) {
        var url = this.baseUrl + '/api/website/' + newWebsite._id;
        return this.http.put(url, newWebsite).map(function (response) {
            return response.json();
        });
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "../../../../../src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findAllWidgetsForPage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.updateWidget = function (newWidget) {
        var url = this.baseUrl + '/api/widget/' + newWidget._id;
        return this.http.put(url, newWidget).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url).map(function (response) {
            return response.json();
        });
    };
    WidgetService.prototype.reorderWidgets = function (pageId, startIndex, endIndex) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '').map(function (response) {
            return response.json();
        });
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "../../../../../src/app/sortable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortableDirective; });
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

var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](); // this will emit an event for the parent component or the directive calling component
    }
    // Lifecycle hook that is called after a component's view has been fully initialized
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[appSortable]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SortableDirective);
    return SortableDirective;
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
    production: false,
    // baseUrl: 'https://web2018.herokuapp.com'
    baseUrl: 'http://localhost:5000'
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
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