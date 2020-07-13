(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"common",
		"admin-admin-module"
	],
	"./course/add/add.module": [
		"./src/app/course/add/add.module.ts",
		"course-add-add-module"
	],
	"./course/course.module": [
		"./src/app/course/course.module.ts",
		"common",
		"course-course-module"
	],
	"./login/login.module": [
		"./src/app/login/login.module.ts",
		"login-login-module"
	],
	"./main/main.module": [
		"./src/app/main/main.module.ts",
		"common",
		"main-main-module"
	],
	"./signup/signup.module": [
		"./src/app/signup/signup.module.ts",
		"signup-signup-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { roles: ['user', 'admin'] },
        loadChildren: './main/main.module#MainModule',
    },
    {
        path: 'course/:id',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { roles: ['user', 'admin'] },
        loadChildren: './course/course.module#CourseModule',
    },
    {
        path: 'add-course',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { roles: ['user', 'admin'] },
        loadChildren: './course/add/add.module#AddModule',
    },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    {
        path: 'admin',
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        data: { roles: ['admin'] },
        loadChildren: './admin/admin.module#AdminModule',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#videos {\r\n  width: 100%;\r\n  height: 90vh;\r\n  overflow: scroll;\r\n}\r\n#videos__main {\r\n  height: 90vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\niframe {\r\n  margin: 2rem 0 0 2rem;\r\n  width: 810px;\r\n  height: 570px;\r\n}\r\n.side_video {\r\n  width: 85%;\r\n  height: 200px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsb0JBQW9CO0NBQ3JCO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsV0FBVztFQUNYLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVvcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbn1cclxuI3ZpZGVvc19fbWFpbiB7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5pZnJhbWUge1xyXG4gIG1hcmdpbjogMnJlbSAwIDAgMnJlbTtcclxuICB3aWR0aDogODEwcHg7XHJcbiAgaGVpZ2h0OiA1NzBweDtcclxufVxyXG4uc2lkZV92aWRlbyB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-nav></app-nav>\r\n\r\n  <main>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n</div>\r\n\r\n<simple-notifications></simple-notifications>\r\n"

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
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(firebaseService) {
        this.firebaseService = firebaseService;
        this.userStatus = this.firebaseService.userStatus;
    }
    AppComponent.prototype.logout = function () {
        this.firebaseService.logOut();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.userChanges();
        this.firebaseService.userStatusChanges.subscribe(function (x) { return (_this.userStatus = x); });
        console.log(this.userStatus);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_1__["FirebaseService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm5/angular2-notifications.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                angular2_notifications__WEBPACK_IMPORTED_MODULE_8__["SimpleNotificationsModule"].forRoot(),
            ],
            providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
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
    function AuthGuard(firebaseService, router) {
        this.firebaseService = firebaseService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var currentUser = this.firebaseService.currentUser;
        if (currentUser) {
            //check if the route is retricted by role
            if (next.data.roles && next.data.roles.indexOf(currentUser.role) === -1) {
                //role not authorized
                this.router.navigate(['/login']);
            }
            else {
                return true;
            }
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/firebase.service.ts":
/*!*************************************!*\
  !*** ./src/app/firebase.service.ts ***!
  \*************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/fesm5/angular2-notifications.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FirebaseService = /** @class */ (function () {
    function FirebaseService(ngZone, afAuth, firestore, router, http, service) {
        this.ngZone = ngZone;
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.router = router;
        this.http = http;
        this.service = service;
        this.courses = [];
        this.videos = [];
        this.adminVideos = [];
        this.currentCourse = '';
        this.deleteVideoID = '';
        this.deleteVideoID_temp = '';
        this.getRandomVideo = '';
        this.userStatusChanges = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](this.userStatus);
        this.header = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Access-Control-Allow-Origin': '*',
            }),
        };
    }
    FirebaseService.prototype.onSuccess = function (message) {
        this.service.success('Success', message, {
            timeOut: 2000,
            animate: 'fade',
            showProgressBar: true,
        });
    };
    FirebaseService.prototype.onError = function (message) {
        this.service.error('Error', message, {
            timeOut: 2000,
            animate: 'fade',
            showProgressBar: true,
        });
    };
    FirebaseService.prototype.getOneVideo = function () {
        return this.videos[0];
    };
    FirebaseService.prototype.getOneAdminVideo = function () {
        return this.adminVideos[0];
    };
    FirebaseService.prototype.setCurrentCourse = function (value) {
        this.currentCourse = value;
    };
    FirebaseService.prototype.resetCourses = function () {
        this.courses = [];
    };
    FirebaseService.prototype.fetchAdminVideos = function () {
        var _this = this;
        this.adminVideos = [];
        this.firestore
            .collection('tmp_courses')
            .valueChanges()
            .subscribe(function (res) {
            res.forEach(function (element) {
                _this.adminVideos.push(element);
            });
        });
        console.log(this.adminVideos);
    };
    FirebaseService.prototype.getAdminVideos = function () {
        return this.adminVideos;
    };
    FirebaseService.prototype.approveVideos = function (value) {
        var _this = this;
        var data = this.adminVideos.filter(function (el) { return el.path === value; });
        this.firestore
            .collection('videos')
            .add(data[0])
            .then(function (data) {
            _this.onSuccess('Video has been added!');
        })
            .catch(function (err) {
            _this.onError(err.message);
        });
        this.firestore
            .collection('tmp_courses')
            .ref.where('path', '==', value)
            .get()
            .then(function (snapshot) {
            if (snapshot.empty) {
                return;
            }
            snapshot.forEach(function (doc) {
                _this.deleteVideoID = doc.id;
            });
        })
            .catch(function (err) { });
    };
    FirebaseService.prototype.filterAdminVideo = function (value) {
        var valData = this.adminVideos.filter(function (el) { return el.path === value; });
        this.adminVideos.filter(function (el) { return el !== valData[0]; });
        setTimeout(function () { }, 1000);
    };
    FirebaseService.prototype.deleteVideo = function () {
        this.firestore
            .collection('tmp_courses')
            .doc("" + this.deleteVideoID)
            .delete();
        this.deleteVideoID = '';
    };
    FirebaseService.prototype.getDeleteVideoAdmin = function (value) {
        var _this = this;
        this.adminVideos.filter(function (el) { return el !== value; });
        this.firestore
            .collection('tmp_courses')
            .ref.where('path', '==', value)
            .get()
            .then(function (snapshot) {
            if (snapshot.empty) {
                return;
            }
            snapshot.forEach(function (doc) {
                _this.deleteVideoID_temp = doc.id;
            });
        })
            .catch(function (err) { });
    };
    FirebaseService.prototype.deleteVideoAdmin = function () {
        var _this = this;
        console.log(this.deleteVideoID_temp);
        this.firestore
            .collection('tmp_courses')
            .doc("" + this.deleteVideoID_temp)
            .delete()
            .then(function (data) {
            _this.onSuccess('Video deleted!');
        })
            .catch(function (err) {
            console.log(err);
            _this.onError(err.message);
        });
    };
    FirebaseService.prototype.videoAdminReset = function () {
        this.deleteVideoID_temp = '';
        this.adminVideos = [];
    };
    FirebaseService.prototype.fetchVideos = function (id) {
        var _this = this;
        this.videos = [];
        this.firestore
            .collection('videos')
            .ref.where('id', '==', id)
            .onSnapshot(function (snap) {
            snap.forEach(function (userRef) {
                _this.videos.push(userRef.data());
            });
        });
    };
    FirebaseService.prototype.fetchCourses = function () {
        var _this = this;
        this.firestore
            .collection('courses')
            .valueChanges()
            .subscribe(function (res) {
            console.log(res);
            res.forEach(function (element) {
                console.log(element);
                _this.courses.push(element);
            });
        });
    };
    FirebaseService.prototype.getCourses = function () {
        return this.courses;
    };
    FirebaseService.prototype.getVideos = function () {
        return this.videos;
    };
    FirebaseService.prototype.getCourseById = function (id) {
        return this.courses.filter(function (el) { return el.id === id; })[0];
    };
    FirebaseService.prototype.getVideoById = function (id) {
        return this.videos.filter(function (el) { return el.id === id; })[0];
    };
    FirebaseService.prototype.sendData = function (value) {
        var _this = this;
        var data = {
            path: value,
            id: this.currentCourse,
            idCourse: 'CuhqiXHt5kArXOhBsZwR',
        };
        this.firestore
            .collection('tmp_courses')
            .add(data)
            .then(function (data) {
            console.log(data);
            _this.onSuccess('Your video has been sent!');
        })
            .catch(function (err) {
            console.log(err);
            _this.onError(err.message);
        });
    };
    FirebaseService.prototype.setUserStatus = function (userStatus) {
        this.userStatus = userStatus;
        this.userStatusChanges.next(userStatus);
    };
    FirebaseService.prototype.signUp = function (email, password) {
        var _this = this;
        this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (userResponse) {
            // add the user to the "users" database
            var user = {
                id: userResponse.user.uid,
                username: userResponse.user.email,
                role: 'user',
            };
            // add the user to the database
            _this.firestore
                .collection('users')
                .add(user)
                .then(function (user) {
                user.get().then(function (x) {
                    // return the user data
                    console.log(x.data());
                    _this.currentUser = x.data();
                    _this.setUserStatus(_this.currentUser);
                    _this.router.navigate(['/']);
                    _this.fetchCourses();
                    _this.onSuccess('You are registrated!');
                });
            })
                .catch(function (err) {
                console.log(err);
            });
        })
            .catch(function (err) {
            console.log('An error ocurred: ', err);
            _this.onError(err.message);
        });
    };
    FirebaseService.prototype.login = function (email, password) {
        var _this = this;
        this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.firestore
                .collection('users')
                .ref.where('username', '==', user.user.email)
                .onSnapshot(function (snap) {
                snap.forEach(function (userRef) {
                    console.log('userRef', userRef.data());
                    _this.currentUser = userRef.data();
                    // setUserStatus
                    _this.setUserStatus(_this.currentUser);
                    if (userRef.data().role !== 'admin') {
                        _this.router.navigate(['/']);
                        _this.fetchCourses();
                    }
                    else {
                        _this.router.navigate(['/admin']);
                    }
                });
            });
        })
            .catch(function (err) { return err; });
    };
    FirebaseService.prototype.logOut = function () {
        var _this = this;
        this.afAuth.auth
            .signOut()
            .then(function () {
            console.log('user signed Out successfully');
            // set current user to null to be logged out
            _this.currentUser = null;
            // set the listenener to be null
            _this.setUserStatus(null);
            _this.resetCourses();
            _this.ngZone.run(function () { return _this.router.navigate(['/login']); });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    FirebaseService.prototype.userChanges = function () {
        var _this = this;
        this.afAuth.auth.onAuthStateChanged(function (currentUser) {
            if (currentUser) {
                _this.firestore
                    .collection('users')
                    .ref.where('username', '==', currentUser.email)
                    .onSnapshot(function (snap) {
                    snap.forEach(function (userRef) {
                        _this.currentUser = userRef.data();
                        // setUserStatus
                        _this.setUserStatus(_this.currentUser);
                        console.log(_this.userStatus);
                        if (userRef.data().role !== 'admin') {
                            _this.ngZone.run(function () { return _this.router.navigate(['/']); });
                        }
                        else {
                            _this.ngZone.run(function () { return _this.router.navigate(['/admin']); });
                        }
                    });
                });
            }
            else {
                _this.ngZone.run(function () { return _this.router.navigate(['/login']); });
            }
        });
    };
    FirebaseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\r\n  width: 50px;\r\n  height: 50px;\r\n}\r\n.logo_section {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: 1rem;\r\n}\r\n.logo_section h1 {\r\n  font-size: 2rem;\r\n  padding-left: 0.3rem !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5sb2dvX3NlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG4ubG9nb19zZWN0aW9uIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAwLjNyZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"container-fluid d-flex\">\r\n  <div class=\"logo_section\">\r\n    <img\r\n      class=\"logo\"\r\n      src=\"../../assets/images/courses_logo.png\"\r\n      alt=\"Courses logo\"\r\n    />\r\n    <h1 class=\"pl-5\"><a [routerLink]=\"['/']\" class=\"text-dark\">courses</a></h1>\r\n  </div>\r\n\r\n  <div class=\"ml-auto\">\r\n    <ul>\r\n      <li>\r\n        <a [routerLink]=\"['/signup']\" *ngIf=\"href === '/login'\">Signup</a>\r\n      </li>\r\n      <li>\r\n        <a [routerLink]=\"['/login']\" *ngIf=\"href === '/signup'\">Login</a>\r\n      </li>\r\n      <li *ngIf=\"userStatus && userStatus.role === 'user'\">\r\n        <a [routerLink]=\"['/admin']\" class=\"text-dark\">{{\r\n          userStatus.username\r\n        }}</a>\r\n      </li>\r\n      <li *ngIf=\"userStatus\">\r\n        <button class=\"logout\" (click)=\"logout()\">Logout</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase.service */ "./src/app/firebase.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = /** @class */ (function () {
    function NavComponent(firebaseService, router, route, location) {
        var _this = this;
        this.firebaseService = firebaseService;
        this.router = router;
        this.route = route;
        this.href = '';
        this.userStatus = this.firebaseService.userStatus;
        router.events.subscribe(function (val) {
            _this.href = location.path();
        });
    }
    NavComponent.prototype.logout = function () {
        this.firebaseService.logOut();
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firebaseService.userChanges();
        this.firebaseService.userStatusChanges.subscribe(function (x) {
            _this.userStatus = x;
            console.log(_this.userStatus);
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")],
        }),
        __metadata("design:paramtypes", [_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], NavComponent);
    return NavComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyD2OcIGZwcIiBoVctFhgdVwSHMAftkS7N8',
        authDomain: 'angularwebfirebase.firebaseapp.com',
        databaseURL: 'https://angularwebfirebase.firebaseio.com',
        projectId: 'angularwebfirebase',
        storageBucket: 'angularwebfirebase.appspot.com',
        messagingSenderId: '68314298542',
        appId: '1:68314298542:web:bd64a8fc5b855e4954953f',
        measurementId: 'G-L38XE72JCQ',
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Korisnik\Desktop\NG-GITHUB\angular_courses\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map