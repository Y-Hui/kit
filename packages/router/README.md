## Router

```tsx
import { lazy } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createHashRouter } from '@kit/router'

const router = createHashRouter({
  fallback: <Loading />,
  routes: [
    {
      path: '/',
      redirectTo: '/home',
    },
    {
      path: '/home',
      components: lazy(() => import('./home.tsx')),
    },
    {
      path: '/nest',
      components: lazy(() => import('./nest.tsx')),
      routes: [
        {
          path: '/nest/1',
          components: lazy(() => import('./nest1.tsx')),
        },
      ],
    },
  ],
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
```

### 嵌套路由

```tsx
const Nest = ({ children }) => {
  return (
    <div>
      {/* children 是子路由的渲染出口 */}
      {children}
    </div>
  )
}

const NestChild = () => {
  return (
    <div>这里是子路由</div>
  )
}

createHashRouter({
  fallback: <Loading />,
  routes: [
    {
      path: '/nest',
      title: 'Nest',
      components: Nest,
      routes: [
        {
          path: '/nest/1',
          title: 'Nest1',
          components: NestChild,
        },
      ],
    },
  ],
})
```

### wrappers

wappers 的设计灵感来自 [umi](https://umijs.org/docs/guides/routes#wrappers)，使用 wappers 可以帮助实现例如路由鉴权、title 设置等功能。

```tsx
import { WrapperProps } from '@kit/router'

// 使用 declare module 增强类型提示
declare module '@kit/router' {
  export interface NormalRoute {
    permissions?: string[]
  }
}

const Auth: FC<WrapperProps> = ({ children, route }) => {
  console.log(route.permissions) // 当前路由配置的权限信息
  
  // 没有权限时，重定向到 404 页面
  if (!hasAuth) {
    return <Navigate to="/404" replace />
  }
  
  // 渲染 children 即为展示对应的路由页面
  return children
}

createHashRouter({
  fallback: <Loading />,
  routes: [
    {
      path: '/home',
      title: 'Home',
      wrappers: [Auth],
      permissions: [Permission1, Permissions2],
      components: lazy(() => import('./home.tsx')),
    },
  ],
})
```

### wrappers 被多次渲染？

当路由懒加载时，你会遇到 wrappers 被多次渲染的情况，因为懒加载时，会在外层使用 Suspense 包裹，所以 wrappers 可能会被多次暂停和重新渲染。所以当你在设计 wrapper 的时候，应当贯彻 React 组件幂等的理念。

```
<Suspense>
  <Wapper1>
    <Page />
  </Wrapper1>
</Suspense>
```

