/**
 * @file wa_hooks.controller.js
 * @author jotacemarin
 */

/** Utils */
import log from '../utils/logger';

/** Services */
import * as waHooksService from '../services/wa_hooks.service';

/** Instance logger */
const logger = log('wa_hooks:controller');

/**
 * Function to destructuring incoming whatsapp message
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const messageReceived = async (req, res, next) => {
    const { rawBody } = req;

    const body = {};
    decodeURI(rawBody).split('&').forEach(kv => {
        const [ key, value ] = kv.split('=');
        body[key] = value;
    });

    const contactType = body['contact[type]'];
    const messageType = body['message[type]'];

    logger.info(contactType);
    logger.info(messageType);

    if (contactType === 'group' || messageType !== 'chat') {
        res.send({ message: 'none', success: false });
        return next();
    }
    
    const contact = body['contact[uid]'];
    const message = body['message[body][text]'];
    try {
        const response = await waHooksService.messageReceived(contact, message);
        res.send(response);
        return next();
    } catch (error) {
        return next(error);
    }
};

/**
 * Function to destructuring incoming whatsapp message acknowledge
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const messageAcknowledge = (req, res, next) => {
    const { ack } = req.body;
    res.send({ ack });
    return next();
};
