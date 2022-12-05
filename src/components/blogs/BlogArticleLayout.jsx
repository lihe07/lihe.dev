import { Outlet } from 'solid-start'

export default () => {
  return (
    <div>
      <p>=== Layout ===</p>
      <article>
        <Outlet />
      </article>
    </div>
  )
}
