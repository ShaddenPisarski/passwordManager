module.exports = function updatePasswordInformations(argumentJson, updateData) {
    const tools = require('./../tools/index');
    const pathForPasswords = './passwords/' + argumentJson.user + '.json';
    
    if (updateData) {
        updateData = updateData.trim().split(',');
        
        if (updateData.length && updateData.length === 3) {
            
            return tools.fs.promisedReadFile(pathForPasswords)
                .then(function (fileOutput) {
                    let fileInfos = fileOutput.toString('utf-8');
                    
                    if (tools.json.isJson(fileInfos)) {
                        let infoJson = JSON.parse(fileInfos);
                        const platform = updateData[0].trim();
                        const key = updateData[1].trim();
                        const newInformation = updateData[2];
                        
                        infoJson[platform][key] = newInformation;
                        return tools.fs.promisedWriteFile(pathForPasswords, JSON.stringify(infoJson), 'utf-8');
                    } else {
                        return console.log('Corrupted Data!');
                    }
                })
                .catch(function (err) {
                    return console.log('No update, because of incorrect data.');
                });
        } else {
            return console.log('No update, because of incorrect data.');
        }
    } else {
        return console.log('No update, because of incorrect data.');
    }
};
