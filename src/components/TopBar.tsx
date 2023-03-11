import { A } from 'solid-start';

export function TopBar() {
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
          </li>
        </ul>
      </nav>
    </header>
  );
}
