import 'dotenv/config'
import logger from './logger'
import server from './server'

const httpPort = process.env.PORT

server.listen(httpPort, () => {
  logger.info(`🚀 server up and running on port ${httpPort}`)
})
