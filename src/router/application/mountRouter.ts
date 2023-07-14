import { RouterConfig, Template } from '@/types'

import { renderInHtmlNode } from '@/rendering/domain/renderInHtmlNode'
import { GetRouteInfo } from '@/routes/application/getRouteInfo'
import { RouteManager } from '@/routes/application/routeManager'
import { Redirect } from './redirect'

export class MountRouter {
  private getRouteInfo = new GetRouteInfo()
  private redirect = new Redirect()
  private routeManager

  private renderId: string | undefined
  private path404: string

  constructor (config: RouterConfig) {
    this.path404 = config.path404
    this.renderId = config.renderId
    this.routeManager = RouteManager.getInstance()
  }

  /*
  * render actual route into html node (renderId)
  */
  private async renderRoute (path: string) {
    const { callback } = this.routeManager.find(path)!
    const template = await callback() as unknown
    await renderInHtmlNode(template as () => Template, this.renderId as string)
  }

  /*
  * method to mount the router, this method add an
  * event listener to the window object when the hash
  * change event occours
  */
  async mount (): Promise<void> {
    // set route to /#/
    window.location.hash = '/'

    // mount router
    window.addEventListener('hashchange', (e) => this.onHashChange(e))

    // render indexRoute
    if (this.renderId === undefined) {
      const routeInfo = this.getRouteInfo.get()
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
    const path = this.getRouteInfo.path()

    if (!this.getRouteInfo.isValidRoute(path)) {
      this.redirect.to(this.path404)
      return
    }

    if (this.renderId === undefined) {
      const routeInfo = this.getRouteInfo.get()
      const callback = routeInfo.callback!
      await callback()
      return
    }

    await this.renderRoute(path)
  }
}
