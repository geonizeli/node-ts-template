import express from 'express'
import { loggerMiddleware, verifyJWTMiddleware } from './middlewares'

const server = express()

server.use('/', loggerMiddleware, verifyJWTMiddleware)

server.get('/', (_req, res) => {
  res.send('Hello, World!')
})

export default server
