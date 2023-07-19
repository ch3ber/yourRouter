import { AddRoute } from '@/router/application/AddRoute'
import { RouteManager } from '@/routes/domain/routeManager'
import { RoutePath } from '@/types'
import { afterEach, describe, expect, it } from 'vitest'

describe('AddRoute class', () => {
  afterEach(() => {
    RouteManager.getInstance().reset()
  })

  it("should throw an error if the route don't start with /", () => {
    const addRoute = new AddRoute()

    const testFn = () => {
      const routeToTest: RoutePath = 'foo/bar'
      addRoute.add(routeToTest, () => {})
    }

    const errorMsg = 'Error adding a route. All paths need start with "/". Example: /test/route or /dynamic/route/:id'

    expect(testFn).toThrowError(errorMsg)
  })

  it('should throw an error if the user try to add an existing route', () => {
    const addRoute = new AddRoute()

    const routeToTest: RoutePath = '/'

    const testFn = () => {
      addRoute.add(routeToTest, () => {})
      addRoute.add(routeToTest, () => {})
    }

    const errorMsg = `Error adding a route. The router don't allow duplicated routes. The route "${routeToTest}" is an existing route.`

    expect(testFn).toThrowError(errorMsg)
  })

  it("should throw an error if the route don't match with a route regex", () => {
    const addRoute = new AddRoute()

    const routesToTest: RoutePath[] = ['/:::', '/::', '/]', '//', '/:id:', '/foo/', '/foo/:-', '/:-', '/-', '/:', '/-:']

    for (const routeToTest of routesToTest) {
      const testFn = () => {
        addRoute.add(routeToTest, () => {})
      }

      const errorMsg = `Error adding a route. The route "${routeToTest}" is not a valid route.`

      expect(testFn).toThrowError(errorMsg)
    }
  })
})
