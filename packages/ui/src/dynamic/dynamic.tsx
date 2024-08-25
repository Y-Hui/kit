/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  type ComponentType,
  createElement,
  type ForwardedRef,
  forwardRef,
  type FunctionComponent,
  type PropsWithRef,
  type ReactElement,
  type ReactHTML,
  type ReactSVG,
} from 'react'

import type { PropsOf } from './interface'

export type DynamicProps<
  T extends ComponentType<any> | keyof ReactHTML | keyof ReactSVG,
> = PropsOf<T> & {
  as: T
}

function Dynamic<T extends ComponentType<any> | keyof ReactHTML | keyof ReactSVG>(
  props: DynamicProps<T>,
  ref: ForwardedRef<any>,
) {
  const { as, ...rest } = props
  return createElement(as, { ...rest, ref })
}

interface DynamicComponent {
  <T extends keyof ReactHTML>(props: PropsWithRef<DynamicProps<T>>): ReactElement
  <T extends FunctionComponent<any>>(props: PropsWithRef<DynamicProps<T>>): ReactElement
}

export default forwardRef(Dynamic) as DynamicComponent
