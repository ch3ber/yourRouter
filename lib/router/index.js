"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.__esModule = true;
exports.Router = void 0;
var renderInHtmlNode_1 = require("@utils/renderInHtmlNode");
var Router = /** @class */ (function () {
    function Router(config) {
        var _a;
        this.path404 = config.path404;
        this.renderId = (_a = config.renderId) !== null && _a !== void 0 ? _a : '';
        this.appRoutes = [];
        this.appDynamicRoutes = [];
    }
    Router.createInstance = function (config) {
        Router.instance = new Router(config);
    };
    Router.getInstance = function () {
        if (!Router.instance) {
            throw new Error('Need create Router instance: posible fix "Router.createInstance()"');
        }
        return Router.instance;
    };
    Router.prototype.mount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.location.hash = '/';
                        window.addEventListener('hashchange', function (event) { return __awaiter(_this, void 0, void 0, function () {
                            var actualRoute;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        event.preventDefault();
                                        actualRoute = window.location.hash.slice(1);
                                        return [4 /*yield*/, this.renderRoute(actualRoute)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, this.renderRoute('/')
                            // await this.loadListeners()
                        ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
      add a new route to app routes
    */
    Router.prototype.addRoute = function (path, callback) {
        if (this.appRoutes.length === 1)
            this.mount();
        var isDynamicRoute = path.includes('/:');
        if (isDynamicRoute) {
            this.appDynamicRoutes.push({ path: path, callback: callback });
            return;
        }
        this.appRoutes.push({ path: path, callback: callback });
    };
    Router.prototype.renderRoute = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var isDynamicRoute, isValidRoute, actualRoute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isDynamicRoute = this.verifyDynamicRoute();
                        if (isDynamicRoute) {
                            this.renderDynamicRoute();
                            return [2 /*return*/];
                        }
                        isValidRoute = this.appRoutes.some(function (route) { return route.path === path; });
                        if (!isValidRoute) {
                            window.location.hash = this.path404;
                            return [2 /*return*/];
                        }
                        actualRoute = this.appRoutes.find(function (route) { return route.path === path; });
                        if (!(typeof actualRoute.callback() !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, renderInHtmlNode_1.renderInHtmlNode)(actualRoute.callback(), this.renderId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Router.prototype.verifyDynamicRoute = function () {
        var routeLength = window.location.hash.split('/').length;
        var isDynamicRoute = false;
        this.appDynamicRoutes.forEach(function (route) {
            var nameLength = route.path.split('/').length;
            if (nameLength === routeLength) {
                isDynamicRoute = true;
            }
        });
        return isDynamicRoute;
    };
    Router.prototype.renderDynamicRoute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var routePath, actualRoute;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        routePath = this.getDynamicRoutePath();
                        actualRoute = this.appDynamicRoutes.find(function (route) { return route.path === routePath; });
                        if (!(typeof actualRoute.callback() !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, (0, renderInHtmlNode_1.renderInHtmlNode)(actualRoute.callback(), this.renderId)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Router.prototype.getDynamicRoutePath = function () {
        var routeLength = window.location.hash.split('/').length;
        var routeName = '';
        this.appDynamicRoutes.forEach(function (route) {
            if (route.path.split('/').length === routeLength) {
                routeName = route.path;
            }
        });
        return routeName;
    };
    Router.prototype.getRouteInfo = function () {
        var isDynamicRoute = this.verifyDynamicRoute();
        if (isDynamicRoute) {
            var name_1 = this.getDynamicRoutePath();
            var callback_1 = this.appDynamicRoutes.find(function (route) { return route.path === name_1; }).callback;
            return {
                path: name_1,
                callback: callback_1
            };
        }
        var path = window.location.hash.slice(1);
        var callback = this.appRoutes.find(function (route) { return route.path === path; }).callback;
        return {
            path: path,
            callback: callback
        };
    };
    Router.prototype.getRouteParam = function () {
        var path = window.location.hash.split('/');
        return path[path.length - 1];
    };
    return Router;
}());
exports.Router = Router;
