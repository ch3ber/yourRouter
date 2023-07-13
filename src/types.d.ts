import { Template } from './template.model'

export type RouteCallback = () => void | (() => () => Template)

export type Route = {
  path: `/${string}`,
  callback: RouteCallback
}

export enum ROUTE_TYPES {
  STATIC = 'static'
}
