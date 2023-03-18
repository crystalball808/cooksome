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
              inactiveClass="text-white"
              class="text-lg font-bold ml-2"
              end
            >
              Home
            </A>
            <A
              href="/recipes"
              activeClass="text-amber-800"
              inactiveClass="text-white"
              class="text-lg font-bold ml-2"
            >
              Recipes
            </A>
            <A
              href="/create-new"
              activeClass="text-amber-800"
              inactiveClass="text-white"
              class="text-lg font-bold ml-2"
            >
              Create
            </A>
          </li>
        </ul>
      </nav>
    </header>
  )
}
