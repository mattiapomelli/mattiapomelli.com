import { db, increment } from '../../../lib/firebase'

export default async (req, res) => {
  if (req.method === 'PUT') {
    const docRef = await db.collection('views').doc(req.query.slug)

    docRef.set({ views: increment }, { merge: true })

    return res.status(200).json({
      message: 'Views updated',
    })
  }

  if (req.method === 'GET') {
    const doc = await db.collection('views').doc(req.query.slug).get()

    if (!doc.exists)
      res.status(404).json({
        message: 'Document not found',
      })

    res.status(200).json({
      total: doc.data().views || 0,
    })
  }

  res.status(400).json({
    message: 'Method not allowed',
  })
}
