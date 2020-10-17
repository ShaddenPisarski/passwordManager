/**
 * Converts CLI-Arguments to JSON.
 * Does not work with arrays as arguments.
 * Example: Convert --user=user1 to {"user": "user1"}
 * @param {String[]} arguments
 * @param {String} beginOfArguments - string that should be replaced to make the first part as key
 * @returns {{}}
 */
module.exports = function argumentsToJson(arguments, beginOfArguments) {
    beginOfArguments = beginOfArguments || '--';
    let finalObject = {};
    
    for (let argument of arguments) {
        const sanitizedArgument = argument.replace(beginOfArguments, '');
        const splittedArgument = sanitizedArgument.split('=');
        finalObject[splittedArgument[0]] = splittedArgument[1];
    }
    return finalObject;
};
