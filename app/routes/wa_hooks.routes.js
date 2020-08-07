/**
 * @file wa_hooks.routes.js
 * @author jotacemarin
 */

/** Controllers */
import * as waHooks from '../controllers/wa_hooks.controller';

/** Default values */
const api = `${process.env.API}/wahooks`;

/**
 * Default function to export routes
 * @param { object } server - main interface
 */
export default server => {
    server.post(`${api}/message_received`, waHooks.messageReceived);
    server.post(`${api}/message_acknowledge`, waHooks.messageAcknowledge);
};
