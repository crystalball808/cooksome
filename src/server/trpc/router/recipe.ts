import { z } from 'zod'
import { router, protectedProcedure, procedure } from '../utils'

export default router({
  all: procedure.query(({ ctx }) => {
    return ctx.prisma.recipe.findMany()
  }),
  createNew: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string()
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.recipe.create({
        data: {
          name: input.name,
          description: input.description,
          author: {
            connect: { id: ctx.session.user.id }
          }
        }
      })
    })
})
