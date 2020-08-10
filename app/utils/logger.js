/**
 * @file logger.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';
import bunyan from 'bunyan';

/** Get config */
dotenv.config();

/** Default values */
const logLevel = process.env.LOG_LEVEL;

/**
 * Function to manage incoming request logs
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const debug = (req, res, next) => {
    const { method, url } = req;
    req.log.debug('%s %s', method, url);
    next();
};

/**
 * Logger
 * @param { string } moduleId - module incidence
 */
export default moduleId => bunyan.createLogger({ name: moduleId, level: logLevel });
