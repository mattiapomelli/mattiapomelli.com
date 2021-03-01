import { db, increment } from '../../../lib/firebase'

export default async (req, res) => {
  if (req.method === 'PUT') {
    try {
      const docRef = db.collection('views').doc(req.query.slug)

      const doc = await docRef.get()

      if (doc.exists) {
        await docRef.update({ views: increment })
      } else {
        await docRef.set({ views: 1 })
      }

      return res.status(200).json({
        message: 'Views updated',
      })
    } catch (err) {
      return res.status(500).json({
        error: err.message || 'Something went wrong',
      })
    }
  } else if (req.method === 'GET') {
    try {
      const doc = await db.collection('views').doc(req.query.slug).get()

      if (!doc.exists) {
        return res.status(404).json({
          message: 'Document not found',
        })
      }

      const views = doc.data().views || 0

      return res.status(200).json({
        total: views,
      })
    } catch (err) {
      return res.status(500).json({
        error: err.message || 'Something went wrong',
      })
    }
  } else {
    res.status(400).json({
      message: 'Method not allowed',
    })
  }
}
