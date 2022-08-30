import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const totalViews = await prisma.post.aggregate({
      _sum: {
        views: true,
      },
    })

    return res.status(200).json({ total: totalViews._sum.views })
  } catch (err) {
    return res.status(500).json('Something went wrong')
  }
}
