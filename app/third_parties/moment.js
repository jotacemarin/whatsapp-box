/**
 * @file moment.js
 * @author jotacemarin
 */

/** Dependencies */
import dotenv from 'dotenv';
import moment from 'moment';

/** Get config */
dotenv.config();

/** Default values */
const defaultMomentLocale = process.env.MOMENT_LOCALE;
const defaultFormatDate = process.env.MOMENT_FORMAT_DATE;
const defaultFormatHour = process.env.MOMENT_FORMAT_HOUR;
moment.locale(defaultMomentLocale);

/**
 * Retrieve a string date
 * @param { string } stringDate - iso date
 * @return { string } date formatted
 */
export const dateFormat = stringDate =>
    moment(stringDate).format(defaultFormatDate);

/**
 * Retrieve a string date
 * @param { string } stringDate - iso date
 * @return { string } date formatted
 */
export const hourFormat = stringDate =>
    moment(stringDate).format(defaultFormatHour);
