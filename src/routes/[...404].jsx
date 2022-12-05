import { Title } from 'solid-start'
import { HttpStatusCode } from 'solid-start/server'

export default () => {
  return (
    <main>
      <Title>lihe.dev - Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Not Found</h1>
    </main>
  )
}
