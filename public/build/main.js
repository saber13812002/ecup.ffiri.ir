webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__exit_exit__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab99Root = __WEBPACK_IMPORTED_MODULE_4__exit_exit__["a" /* ExitPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="اطلاعات" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="پرداخت" tabIcon="add-circle"></ion-tab>\n  <ion-tab [root]="tab99Root" tabTitle="خروج" tabIcon="log-out"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LanguageServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LanguageServiceProvider = (function () {
    function LanguageServiceProvider(http) {
        this.http = http;
        this.languages = new Array();
        console.log('Hello LanguageServiceProvider Provider');
        this.languages.push({ name: "Persian", code: "fa" }, { name: "English", code: "en" }, { name: "Spanish", code: "es" }, { name: "Arabic", code: "ar" });
    }
    LanguageServiceProvider.prototype.getLanguages = function () {
        return this.languages;
    };
    LanguageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LanguageServiceProvider);
    return LanguageServiceProvider;
}());

//# sourceMappingURL=language-service.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AboutPage = (function () {
    function AboutPage(iab, navCtrl, restProvider, toastController) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.toastController = toastController;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wptoken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem('wpIdeaTokenECUP')];
                    case 1:
                        wptoken = _a.sent();
                        this.id = (wptoken ? JSON.parse(wptoken).usr.id : null);
                        this.token = (wptoken ? JSON.parse(wptoken).token : null);
                        this.presentToast("کمی صبر کنید");
                        return [4 /*yield*/, this.getMePay()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.getMePay = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.restProvider.postTokenGetPayStatus(this.id, this.token).subscribe(function (data) {
                    console.log(data);
                    if (data.data[0]) {
                        _this.status = data.data[0].result;
                        _this.cardNumber = data.data[0].cardNumber;
                        _this.refId = data.data[0].refId;
                        _this.trackingCode = data.data[0].trackingCode;
                        _this.transId = data.data[0].transId;
                        _this.presentToast("بارگذاری شد");
                    }
                    return data;
                });
                return [2 /*return*/];
            });
        });
    };
    AboutPage.prototype.signup = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var signupOrSignin, oauthUrl, browser;
            return __generator(this, function (_a) {
                signupOrSignin = (type == 'signup' ? __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].security.register : __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].security.login);
                oauthUrl = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].service.payment +
                    '?author_id=' + this.id;
                if (type == 'add')
                    oauthUrl = 'https://ffiri.ir/blog/wp-admin/post-new.php';
                else if (type == 'all')
                    oauthUrl = 'https://ffiri.ir/blog/wp-admin/edit.php';
                browser = this.iab.create(oauthUrl, '_blank', 'location=no,clearcache=yes,clearsessioncache=yes,useWideViewPort=yes');
                browser.on('loadstart').subscribe(function (event) {
                    if ((event.url).indexOf('http://localhost:8100') === 0) {
                        browser.on('exit').subscribe(function () { });
                        browser.close();
                        var defaultError = 'Problem authenticating with SimplePOS IDS';
                    }
                });
                browser.on('exit').subscribe(function (event) {
                });
                return [2 /*return*/];
            });
        });
    };
    AboutPage.prototype.presentToast = function (msg, time) {
        if (time === void 0) { time = 2000; }
        var toast = this.toastController.create({
            message: msg,
            duration: time,
            position: "top"
        });
        toast.present();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\about\about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      پرداخت بانکی\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  پرداخت بانکی\n  <button ion-button block clear (click)="signup(\'signup\')" color="dark" class="login-button">\n    <ion-icon name="logo-eeta"></ion-icon> پرداخت بانکی\n  </button>\n\n  <ion-item *ngIf="status == \'Payed\'">\n  پرداخت شما قبلا انجام شده است\n<br>\n  شماره کارت\n  {{cardNumber}}\n  <br>\n  شماره مرجع\n  {{refId}}\n  <br>\n  شماره پیگیری\n  {{trackingCode}}\n  <br>\n  شماره تراکنش\n  {{transId}}\n\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\about\about.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl, restProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.people = new Array();
        this.page = 0;
        this.perPage = 10;
        this.totalData = 100;
        this.totalPage = 1;
        this.serverWebApp = __WEBPACK_IMPORTED_MODULE_3__env__["a" /* ENV */].webapp.baseUrl;
        var loader = loadingCtrl.create({ content: "..." });
        loader.present();
    }
    ContactPage.prototype.loadPlayerDetail = function (person) {
        console.log(person);
        this.navCtrl.push(this.detailPage, { person: person });
    };
    ContactPage.prototype.doInfinite = function (infiniteScroll) {
        this.page = this.page + 1;
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      مسجدی\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>مسجدی ها</ion-list-header>\n\n    <ion-item *ngFor="let p of people">\n\n      <!--      <ion-icon name="ionic" item-start></ion-icon>-->\n\n      <div class="bg-image">\n\n        <hr>\n\n        <ion-thumbnail>\n\n          <img (click)="loadPlayerDetail(p)" src="{{p.img}}" class="round-image" style="height: 150px !important;  width: 150px !important;              background: none !important;     background-color :none !important; display: inline !important;" />\n\n        </ion-thumbnail>\n\n        <!--            </ion-img> -->\n\n        <hr>\n\n        {{p.name}}\n\n        <hr>\n\n\n\n        <a href="https://t.me/{{p.uInstagramId}}"><img class="sociallogo" src="{{serverWebApp}}/assets/imgs/telegram.png" /></a>\n\n        <a href="https://instagram.com/{{p.uTelegramlId}}"><img class="sociallogo" src="{{serverWebApp}}/assets/imgs/instagram.png" /></a>\n\n        <a href="{{p.apiUrl}}/www/player.php?id={{p.id}}"><img class="sociallogo" src="{{serverWebApp}}/assets/imgs/website.png" /></a>\n\n\n\n        <ion-list (click)="loadPlayerDetail(p)">\n\n          <ion-item class="item2col">\n\n            <ion-row>\n\n              <ion-col width-50>\n\n                جنسیت : {{ p.jens=="1" ? "آقا" : "خانم" }}\n\n              </ion-col>\n\n              <ion-col width-50>\n\n                استان : {{p.province}}\n\n              </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col width-50>\n\n                رشته : {{p.field}}\n\n              </ion-col>\n\n              <ion-col width-50>\n\n                محل تولد : {{p.birthPlace}}\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>\n\n          <ion-item class="item2col">\n\n            اطلاعات بیشتر\n\n          </ion-item>\n\n        </ion-list>\n\n        <hr>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="page < totalPage">\n\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="..."></ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\contact\contact.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HomePage = (function () {
    function HomePage(navCtrl, restProvider, loadingCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.loadingCtrl = loadingCtrl;
        this.toastController = toastController;
        this.patternNationalCode = /^\d{10}$/;
        this.stories = new Array();
        this.posts = new Array();
        this.token = "";
        this.data2 = { id: '', family: '', name: '', mobile: '' };
        this.flagPSN = true;
        this.flagNID = true;
        this.change = false;
        this.page = 0;
        this.perPage = 10;
        this.totalData = 100;
        this.totalPage = 1;
        this.like_btn = {
            color: 'black',
            icon_name: 'heart-outline'
        };
        var loader = loadingCtrl.create({ content: "در حال بارگذاری ..." });
        loader.present();
        loader.dismiss();
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var wptoken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem('wpIdeaTokenECUP')];
                    case 1:
                        wptoken = _a.sent();
                        // this.id = (wptoken ? JSON.parse(wptoken).usr.id : null);
                        // this.id2 = (wptoken ? JSON.parse(wptoken).usr.id.id : null);
                        // if (this.id2)
                        //   this.id = this.id2;
                        this.token = (wptoken ? JSON.parse(wptoken).token : null);
                        if (this.token)
                            this.presentToast("شما لاگین هستید میتوانید ادامه دهید");
                        else
                            this.presentToast("پین اشتباه است");
                        this.presentToast("کمی صبر کنید");
                        return [4 /*yield*/, this.getMe()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.restProvider.postTokenValidate(this.token, this.email, null, null, null, null, null, null).subscribe(function (data) {
                    console.log(data);
                    if (data.data[0]) {
                        _this.name = data.data[0].name;
                        _this.family = data.data[0].family;
                        _this.mobile = data.data[0].mobile;
                        _this.email = data.data[0].email;
                        _this.national_code = data.data[0].national_code;
                        _this.psn_id = data.data[0].psn_id;
                        _this.type = data.data[0].type;
                        _this.presentToast("بارگذاری شد");
                    }
                    return data;
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.modified = function () {
        this.change = true;
    };
    HomePage.prototype.checkNID = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modified();
                if (this.patternNationalCode.test(this.national_code) && this.checkCodeMeli(this.national_code)) {
                    this.flagNID = true;
                }
                else {
                    this.flagNID = false;
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.checkPSN = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modified();
                if ((this.psn_id)) {
                    this.flagPSN = true;
                }
                else {
                    this.flagPSN = false;
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.save = function () {
        var _this = this;
        this.presentToast("کمی صبر کنید");
        this.restProvider.postTokenValidate(this.token, this.email, this.name, this.family, this.mobile, this.national_code, this.psn_id, this.type).subscribe(function (data) {
            console.log(data);
            if (data.data[0]) {
                _this.name = data.data[0].name;
                _this.family = data.data[0].family;
                _this.mobile = data.data[0].mobile;
                _this.email = data.data[0].email;
                _this.national_code = data.data[0].national_code;
                _this.psn_id = data.data[0].psn_id;
                _this.type = data.data[0].type;
                _this.presentToast("ذخیره شد");
            }
            return data;
        });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        this.page = this.page + 1;
    };
    HomePage.prototype.likeButton = function () {
        if (this.like_btn.icon_name === 'heart-outline') {
            this.like_btn.icon_name = 'heart';
            this.like_btn.color = 'danger';
            // Do some API job in here for real!
        }
        else {
            this.like_btn.icon_name = 'heart-outline';
            this.like_btn.color = 'black';
        }
    };
    HomePage.prototype.presentToast = function (msg, time) {
        if (time === void 0) { time = 2000; }
        var toast = this.toastController.create({
            message: msg,
            duration: time,
            position: "bottom"
        });
        toast.present();
    };
    HomePage.prototype.checkCodeMeli = function (input) {
        if (!/^\d{10}$/.test(input)
            || input == '0000000000'
            || input == '1111111111'
            || input == '2222222222'
            || input == '3333333333'
            || input == '4444444444'
            || input == '5555555555'
            || input == '6666666666'
            || input == '7777777777'
            || input == '8888888888'
            || input == '9999999999')
            return false;
        var check = parseInt(input[9]);
        var sum = 0;
        var i;
        for (i = 0; i < 9; ++i) {
            sum += parseInt(input[i]) * (10 - i);
        }
        sum %= 11;
        return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n      <nav class="navigation iranyekan" role="navigation">\n          <ul class="primary-nav">\n              <li><a href="/reg">ثبت نام</a></li>\n              <li><a href="#download">قوانین</a></li>\n              <li><a href="#testimonials">جدول مسابقات</a></li>\n              <li><a href="#teams">آمار بازی</a></li>\n              <li><a href="#works" class="">گالری</a></li>\n              <li><a href="#features" class="">اخبار</a></li>\n          </ul>\n      </nav>\n    <ion-title class="white">\n      تکمیل اطلاعات\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content dir="rtl" class="iranyekan white">\n\n    <ion-item>\n      <ion-input [(ngModel)]="name" (ionChange)="modified()" type="text" placeholder="نام"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="family" (ionChange)="modified()" type="text" placeholder="نام خانوادگی"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [disabled]="true" [(ngModel)]="mobile" (ionChange)="modified()" type="text" placeholder="موبایل"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="email" (ionChange)="modified()" type="text" placeholder="ایمیل"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="national_code" (ionChange)="checkNID()" type="text" placeholder="کد ملی"></ion-input>\n    </ion-item>\n\n    <ion-item class="danger" *ngIf="!flagNID">\n      لطفا عدد کدملی خود را کامل و صحیح وارد کنید\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="psn_id" (ionChange)="checkPSN()" type="text" placeholder="پلی استیشن آی دی"></ion-input>\n    </ion-item>\n\n    <ion-item class="danger" *ngIf="!flagPSN">\n      لطفا آی دی را وارد کنید\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>قصد شرکت در کدام مسابقه را دارید؟</ion-label>\n      <ion-select (ionChange)="modified()" [(ngModel)]="type" value="onlinefriendlies" okText="ثبت" cancelText="انصراف">\n        <ion-option value="Online Friendlies">Online Friendlies</ion-option>\n        <ion-option value="FUT">FUT</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <button [disabled]="!change" ion-button block outline (click)="save()"\n      class="login-button white">ذخیره</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\home\home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var ExitPage = (function () {
    function ExitPage(iab, navCtrl, toastController) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
    }
    ExitPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.presentToast("کمی صبر کنید");
                return [2 /*return*/];
            });
        });
    };
    ExitPage.prototype.exit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('log-out');
                localStorage.removeItem('wpIdeaTokenECUP');
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                return [2 /*return*/];
            });
        });
    };
    ExitPage.prototype.presentToast = function (msg, time) {
        if (time === void 0) { time = 2000; }
        var toast = this.toastController.create({
            message: msg,
            duration: time,
            position: "top"
        });
        toast.present();
    };
    ExitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exit',template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\exit\exit.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      خروج\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  خروج\n  <button ion-button block clear (click)="exit()" color="dark" class="login-button">\n    <ion-icon name="log-out"></ion-icon> خروج\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\exit\exit.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ExitPage);
    return ExitPage;
}());

