/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  type ComponentType,
  type DetailedHTMLFactory,
  type DOMFactory,
  type ReactHTML,
  type ReactSVG,
  type RefAttributes,
} from 'react'

export type PropsOf<T extends ComponentType<any> | keyof ReactHTML | keyof ReactSVG> =
  T extends ComponentType<infer R>
    ? R
    : T extends keyof ReactHTML
      ? PropsOfHTMLTag<T>
      : T extends keyof ReactSVG
        ? PropsOfSVGTag<T>
        : never

export type PropsOfHTMLTag<T extends keyof ReactHTML> =
  ReactHTML[T] extends DetailedHTMLFactory<infer R, infer Ref>
    ? R & RefAttributes<Ref>
    : never

export type PropsOfSVGTag<T extends keyof ReactSVG> =
  ReactSVG[T] extends DOMFactory<infer R, infer Ref> ? R & RefAttributes<Ref> : never
