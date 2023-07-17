export type Template = string | Promise<string>

export type RouteCallback = () => void | (Promise<() => Template>) | (() => Template)

export type RouteCallbackWihoutTemplateRendering = () => void | (Promise<() => Template>) | (() => Template) | (() => Promise<void>)

export type RoutePath = `/${string}`
// this type is used in transformHashRouteToStandardRoute.ts
export type RoutePathWithHash = `#/${string}`

export interface RouteI {
  path: RoutePath
  callback: RouteCallback
}

export interface RouteInfo extends Omit<RouteI, 'callback'> {
  splitPath: string[],
  length: number,
  callback: RouteCallback | undefined
}

export interface RouterConfig {
  path404: RoutePath,
  renderId?: string
}
