import { type VoidComponent } from 'solid-js'
import { A } from 'solid-start'

export const TopBar: VoidComponent = () => {
  return (
    <header class="sticky top-0 bg-amber-500 h-10 shadow-md flex items-center">
      <nav>
        <ul>
          <li>
            <A
              href="/"
              activeClass="text-amber-800"
              class="text-lg font-bold ml-2 text-white"
            >
              Home
            </A>
            <A
              href="/recipes"
              activeClass="text-amber-800"
              class="text-lg font-bold ml-2 text-white"
            >
              Recipes
            </A>
            <A
              href="/create-new"
              activeClass="text-amber-800"
              class="text-lg font-bold ml-2 text-white"
            >
              Create
            </A>
          </li>
        </ul>
      </nav>
    </header>
  )
}
