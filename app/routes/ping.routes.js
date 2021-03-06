/**
 * @file ping.routes.js
 * @author jotacemarin
 */

/** Controllers */
import * as pingController from '../controllers/ping.controller';

/** Utils */
import { unhandleError } from '../utils/error_handler';

/** Default values */
const api = `${process.env.API}/ping`;

/**
 * Default function to export routes
 * @param { object } server - main interface
 */
export default server => {
    server.get(`${api}`, pingController.version);
    server.get(`${api}/echo/:echo`, pingController.echo);
    server.post(`${api}/sample`, unhandleError(pingController.runSample));
};
