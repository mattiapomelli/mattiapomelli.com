import admin from 'firebase-admin'

try {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: 'portfolio-cf6b0',
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
    }),
    databaseURL: 'https://portfolio-cf6b0.firebaseio.com',
  })
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack)
  }
}

const db = admin.firestore()
const increment = admin.firestore.FieldValue.increment(1)

export { db, increment }
