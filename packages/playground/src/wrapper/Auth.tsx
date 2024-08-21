import { type WrapperProps } from '@kit/router'
import type { FC } from 'react'

declare module '@kit/router' {
  export interface NormalRoute {
    /** 权限配置 */
    permissions?: string[]
  }
}

const Auth: FC<WrapperProps> = (props) => {
  const { children, route } = props

  console.log('当前路由配置的权限', route.permissions)

  return children
}

export default Auth
