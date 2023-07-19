import { afterEach, describe, expect, it } from 'vitest'
import { Router } from '@/router/infrastructure/router'
import { GetRouteParams } from '@/routes/application/GetRouteParams'
import { routerConfigOnly404Path } from '../../mocks/routerConfigs'
import { RouteManager } from '@/routes/domain/routeManager'

describe('GetRouteParam class', () => {
  afterEach(() => {
    RouteManager.getInstance().reset()
  })

  it('should return a param as string', () => {
    const router = Router.create(routerConfigOnly404Path)
    router.addRoute('/foo/:id', () => {})
    const getRouteParam = new GetRouteParams()

    window.location.replace('/#/foo/bar')
    const paramExpected = 'bar'

    expect(getRouteParam.get()).toBe(paramExpected)
  })
})
