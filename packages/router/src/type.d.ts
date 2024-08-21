/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ComponentType, LazyExoticComponent } from 'react'

export interface IndexRoute {
  index: true
  /**
   * 需要渲染的组件
   */
  component: LazyExoticComponent
}

export interface NormalRoute {
  /**
   * 路由路径
   */
  path: string
  index?: never
  /**
   * 重定向至目标路由
   */
  redirectTo?: string
  /**
   * 需要渲染的组件
   */
  component: LazyExoticComponent
  /**
   * 子路由
   */
  routes?: RouteConfig[]
  /**
   * 路由外层包裹组件
   * 可用于实现路由鉴权。
   *
   * @note 注意：组件内部渲染 `children` 则显示路由
   */
  wrappers?: ComponentType<any>[]
}

export type WrapperProps<P = unknown> = P & {
  route: NormalRoute
  children?: ReactNode | undefined
}

export type RouteConfig = NormalRoute | IndexRoute
