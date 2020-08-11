/**
 * @file commons.js
 * @author jotacemarin
 */

/**
 * Transform raw message to send to whatsapp
 * @param { string } message - message to format
 * @return { string } string formatted
 */
export const formatBotName = message => message.replace(/PomBOT/gm, '*PomBOT*');

/**
 * Transform raw message to send to whatsapp
 * @param { string } message - message to format
 * @return { string } string formatted
 */
export const formatHelpCommand = message => message.replace(/p!ayuda/gm, '*_p!ayuda_*');

/**
 * Transform raw message to send to whatsapp
 * @param { string } message - message to format
 * @return { string } string formatted
 */
export const formatText = message => {
    let transform = message;
    transform = formatBotName(transform);
    transform = formatHelpCommand(transform);
    return transform;
};

/**
 * Extract params from string
 * @param { string } message - message to format
 * @return { string } string formatted
 */
export const extractParams = message => message.match(/%[a-zA-Z]+%/gm);

/**
 * Remove any character or string
 * @param { string } message - message to format
 * @param { string } regex - regex to replace
 * @return { string } string formatted
 */
export const removeCharacter = (message, regex) => message.replace(regex, '');

/**
 * Remove '%' character from string
 * @param { string } message - message to format
 * @return { string } string formatted
 */
export const removeCharacterPercent = message => removeCharacter(message, /%/gm);

/**
 * Destructuring raw dialog flow param object
 * @param { object } structValue - object with raw struct from dialog flow
 * @return { object } formatted object
 */
export const destructStructValue = ({ fields }) => {
    const object = {};
    Object.keys(fields).forEach(key => {
        const local = fields[key];
        const { kind } = local;
        object[key] = fields[key][kind];
    });
    return object;
};
