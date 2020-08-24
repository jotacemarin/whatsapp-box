/**
 * @file error_handler.js
 * @author jotacemarin
 */

/** Dependencies */
import { HttpError, InternalServerError } from 'restify-errors';

/** Utils */
import log from './logger';

/** Instance logger */
const logger = log('api:error-handler');

/**
 * Handler for internal server error
 * @param { object } req - request
 * @param { object } res - response
 * @param { object } err - error
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const internalError = (req, res, err, next) => {
    const cause = err.cause();
    logger.error(`${err.body.code}, ${cause.message}, ${err.stack}`);
    res.send(err.statusCode, { code: err.body.code, message: cause.message });
    return next();
};

/**
 * Helper to handle uncaugth exceptions
 * @param { function } callback - function to execute when match with any route
 */
export const unhandleError = callback => {
    return async (req, res, next) => {
        try {
            return await callback(req, res, next);
        } catch (error) {
            if (!(error instanceof HttpError)) {
                error = new InternalServerError(error);
            }
            return next(error);
        }
    };
};
