import { Route, RouteCallback } from '@models/route.model'
import { RouterConfig } from '@models/router.model'
import { Template } from '@models/template.model'
import { GetRouteInfo } from '@utils/getRouteInfo'
import { renderInHtmlNode } from '@utils/renderInHtmlNode'
import { RouteManager } from '@utils/routeManager'

const getRouteInfo = new GetRouteInfo()
const routeManager = RouteManager.getInstance()

export class Router {
  // eslint-disable-next-line no-use-before-define
  private static instance: Router
  private renderId: string | undefined
  private path404: string

  private constructor (config: RouterConfig) {
    this.path404 = config.path404
    this.renderId = config.renderId
  }

  /*
  * create a new router with config
  */
  public static createInstance (config: RouterConfig): void {
    if (config.path404 === undefined) {
      throw new Error('Need specific 404 HTTP Error path in Router config. To fix use: { path404: \'YOUR PATH\' }')
    }
    Router.instance = new Router(config)
  }

  /*
  * method to get instance of Router
  */
  public static getInstance (): Router {
    if (!Router.instance) {
      throw new Error('Need create Router instance: posible fix "Router.createInstance({})"')
    }
    return Router.instance
  }

  /*
  * method to mount the router, this method add an
  * event listener to the window object when the hash
  * change event occours
  */
  private async mount (): Promise<void> {
    // set route to /#/
    window.location.hash = '/'

    // mount router
    window.addEventListener('hashchange', (e) => this.onHashChange(e))

    // render indexRoute
    if (this.renderId === undefined) {
      const routeInfo = getRouteInfo.get()
      const callback = routeInfo.callback!
      await callback()
      return
    }

    await this.renderRoute('/')
  }

  /*
  * this method is executabled when the hash change
  * event occours
  */
  private async onHashChange (event: HashChangeEvent): Promise<void> {
    event.preventDefault()
    const path = getRouteInfo.path()

    if (!getRouteInfo.isValidRoute(path)) {
      this.redyrectTo(this.path404)
      return
    }

    if (this.renderId === undefined) {
      const routeInfo = getRouteInfo.get()
      const callback = routeInfo.callback!
      await callback()
      return
    }

    await this.renderRoute(path)
  }

  /*
  * render actual route into html node (renderId)
  */
  private async renderRoute (path: string) {
    const { callback } = routeManager.find(path)!
    const template = await callback() as unknown
    await renderInHtmlNode(template as () => Template, this.renderId as string)
  }

  /*
  * redyrect to new route
  */
  redyrectTo (to: Route['path']): void {
    window.location.hash = to
  }

  /*
  * add a new route to routeManager and
  * mount the router when there is a route
  */
  addRoute (path: string, callback: RouteCallback) {
    if (path[0] !== '/') {
      throw new Error('All paths need start with "/". Example: /test/route or /dynamic/route/:id')
    }

    if (routeManager.getAllPaths().length === 1) this.mount()
    const route = { path, callback }
    routeManager.add(route)
  }

  /*
   * returns the route param as string
   *
   * EXAMPLE:
   *
   * path: /example/route/:id
   * param: /example/route/253
   * returns 253 as string
   */
  getRouteParam (): string {
    const splitPath = window.location.hash.slice(1).split('/')
    return splitPath[splitPath.length - 1]
  }
}
