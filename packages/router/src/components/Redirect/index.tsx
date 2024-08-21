import type { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export interface RedirectProps {
  path: string
  /**
   * 重定向目标路由
   */
  to: string
}

const Redirect: FC<RedirectProps> = (props) => {
  const { path, to } = props
  const { pathname, hash, search } = useLocation()

  if (path === pathname) {
    return <Navigate to={{ pathname: to, hash, search }} replace />
  }

  return null
}

export default Redirect
