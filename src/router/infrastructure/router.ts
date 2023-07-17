import { RouteCallback, RoutePath, RouterConfig } from '@types'
import { MountRouter } from '../application/mountRouter'
import { Redirect } from '../application/redirect'
import { GetRouteParam } from '../application/GetRouteParam'
import { AddRoute } from '../application/AddRoute'
import { RenderRoute } from '@/rendering/application/RenderRoute'

export class Router {
  // eslint-disable-next-line no-use-before-define
  private static _instance: Router | undefined
  private mountRouter: MountRouter
  private redirect = new Redirect()
  private getRouteParamUtil = new GetRouteParam()
  private addRouteUtil = new AddRoute()
  private renderRoute: RenderRoute
  query: unknown

  private constructor (config: RouterConfig) {
    this.mountRouter = new MountRouter(config)
    this.mountRouter.mount()
    this.renderRoute = new RenderRoute(config.renderId)
  }

  /**
   * Create a new router with a single instance,
   * require a 404 path to create the instance
   * @param config router's config
   */
  public static create (config: RouterConfig): Router | undefined {
    if (typeof config.path404 !== 'string') {
      throw new Error('Please specific a 404 HTTP Error path in your Router config. To fix add { path404: "/example/path" } to your config.')
    }

    if (Router._instance) {
      throw new Error('You are trying to create another Router.')
    }

    if (!Router._instance) {
      Router._instance = new Router(config)
      return Router._instance
    }
  }

  /*
  * method to get instance of Router
  */
  public static get (): Router {
    if (!Router._instance) {
      throw new Error('First you need create a Router. To fix use: "Router.create({})"')
    }
    return Router._instance
  }

  /**
   * This method is only for test propousing
   */
  static destroy () {
    Router._instance = undefined
  }

  /*
  * Redirect the user to a existing route
  */
  redirectTo (path: RoutePath): void {
    this.redirect.to(path)
  }

  /*
  * add a new route to routeManager and
  * mount the router when there is a route
  */
  addRoute (path: RoutePath, callback: RouteCallback) {
    this.addRouteUtil.add(path, callback)

    // render the current route if the user are in
    // the home page and is the interaction with the page
    const currentPath = window.location.hash.slice(1)
    const isTheFisrtRenderAndTheUserAreThere = currentPath === path
    if (isTheFisrtRenderAndTheUserAreThere) {
      this.renderRoute.renderCurrentRoute()
    }
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
  getRouteParam () {
    // const currentQuery = this.getRouteParam.get()
    // const queryName = 'NAME'
    // this.query[queryName] = currentQuery
    return this.getRouteParamUtil.get()
  }
}
