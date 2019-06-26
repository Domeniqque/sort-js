const makeQuestion = require("./makeQuestion");
const sanitize = require("./sanitize");
const getScript = require("./getScript");

(async () => {
    // Select source option
    let userOption = await makeQuestion('Do you want input text {0} or an url {1}? ');
    let sourceType = (userOption === '1') ? 'url' : 'text';

    // Get target
    const input = await makeQuestion("Input: ");
    
    // Get source text
    let sourceText = (sourceType === 'text')
        ? input
        : await getScript(input);

    // Rederer
    const result = sanitize(sourceText)
        .sort()
        .join(" ");

    console.log("\n======================== RESULTADO ============================");
    console.log(`[${result.length}] ${result}`);
    console.log("===============================================================");
})();