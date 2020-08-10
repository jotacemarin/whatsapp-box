/**
 * @file wa_hooks.controller.js
 * @author jotacemarin
 */

/** Services */
import * as dialogFlow from '../services/dialog_flow.service';
import * as wabox from '../services/wabox.service';

/**
 * Function to destructuring incoming whatsapp message
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const messageReceived = async (req, res, next) => {
    const { body } = req;
    const contactType = body['contact[type]'];
    const messageType = body['message[type]'];

    if (contactType === 'group' || messageType !== 'chat') {
        res.send({ message: 'none', success: false });
        return next();
    }
    
    const contact = body['contact[uid]'];
    const message = body['message[body][text]'];
    try {
        const dfResponse = await dialogFlow.intent(contact, message);
        const waResponse = await wabox.sendText(contact, dfResponse);
        res.send({ message: dfResponse, ...waResponse });
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
