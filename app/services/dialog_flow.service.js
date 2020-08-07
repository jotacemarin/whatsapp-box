/**
 * @file dialog_flow.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';

/** Third parties */
import * as dialogFlow from '../third_parties/dialog_flow';

/** Get config */
dotenv.config();

/** Default values */
const languageCode = process.env.DIALOG_FLOW_LANGUAGE;

/**
 * Send intent to dialog flow google api
 * @param { number | string } session - id of chat session
 * @param { string } text - body message
 * @return { string } dialog flow response
 */
export const intent = async (session, text) => {
    return await dialogFlow.intent(session, text, languageCode);
};
