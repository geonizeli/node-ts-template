import { Request, Response, NextFunction } from 'express'
import admin from 'firebase-admin'
import StatusCode from 'http-status-codes'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const verifyTokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers

  if (authorization) {
    admin
      .auth()
      .verifyIdToken(authorization)
      .then(() => {
        next()
      })
      .catch(() => {
        res.status(StatusCode.UNAUTHORIZED)
      })
  }
}
