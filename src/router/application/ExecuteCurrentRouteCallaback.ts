import { GetRouteInfo } from '@/routes/application/getRouteInfo'

export class ExecuteCurrentRouteCallback {
  private getRouteInfo = new GetRouteInfo()

  async execute () {
    const callback = this.getRouteInfo.callback()
    if (callback === undefined) {
      const currentRoute = this.getRouteInfo.path()
      throw new Error(`Error rendering a route. The callback for "${currentRoute}" is undefine. To fix add a callback for your route with "routerInstance.addRoute('/foo', callback)"`)
    }
    await callback()
  }
}
