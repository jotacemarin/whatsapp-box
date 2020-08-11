/**
 * @file dialog_flow.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';
import dialogflow from '@google-cloud/dialogflow';

/** Get config */
dotenv.config();

/** Default values */
const projectId = process.env.GOOGLE_PROJECT_ID;
const languageCode = process.env.DIALOG_FLOW_LANGUAGE;

/**
 * Create a session path and retrive session client
 * @param { number | string } session - id of chat session
 * @return { object } a session client and session path
 */
export const getSessionPath = session => {
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, session);
    return { sessionClient, sessionPath };
};

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param { number | string } session - id of chat session
 * @param { string } text - body message
 * @param { string } languageCode - language code (default es-CO)
 * @return { string } dialog flow response
 */
export const detectIntent = async (session, text, languageCode) => {
    const { sessionClient, sessionPath } = getSessionPath(session);
  
    const request = {
        session: sessionPath,
        queryInput: {
            text: { text: text, languageCode },
        },
    };
  
    try {
        const rawResponse = await sessionClient.detectIntent(request);
        const [ response ] = rawResponse;
        const {
            queryResult: {
                action,
                parameters: { fields },
                fulfillmentText: result
            }
        } = response;
        return { action, fields, result };
    } catch (error) {
        const { name, message } = error;
        throw new Error(`${name} - ${message}`);
    }
};

/**
 * Send intent to dialog flow google api
 * @param { number | string } session - id of chat session
 * @param { string } text - body message
 * @return { object | string } dialog flow response
 */
export const intent = async (session, text) => {
    try {
        return await detectIntent(session, text, languageCode);
    } catch (error) {
        const { name, message } = error;
        throw new Error(`${name} - ${message}`);
    }
};
