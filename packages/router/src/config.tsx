import { type ReactNode } from 'react'
import {
  createBrowserRouter as createBrowserRouterImpl,
  createHashRouter as createHashRouterImpl,
  type RouteObject,
} from 'react-router-dom'

import renderElement from './render'
import type { RouteConfig } from './type'

function genRoutes<const T extends readonly RouteConfig[]>(options: {
  fallback?: ReactNode
  routes: T
}) {
  const { routes, fallback } = options

  function render(route: RouteConfig): RouteObject {
    const RouteElement = renderElement(route, fallback)

    if (route.index) {
      return {
        index: route.index,
        element: RouteElement,
      }
    }

    return {
      path: route.path,
      index: route.index,
      element: RouteElement,
      children: route.routes?.map(render),
    }
  }

  return routes.map<RouteObject>(render)
}

export function createHashRouter(options: {
  fallback?: ReactNode
  routes: RouteConfig[]
}) {
  return createHashRouterImpl(genRoutes(options))
}

export function createBrowserRouter(options: {
  fallback?: ReactNode
  routes: RouteConfig[]
}) {
  return createBrowserRouterImpl(genRoutes(options))
}
