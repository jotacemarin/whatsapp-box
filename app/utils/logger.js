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
 * Logger
 * @param { string } moduleId - module incidence
 */
export default moduleId => bunyan.createLogger({ name: moduleId, level: logLevel });
