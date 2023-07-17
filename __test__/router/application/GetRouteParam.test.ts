import { describe, expect, it } from 'vitest'
import { Router } from '@/router/infrastructure/router'
import { GetRouteParam } from '@/router/application/GetRouteParam'
import { routerConfigOnly404Path } from '../../mocks/routerConfigs'

describe('GetRouteParam class', () => {
  it('should return a param as string', () => {
    const router = Router.create(routerConfigOnly404Path)
    router.addRoute('/foo/:id', () => {})
    const getRouteParam = new GetRouteParam()

    window.location.replace('/#/foo/bar')
    const paramExpected = 'bar'

    expect(getRouteParam.get()).toBe(paramExpected)
  })
})
