import { Route } from '@/types'

export class Redirect {
  /*
  * redyrect to new route
  */
  to (route: Route['path']): void {
    window.location.hash = route
  }
}