//# sourceMappingURL=exit.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_language_service_language_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__env__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var Login2Page = (function () {
    function Login2Page(navCtrl, 
        //private cookieService: CookieService,
        loadingCtrl, translate, languageService, toastController, restProvider, iab, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.toastController = toastController;
        this.restProvider = restProvider;
        this.iab = iab;
        this.navParams = navParams;
        this.patternMobile = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        this.patternPin5 = /^\d{5}$/;
        this.redirectUri = "http://localhost:8100/";
        this.loginUrl = "https://ffiri.ir/blog/jwt.php?client_id=&redirect_uri=&response_type=id_token-token&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWFzamVkY2xvb2IuaXJcL2Jsb2ciLCJpYXQiOjE1NDk0NjAyMjEsIm5iZiI6MTU0OTQ2MDIyMSwiZXhwIjoxNTUwMDY1MDIxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.sbGawBdMFt7jAhn3RIYyxui_er0_XsJ67YRWBtaUUyw";
        this.step1flag = false;
        this.logintext = "ورود به عنوان مهمان";
        this.languages = this.languageService.getLanguages();
        this.setLanguage();
    }
    Login2Page_1 = Login2Page;
    Login2Page.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                console.log('ionViewDidLoad LoginPage');
                this.mobile = this.navParams.get('mobile');
                params = new __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* URLSearchParams */](window.location.search);
                this.JWT = params.get('jwt');
                console.log('jwt :' + this.JWT);
                return [2 /*return*/];
            });
        });
    };
    Login2Page.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restProvider.postLogin(this.mobile, this.pin).subscribe(function (data) {
                            console.log(data);
                            localStorage.setItem('wpIdeaTokenECUP', JSON.stringify(data));
                            _this.wpIdeaTokenECUP = JSON.stringify(data);
                            return data.token;
                        })];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login2Page.prototype.textChanged = function () {
        this.step1flag = true;
        this.logintext = "ورود";
    };
    Login2Page.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            duration: 500
                        });
                        return [4 /*yield*/, this.getToken()];
                    case 1:
                        _a.sent();
                        loading.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login2Page.prototype.login2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loader = this.loadingCtrl.create({ content: 'ارسال' });
                        return [4 /*yield*/, loader.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.callOtp22()];
                    case 2:
                        _a.sent();
                        loader.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    Login2Page.prototype.callOtp22 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, report;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: 'در حال ارسال درخواست به سرور' });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restProvider.postOtp2(
                            // var report = await this.restProvider.getOtp2(
                            this.mobile, this.pin)];
                    case 2:
                        report = _a.sent();
                        report.subscribe(function (res) {
                            console.log(res);
                            localStorage.setItem('wpIdeaTokenECUP', JSON.stringify(res));
                            _this.wpIdeaTokenECUP = JSON.stringify(res);
                            _this.step1flag = false;
                            _this.presentToast('انجام شد'
                            // display: 'top',
                            // color: 'warning'
                            );
                            _this.gotoInfoPage();
                        }, function (err) {
                            _this.presentToast('سرور در دسترس نیست!'
                            // display: 'top',
                            // color: 'warning'
                            );
                            console.log(err);
                            loading.dismiss();
                        }, function () { return loading.dismiss(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    Login2Page.prototype.createAndSaveNonce = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ""];
            });
        });
    };
    Login2Page.prototype.signup = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var signupOrSignin, oauthUrl, browser;
            return __generator(this, function (_a) {
                signupOrSignin = (type == 'signup' ? __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].security.register : __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].security.login);
                oauthUrl = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].security.login + signupOrSignin;
                '?client_id=' + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].clientId + '&' +
                    'redirect_uri=' + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].redirectUri + '&' +
                    'response_type=id_token%20token&';
                if (type == 'add')
                    oauthUrl = 'https://ffiri.ir/blog/wp-admin/post-new.php';
                else if (type == 'all')
                    oauthUrl = 'https://ffiri.ir/blog/wp-admin/edit.php';
                browser = this.iab.create(oauthUrl, '_blank', 'location=no,clearcache=yes,clearsessioncache=yes,useWideViewPort=yes');
                browser.on('loadstart').subscribe(function (event) {
                    if ((event.url).indexOf('http://localhost:8100') === 0) {
                        browser.on('exit').subscribe(function () { });
                        browser.close();
                        var defaultError = 'Problem authenticating with SimplePOS IDS';
                    }
                });
                browser.on('exit').subscribe(function (event) {
                });
                return [2 /*return*/];
            });
        });
    };
    Login2Page.prototype.signUpIdea = function () {
        this.navCtrl.setRoot(Login2Page_1);
    };
    Login2Page.prototype.goToFirstPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
    };
    Login2Page.prototype.gotoInfoPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Login2Page.prototype.signup2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        return _this.createAndSaveNonce().then(function (nonce) {
                            var state = Math.floor(Math.random() * 1000000000).toString();
                            if (window.crypto) {
                                var array = new Uint32Array(1);
                                window.crypto.getRandomValues(array);
                                state = array.join().toString();
                            }
                            _this.buildOAuthUrl(state, nonce).then(function (oauthUrl) {
                                var browser = _this.iab.create(oauthUrl, '_blank', 'location=no,clearcache=yes,clearsessioncache=yes,useWideViewPort=yes');
                                browser.on('loadstart').subscribe(function (event) {
                                    if ((event.url).indexOf('http://localhost:8100') === 0) {
                                        browser.on('exit').subscribe(function () { });
                                        browser.close();
                                        var parsedResponse = _this.fetchToken(event.url);
                                        var defaultError = 'Problem authenticating with IDS';
                                        if (parsedResponse['state'] !== state) {
                                            reject(defaultError);
                                        }
                                        else if (parsedResponse['access_token'] !== undefined &&
                                            parsedResponse['access_token'] !== null) {
                                            resolve(parsedResponse);
                                        }
                                        else {
                                            reject(defaultError);
                                        }
                                    }
                                });
                                browser.on('exit').subscribe(function (event) {
                                    reject('The IDS sign in flow was canceled');
                                });
                            }, function (result) {
                                throw new Error(result);
                            });
                        });
                    }).catch(function (error) {
                        throw error;
                    })];
            });
        });
    };
    Login2Page.prototype.fetchToken = function (url) {
        var parsedResponse = {};
        if (url) {
            var urlParameter = url.split('#')[1];
            if (urlParameter) {
                var responseParameters = urlParameter.split('&');
                for (var i = 0; i < responseParameters.length; i++) {
                    parsedResponse[responseParameters[i].split('=')[0]] =
                        responseParameters[i].split('=')[1];
                }
            }
        }
        return parsedResponse;
    };
    Login2Page.prototype.buildOAuthUrl = function (state, nonce) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.loginUrl +
                        //'?client_id=' + this.oauthService.clientId
                        +'&' + 'redirect_uri=' + this.redirectUri
                        + '&' + 'response_type=id_token%20token' +
                        //+ '&' + 'scope=' + encodeURI(this.oauthService.scope)
                        +'&' + 'state=' + state + '&nonce=' + nonce];
            });
        });
    };
    Login2Page.prototype.setLanguage = function () {
        var defaultLanguage = this.translate.getDefaultLang();
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    Login2Page.prototype.presentToast = function (msg, time) {
        if (time === void 0) { time = 2000; }
        var toast = this.toastController.create({
            message: msg,
            duration: time,
            position: "top"
        });
        toast.present();
    };
    Login2Page.prototype.step1 = function () {
        if (this.patternMobile.test(this.mobile)) {
            this.step1flag = true;
        }
        else {
            this.step1flag = false;
        }
    };
    Login2Page.prototype.sendPin = function () { };
    Login2Page = Login2Page_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login2',template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\login2\login2.html"*/'<ion-content padding class="transparent-header iranyekan">\n  <ion-header>\n    <ion-navbar>\n\n    </ion-navbar>\n  </ion-header>\n  <img class="logo" src="http://ecupservice.ffiri.ir/images/logo.png" />\n  اطلاعات شما به سرور ارسال شد منتظر دریافت پیامک باشید\n  <div padding *ngIf="!jwt">\n\n    <button ion-button block outline (click)="goToFirstPage()" color="light"\n      class="login-button">ویرایش مجدد شماره موبایل </button>\n\n    <ion-item>\n      <ion-input [(ngModel)]="pin" (ionChange)="textChanged()" type="number" placeholder="پین"></ion-input>\n    </ion-item>\n\n    <button [disabled]="!step1flag" ion-button block outline (click)="login2()" color="light"\n      class="login-button">بررسی</button>\n\n    <button [disabled]="!wpIdeaTokenECUP" ion-button block outline (click)="gotoInfoPage()" color="light" class="login-button">صفحه ی بعد</button>\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar class="footer navigation iranyekan white">\n    <ion-list no-lines>\n    سایت فوتبال مجازی ایران\n    </ion-list>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\login2\login2.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_language_service_language_service__["a" /* LanguageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], Login2Page);
    return Login2Page;
    var Login2Page_1;
}());

//# sourceMappingURL=login2.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export createTranslateLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_about_about__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_language_service_language_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login2_login2__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_exit_exit__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_wp_rest_posts__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* FifaApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login2_login2__["a" /* Login2Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_exit_exit__["a" /* ExitPage */]
                //HttpClientModule,
                //JsonpModule // if used
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* FifaApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* FifaApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_login2_login2__["a" /* Login2Page */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_exit_exit__["a" /* ExitPage */]
                //HttpClientModule,
                //JsonpModule // if used
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__providers_language_service_language_service__["a" /* LanguageServiceProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_wp_rest_posts__["a" /* PostsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__providers_language_service_language_service__["a" /* LanguageServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_12__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '../assets/i18n/', '.json');
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FifaApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FifaApp = (function () {
    function FifaApp(platform, statusBar, splashScreen, translate, config) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        this.textDir = "rtl";
        translate.setDefaultLang('fa');
        translate.use('fa');
        //this.initTranslate();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //this is to determine the text direction depending on the selected language
            _this.translate.onLangChange.subscribe(function (event) {
                _this.textDir = event.lang == 'fa' ? 'rtl' : 'ltr';
            });
        });
    }
    FifaApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('fa');
        //translate.setDefaultLang('en');
        this.translate.use('fa');
        if (this.translate.getBrowserLang() !== undefined) {
            this.translate.use(this.translate.getBrowserLang());
        }
        else {
            this.translate.use('fa'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    FifaApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */]])
    ], FifaApp);
    return FifaApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PostsProvider = (function () {
    function PostsProvider(http) {
        this.http = http;
        this.api_url = __WEBPACK_IMPORTED_MODULE_2__env__["a" /* ENV */].api.baseUrl;
        this.api_url_Zeinabian = __WEBPACK_IMPORTED_MODULE_2__env__["a" /* ENV */].api.baseUrl;
        console.log('Hello QuotesProvider Provider');
    }
    PostsProvider.prototype.getPosts = function (page) {
        return this.http.get(this.api_url + "?_embed&page=" + page + "&per_page=10");
    };
    PostsProvider.prototype.getPostsZeinabian = function (page) {
        return this.http.get(this.api_url_Zeinabian + "?_embed&page=" + page + "&per_page=10");
    };
    PostsProvider.prototype.postQuote = function (content, author) {
        var data = {
            title: content,
            quote: content,
            writer: author,
            status: 'publish'
        };
        console.log(data);
        var token = JSON.parse(localStorage.getItem('wpIdeaTokenECUP')).token;
        console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        });
        return this.http.post(this.api_url, data, { headers: headers });
    };
    PostsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PostsProvider);
    return PostsProvider;
}());

