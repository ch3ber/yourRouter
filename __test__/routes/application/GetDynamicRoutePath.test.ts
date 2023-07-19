import { AddRoute } from '@/router/application/AddRoute'
import { GetDynamicRoutePath } from '@/routes/application/GetDynamicRoutePath'
import { RouteManager } from '@/routes/domain/routeManager'
import { RoutePath } from '@types'
import { afterEach, describe, expect, it } from 'vitest'

describe('GetDynamicRoutePath', () => {
  describe('get method', () => {
    afterEach(() => {
      RouteManager.getInstance().reset()
    })
    it('should return a route path if the current path are dynamic', () => {
      const addRoute = new AddRoute()
      const getDynamicRoutePath = new GetDynamicRoutePath()

      const expectedPath: RoutePath = '/foo/:id'
      addRoute.add(expectedPath, () => {})

      window.location.assign('/#/foo/bar')
      const currentPath = getDynamicRoutePath.get()

      expect(currentPath).toBe(expectedPath)
    })
  })
})
