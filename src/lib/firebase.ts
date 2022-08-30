import admin from 'firebase-admin'

if (!process.env.FIREBASE_PRIVATE_KEY) {
  throw new Error('Environment variable FIREBASE_PRIVATE_KEY must be defined')
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  })
}

const db = admin.firestore()

const increment = admin.firestore.FieldValue.increment(1)

export { db, increment }
