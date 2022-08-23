import { Route } from '../models/route.model';
export declare class RouteManager {
    private static instance;
    private staticPaths;
    private staticRoutes;
    private dynamicPaths;
    private dynamicRoutes;
    private constructor();
    static getInstance(): RouteManager;
    add(route: Route): void;
    getAllPaths(): Route['path'][];
    getStaticPaths(): Route['path'][];
    getDynamicPaths(): Route['path'][];
    getAllRoutes(): Route[];
    getStaticRoutes(): Route[];
    getDynamicRoutes(): Route[];
    find(path: Route['path']): Route | undefined;
}
