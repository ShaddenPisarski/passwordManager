const readline = require('readline');

module.exports = async function readCliInput(showedText) {
    const cliInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    return await cliInterface.question(showedText, function (userInput) {
        cliInterface.close();
        return userInput;
    });
}
