let cli = {};

/**
 * Check if json is really json.
 * @param {Object} json
 * @returns {boolean}
 */
cli.readCliInput = require('./src/cli/readCliInput')

let fs = {};

/**
 * A promised version of the writeFile function
 * @param {String} path
 * @param {*} data
 * @param {Object} encoding
 * @returns {Promise}
 */
fs.promisedWriteFile = require('./src/fs/promisedWriteFile');

/**
 * A promised version of the readFile function
 * @param {String} path
 * @param {Object} options -
 * @returns {Promise<unknown>}
 */
fs.promisedReadFile = require('./src/fs/promisedReadFile');

let json = {};

/**
 * Check if json is really json.
 * @param {Object} json
 * @returns {boolean}
 */
json.isJson = require('./src/json/isJson')

/**
 * Converts CLI-Arguments to JSON.
 * Does not work with arrays as arguments.
 * Example: Convert --user=user1 to {"user": "user1"}
 * @param arguments
 * @param beginOfArguments
 * @returns {{}}
 */
json.argumentsToJson = require('./src/json/argumentsToJson')

module.exports = {
    cli: cli,
    fs: fs,
    json: json
}
