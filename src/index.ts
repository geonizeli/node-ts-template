import 'dotenv/config'
import './utils/firebaseAdmin'
import logger from './utils/logger'
import server from './server'

const httpPort = process.env.PORT

server.listen(httpPort, () => {
  logger.info(`🚀 server up and running on port ${httpPort}`)
})
