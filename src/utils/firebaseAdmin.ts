import admin from 'firebase-admin'

const clientEmail = process.env.CLIENT_EMAIL as string
const privateKey = process.env.PRIVATE_KEY as string
const projectId = process.env.PROJECT_ID as string

admin.initializeApp({
  credential: admin.credential.cert({
    clientEmail,
    privateKey,
    projectId,
  }),
  databaseURL: 'https://typescript-base-project.firebaseio.com',
})
