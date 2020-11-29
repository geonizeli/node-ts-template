import express from 'express'
import { loggerMiddleware, verifyTokenMiddleware } from './middlewares'

const server = express()

server.use('/', loggerMiddleware, verifyTokenMiddleware)

server.get('/', (_req, res) => {
  res.send('Hello, World!')
})

export default server
