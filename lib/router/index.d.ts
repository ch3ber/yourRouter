import { Route } from '@models/route.model';
import { AddRouteCallback, RouterConfig } from '@models/router.model';
export declare class Router {
    private static instance;
    private renderId;
    private path404;
    private constructor();
    static createInstance(config: RouterConfig): void;
    static getInstance(): Router;
    private mount;
    private renderRoute;
    redyrectTo(to: Route['path']): void;
    addRoute(path: string, callback: AddRouteCallback): void;
    getRouteParam(): string;
}
