import { Title } from 'solid-start'

import BasicProfile from '../components/index/BasicProfile'
import First from '../components/index/First'
import WhatIDo from '../components/index/WhatIDo'

export default function Home () {
  return (
    <main>
      <Title>lihe.dev - Home Page</Title>

      <First />
      <BasicProfile />
      <WhatIDo />
    </main>
  )
}
