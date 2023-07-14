import { Template } from '@types'

export const renderInHtmlNode = async (template: () => Template, queryId: string): Promise<void> => {
  const container: HTMLElement = document.querySelector(`${queryId}`)!
  container.innerHTML = await template()
}
