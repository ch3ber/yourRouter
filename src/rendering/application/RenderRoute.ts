import { RouterConfig } from '@/types'
import { renderTemplateInHtmlByQueryId } from '../domain/renderTemplateInHtmlByQueryId'
import { GetRouteInfo } from '@/routes/application/GetRouteInfo'

export class RenderRoute {
  private getRouteInfo = new GetRouteInfo()
  private readonly renderId

  constructor (renderId: RouterConfig['renderId']) {
    this.renderId = renderId
  }

  async renderCurrentRoute () {
    const callback = this.getRouteInfo.callback()

    if (callback === undefined) {
      const currentRoute = this.getRouteInfo.path()
      throw new Error(`Error rendering a route. The callback for "${currentRoute}" is undefine. To fix add a callback for your route with "routerInstance.addRoute('/foo', callback)"`)
    }

    const templateFn = await callback()

    // check if template rendering is enable but the current route
    // doesn't have a template
    if (typeof templateFn !== 'function') {
      return
    }

    const template = templateFn()

    if (template === undefined) {
      return
    }

    renderTemplateInHtmlByQueryId(template, this.renderId)
  }
}
