import { lazy } from 'solid-js'

export default () => [
  {
    path: '/',
    component: lazy(() => import('./pages/Index')),
    meta: {
      description: 'Index Page',
      keywords: 'index, demo'
    },
    title: 'Index'
  },
  {
    path: '/about',
    component: lazy(() => import('./pages/About.mdx')),
    meta: {
      description: 'About Page',
      keywords: 'about, demo'
    },
    title: 'About'
  },
  {
    path: '/*all',
    component: lazy(() => import('./pages/404.mdx')),
    map: false
  }
]
