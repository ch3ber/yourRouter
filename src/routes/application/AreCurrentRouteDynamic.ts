import { RouteManager } from '@/routes/domain/routeManager'

export class AreCurrentRouteDynamic {
  private routeManager = RouteManager.getInstance()

  valid () {
    const currentPathSplited = window.location.hash.slice(2).split('/')

    let isDynamicRoute = false

    this.routeManager.getDynamicPaths().forEach(path => {
      const dynamicPathSplited = path.slice(1).split('/')
      const areTheSameRoutes = this.areTheSameRoutes(dynamicPathSplited, currentPathSplited)
      if (areTheSameRoutes) {
        isDynamicRoute = true
      }
    })

    return isDynamicRoute
  }

  private areTheSameRoutes (dynamicPath: string[], pathToCompare: string[]) {
    let isTheSameRoute = false

    const haveTheSameLength = dynamicPath.length === pathToCompare.length
    if (!haveTheSameLength) {
      return isTheSameRoute
    }

    const dynamicSlotsInDynamicRouteFromRouteManager = dynamicPath.filter(slot => slot.includes(':'))
    let numberOfDynamicSlotMatches = 0

    pathToCompare.forEach((_, index) => {
      const isCurrentSlotDynamic = dynamicPath[index].includes(':')
      if (isCurrentSlotDynamic) {
        numberOfDynamicSlotMatches += 1
      }

      const isTheLastSlot = pathToCompare[index] === pathToCompare.at(-1)
      const theCurrentRouteMatchWithAllDynamicSlots = numberOfDynamicSlotMatches === dynamicSlotsInDynamicRouteFromRouteManager.length

      if (isTheLastSlot && theCurrentRouteMatchWithAllDynamicSlots) {
        isTheSameRoute = true
      }
    })

    return isTheSameRoute
  }
}
