import { Link } from '@solidjs/router'

export default () => {
  return (
    <ul>
      <li>
        <Link href="/">Index</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  )
}
