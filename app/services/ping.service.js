/**
 * @file ping.service.js
 * @author jotacemarin
 */

/** Third parties */
import * as dialogFlow from '../third_parties/dialog_flow';

/** Services */
import * as actions from '../services/actions.service';

/**
 * Send intent to dialog flow google api
 * @param { number | string } session - id of chat session
 * @param { string } message - body message
 * @param { boolean } raw - if want message was formatted
 * @return { object | string } dialog flow response
 */
export const runSample = async (session, message, raw = false) => {
    const dfResponse = await dialogFlow.intent(session, message, raw);
    const actResponse = actions.makeAction(dfResponse, raw);
    return raw ? { ...dfResponse, resultFormatted: actResponse } : actResponse;
};
