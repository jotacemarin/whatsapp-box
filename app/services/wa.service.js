/**
 * @file wa.service.js
 * @author jotacemarin
 */

/** Third parties */
import * as wabox from '../third_parties/wabox';

/**
 * Send text to user
 * @param { number | string} to user account number
 * @param { string } message text to send
 * @return { object } body of response from wabox
 */
export const sendText = async (to, message) => 
    await wabox.sendMessage(to, message);
