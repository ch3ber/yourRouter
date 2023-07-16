import { RoutePath } from '@/types'

export class Redirect {
  /*
  * redyrect to new route
  */
  to (route: RoutePath): void {
    window.location.hash = route
  }
}
