/**
 * @file wa.routes.js
 * @author jotacemarin
 */

/** Controllers */
import * as wa from '../controllers/wa.controller';

/** Default values */
const api = `${process.env.API}/wa`;

/**
 * Default function to export routes
 * @param { object } server - main interface
 */
export default server => {
    server.post(`${api}/send_message`, wa.sendMessage);
};
