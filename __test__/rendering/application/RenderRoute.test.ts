import { RenderRoute } from '@/rendering/application/RenderRoute'
import { RouteManager } from '@/routes/domain/routeManager'
import { RouteI } from '@/types'
import { describe, expect, it } from 'vitest'

// const mock = vi.fn()
// vi.doMock('@/rendering/application/RenderRoute', () => ({ renderInHtmlNode: mock }))

// vi.mock('@/rendering/application/RenderRoute', async (importOriginal) => {
//   const mod = await importOriginal()
//   return {
//     ...mod,
//     renderInHtmlNode: mock
//   }
// })

describe.skip('RenderRoute', () => {
  describe('renderCurrentRoute', () => {
    it('should render a string route', async () => {
      const route: RouteI = {
        path: '/',
        callback: async () => () => 'template'
      }
      const renderRoute = new RenderRoute('#app')
      const routeManager = RouteManager.getInstance()
      routeManager.add(route)

      window.location.replace('/#/')

      const div = document.createElement('div')
      div.setAttribute('id', 'app')
      // document.appendChild(div)
      await renderRoute.renderCurrentRoute()

      const divContent = div.textContent

      expect(divContent).include('template')
    })
  })
})
