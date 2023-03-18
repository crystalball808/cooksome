import { z } from 'zod'
import { router, protectedProcedure } from '../utils'

export default router({
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
