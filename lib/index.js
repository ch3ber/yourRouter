var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { GetRouteInfo } from './utils/getRouteInfo';
import { renderInHtmlNode } from './utils/renderInHtmlNode';
import { RouteManager } from './utils/routeManager';
const getRouteInfo = new GetRouteInfo();
const routeManager = RouteManager.getInstance();
export class Router {
    constructor(config) {
        this.path404 = config.path404;
        this.renderId = config.renderId;
    }
    /*
    * create a new router with config
    */
    static createInstance(config) {
        if (config.path404 === undefined) {
            throw new Error('Need specific 404 HTTP Error path in Router config. To fix use: { path404: \'YOUR PATH\' }');
        }
        Router.instance = new Router(config);
    }
    /*
    * method to get instance of Router
    */
    static getInstance() {
        if (!Router.instance) {
            throw new Error('Need create Router instance: posible fix "Router.createInstance({})"');
        }
        return Router.instance;
    }
    /*
    * method to mount the router, this method add an
    * event listener to the window object when the hash
    * change event occours
    */
    mount() {
        return __awaiter(this, void 0, void 0, function* () {
            // set route to /#/
            window.location.hash = '/';
            // mount router
            window.addEventListener('hashchange', (e) => this.onHashChange(e));
            // render indexRoute
            if (this.renderId === undefined) {
                const routeInfo = getRouteInfo.get();
                const callback = routeInfo.callback;
                yield callback();
                return;
            }
            yield this.renderRoute('/');
        });
    }
    /*
    * this method is executabled when the hash change
    * event occours
    */
    onHashChange(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const path = getRouteInfo.path();
            if (!getRouteInfo.isValidRoute(path)) {
                this.redirectTo(this.path404);
                return;
            }
            if (this.renderId === undefined) {
                const routeInfo = getRouteInfo.get();
                const callback = routeInfo.callback;
                yield callback();
                return;
            }
            yield this.renderRoute(path);
        });
    }
    /*
    * render actual route into html node (renderId)
    */
    renderRoute(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const { callback } = routeManager.find(path);
            const template = yield callback();
            yield renderInHtmlNode(template, this.renderId);
        });
    }
    /*
    * redyrect to new route
    */
    redirectTo(to) {
        window.location.hash = to;
    }
    /*
    * add a new route to routeManager and
    * mount the router when there is a route
    */
    addRoute(path, callback) {
        if (path[0] !== '/') {
            throw new Error('All paths need start with "/". Example: /test/route or /dynamic/route/:id');
        }
        if (routeManager.getAllPaths().length === 1)
            this.mount();
        const route = { path, callback };
        routeManager.add(route);
    }
    /*
     * returns the route param as string
     *
     * EXAMPLE:
     *
     * path: /example/route/:id
     * param: /example/route/253
     * returns 253 as string
     */
    getRouteParam() {
        const splitPath = window.location.hash.slice(1).split('/');
        return splitPath[splitPath.length - 1];
    }
}
//# sourceMappingURL=index.js.map