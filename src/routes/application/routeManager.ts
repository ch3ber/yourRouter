import { RouteI, RoutePath } from '@types'

export class RouteManager {
  // eslint-disable-next-line no-use-before-define
  private static instance: RouteManager
  private staticPaths: RoutePath[]
  private staticRoutes: RouteI[]
  private dynamicPaths: RoutePath[]
  private dynamicRoutes: RouteI[]

  private constructor () {
    this.staticPaths = []
    this.staticRoutes = []
    this.dynamicPaths = []
    this.dynamicRoutes = []
  }

  static getInstance (): RouteManager {
    if (!RouteManager.instance) {
      RouteManager.instance = new RouteManager()
    }

    return RouteManager.instance
  }

  add (route: RouteI): void {
    const isDynamicRoute = route.path.includes('/:')

    if (isDynamicRoute) {
      this.dynamicRoutes.push(route)
      this.dynamicPaths.push(route.path)
      return
    }

    this.staticRoutes.push(route)
    this.staticPaths.push(route.path)
  }

  getAllPaths (): RoutePath[] {
    return [...this.staticPaths, ...this.dynamicPaths]
  }

  getStaticPaths (): RoutePath[] {
    return this.staticPaths
  }

  getDynamicPaths (): RoutePath[] {
    return this.dynamicPaths
  }

  getAllRoutes (): RouteI[] {
    return [...this.staticRoutes, ...this.dynamicRoutes]
  }

  getStaticRoutes (): RouteI[] {
    return this.staticRoutes
  }

  getDynamicRoutes (): RouteI[] {
    return this.dynamicRoutes
  }

  find (path: RoutePath): RouteI | undefined {
    return this.getAllRoutes().find(route => route.path === path)
  }
}
