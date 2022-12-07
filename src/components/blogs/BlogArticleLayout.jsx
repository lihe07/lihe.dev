import { Outlet } from 'solid-start'
// import '../../assets/katex/katex.min.css'

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
