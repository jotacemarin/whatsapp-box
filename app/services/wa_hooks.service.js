/**
 * @file wa_hooks.service.js
 * @author jotacemarin
 */

/** Third parties */
import * as dialogFlow from '../third_parties/dialog_flow';
import * as wabox from '../third_parties/wabox';

/**
 * Respond to incoming message
 * @param { number | string } contact contact number account
 * @param { string } message incoming text from platform
 * @return { object } message to send
 */
export const messageReceived = async (contact, message) => {
    const dfResponse = await dialogFlow.intent(contact, message);
    const waResponse = await wabox.sendText(contact, dfResponse);
    return { message: dfResponse, ...waResponse };
};
