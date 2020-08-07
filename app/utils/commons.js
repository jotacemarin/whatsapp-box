/**
 * @file commons.js
 * @author jotacemarin
 */

/**
 * Transform raw message to send to whatsapp
 * @param { string } message - message to format
 */
export const formatBotName = message => message.replace(/PomBOT/gm, '*PomBOT*');

/**
 * Transform raw message to send to whatsapp
 * @param { string } message - message to format
 */
export const formatHelpCommand = message => message.replace(/p!ayuda/gm, '*_p!ayuda_*');

/**
 * Transform raw message to send to whatsapp
 * @param { string } message - message to format
 */
export const formatText = message => {
    let transform = message;
    transform = formatBotName(transform);
    transform = formatHelpCommand(transform);
    return transform;
};

/**
 * Export a function as default
 */
export default formatText;
