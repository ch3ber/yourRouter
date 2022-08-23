var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetRouteInfo } from '@utils/getRouteInfo';
import { renderInHtmlNode } from '@utils/renderInHtmlNode';
import { RouteManager } from '@utils/routeManager';
const getRouteInfo = new GetRouteInfo();
const routeManager = RouteManager.getInstance();
export class Router {
    constructor(config) {
        var _a;
        this.path404 = config.path404;
        this.renderId = (_a = config.renderId) !== null && _a !== void 0 ? _a : '';
    }
    /*
      singleton method
    */
    static createInstance(config) {
        Router.instance = new Router(config);
    }
    /*
      singleton method
    */
    static getInstance() {
        if (!Router.instance) {
            throw new Error('Need create Router instance: posible fix "Router.createInstance()"');
        }
        return Router.instance;
    }
    mount() {
        return __awaiter(this, void 0, void 0, function* () {
            // set route to /#/
            window.location.hash = '/';
            // mount router
            window.addEventListener('hashchange', (event) => __awaiter(this, void 0, void 0, function* () {
                event.preventDefault();
                const path = getRouteInfo.path();
                if (this.renderId === '')
                    return;
                yield this.renderRoute(path);
            }));
            // render indexRoute
            if (this.renderId === '')
                return;
            yield this.renderRoute('/');
        });
    }
    /*
      render actual route into html node (renderId)
    */
    renderRoute(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!getRouteInfo.isValidRoute(path)) {
                this.redyrectTo(this.path404);
                return;
            }
            const route = routeManager.find(path);
            const routeCallback = route === null || route === void 0 ? void 0 : route.callback;
            yield renderInHtmlNode(routeCallback(), this.renderId);
        });
    }
    redyrectTo(to) {
        window.location.hash = to;
    }
    /*
      add a new route
    */
    addRoute(path, callback) {
        if (routeManager.getAllPaths().length === 1)
            this.mount();
        const route = { path, callback };
        routeManager.add(route);
    }
    getRouteParam() {
        const splitPath = window.location.hash.slice(1).split('/');
        return splitPath[splitPath.length - 1];
    }
}
//# sourceMappingURL=index.js.map