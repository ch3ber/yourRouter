import { Route, RouteCallback, RouterConfig } from '@types'
import { RouteManager } from '@/routes/application/routeManager'
import { MountRouter } from '../application/mountRouter'
import { Redirect } from '../application/redirect'

const routeManager = RouteManager.getInstance()

export class Router {
  // eslint-disable-next-line no-use-before-define
  private static instance: Router
  private mountRouter: MountRouter
  private redirect = new Redirect()

  private constructor (config: RouterConfig) {
    this.mountRouter = new MountRouter(config)
  }

  /*
  * create a new router with config
  */
  public static create (config: RouterConfig): void {
    if (config.path404 === undefined) {
      throw new Error('Need specific 404 HTTP Error path in Router config. To fix use: { path404: \'YOUR PATH\' }')
    }
    Router.instance = new Router(config)
  }

  /*
  * method to get instance of Router
  */
  public static get (): Router {
    if (!Router.instance) {
      throw new Error('Need create Router instance: posible fix "Router.createInstance({})"')
    }
    return Router.instance
  }

  /*
  * redyrect to new route
  */
  redirectTo (path: Route['path']) {
    this.redirect.to(path)
  }

  /*
  * add a new route to routeManager and
  * mount the router when there is a route
  */
  addRoute (path: string, callback: RouteCallback) {
    if (path[0] !== '/') {
      throw new Error('All paths need start with "/". Example: /test/route or /dynamic/route/:id')
    }

    if (routeManager.getAllPaths().length === 1) this.mountRouter.mount()
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
