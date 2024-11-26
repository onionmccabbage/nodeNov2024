import pino from "pino" // this will look in the node_modules (due to type : module)
import { greet, goodbye } from "./util.js"

const a = 'auto '
console.log(`${a} working`)

// logging with pino
const logger = pino() // info, warn, error ...
logger.info(greet('Jane')) // we may use the logger to write to a file/db/api etc.
logger.warn(goodbye('Floella'))
logger.error('I need coffee')