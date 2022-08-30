import { Template } from './template.model';
export declare type RouteCallback = () => void | (() => () => Template);
export declare type Route = {
    path: string;
    callback: RouteCallback;
};
