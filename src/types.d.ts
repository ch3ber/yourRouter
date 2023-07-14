export type Template = string | Promise<string>

export type RouteCallback = () => void | (Promise<() => Template>) | (() => Template)

export type Route = {
  path: string,
  callback: RouteCallback
}

export interface RouteInfo extends Omit<Route, 'callback'> {
  splitPath: string[],
  length: number,
  callback: RouteCallback | undefined
}

export interface RouterConfig {
  path404: string,
  renderId?: string
}
