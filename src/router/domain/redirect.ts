import { RoutePath, RoutePathWithHash } from '@/types'
import { transformStandardRouteToHashRoute } from '@/routes/domain/transformStandardRouteToHashRoute'

export class Redirect {
  /*
  * redyrect to new route
  */
  to (route: RoutePath | RoutePathWithHash): void {
    let parcedRoute = route

    if (route[0] === '/') {
      parcedRoute = transformStandardRouteToHashRoute(route as RoutePath)
    }

    window.location.assign(parcedRoute)
  }
}
