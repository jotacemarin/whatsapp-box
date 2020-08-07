/**
 * @file ping.controller.js
 * @author jotacemarin
 */

/** Services */
import * as dialogFlow from '../services/dialog_flow.service';

/**
 * Ping function to retrieve a JSON
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const version = (req, res, next) => {
    res.send({ version: '0.0.1' });
    return next();
};

/**
 * Echo function
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const echo = (req, res, next) => {
    res.send(req.params);
    return next();
};

/**
 * Ping function to retrieve a JSON with dialogflow response
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const runSample = async (req, res, next) => {
    const { session, message } = req.body;
    const dfResponse = await dialogFlow.intent(session, message);
    res.send({ response: dfResponse });
    return next();
};
