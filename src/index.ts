import { Route } from '@models/route.model'
import { AddRouteCallback, RouterConfig } from '@models/router.model'
import { Template } from '@models/template.model'
import { GetRouteInfo } from '@utils/getRouteInfo'
import { renderInHtmlNode } from '@utils/renderInHtmlNode'
import { RouteManager } from '@utils/routeManager'

const getRouteInfo = new GetRouteInfo()
const routeManager = RouteManager.getInstance()

export class Router {
  // eslint-disable-next-line no-use-before-define
  private static instance: Router
  private renderId: string
  private path404: string

  private constructor (config: RouterConfig) {
    this.path404 = config.path404
    this.renderId = config.renderId ?? ''
  }

  /*
    singleton method
  */
  public static createInstance (config: RouterConfig): void {
    if (config.path404 === undefined) {
      throw new Error('Need specific 404 HTTP Error path in Router config. To fix use: { path404: \'YOUR PATH\' }')
    }
    Router.instance = new Router(config)
  }

  /*
    singleton method
  */
  public static getInstance (): Router {
    if (!Router.instance) {
      throw new Error('Need create Router instance: posible fix "Router.createInstance()"')
    }
    return Router.instance
  }

  private async mount (): Promise<void> {
    // set route to /#/
    window.location.hash = '/'

    // mount router
    window.addEventListener('hashchange', async (event: HashChangeEvent) => {
      event.preventDefault()
      const path = getRouteInfo.path()

      if (this.renderId === '') {
        const route = routeManager.find(path)
        const routeCallback = route?.callback as () => unknown
        await routeCallback()
        return
      }

      await this.renderRoute(path)
    })

    // render indexRoute
    if (this.renderId === '') {
      const path = getRouteInfo.path()
      const route = routeManager.find(path)
      const routeCallback = route?.callback as () => unknown
      await routeCallback()
      return
    }
    await this.renderRoute('/')
  }

  /*
    render actual route into html node (renderId)
  */
  private async renderRoute (path: string) {
    if (!getRouteInfo.isValidRoute(path)) {
      this.redyrectTo(this.path404)
      return
    }

    const route = routeManager.find(path)
    const routeCallback = route?.callback as () => unknown
    await renderInHtmlNode(routeCallback() as () => Template, this.renderId)
  }

  redyrectTo (to: Route['path']): void {
    window.location.hash = to
  }

  /*
    add a new route
  */
  addRoute (path: string, callback: AddRouteCallback) {
    if (routeManager.getAllPaths().length === 1) this.mount()
    const route = { path, callback }
    routeManager.add(route)
  }

  getRouteParam (): string {
    const splitPath = window.location.hash.slice(1).split('/')
    return splitPath[splitPath.length - 1]
  }
}
