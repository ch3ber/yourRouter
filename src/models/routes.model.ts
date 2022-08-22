import { Template } from './template.model'

export type RouteCallback = void | (() => () => Template) | Promise<void> | Promise<() => () => Template>

export type Route = {
  path: string,
  callback: RouteCallback
}
