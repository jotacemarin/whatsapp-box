/**
 * @file wa.controller.js
 * @author jotacemarin
 */

/** Services */
import * as wabox from '../services/wabox.service';

/**
 * Function to send message with whatsapp
 * @param { object } req - request
 * @param { object } res - response
 * @param { function } next - handler chain
 * @return { function } move to the next function in the chain
 */
export const sendMessage = async (req, res, next) => {
    const { to, message } = req.body;
    const { data: response } = await wabox.sendText(to, message);
    res.send(response);
    return next();
};
