import { RouteInfo } from '../models/getRouteInfo.model';
import { Route } from '../models/route.model';
export declare class GetRouteInfo {
    path(): RouteInfo['path'];
    splitPath(): RouteInfo['splitPath'];
    length(): RouteInfo['length'];
    callback(): RouteInfo['callback'];
    isDynamicRoute(): boolean;
    isValidRoute(path: Route['path']): boolean;
    private getDynamicRoutePath;
    get(): RouteInfo;
}
