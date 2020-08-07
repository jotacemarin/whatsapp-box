/**
 * @file index.js
 * @author jotacemarin
 */

/** Routes */
import pingRoutes from './ping.routes';
import wa from './wa.routes';
import waHooks from './wa_hooks.routes';

/**
 * Default function to add routes in server interface
 * @param { object } server - main interface
 */
export default (server) => {
    pingRoutes(server);
    wa(server);
    waHooks(server);
};
