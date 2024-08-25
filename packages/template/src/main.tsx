import './index.css'

import { createHashRouter } from '@kit/router'
import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import Progress from './components/Progress'
import Title from './wrapper/Title'

const router = createHashRouter({
  fallback: <Progress />,
  routes: [
    {
      path: '/',
      component: lazy(() => import('./pages/index/index')),
      wrappers: [Title],
      routes: [
        {
          index: true,
          component: lazy(() => import('./pages/default')),
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
