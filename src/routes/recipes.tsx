import { type VoidComponent, For, Match, Switch } from 'solid-js'
import { TopBar } from '~/components/TopBar'
import { trpc } from '~/utils/trpc'

const Home: VoidComponent = () => {
  const recipes = trpc.recipe.all.useQuery()
  console.log('isLoading', recipes.isLoading)
  return (
    <>
      <TopBar />
      <main>
        <Switch>
          <Match when={recipes.isLoading}>
            <p>Loading...</p>
          </Match>
          <Match when={recipes.isSuccess}>
            <ul>
              <For each={recipes.data}>
                {(recipe) => (
                  <li>
                    <p>{recipe.name}</p>
                    <p>{recipe.description}</p>
                  </li>
                )}
              </For>
            </ul>
          </Match>
        </Switch>
      </main>
    </>
  )
}

export default Home
