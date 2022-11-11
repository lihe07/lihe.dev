import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'

import 'uno.css'
import App from './App'
import { MetaProvider } from 'solid-meta'

render(
  () => (
    <MetaProvider>
      <Router>
        <App />
      </Router>
    </MetaProvider>
  ),
  document.getElementById('root')
)
