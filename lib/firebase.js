import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'portfolio-cf6b0',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: 'https://portfolio-cf6b0.firebaseio.com',
  })
}

const db = admin.firestore()
const increment = admin.firestore.FieldValue.increment(1)

export { db, increment }
