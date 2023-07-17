import { Router } from '@/router/infrastructure/router'
import { RouterConfig } from '@/types'
import { beforeEach, describe, expect, it } from 'vitest'

describe('Router test', () => {
  describe('create method', () => {
    beforeEach(() => {
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
      const routerConfig: RouterConfig = {
        path404: '/404'
      }
      const router = Router.create(routerConfig)

      expect(router).instanceOf(Router)
    })
  })

  describe('get method', () => {
    beforeEach(() => {
      Router.destroy()
    })

    it('should return an error if Router doesnt have a instance', () => {
      const testFn = () => {
        return Router.get()
      }

      expect(testFn).toThrowError('First you need create a Router. To fix use: "Router.create({})"')
    })
  })
})
