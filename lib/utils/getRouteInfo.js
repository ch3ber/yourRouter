import { RouteManager } from './routeManager';
const routeManager = RouteManager.getInstance();
export class GetRouteInfo {
    path() {
        if (this.isDynamicRoute()) {
            return this.getDynamicRoutePath();
        }
        return window.location.hash.slice(1);
    }
    splitPath() {
        if (this.isDynamicRoute()) {
            const path = this.getDynamicRoutePath();
            return path.slice(1).split('/');
        }
        return window.location.hash.slice(1).split('/');
    }
    length() {
        if (this.isDynamicRoute()) {
            const path = this.getDynamicRoutePath();
            return path.length;
        }
        return window.location.hash.slice(1).length;
    }
    callback() {
        const route = routeManager.find(this.path());
        return route === null || route === void 0 ? void 0 : route.callback;
    }
    isDynamicRoute() {
        const routePath = window.location.hash.slice(1).split('/');
        routePath.pop();
        let isDynamicRoute = false;
        const dynamicPaths = routeManager.getDynamicPaths();
        dynamicPaths.forEach(path => {
            const arrPath = path.split('/');
            arrPath.pop();
            if (arrPath.join('') === routePath.join('')) {
                isDynamicRoute = true;
            }
        });
        return isDynamicRoute;
    }
    isValidRoute(path) {
        if (this.isDynamicRoute()) {
            const dynamicPath = this.path();
            return routeManager.getDynamicPaths().some(xpath => xpath === dynamicPath);
        }
        return routeManager.getStaticPaths().some(xpath => xpath === path);
    }
    getDynamicRoutePath() {
        const routePath = window.location.hash.slice(1).split('/');
        routePath.pop();
        let dynamicPath = '';
        routeManager.getDynamicPaths().forEach(path => {
            const arrPath = path.split('/');
            arrPath.pop();
            if (arrPath.join('') === routePath.join('')) {
                dynamicPath = path;
            }
        });
        return dynamicPath;
    }
    get() {
        return {
            path: this.path(),
            splitPath: this.splitPath(),
            length: this.length(),
            callback: this.callback()
        };
    }
}
//# sourceMappingURL=getRouteInfo.js.map