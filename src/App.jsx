import { Suspense } from 'solid-js'
import routes from './routes'
import { useRoutes } from '@solidjs/router'
import Header from './components/Header'

export default () => {
  const Routes = useRoutes(routes())
  return (
    <main>
      <div class="w-full h-screen dark:bg-black dark:color-white">
        <Header />
        <Suspense>
          <Routes />
        </Suspense>
      </div>
    </main>
  )
}
