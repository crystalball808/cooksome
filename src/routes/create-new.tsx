import { createSignal, type VoidComponent } from 'solid-js'
import { TopBar } from '~/components/TopBar'
import { trpc } from '~/utils/trpc'

const CreateNewRecipePage: VoidComponent = () => {
  const [name, setName] = createSignal<string>('')
  const [description, setDescription] = createSignal<string>('')
  const { mutate: createNewRecipe } = trpc.recipe.createNew.useMutation()
  const formSubmit = () => {
    if (name().length < 3) {
      alert('The name is too short!')
      return
    }
    if (description().length < 3) {
      alert('The description is too short!')
      return
    }
    createNewRecipe({
      name: name(),
      description: description()
    })
  }
  return (
    <>
      <TopBar />
      <main>
        <form onSubmit={formSubmit}>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name()}
            onInput={(event) => setName(event.currentTarget.value)}
          />
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            value={description()}
            onInput={(event) => setDescription(event.currentTarget.value)}
          />
          <button type="submit">Create</button>
        </form>
      </main>
    </>
  )
}

export default CreateNewRecipePage
