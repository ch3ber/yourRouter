import { RouterConfig, Template } from '@types'

export const renderTemplateInHtmlByQueryId = async (template: Template, queryId: RouterConfig['renderId']) => {
  const container = document.querySelector(`${queryId}`)

  if (container === null) {
    throw new Error(`Error rendering a template in the document. The query ${queryId} doesn't match with any element in the document`)
  }

  container.innerHTML = await template
}
