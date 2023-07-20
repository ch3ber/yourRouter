import { RoutePath, RoutePathWithHash } from '@/types'

export const transformHashRouteToStandardRoute = (route: RoutePathWithHash): RoutePath => {
  return route.slice(1) as RoutePath
}
