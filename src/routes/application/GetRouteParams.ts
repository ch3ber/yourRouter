import { GetRouteInfo } from './GetRouteInfo'

type RouteParams = unknown

export class GetRouteParams {
  private getRouteInfo = new GetRouteInfo()

  get (): RouteParams {
    if (!this.getRouteInfo.isDynamicRoute()) {
      return {}
    }

    const parcedRoute = this.getParcedRoute()
    const currenRouteSplited = parcedRoute.slice(1).split('/')
    const currentRouteFromRouteManagerSplited = this.getRouteInfo.splitPath()

    const routeParams = this.extracParamsFromDynamicPath(currentRouteFromRouteManagerSplited, currenRouteSplited)

    return routeParams
  }

  private getParcedRoute () {
    const decodedURI = decodeURI(window.location.href)
    const regexToFindAllBeforeTheHash = /^.*#/gi
    const pathAfterHash = decodedURI.replace(regexToFindAllBeforeTheHash, '')

    return pathAfterHash
  }

  private extracParamsFromDynamicPath (dynamicPath: string[], pathToCompare: string[]) {
    const params: any = {}

    pathToCompare.forEach((paramValue, index) => {
      const param = dynamicPath[index]
      const isCurrentSlotDynamic = param.includes(':')

      const parcedParam = param.slice(1)

      if (isCurrentSlotDynamic) {
        params[parcedParam] = paramValue
      }
    })

    return params
  }
}
