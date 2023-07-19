import { AddRoute } from '@/router/application/AddRoute'
import { GetRouteInfo } from '@/routes/application/GetRouteInfo'
import { RouteManager } from '@/routes/domain/routeManager'
import { RoutePath } from '@/types'
import { afterEach, describe, expect, it } from 'vitest'

describe('GetRouteInfo', () => {
  describe('isDynamicRoute method', () => {
    afterEach(() => {
      RouteManager.getInstance().reset()
    })

    it('Should return true if the current route is a daynamic route', () => {
      const getRouteInfo = new GetRouteInfo()
      const addRoute = new AddRoute()

      let dynamicRouteForTest: RoutePath = '/foo/:id/bar'
      addRoute.add(dynamicRouteForTest, () => {})
      window.location.assign('/#/foo/1A1/bar')

      expect(getRouteInfo.isDynamicRoute()).toBe(true)

      dynamicRouteForTest = '/foobar/:id/:foo/bar'
      addRoute.add(dynamicRouteForTest, () => {})
      window.location.assign('/#/foobar/asdf/123321/bar')

      expect(getRouteInfo.isDynamicRoute()).toBe(true)
    })

    it('should return true with similar paths', () => {
      const getRouteInfo = new GetRouteInfo()
      const addRoute = new AddRoute()

      const dynamicRouteForTest: RoutePath = '/zulu/:zulu/foo/bar'
      const similarPath: RoutePath = '/zulu/zulu/:bar/foo'

      addRoute.add(dynamicRouteForTest, () => {})
      addRoute.add(similarPath, () => {})

      window.location.assign('/#/zulu/123321/foo/bar')

      expect(getRouteInfo.isDynamicRoute()).toBe(true)
    })
  })
})
