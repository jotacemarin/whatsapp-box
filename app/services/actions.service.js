/**
 * @file actions.service.js
 * @author jotacemarin
 */

/** Utils */
import {
    formatText,
    destructStructValue,
    extractParams
} from '../utils/commons';
import { dateFormat, hourFormat } from '../third_parties/moment';

/** Constants */
import {
    ANSWER_DATE,
    ANSWER_TIME
} from '../utils/wa_constants';

/**
 * Default action
 * @param { string } result - message from dialog flow
 * @return { string } default message response from dialog flow
 */
export const defaultAction = result => result;

/**
 * Action when answer date
 * @param { object } fields - params incoming from dialog flow
 * @param { string } result - message incoming from dialog flow
 * @return { string } formatted message from dialog flow
 */
export const answerDate = ({ date }, result) => {
    const { stringValue: sysDate } = date;
    const [ _date ] = extractParams(result);
    const dateFormatted = dateFormat(sysDate);
    return result.replace(_date, dateFormatted);
};

/**
 * Action when answer date
 * @param { object } fields - params incoming from dialog flow
 * @param { string } result - message incoming from dialog flow
 * @return { string } formatted message from dialog flow
 */
export const answerTime = (fields, result) => {
    const { structValue: dateTime } = fields['date-time'];
    const [ _hour ] = extractParams(result);
    const { startDateTime } = destructStructValue(dateTime);
    const hourFormatted = hourFormat(startDateTime);
    return result.replace(_hour, hourFormatted);
};

/**
 * Select and execute action
 * @param { object } dfObject - formatted object from dialog flow
 * @return { string } formatted message from dialog flow
 */
export const selectAction = ({ action, fields, result }) => {
    switch (action) {
        case ANSWER_DATE:
            return answerDate(fields, result);
        case ANSWER_TIME:
            return answerTime(fields, result);
        default:
            return defaultAction(result);
    }
};

/**
 * Make an action
 * @param { object } dfObject - formatted object from dialog flow
 * @param { boolean } raw - if want message was formatted
 * @return { string } formatted message from dialog flow
 */
export const makeAction = (dfObject, raw = false) => {
    const response = selectAction(dfObject);
    return raw ? response : formatText(response);
};
