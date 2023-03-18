import { createServerData$ } from 'solid-start/server'
import { getSession } from '@auth/solid-start'
import { authOpts } from '~/routes/api/auth/[...solidauth]'

export const createSession = () => {
  return createServerData$(async (_, event) => {
    return await getSession(event.request, authOpts)
  })
}
