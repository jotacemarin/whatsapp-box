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

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param { number | string } session - id of chat session
 * @param { string } text - body message
 * @param { string } languageCode - language code (default es-CO)
 * @return { string } dialog flow response
 */
export const intent = async (session, text, languageCode) => {
    // Create a new session
    const sessionClient = new dialogflow.SessionsClient();
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, session);
  
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: { text: text, languageCode },
        },
    };
  
    // Send request and log result
    const [ response ] = await sessionClient.detectIntent(request);
    const { queryResult: { fulfillmentText: result } } = response;
    return result;
};
