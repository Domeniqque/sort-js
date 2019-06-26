const readline = require("readline");

const makeQuestion = (question) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    return new Promise((resolve, _) => {
        rl.question(question, response => {
            resolve(response);
            rl.close();
        });
    });
}

module.exports = makeQuestion;