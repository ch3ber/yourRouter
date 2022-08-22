import { Template } from './template.model'

export type AddRouteCallback = (() => () => Template) | (() => void)

export type RouterConfig = {
  path404: string,
  renderId?: string
}
