import { router } from '../utils'
import example from './example'
import recipe from './recipe'

export const appRouter = router({
  example,
  recipe
})

export type IAppRouter = typeof appRouter
