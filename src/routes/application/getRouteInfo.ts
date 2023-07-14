import { RouteInfo, Route } from '@types'
import { RouteManager } from '../domain/routeManager'

const routeManager = RouteManager.getInstance()

export class GetRouteInfo {
  path (): RouteInfo['path'] {
    if (this.isDynamicRoute()) {
      return this.getDynamicRoutePath()
    }
    return window.location.hash.slice(1)
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
    const route = routeManager.find(this.path())
    return route?.callback
  }

  isDynamicRoute (): boolean {
    const routePath = window.location.hash.slice(1).split('/')
    routePath.pop()

    let isDynamicRoute = false

    const dynamicPaths = routeManager.getDynamicPaths()

    dynamicPaths.forEach(path => {
      const arrPath = path.split('/')
      arrPath.pop()
      if (arrPath.join('') === routePath.join('')) {
        isDynamicRoute = true
      }
    })

    return isDynamicRoute
  }

  isValidRoute (path: Route['path']): boolean {
    if (this.isDynamicRoute()) {
      const dynamicPath = this.path()
      return routeManager.getDynamicPaths().some(xpath => xpath === dynamicPath)
    }

    return routeManager.getStaticPaths().some(xpath => xpath === path)
  }

  private getDynamicRoutePath (): RouteInfo['path'] {
    const routePath = window.location.hash.slice(1).split('/')
    routePath.pop()

    let dynamicPath = ''

    routeManager.getDynamicPaths().forEach(path => {
      const arrPath = path.split('/')
      arrPath.pop()
      if (arrPath.join('') === routePath.join('')) {
        dynamicPath = path
      }
    })

    return dynamicPath
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
