import { Request, Response, NextFunction } from 'express'
import logger from '../utils/logger'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`${req.method} '${req.url}' ${res.statusCode}`)
  next()
}
