import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const posts = await prisma.post.findMany({
      select: {
        slug: true,
        views: true,
      },
    })

    return res.status(200).json(posts)
  } catch (err) {
    console.log(err)
    return res.status(500).json('Something went wrong')
  }
}
