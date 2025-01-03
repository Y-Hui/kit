import type { ReactNode } from 'react'
import { createElement, Fragment, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

import Redirect from './components/Redirect'
import type { NormalRoute, RouteConfig } from './type'

function renderWithWrapper(route: RouteConfig, child: ReactNode) {
  if (route.index) {
    return child
  }

  const { wrappers } = route
  if (!(Array.isArray(wrappers) && wrappers.length > 0)) {
    return child
  }

  return wrappers.reduceRight((res, component) => {
    if (component === Fragment) {
      return createElement(component, null, res)
    }
    return createElement(component, { route }, res)
  }, child)
}

function renderNestElement(route: NormalRoute, fallback?: ReactNode) {
  const { component: Child, routes } = route

  const hasNestedRoutes = Array.isArray(routes) && routes.length > 0
  if (!hasNestedRoutes) {
    return <Suspense fallback={fallback}>{renderWithWrapper(route, <Child />)}</Suspense>
  }

  return (
    <Suspense fallback={fallback}>
      {renderWithWrapper(
        route,
        createElement(Child, null, [
          // 处理 undefined 和 null
          route.redirectTo != null
            ? (
                <Redirect key="redirect" path={route.path} to={route.redirectTo} />
              )
            : null,
          <Outlet key="outlet" />,
        ]),
      )}
    </Suspense>
  )
}

export default function renderElement(route: RouteConfig, fallback?: ReactNode) {
  const { component: Child, index } = route
  const RouteElement = renderWithWrapper(route, <Child />)

  if (index) {
    return <Suspense fallback={fallback}>{RouteElement}</Suspense>
  }

  return renderNestElement(route, fallback)
}
