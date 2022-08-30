import { Template } from './template.model';
export type AddRouteCallback = () => void | (() => () => Template);
export interface RouterConfig {
    path404: string;
    renderId?: string;
}
