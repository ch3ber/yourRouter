type RouteParams = unknown

export class GetRouteParams {
  get (): RouteParams {
    // get the current route
    // check if the current route is a dynamic route
    // get the dynamic params
    const splitPath = window.location.hash.slice(1).split('/')
    return splitPath[splitPath.length - 1]
  }
}
