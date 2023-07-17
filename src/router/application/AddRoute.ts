import { RouteManager } from '@/routes/application/routeManager'
import { RouteCallback, RoutePath } from '@/types'

export class AddRoute {
  private routeManager = RouteManager.getInstance()

  add (path: RoutePath, callback: RouteCallback) {
    if (typeof path !== 'string') {
      throw new Error('Error adding a route. The route path must be a type string')
    }

    if (path[0] !== '/') {
      throw new Error('Error adding a route. All paths need start with "/". Example: /test/route or /dynamic/route/:id')
    }

    const route = { path, callback }
    this.routeManager.add(route)
  }
}
