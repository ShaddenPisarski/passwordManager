/**
 * Check if json parse can be done on the input without crashing
 * @param {Object} json
 * @returns {boolean}
 */
module.exports = function isJson (json) {
    try {
        JSON.parse(json);
        return true
    }
    catch (err)
    {
        return false;
    }
};
