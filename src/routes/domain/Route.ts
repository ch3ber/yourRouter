import { RouteI } from '@/types'

export class Route implements RouteI {
  path
  callback

  constructor ({ path, callback }: RouteI) {
    this.path = path
    this.callback = callback
  }
}
