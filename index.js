const tools = require('./tools/index');
const arguments = process.argv.slice(2);
const readline = require('readline');
const passwordCheck = require('./manager/checkPasswordInput');
const getPasswordInformation = require('./manager/getPasswordInformation');
const updatePasswordInformation = require('./manager/updatePasswordInformation');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Filter arguments, only one that are allowed should be still in this array
const sanitizedArguments = arguments.filter(function (element, index) {
    if (element.indexOf('--') === 0) {
        if (
            element.indexOf('user') === 2
            || element.indexOf('platform') === 2
        ) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
});

let argumentJson = tools.json.argumentsToJson(sanitizedArguments);
rl.prompt();

let masterPassword = false;
if (argumentJson && argumentJson.user) {
    if (!masterPassword) {
        console.log('Please enter the master password');
    }
}

rl.on('line', function (line) {
    const userInput = line.trim().split('=');
    
    switch (userInput[0]) {
        case 'exit':
            rl.close();
            break;
        case 'help':
        case '-help':
        case '--help':
            console.log('Get information for a specific platform: <platform>');
            console.log('Update information for a specific platform: update=platform, key, value');
            console.log('Change user: userChange=<userName>');
            console.log('Show currently given user input: show');
            break;
        case 'show':
            console.log('Your latest input: ', argumentJson);
            break;
        case 'update':
            if (masterPassword) {
                updatePasswordInformation(argumentJson, userInput[1]);
            }
            else {
                console.log('Nothing was updated. Please check your input data.')
            }
            break;
        case 'userChange':
            argumentJson.user = userInput[1];
            console.log('Please enter the master password');
            break;
        default:
            if (!masterPassword) {
                passwordCheck(line, argumentJson)
                    .then(function (passwordResult) {
                        masterPassword = passwordResult;
                    });
                // decrypt jsons
            }
            
            if (argumentJson && argumentJson.user && masterPassword) {
                getPasswordInformation(line, argumentJson);
            }
    }
    
    rl.prompt();
})
    .on('close', function () {
        console.log('See you next time!');
        process.exit(0);
    });
