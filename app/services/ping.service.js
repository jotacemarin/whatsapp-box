/**
 * @file ping.service.js
 * @author jotacemarin
 */

/** Third parties */
import * as dialogFlow from '../third_parties/dialog_flow';

/**
 * Send intent to dialog flow google api
 * @param { number | string } session - id of chat session
 * @param { string } message - body message
 * @return { object | string } dialog flow response
 */
export const runSample = async (session, message) => 
    await dialogFlow.intent(session, message, true);
