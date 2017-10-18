import express from 'express'
import { Nuxt, Builder } from 'nuxt'
const admin = require('firebase-admin');
const key = require("../serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: `https://${key.project_id}.firebaseio.com`
});

import api from './api'

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 8080


app.set('port', port)
// app.use(cors)
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
