type RouteParam = string

export class GetRouteParam {
  get (): RouteParam {
    const splitPath = window.location.hash.slice(1).split('/')
    return splitPath[splitPath.length - 1]
  }
}
