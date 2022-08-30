import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const slug = req.query.slug?.toString() || ''

    if (req.method === 'PUT') {
      const newOrUpdatedPost = await prisma.post.upsert({
        where: { slug },
        create: {
          slug,
          views: 1,
        },
        update: {
          views: {
            increment: 1,
          },
        },
      })

      return res.status(200).json({
        views: newOrUpdatedPost.views,
      })
    }

    if (req.method === 'GET') {
      const post = await prisma.post.findUnique({
        where: {
          slug,
        },
      })

      if (!post) {
        return res.status(404).json('Post not found')
      }

      return res.status(200).json({ views: post.views })
    }
  } catch (err) {
    return res.status(500).json('Something went wrong')
  }
}
