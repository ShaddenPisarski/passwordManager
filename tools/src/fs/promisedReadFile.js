/**
 * A promised version of the readFile function
 * @param {String} path
 * @param {Object} options -
 * @returns {Promise<Buffer>} - Buffer of the file
 */
module.exports = async function promisedWriteFile(path, options) {
    const fs = require('fs');
    const util = require('util');
    const readFile = util.promisify(fs.readFile);
    return await readFile(path, options);
}
