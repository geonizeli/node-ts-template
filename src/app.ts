import 'dotenv/config'
import './utils/firebaseSetup'
import logger from './utils/logger'
import sendDesktopNotification from './utils/sendDesktopNotification'
import server from './server'

const { PORT: httpPort, npm_package_name } = process.env

server.listen(httpPort, () => {
  logger.info(`🚀 server up and running on port ${httpPort}`)

  sendDesktopNotification(
    `notify-send '${npm_package_name} is ready 🚀' 'server up and running on port ${httpPort}'`
  )
})
