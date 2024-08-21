import { NormalRoute } from '@kit/router/src/type'
import type { FC, PropsWithChildren } from 'react'

declare module '@kit/router' {
  export interface NormalRoute {
    permissions?: string[]
  }
}

const Auth: FC<PropsWithChildren<{ route: NormalRoute }>> = (props) => {
  const { children, route } = props

  console.log('当前路由配置的权限', route.permissions)

  return children
}

export default Auth
