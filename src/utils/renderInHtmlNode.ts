import { Template } from '@models/template.model'

export const renderInHtmlNode = async (template: () => Template, queryId: string): Promise<void> => {
  const container: HTMLElement = document.querySelector(`${queryId}`)!
  container.innerHTML = await template()
}
