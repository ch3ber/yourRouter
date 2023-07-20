import { RouteManager } from '@/routes/domain/routeManager'
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

    const validRouteRegex = /^(\/(:{1}\w)?(\w+)?(\w-){0,}(\w+)?)(\/(:{1}|-)?(\w+)?(\w-){0,}(\w+)){0,}$/i
    const isValidRoute = validRouteRegex.test(path)
    if (!isValidRoute) {
      throw new Error(`Error adding a route. The route "${path}" is not a valid route.`)
    }

    if (this.routeManager.find(path)) {
      throw new Error(`Error adding a route. The router don't allow duplicated routes. The route "${path}" is an existing route.`)
    }

    const route = { path, callback }
    this.routeManager.add(route)
  }
}
