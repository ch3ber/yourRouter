import { RouterConfig } from '@/types'

import { Redirect } from './redirect'
import { GetRouteInfo } from '@/routes/application/getRouteInfo'
import { RenderRoute } from '@/rendering/application/RenderRoute'
import { ExecuteCurrentRouteCallback } from './ExecuteCurrentRouteCallaback'

export class MountRouter {
  private redirect = new Redirect()
  private getRouteInfo = new GetRouteInfo()
  private executeCurrentCallback = new ExecuteCurrentRouteCallback()
  private renderRoute: RenderRoute

  private readonly path404
  private readonly renderId

  constructor (config: RouterConfig) {
    this.path404 = config.path404
    this.renderId = config.renderId
    this.renderRoute = new RenderRoute(this.renderId)
  }

  /*
  * method to mount the router, this method add an
  * event listener to the window object when the hash
  * change event occours
  */
  async mount (): Promise<void> {
    // set windows.location.href to /#/
    window.location.hash = '/'

    // mount router
    window.addEventListener('hashchange', async (e) => await this.onHashChange(e))
  }

  /*
  * this method is executabled when the hash change
  * event occours
  */
  private async onHashChange (event: HashChangeEvent): Promise<void> {
    event.preventDefault()
    // get the current user path
    const currentUserPath = this.getRouteInfo.path()

    // validate if the path exist in the app,
    // if not exist redirect the user to the 404 page
    const theCurrentPathExist = this.getRouteInfo.isValidRoute(currentUserPath)
    if (!theCurrentPathExist) {
      this.redirect.to(this.path404)
      return
    }

    const templateRenderingIsDisable = this.renderId === undefined
    if (templateRenderingIsDisable) {
      await this.executeCurrentCallback.execute()
      return
    }

    await this.renderRoute.renderCurrentRoute()
  }
}
