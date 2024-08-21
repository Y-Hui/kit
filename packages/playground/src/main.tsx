import './index.css'

import { createHashRouter } from '@kit/router'
import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Progress from './components/Progress/index.tsx'
import Auth from './wrapper/Auth.tsx'
import Title from './wrapper/Title.tsx'
import Wrapper1 from './wrapper/wrapper1.tsx'

const router = createHashRouter({
  fallback: <Progress />,
  routes: [
    {
      path: '/full',
      component: lazy(() => import('./pages/full.tsx')),
    },
    {
      path: '/',
      component: lazy(() => import('./pages/index/index.tsx')),
      wrappers: [Wrapper1, Auth],
      permissions: ['Permission1'],
      routes: [
        {
          index: true,
          component: lazy(() => import('./pages/default.tsx')),
        },
        {
          path: '/page1',
          title: '页面1',
          component: lazy(() => import('./pages/page1.tsx')),
          wrappers: [Title],
        },
        {
          path: '/page2',
          title: '页面2',
          component: lazy(() => import('./pages/page2.tsx')),
          wrappers: [Title],
        },
        {
          path: '/page3/:id',
          title: '页面2',
          component: lazy(() => import('./pages/page2.tsx')),
          wrappers: [Title],
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
