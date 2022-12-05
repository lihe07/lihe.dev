import { createResource } from 'solid-js'
import { Title, useRouteData } from 'solid-start'

export const routeData = () => {
  return createResource(async () => {
    const blogs = []

    const _blogs = import.meta.glob('./*.{mdx,md}')

    for (const path in _blogs) {
      const blog = await _blogs[path]()
      blogs.push({
        ...blog.meta
      })
    }

    return blogs
  })[0]
}

export default () => {
  const data = useRouteData()

  return (
    <main>
      <Title>lihe.dev - Blogs</Title>
      <h1>Article List</h1>
      <pre>{JSON.stringify(data ? data() : '')}</pre>
    </main>
  )
}
