export class RouteManager {
    constructor() {
        this.staticPaths = [];
        this.staticRoutes = [];
        this.dynamicPaths = [];
        this.dynamicRoutes = [];
    }
    static getInstance() {
        if (!RouteManager.instance) {
            RouteManager.instance = new RouteManager();
        }
        return RouteManager.instance;
    }
    add(route) {
        const isDynamicRoute = route.path.includes('/:');
        if (isDynamicRoute) {
            this.dynamicRoutes.push(route);
            this.dynamicPaths.push(route.path);
            return;
        }
        this.staticRoutes.push(route);
        this.staticPaths.push(route.path);
    }
    getAllPaths() {
        return [...this.staticPaths, ...this.dynamicPaths];
    }
    getStaticPaths() {
        return this.staticPaths;
    }
    getDynamicPaths() {
        return this.dynamicPaths;
    }
    getAllRoutes() {
        return [...this.staticRoutes, ...this.dynamicRoutes];
    }
    getStaticRoutes() {
        return this.staticRoutes;
    }
    getDynamicRoutes() {
        return this.dynamicRoutes;
    }
    find(path) {
        return this.getAllRoutes().find(route => route.path === path);
    }
}
//# sourceMappingURL=routeManager.js.map