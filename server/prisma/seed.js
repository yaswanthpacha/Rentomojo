import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function seed() {
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()
  const kyle = await prisma.user.create({ data: { name: "Akhil" } })
  const sally = await prisma.user.create({ data: { name: "Yaswanth" } })

  const post1 = await prisma.post.create({
    data: {
      body: "The team heard a loud crackle. Then the scream came from Dilshan at the front of the bus. 'Get down.' Jayawardene was hit first; his sock filled with blood. Outside, 12 gunmen blocked the exit.- A revealing excerpt from Nicholas Brookes's An Island's Eleven: A History of Cricket in Sri Lanka.",
      title: "Post 1",
    },
  })
  const post2 = await prisma.post.create({
    data: {
      body: "How well do team's results over a four year period between World Cup's predict the eventual top four ? Cricket is a particularly good sport for such an analysis, since international games are frequent unlike football. To avoid results getting biased by minnow bashing, we develop an iterative method to pick out the best teams over the four year interim. The idea here is that all teams with a win/loss of at least 0.5 against one another are competitive.",
      title: "Post 2",
    },
  })

  const comment1 = await prisma.comment.create({
    data: {
      message: "I am a root comment",
      userId: Akhil.id,
      postId: post1.id,
    },
  })

  const comment2 = await prisma.comment.create({
    data: {
      parentId: comment1.id,
      message: "I am a nested comment",
      userId: Yaswanth.id,
      postId: post1.id,
    },
  })

  const comment3 = await prisma.comment.create({
    data: {
      message: "I am another root comment",
      userId: Yaswanth.id,
      postId: post1.id,
    },
  })
}

seed()