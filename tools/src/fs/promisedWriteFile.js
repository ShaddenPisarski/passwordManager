/**
 * A promised version of the writeFile function
 * @param {String} path
 * @param {*} data
 * @param {Object} encoding
 * @returns {Promise}
 */
module.exports = async function promisedWriteFile(path, data, encoding) {
    const fs = require('fs');
    const util = require('util');
    const writeFile = util.promisify(fs.writeFile);
    
    return await writeFile(path, data, encoding);
}
