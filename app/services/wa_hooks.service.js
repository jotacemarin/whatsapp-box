/**
 * @file wa_hooks.service.js
 * @author jotacemarin
 */

/** Third parties */
import * as dialogFlow from '../third_parties/dialog_flow';
import * as wabox from '../third_parties/wabox';

/** Services */
import * as actions from '../services/actions.service';

/**
 * Respond to incoming message
 * @param { number | string } contact contact number account
 * @param { string } message incoming text from platform
 * @return { object } message to send
 */
export const messageReceived = async (contact, message) => {
    console.log(contact, message);
    const dfResponse = await dialogFlow.intent(contact, message);
    console.log(dfResponse);
    const actResponse = actions.makeAction(dfResponse);
    console.log(actResponse);
    const waResponse = await wabox.sendText(contact, actResponse);
    console.log(waResponse);
    return { message: actResponse, ...dfResponse, ...waResponse };
};
