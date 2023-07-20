import { afterEach, describe, expect, it } from 'vitest'
import { GetRouteParams } from '@/routes/application/GetRouteParams'
import { RouteManager } from '@/routes/domain/routeManager'
import { AddRoute } from '@/router/application/AddRoute'

describe('GetRouteParam class', () => {
  afterEach(() => {
    RouteManager.getInstance().reset()
  })

  it('should return two route params as string', () => {
    const addRoute = new AddRoute()
    const routeParamsName = [':id', ':price']
    addRoute.add(`/product/${routeParamsName[0]}/${routeParamsName[1]}`, () => {})

    const getRouteParam = new GetRouteParams()

    const routeParamsValues = ['laptop', '121']

    const paramsExpected = {
      id: routeParamsValues[0],
      price: routeParamsValues[1]
    }

    window.location.assign(`#/product/${routeParamsValues[0]}/${routeParamsValues[1]}`)

    expect(getRouteParam.get()).toMatchObject(paramsExpected)
  })

  it('should return a route params decoding the url', () => {
    const addRoute = new AddRoute()
    const routeParamsName = [':id', ':price']
    addRoute.add(`/product/${routeParamsName[0]}/${routeParamsName[1]}`, () => {})

    const getRouteParam = new GetRouteParams()

    const routeParamsValues = ['lap top', '121']

    const paramsExpected = {
      id: routeParamsValues[0],
      price: routeParamsValues[1]
    }

    window.location.assign(`#/product/${routeParamsValues[0]}/${routeParamsValues[1]}`)

    expect(getRouteParam.get()).toMatchObject(paramsExpected)
  })
})
