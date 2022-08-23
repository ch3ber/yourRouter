import { Route } from '@models/route.model'

export class RouteManager {
  // eslint-disable-next-line no-use-before-define
  private static instance: RouteManager
  private staticPaths: Route['path'][]
  private staticRoutes: Route[]
  private dynamicPaths: Route['path'][]
  private dynamicRoutes: Route[]

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

  add (route: Route): void {
    const isDynamicRoute = route.path.includes('/:')

    if (isDynamicRoute) {
      this.dynamicRoutes.push(route)
      this.dynamicPaths.push(route.path)
      return
    }

    this.staticRoutes.push(route)
    this.staticPaths.push(route.path)
  }

  getAllPaths (): Route['path'][] {
    return [...this.staticPaths, ...this.dynamicPaths]
  }

  getStaticPaths (): Route['path'][] {
    return this.staticPaths
  }

  getDynamicPaths (): Route['path'][] {
    return this.dynamicPaths
  }

  getAllRoutes (): Route[] {
    return [...this.staticRoutes, ...this.dynamicRoutes]
  }

  getStaticRoutes (): Route[] {
    return this.staticRoutes
  }

  getDynamicRoutes (): Route[] {
    return this.dynamicRoutes
  }

  find (path: Route['path']): Route | undefined {
    return this.getAllRoutes().find(route => route.path === path)
  }
}
