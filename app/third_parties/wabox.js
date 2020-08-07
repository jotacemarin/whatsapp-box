/**
 * @file dialog_flow.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';
import axios from 'axios';

/** Get config */
dotenv.config();

/** Default values */
const waboxApi = process.env.WABOXAPP_API_URL;
const waboxToken = process.env.WABOXAPP_API_TOKEN;
const waboxCellphone = process.env.WABOXAPP_CELLPHONE_ACCOUNT;
const waboxDefaultValues = {
    token: waboxToken,
    uid: waboxCellphone
};

/**
 * Send text to recipient
 * @param { number | string } to recipient account phone number
 * @param { string } message - text to be send
 * @param { string } customUid - custom unique id for the new message to send
 * @return { object } body of response from wabox
 */
export const sendText = async (to, message, customUid = false) => {
    const body = {
        ...waboxDefaultValues,
        to,
        text: message
    };

    if (customUid) {
        body.custom_uid = customUid;
    }

    return await axios.post(`${waboxApi}/send/chat`, body);
};

/**
 * Send image to recipient
 * @param { number | string } to recipient account phone number
 * @param { string } urlImage - url of image to be send
 * @param { object } options - custom object to add in body
 * @return { object } body of response from wabox
 */
export const sendImage = async (to, urlImage, options = false) => {
    const rawBody = {
        ...waboxDefaultValues,
        to,
        url: urlImage
    };

    let body;
    if (options) {
        body = { ...rawBody, ...options };
    } else {
        body = rawBody;
    }

    return await axios.post(`${waboxApi}/send/image`, body);
};

/**
 * Send link to recipient
 * @param { number | string } to recipient account phone number
 * @param { string } url - url of image to be send
 * @param { string } options - custom object to add in body
 * @return { object } body of response from wabox
 */
export const sendLink = async (to, url, options = false) => {
    const rawBody = {
        ...waboxDefaultValues,
        to,
        url
    };

    let body;
    if (options) {
        body = { ...rawBody, ...options };
    } else {
        body = rawBody;
    }

    return await axios.post(`${waboxApi}/send/image`, body);
};

/**
 * Send media to recipient
 * @param { number | string } to recipient account phone number
 * @param { string } url - url of file to be send
 * @param { string } options - custom object to add in body
 * @return { object } body of response from wabox
 */
export const sendMedia = async (to, url, options = false) => {
    const rawBody = {
        ...waboxDefaultValues,
        to,
        url
    };

    let body;
    if (options) {
        body = { ...rawBody, ...options };
    } else {
        body = rawBody;
    }

    return await axios.post(`${waboxApi}/send/image`, body);
};

/**
 * Check account phone number status
 * @return { object } body of response from wabox
 */
export const checkAccount = async () => {
    return await axios.post(`${waboxApi}/send/image`, waboxDefaultValues);
};
