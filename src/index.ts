import 'dotenv/config'
import server from './server'

const httpPort = process.env.PORT

server.listen(httpPort, () => {
  console.error(`🚀 server up and running on port ${httpPort}`)
})
