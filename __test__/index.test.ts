import { Router } from '@/router'
import { describe, expect, it } from 'vitest'

describe('Router test', () => {
  describe('createInstance method', () => {
    it('Trhow an error if path404 is not present', () => {
      const testFn = () => {
        Router.createInstance({})
      }
      const errorMsg = 'Need specific 404 HTTP Error path in Router config. To fix use: { path404: \'YOUR PATH\' }'

      expect(testFn).throws(errorMsg)
    })
  })
})
