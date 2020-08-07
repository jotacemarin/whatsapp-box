/**
 * @file wabox.js
 * @author jotacemarin
 */

/** Third parties */
import * as wabox from '../third_parties/wabox';

/**
 * Send text to recipient
 * @param { number | string } to recipient account phone number
 * @param { string } message - text to be send
 * @param { string } customUid - custom unique id for the new message to send
 * @return { object } body of response from wabox
 */
export const sendText = async (to, message, customUid = false) => {
    const { data } = await wabox.sendText(to, message, customUid);
    return { data };
};
