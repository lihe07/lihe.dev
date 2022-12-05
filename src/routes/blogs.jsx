import { Show } from 'solid-js'
import { Outlet, useLocation } from 'solid-start'
import BlogArticleLayout from '../components/blogs/BlogArticleLayout'

export default () => {
  const location = useLocation()

  return (
    <>
      <Show when={location.pathname === '/blogs'}>
        <Outlet />
      </Show>
      <Show when={location.pathname !== '/blogs'}>
        <BlogArticleLayout />
      </Show>
    </>
  )
}