//# sourceMappingURL=posts.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENV; });
var ENV = {
    name: "Development",
    api: {
        baseUrl: 'http://ecupservice.ffiri.ir',
        baseUrl2: 'http://laravel:8000',
    },
    otp_api: {
        otp1_url: '/api/v1/otp1/',
        otp11_url: '/api/v1/otp11/',
        otp2_url: '/api/v1/otp2/',
        otp22_url: '/api/v1/otp22/',
    },
    webapp: {
        baseUrl: "https://ffiri.ir",
        socialUrl: "/social",
        avatarFolder: "/upload"
    },
    service: {
        baseUrl: "https://ffiri.ir",
        getMe: "/api/v1/info/me",
        getMePay: "/api/v1/pay",
        payment: "/payment"
    },
    security: {
        validate: "/api/v1/closed",
        login: "/login",
        register: "/register"
    },
    googleMap: {
        apikey: "dsgasdfasdfsdf"
    },
    clientId: "",
    redirectUri: "",
    logError: true
};
//# sourceMappingURL=env.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__env__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var RestProvider = (function () {
    function RestProvider(http, httpp) {
        this.http = http;
        this.httpp = httpp;
        console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.postOtp1 = function (mobile) {
        var uri = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].otp_api.otp1_url;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        var data = "mobile=" + mobile; //updated
        return this.http.post(uri, data, httpOptions)
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
        });
    };
    RestProvider.prototype.postOtp2 = function (mobile, pin) {
        var uri = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].otp_api.otp2_url;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        var data = "mobile=" + mobile + "&code=" + pin; //updated
        return this.http.post(uri, data, httpOptions)
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
        });
    };
    RestProvider.prototype.getOtp1 = function (mobile) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl +
                    __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].otp_api.otp11_url +
                    ("?mobile=" + mobile);
                console.log(url);
                return [2 /*return*/, this.http
                        .get(url, {
                        headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                            'MyClientCert': '',
                            'MyToken': '' // This is empty
                        })
                    })
                        .map(function (res) { return res; })];
            });
        });
    };
    RestProvider.prototype.getRequireOtp = function (phone) {
    };
    RestProvider.prototype.postLogin = function (mobile, pin) {
        var uri = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].otp_api.otp2_url;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var data = "phone=" + mobile + "&code=" + pin;
        return this.http.post(uri, data, httpOptions)
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
        });
    };
    RestProvider.prototype.getOtp2 = function (mobile, pin) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].otp_api.otp22_url +
                    (mobile + "/" + pin);
                console.log(url);
                return [2 /*return*/, this.http
                        .get(url, {
                        headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                            'Content-Type': 'application/json',
                            'X-Requested-With': 'XMLHttpRequest',
                            'MyClientCert': '',
                            'MyToken': '' // This is empty
                        })
                    })
                        .map(function (res) { return res; })];
            });
        });
    };
    RestProvider.prototype.postTokenValidate = function (id, email, name, family, mobile, national_code, psn_id, type) {
        var uri = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].service.getMe;
        console.log(uri);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var data = "token=" + id;
        if (email)
            data += ("&email=" + email);
        if (name)
            data += ("&name=" + name);
        if (family)
            data += ("&family=" + family);
        if (mobile)
            data += ("&mobile=" + mobile);
        if (national_code)
            data += ("&national_code=" + national_code);
        if (psn_id)
            data += ("&psn_id=" + psn_id);
        if (type)
            data += ("&type=" + type);
        return this.http.post(uri, data, httpOptions)
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
        });
    };
    RestProvider.prototype.postTokenGetPayStatus = function (author_id, token) {
        var uri = __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].api.baseUrl + __WEBPACK_IMPORTED_MODULE_7__env__["a" /* ENV */].service.getMePay;
        console.log(uri);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        var data = "author_id=" + author_id;
        if (token)
            data += ("&token=" + token);
        return this.http.post(uri, data, httpOptions)
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err);
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login2_login2__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__env__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};











