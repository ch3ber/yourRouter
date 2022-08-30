import { Route, RouteCallback } from './route.model';
export interface RouteInfo extends Omit<Route, 'callback'> {
    splitPath: string[];
    length: number;
    callback: RouteCallback | undefined;
}
