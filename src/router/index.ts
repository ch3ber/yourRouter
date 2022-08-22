import { Route } from '@models/routes.model'
import { AddRouteCallback, RouterConfig } from '@models/router.model'
import { renderInHtmlNode } from '@utils/renderInHtmlNode'

export class Router {
  private static instance: Router
  private appRoutes: Route[]
  private appDynamicRoutes: Route[]
  private renderId: string
  private path404: string

  private constructor (config: RouterConfig) {
    this.path404 = config.path404
    this.renderId = config.renderId ?? ''
    this.appRoutes = []
    this.appDynamicRoutes = []
  }

  public static createInstance (config: RouterConfig): void {
    Router.instance = new Router(config)
  }

  public static getInstance (): Router {
    if (!Router.instance) {
      throw new Error('Need create Router instance: posible fix "Router.createInstance()"')
    }
    return Router.instance
  }

  private async mount () {
    window.location.hash = '/'

    window.addEventListener('hashchange', async (event: HashChangeEvent) => {
      event.preventDefault()
      const actualRoute = window.location.hash.slice(1)
      await this.renderRoute(actualRoute)
    })

    await this.renderRoute('/')
    // await this.loadListeners()
  }

  /*
    add a new route to app routes
  */
  addRoute (path: string, callback: AddRouteCallback) {
    if (this.appRoutes.length === 1) this.mount()
    const isDynamicRoute = path.includes('/:')

    if (isDynamicRoute) {
      this.appDynamicRoutes.push({ path, callback })
      return
    }

    this.appRoutes.push({ path, callback })
  }

  private async renderRoute (path: string) {
    const isDynamicRoute = this.verifyDynamicRoute()
    if (isDynamicRoute) {
      this.renderDynamicRoute()
      return
    }

    const isValidRoute = this.appRoutes.some(route => route.path === path)
    if (!isValidRoute) {
      window.location.hash = this.path404
      return
    }

    const actualRoute = this.appRoutes.find(route => route.path === path)!
    if (typeof actualRoute.callback() !== undefined) {
      await renderInHtmlNode(actualRoute.callback(), this.renderId)
    }
    // await this.loadListeners()
  }

  private verifyDynamicRoute () {
    const routeLength = window.location.hash.split('/').length
    let isDynamicRoute = false

    this.appDynamicRoutes.forEach(route => {
      const nameLength = route.path.split('/').length
      if (nameLength === routeLength) {
        isDynamicRoute = true
      }
    })

    return isDynamicRoute
  }

  private async renderDynamicRoute () {
    const routePath = this.getDynamicRoutePath()
    const actualRoute = this.appDynamicRoutes.find(route => route.path === routePath)!

    if (typeof actualRoute.callback() !== undefined) {
      await renderInHtmlNode(actualRoute.callback(), this.renderId)
    }
    // await this.loadListeners()
  }

  private getDynamicRoutePath (): string {
    const routeLength = window.location.hash.split('/').length
    let routeName = ''

    this.appDynamicRoutes.forEach(route => {
      if (route.path.split('/').length === routeLength) {
        routeName = route.path
      }
    })

    return routeName
  }

  getRouteInfo () {
    const isDynamicRoute = this.verifyDynamicRoute()

    if (isDynamicRoute) {
      const name = this.getDynamicRoutePath()
      const { callback } = this.appDynamicRoutes.find(route => route.path === name)!
      return {
        path: name,
        callback
      }
    }

    const path = window.location.hash.slice(1)
    const { callback } = this.appRoutes.find(route => route.path === path)!
    return {
      path,
      callback
    }
  }

  getRouteParam (): string {
    const path = window.location.hash.split('/')!
    return path[path.length - 1]
  }
}
