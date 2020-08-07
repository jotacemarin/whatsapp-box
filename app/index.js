/**
 * @file index.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';
import restify from 'restify';
import restifyPlugins from 'restify-plugins';
import corsMiddleware from 'restify-cors-middleware';

/** Logger */
import logger from './utils/logger';

/** Routes */
import routes from './routes';

/** Get config */
dotenv.config();

/** Create server main interface */
const server = restify.createServer({ log: logger('api') });
const cors = corsMiddleware({ origins: ['*'] });

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());
server.pre(cors.preflight);
server.use(cors.actual);

server.pre((req, res, next) => {
    req.log.debug('%s %s', req.method, req.url);
    next();
});



/** Init server */
server.listen(process.env.PORT, () => {
    routes(server);
    console.log('Server ready. Listening on PORT %s', process.env.PORT);
});
