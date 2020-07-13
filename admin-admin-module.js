(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{ path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] }];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no_courses {\r\n  color: #141823;\r\n  font-size: 2rem;\r\n  width: 50rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub19jb3Vyc2VzIHtcclxuICBjb2xvcjogIzE0MTgyMztcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgd2lkdGg6IDUwcmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"course\">\r\n  <div id=\"videos__main\">\r\n    <iframe\r\n      *ngIf=\"courses?.length > 0\"\r\n      width=\"920\"\r\n      height=\"650\"\r\n      [src]=\"'https://www.youtube.com/embed/' + videoPath | safe\"\r\n    >\r\n    </iframe>\r\n    <div *ngIf=\"!courses?.length > 0\">\r\n      <p class=\"no_courses\">There is no courses to add!</p>\r\n    </div>\r\n    <div class=\"btn__conteiner d-flex\" *ngIf=\"courses?.length > 0\">\r\n      <button\r\n        class=\"btn btn-primary\"\r\n        (click)=\"handleDispatch()\"\r\n        routerLink=\"/admin\"\r\n      >\r\n        Add video\r\n      </button>\r\n      <button\r\n        class=\"btn btn-danger ml-2\"\r\n        (click)=\"handleDispatchDelete()\"\r\n        routerLink=\"/admin\"\r\n      >\r\n        Delete video\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div id=\"videos\" *ngIf=\"courses?.length > 0\">\r\n    <div\r\n      *ngFor=\"let course of courses\"\r\n      #DivRef\r\n      (click)=\"handleClick($event)\"\r\n      class=\"elem\"\r\n    >\r\n      <iframe\r\n        class=\"side_video\"\r\n        #IframeRef\r\n        (click)=\"handleClick($event)\"\r\n        width=\"400\"\r\n        height=\"315\"\r\n        [src]=\"'https://www.youtube.com/embed/' + course.path | safe\"\r\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n        allowfullscreen\r\n      ></iframe>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.courses = [];
        this.videoPath = '';
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.firebaseService.fetchAdminVideos();
        this.courses = this.firebaseService.getAdminVideos();
        this.initSrc();
    };
    AdminComponent.prototype.initSrc = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.courses !== null) {
                var asd123 = _this.firebaseService.getOneAdminVideo();
                _this.videoPath = asd123.path;
            }
            else {
                _this.videoPath = '';
            }
        }, 2000);
    };
    AdminComponent.prototype.handleClick = function (event) {
        var newArr = event.target.querySelector('iframe').src.split('/');
        this.videoPath = newArr[4];
    };
    AdminComponent.prototype.handleDispatch = function () {
        var _this = this;
        this.firebaseService.approveVideos(this.videoPath);
        setTimeout(function () {
            _this.firebaseService.deleteVideo();
            _this.courses = _this.courses.filter(function (el) { return el.path !== _this.videoPath; });
            _this.videoPath = "" + _this.courses[0].path;
        }, 1000);
    };
    AdminComponent.prototype.handleDispatchDelete = function () {
        var _this = this;
        this.firebaseService.getDeleteVideoAdmin(this.videoPath);
        setTimeout(function () {
            _this.firebaseService.deleteVideoAdmin();
            _this.courses = _this.courses.filter(function (el) { return el.path !== _this.videoPath; });
            _this.videoPath = "" + _this.courses[0].path;
        }, 1000);
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")],
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["AdminRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]],
            declarations: [_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]],
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map