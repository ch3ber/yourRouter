import { RoutePath, RoutePathWithHash } from '@/types'

export const transformStandardRouteToHashRoute = (route: RoutePath): RoutePathWithHash => {
  return `#${route}`
}
