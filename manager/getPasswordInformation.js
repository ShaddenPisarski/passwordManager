/**
 * Get and show all information
 * @param line
 * @param argumentJson
 * @returns {Promise<Buffer>}
 */
module.exports = function getPasswordInformation(line, argumentJson) {
    const tools = require('./../tools/index');
    const pathForPasswords = './passwords/' + argumentJson.user + '.json';
    
    return tools.fs.promisedReadFile(pathForPasswords)
        .then(function (fileOutput) {
            let fileInfos = fileOutput.toString('utf-8');
            
            if (tools.json.isJson(fileInfos)) {
                let infoJson = JSON.parse(fileInfos);
                
                // Take the specific key from here
                let userInput = line.trim();
                
                if (infoJson && infoJson[userInput]) {
                    return console.log('Here are your information\n', infoJson);
                } else {
                    return console.log('No information were found.');
                }
            } else {
                return console.log('Corrupted Data!');
            }
        })
        .catch(function (err) {
            return console.log('Information for that user wasn´t found');
        });
};
