import { Request, Response, NextFunction } from 'express'
import admin from 'firebase-admin'
import StatusCode from 'http-status-codes'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const verifyJWTMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers
  const throwInvalidRequestError = () =>
    res.status(StatusCode.UNAUTHORIZED).json({
      error: 'Invalid request!',
    })

  if (authorization) {
    admin
      .auth()
      .verifyIdToken(authorization)
      .then(() => next())
      .catch(() => throwInvalidRequestError())
  } else {
    throwInvalidRequestError()
  }
}
