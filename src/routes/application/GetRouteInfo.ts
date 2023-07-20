import { RouteInfo, RoutePath } from '@types'
import { RouteManager } from '../domain/routeManager'
import { AreCurrentRouteDynamic } from './AreCurrentRouteDynamic'
import { GetDynamicRoutePath } from './GetDynamicRoutePath'

export class GetRouteInfo {
  private routeManager = RouteManager.getInstance()
  private areCurrentRoteDynamic = new AreCurrentRouteDynamic()
  private getDynamicRoutePathUtil = new GetDynamicRoutePath()

  path (): RouteInfo['path'] {
    if (this.isDynamicRoute()) {
      return this.getDynamicRoutePath()
    }
    return window.location.hash.slice(1) as RoutePath
  }

  splitPath (): RouteInfo['splitPath'] {
    if (this.isDynamicRoute()) {
      const path = this.getDynamicRoutePath()
      return path.slice(1).split('/')
    }
    return window.location.hash.slice(1).split('/')
  }

  length (): RouteInfo['length'] {
    if (this.isDynamicRoute()) {
      const path = this.getDynamicRoutePath()
      return path.length
    }

    return window.location.hash.slice(1).length
  }

  callback (): RouteInfo['callback'] {
    const route = this.routeManager.find(this.path())
    return route?.callback
  }

  isDynamicRoute (): boolean {
    return this.areCurrentRoteDynamic.valid()
  }

  isValidRoute (path: RoutePath): boolean {
    if (this.isDynamicRoute()) {
      const dynamicPath = this.path()
      return this.routeManager.getDynamicPaths().some(xpath => xpath === dynamicPath)
    }

    return this.routeManager.getStaticPaths().some(xpath => xpath === path)
  }

  private getDynamicRoutePath (): RouteInfo['path'] {
    return this.getDynamicRoutePathUtil.get()
  }

  get (): RouteInfo {
    return {
      path: this.path(),
      splitPath: this.splitPath(),
      length: this.length(),
      callback: this.callback()
    }
  }
}