var LoginPage = (function () {
    function LoginPage(navCtrl, 
        //private cookieService: CookieService,
        loadingCtrl, translate, languageService, toastController, restProvider, iab, navParams) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.toastController = toastController;
        this.restProvider = restProvider;
        this.iab = iab;
        this.navParams = navParams;
        this.patternMobile = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
        this.redirectUri = "http://localhost:8100/";
        this.loginUrl = "https://ffiri.ir/blog/jwt.php?client_id=&redirect_uri=&response_type=id_token-token&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvbWFzamVkY2xvb2IuaXJcL2Jsb2ciLCJpYXQiOjE1NDk0NjAyMjEsIm5iZiI6MTU0OTQ2MDIyMSwiZXhwIjoxNTUwMDY1MDIxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.sbGawBdMFt7jAhn3RIYyxui_er0_XsJ67YRWBtaUUyw";
        this.step1flag = false;
        this.logintext = "ارسال کد";
        this.languages = this.languageService.getLanguages();
        this.setLanguage();
    }
    // ngOnInit(): void {
    //   //this.cookieService.set( 'Test', 'Hello World' );
    //   //this.JWT = this.cookieService.get('JWT');
    //   console.log('jwt '+this.JWT)
    //   this.validateToken(this.JWT);
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                console.log('ionViewDidLoad LoginPage');
                this.wpIdeaTokenECUP = JSON.parse(localStorage.getItem('wpIdeaTokenECUP'));
                if (this.wpIdeaTokenECUP) {
                    //await this.validateToken(null);
                    this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                }
                params = new __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* URLSearchParams */](window.location.search);
                this.JWT = params.get('jwt');
                console.log('jwt :' + this.JWT);
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.callOtp11 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading, report;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({ content: 'در حال ارسال درخواست به سرور' });
                        return [4 /*yield*/, loading.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restProvider.postOtp1(
                            // var report = await this.restProvider.getOtp1(
                            this.mobile)];
                    case 2:
                        report = _a.sent();
                        report.subscribe(function (res) {
                            console.log(res);
                            _this.resultCallOtp1 = res;
                            _this.step1flag = false;
                            _this.presentToast('انجام شد!'
                            // display: 'top',
                            // color: 'warning'
                            );
                            _this.gotoPinPage();
                        }, function (err) {
                            _this.presentToast('سرور در دسترس نیست!'
                            // display: 'top',
                            // color: 'warning'
                            );
                            console.log(err);
                            loading.dismiss();
                        }, function () { return loading.dismiss(); });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.textChanged = function () {
        this.logintext = "ورود";
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            duration: 1000
                        });
                        return [4 /*yield*/, this.callOtp1()];
                    case 1:
                        data = _a.sent();
                        loading.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gotoPinPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login2_login2__["a" /* Login2Page */], { mobile: this.mobile });
    };
    LoginPage.prototype.login2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loader = this.loadingCtrl.create({ content: 'ارسال' });
                        return [4 /*yield*/, loader.present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.callOtp11()];
                    case 2:
                        _a.sent();
                        loader.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.callOtp1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.restProvider.postOtp1(this.mobile).subscribe(function (data) {
                            console.log(data);
                            _this.resultCallOtp1 = data;
                            return data;
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.createAndSaveNonce = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ""];
            });
        });
    };
    LoginPage.prototype.step1 = function () {
        if (this.patternMobile.test(this.mobile)) {
            this.step1flag = true;
        }
        else {
            this.step1flag = false;
        }
    };
    LoginPage.prototype.signup = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var signupOrSignin, oauthUrl, browser;
            return __generator(this, function (_a) {
                signupOrSignin = (type == 'signup' ? __WEBPACK_IMPORTED_MODULE_8__env__["a" /* ENV */].security.register : __WEBPACK_IMPORTED_MODULE_8__env__["a" /* ENV */].security.login);
                oauthUrl = __WEBPACK_IMPORTED_MODULE_8__env__["a" /* ENV */].api.baseUrl + signupOrSignin;
                '?client_id=' + __WEBPACK_IMPORTED_MODULE_8__env__["a" /* ENV */].clientId + '&' +
                    'redirect_uri=' + __WEBPACK_IMPORTED_MODULE_8__env__["a" /* ENV */].redirectUri + '&' +
                    'response_type=id_token%20token&';
                if (type == 'add')
                    oauthUrl = 'https://ffiri.ir/blog/wp-admin/post-new.php';
                else if (type == 'all')
                    oauthUrl = 'https://ffiri.ir/blog/wp-admin/edit.php';
                browser = this.iab.create(oauthUrl, '_blank', 'location=no,clearcache=yes,clearsessioncache=yes,useWideViewPort=yes');
                browser.on('loadstart').subscribe(function (event) {
                    if ((event.url).indexOf('http://localhost:8100') === 0) {
                        browser.on('exit').subscribe(function () { });
                        browser.close();
                        var defaultError = 'Problem authenticating with SimplePOS IDS';
                    }
                });
                browser.on('exit').subscribe(function (event) {
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.signup2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        return _this.createAndSaveNonce().then(function (nonce) {
                            var state = Math.floor(Math.random() * 1000000000).toString();
                            if (window.crypto) {
                                var array = new Uint32Array(1);
                                window.crypto.getRandomValues(array);
                                state = array.join().toString();
                            }
                            _this.buildOAuthUrl(state, nonce).then(function (oauthUrl) {
                                var browser = _this.iab.create(oauthUrl, '_blank', 'location=no,clearcache=yes,clearsessioncache=yes,useWideViewPort=yes');
                                browser.on('loadstart').subscribe(function (event) {
                                    if ((event.url).indexOf('http://localhost:8100') === 0) {
                                        browser.on('exit').subscribe(function () { });
                                        browser.close();
                                        var parsedResponse = _this.fetchToken(event.url);
                                        var defaultError = 'Problem authenticating with IDS';
                                        if (parsedResponse['state'] !== state) {
                                            reject(defaultError);
                                        }
                                        else if (parsedResponse['access_token'] !== undefined &&
                                            parsedResponse['access_token'] !== null) {
                                            resolve(parsedResponse);
                                        }
                                        else {
                                            reject(defaultError);
                                        }
                                    }
                                });
                                browser.on('exit').subscribe(function (event) {
                                    reject('The IDS sign in flow was canceled');
                                });
                            }, function (result) {
                                throw new Error(result);
                            });
                        });
                    }).catch(function (error) {
                        throw error;
                    })];
            });
        });
    };
    LoginPage.prototype.fetchToken = function (url) {
        var parsedResponse = {};
        if (url) {
            var urlParameter = url.split('#')[1];
            if (urlParameter) {
                var responseParameters = urlParameter.split('&');
                for (var i = 0; i < responseParameters.length; i++) {
                    parsedResponse[responseParameters[i].split('=')[0]] =
                        responseParameters[i].split('=')[1];
                }
            }
        }
        return parsedResponse;
    };
    LoginPage.prototype.buildOAuthUrl = function (state, nonce) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.loginUrl +
                        //'?client_id=' + this.oauthService.clientId
                        +'&' + 'redirect_uri=' + this.redirectUri
                        + '&' + 'response_type=id_token%20token' +
                        //+ '&' + 'scope=' + encodeURI(this.oauthService.scope)
                        +'&' + 'state=' + state + '&nonce=' + nonce];
            });
        });
    };
    LoginPage.prototype.setLanguage = function () {
        var defaultLanguage = this.translate.getDefaultLang();
        if (this.languageSelected) {
            this.translate.setDefaultLang(this.languageSelected);
            this.translate.use(this.languageSelected);
        }
        else {
            this.languageSelected = defaultLanguage;
            this.translate.use(defaultLanguage);
        }
    };
    LoginPage.prototype.presentToast = function (msg, time) {
        if (time === void 0) { time = 2000; }
        var toast = this.toastController.create({
            message: msg,
            duration: time,
            position: "top"
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\login\login.html"*/'<ion-content padding class="transparent-header iranyekan white">\n  <ion-header>\n    <ion-navbar>\n\n    </ion-navbar>\n  </ion-header>\n  <img class="logo" src="http://ecupservice.ffiri.ir/images/logo.png" />\n  <div padding *ngIf="!jwt">\n        لطفا شماره همراه خود را وارد کنید\n    <ion-item>\n      <ion-input [(ngModel)]="mobile" (ionChange)="step1()" [pattern]="patternMobile" type="text" placeholder="موبایل">\n      </ion-input>\n    </ion-item>\n    <button [disabled]="!step1flag" ion-button block outline (click)="login2()" color="light" class="login-button">{{logintext}}</button>\n    <button [disabled]="!resultCallOtp1" ion-button block outline (click)="gotoPinPage()" color="light" class="login-button">صفحه ی بعد</button>\n  </div>\n</ion-content>\n<ion-footer class="navigation iranyekan white">\n    <ion-list>\n    سایت فوتبال مجازی ایران\n    </ion-list>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\saber\SaberProjects\Fifa\fifa-ionic\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_language_service_language_service__["a" /* LanguageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map