import { NormalRoute } from '@kit/router/src/type'
import type { FC, PropsWithChildren } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare module '@kit/router' {
  export interface NormalRoute {
    title?: string
  }
}

export interface UseTitleArgs {
  path: string
  title: string
}

function useTitle(args: UseTitleArgs) {
  const { path, title } = args
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== path) return
    document.title = title
  }, [location.pathname, path, title])
}

const Title: FC<PropsWithChildren<{ route: NormalRoute }>> = (props) => {
  const { children, route } = props

  useTitle({ title: route.title ?? '', path: route.path })

  return children
}

export default Title
