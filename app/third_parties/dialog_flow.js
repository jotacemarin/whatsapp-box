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
export const intent = async (session, text, languageCode, raw = false) => {
    const { sessionClient, sessionPath } = getSessionPath(session);
  
    const request = {
        session: sessionPath,
        queryInput: {
            text: { text: text, languageCode },
        },
    };
  
    try {
        const rawResponse = await sessionClient.detectIntent(request);
        if (raw) {
            return rawResponse;
        } else {
            const [ response ] = rawResponse;
            const {
                queryResult: { fulfillmentText: result }
            } = response;
            return result;
        }
    } catch (error) {
        const { name, message } = error;
        throw new Error(`${name} - ${message}`);
    }
};
