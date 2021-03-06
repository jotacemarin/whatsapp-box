/**
 * @file index.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';
import restify from 'restify';
import restifyPlugins from 'restify-plugins';
import corsMiddleware from 'restify-cors-middleware';

/** Utils */
import logger, { debug } from './utils/logger';
import { internalError } from './utils/error_handler';

/** Routes */
import routes from './routes';

/** Get config */
dotenv.config();

/** Create server main interface */
const server = restify.createServer({ log: logger('api') });
const cors = corsMiddleware({ origins: ['*'] });

/** Configure server */
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());
server.pre(cors.preflight);
server.use(cors.actual);
server.pre(debug);

/** Init server */
server.listen(process.env.PORT, () => {
    routes(server);
    console.log('Server ready. Listening on PORT %s', process.env.PORT);
});

/** */
server.on('InternalServer', internalError);

export default server;
