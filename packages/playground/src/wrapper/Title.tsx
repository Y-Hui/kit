import { type WrapperProps } from '@kit/router'
import { type FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare module '@kit/router' {
  export interface NormalRoute {
    /** 网页标题 */
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

const Title: FC<WrapperProps> = (props) => {
  const { children, route } = props

  useTitle({ title: route.title ?? '', path: route.path })

  return children
}

export default Title
