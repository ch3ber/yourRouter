import { Route, RouteCallback } from './models/route.model';
import { RouterConfig } from './models/router.model';
export declare class Router {
    private static instance;
    private renderId;
    private path404;
    private constructor();
    static createInstance(config: RouterConfig): void;
    static getInstance(): Router;
    private mount;
    private onHashChange;
    private renderRoute;
    redyrectTo(to: Route['path']): void;
    addRoute(path: string, callback: RouteCallback): void;
    getRouteParam(): string;
}
