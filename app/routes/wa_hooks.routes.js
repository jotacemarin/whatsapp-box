/**
 * @file wa_hooks.routes.js
 * @author jotacemarin
 */

/** Controllers */
import * as waHooks from '../controllers/wa_hooks.controller';

/** Utils */
import { unhandleError } from '../utils/error_handler';

/** Default values */
const api = `${process.env.API}/wahooks`;

/**
 * Default function to export routes
 * @param { object } server - main interface
 */
export default server => {
    server.post(`${api}/message_received`, unhandleError(waHooks.messageReceived));
    server.post(`${api}/message_acknowledge`, unhandleError(waHooks.messageAcknowledge));
};
