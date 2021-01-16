import { exec } from 'child_process'
import logger from './logger'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function sendDesktopNotification(msg: string) {
  if (process.env.NODE_ENV === 'development') {
    exec(msg)
    logger.debug(msg, 'Desktop Notification')
    return true
  }

  return false
}
