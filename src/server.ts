import express, { Request, Response, NextFunction } from 'express'
import logger from './logger'

const server = express()

const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  logger.info(`${req.method} '${req.url}' ${res.statusCode}`)
  next()
}

server.use('/', loggerMiddleware)

server.get('/', (_req, res) => {
  res.send('Hello, World!')
})

export default server
