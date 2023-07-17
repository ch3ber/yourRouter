import { Router } from '@/router/infrastructure/router'
import { RouterConfig } from '@/types'
import { routerConfigOnly404Path } from '__test__/mocks/routerConfigs'
import { afterAll, beforeEach, describe, expect, it } from 'vitest'

describe('Router test', () => {
  describe('create method', () => {
    beforeEach(() => {
      Router.destroy()
    })
    afterAll(() => {
      Router.destroy()
    })

    it('Should throw an error if no recive a 404 path in the config', () => {
      const testFn = () => {
        Router.create({})
      }

      const errorMsg = 'Please specific a 404 HTTP Error path in your Router config. To fix add { path404: "/example/path" } to your config.'

      expect(testFn).toThrowError(errorMsg)
    })

    it('Sould throw an error if the user try to create another Router', () => {
      const routerConfig: RouterConfig = {
        path404: '/404'
      }
      const testFn = () => {
        Router.create(routerConfig)
        Router.create(routerConfig)
      }
      const errorMsg = 'You are trying to create another Router.'

      expect(testFn).toThrowError(errorMsg)
    })

    it('should return a router if there is not one created', () => {
      const router = Router.create(routerConfigOnly404Path)

      expect(router).instanceOf(Router)
    })
  })

  describe('get method', () => {
    beforeEach(() => {
      Router.destroy()
    })
    afterAll(() => {
      Router.destroy()
    })

    it('should return an error if Router doesnt have a instance', () => {
      const testFn = () => {
        return Router.get()
      }

      expect(testFn).toThrowError('First you need create a Router. To fix use: "Router.create({})"')
    })

    it('should return an instance of Router if have been created before', () => {
      Router.create(routerConfigOnly404Path)
      const routerInstance = Router.get()

      expect(routerInstance).instanceOf(Router)
    })
  })

  describe('redirectTo', () => {
    beforeEach(() => {
      Router.destroy()
    })
    afterAll(() => {
      Router.destroy()
    })

    it('should change the window.location.href to another location', () => {
      const router = Router.create(routerConfigOnly404Path)
      let currentLocation = '/#/foo/bar'
      window.location.assign(currentLocation)

      router.redirectTo('/foo')
      let newLocation = '#/foo'
      currentLocation = window.location.hash

      // without hash
      expect(currentLocation).toBe(newLocation)

      currentLocation = '/#/foobar/foo'
      window.location.assign(currentLocation)

      router.redirectTo('#/foobar')
      newLocation = '#/foobar'
      currentLocation = window.location.hash

      // with hash
      expect(currentLocation).toBe(newLocation)
    })
  })
})
