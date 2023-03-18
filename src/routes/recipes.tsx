import type { VoidComponent } from 'solid-js'
import { TopBar } from '~/components/TopBar'

const Home: VoidComponent = () => {
  return (
    <>
      <TopBar />
      <main><p>TODO</p></main>
    </>
  )
}

export default Home
