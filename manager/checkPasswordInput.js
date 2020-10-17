module.exports = function checkPasswordInput(line, argumentJson) {
    const tools = require('.././tools/index');
    
    const inputPassword = line.trim();
    return tools.fs.promisedReadFile('./passwords/masterPassword_' + argumentJson.user + '.json')
        .then(function (fileOutput) {
            let fileInfos = fileOutput.toString('utf-8');
            if (tools.json.isJson(fileInfos)) {
                let infoJson = JSON.parse(fileInfos);
                if (infoJson && infoJson.password && infoJson.password === inputPassword + '') {
                    console.log('The Password was correct! \n\n What do you want to do?');
                    return line.trim();
                } else {
                    return console.log('The Password was wrong\n');
                }
            } else {
                return console.log('Corrupted Data!');
            }
        })
        .catch(function (err) {
            return console.log('User was not found.');
        });
};
