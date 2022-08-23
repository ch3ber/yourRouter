import { Route } from './route.model'

export interface RouteInfo extends Route {
  splitPath: string[],
  length: number,
}
